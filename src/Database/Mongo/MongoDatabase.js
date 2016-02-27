/** @flow weak */

import * as mongodb from "mongodb";
import { Database, DatabaseCollection } from '../DatabaseTypes';
import MongoCollection from './MongoCollection';

export class MongoDatabase extends Database {
  _database;

  constructor(database, collectionPrefix: string) {
    super(collectionPrefix);
    this._database = database;
  }

  getCollection(className): Promise<DatabaseCollection> {
    return this._database.collection(this._collectionPrefix + className).then(rawCollection => {
      return new MongoCollection(rawCollection);
    });
  }
}
