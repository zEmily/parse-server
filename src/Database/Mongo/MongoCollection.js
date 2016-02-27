/** @flow weak */

import * as mongodb from "mongodb";
import { DatabaseCollection } from '../DatabaseTypes';

export class MongoCollection extends DatabaseCollection {
  _rawCollection;
  construct(rawCollection) {
    this._rawCollection = rawCollection;
  }
}

export default MongoCollection;
