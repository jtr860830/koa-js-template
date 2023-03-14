import { MongoClient } from "mongodb";

import config from "../config.js";

const { mongo } = config;
let client;
let session;

async function conn(uri = `mongodb://${mongo.host}`, db = mongo.db) {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    session = client.db(db);
  }
  return session;
}

async function close() {
  await client.close();
}

export default {
  conn,
  close
};
