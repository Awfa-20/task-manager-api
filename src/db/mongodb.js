// @ts-nocheck

// CRUD operations
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL =  "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// @ts-ignore
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!!");
    }

    console.log(" connected currently!");

    // @ts-ignore
    const db = client.db(databaseName);


    db.collection("users")
      .updateMany(
        {},
        {
          $set: {
            age: 29,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount)
      })
      .catch(() => {
        console.log(error)
      });
  }



);
