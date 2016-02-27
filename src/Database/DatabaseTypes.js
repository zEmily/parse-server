/** @flow */

export class Database {
  _collectionPrefix: string;

  construct(collectionPrefix: string) {
    this._collectionPrefix = collectionPrefix;
  }
}

export class DatabaseCollection {

}

export type DatabaseAdapter = {
  // TODO: (nlutsenko) Remove 'appId' parameter from here when migration to this API is done.
  connect: (appId: string, uri: string, collectionPrefix: string) => Promise<Database>;
}
