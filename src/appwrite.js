import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const Collection_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const upDateSearchCount = async (searchTerm, movie) => {
  //1. Use Appwrite to check if search term already exists. If found inc count, if not create new.
  try {
    const result = await database.listDocuments(DATABASE_ID, Collection_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await database.updateDocument(DATABASE_ID, Collection_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, Collection_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error(
      "Error communicating with Appwrite to update search count:",
      error
    );

    // Log helpful troubleshooting steps based on common errors
    if (error.code === 404) {
      console.error(
        "APPWRITE TROUBLESHOOTING: Check your Database and Table IDs against the Appwrite Console."
      );
    }
    if (error.code === 400) {
      console.error(
        "APPWRITE TROUBLESHOOTING: Check that your Table has attributes named 'searchTerm' (String) and 'count' (Integer)."
      );
    }
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, Collection_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return result.documents;
  } catch (error) {
    return [];
  }
};
