import { MongoClient } from 'https://deno.land/x/mongo@v0.31.1/mod.ts';

class MongoConnection {
  constructor(private dbName: string) {
    this.dbName = dbName;
  }

  async connectDb() {
    // Connecting to a Local Database
    const client = new MongoClient();
    await client.connect('mongodb://127.0.0.1:27017');
    const db = client.database(this.dbName);
    return db;
  }

  async fetchCollections() {
    const db = await this.connectDb();
    return db.listCollectionNames();
  }

  async createCollection(collectionName: string) {
    const db = await this.connectDb();
    await db.createCollection(collectionName);
    return this.connectDb();
  }
}
