// Import MongoClient from the MongoDB library  
// need to run npm install mongodb before running 
const { MongoClient } = require('mongodb');  

async function main() {  
    // MongoDB credentials  
    const user = 'root';  
    const password = '6kNoC2dl5s8mV1WMtoC8eXsi'; // Replace with your password  
    const host = 'mongo';  

    // MongoDB connection URL  
    const url = `mongodb://${user}:${password}@${host}:27017/?authSource=admin`;  

    // Create a MongoDB client instance  
    const client = new MongoClient(url);  

    try {  
        await client.connect();  
        console.log("Connected to MongoDB server");  

        // Access the 'training' database and 'javascript' collection  
        const db = client.db('training');  
        const collection = db.collection('mongodb_glossary');  

        // Insert a document  
        //const doc = { lab: "Accessing MongoDB using Node.js", Subject: "No SQL Databases" };  
        const doc = [
            {database:"a database contains collecions"},
            {collection:"a collection stores the documents"},
            {documents:"a document contains the data in the form of key value pairs"}
        ]
        
        const result = await collection.insertMany(doc);  
        console.log(`Inserted document ID: ${result.insertedId}`);  

        // Retrieve and log all documents  
        const documents = await collection.find({}).toArray();  
        console.log("Documents in collection:", documents);  
    } catch (err) {  
        console.error(err); // Handle errors  
    } finally {  
        await client.close();  
        console.log("Connection closed");  
    }  
}  

// Run the script  
main();  
