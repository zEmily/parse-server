/** @flow weak */

import type { Database } from './../../Adapters/Database/DatabaseType';

export default class DatabaseCache {
  _databaseURIs;
  _databases;

  constructor() {
    this._databaseURIs = {};
    this._databases = {};
  }

  cacheDatabaseURI(uri: string, appId: string): void {
    this._databaseURIs[appId] = uri;
  }

  getDatabaseURI(appId: string): string {
    return this._databaseURIs[appId];
  }

  cacheDatabase(database: Database, appId: string): void {
    this._databases[appId] = database;
  }

  getDatabase(appId: string): Database {
    return this._databases[appId];
  }

  clear(): void {
    this._databaseURIs = {};
    this._databases = {};
  }
}
