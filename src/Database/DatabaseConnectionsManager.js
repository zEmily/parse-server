/** @flow */

import type { Database, DatabaseAdapter } from './DatabaseTypes';

export type DatabaseConfig = {
  adapter: DatabaseAdapter,
  uri: string,
  collectionPrefix: string
}

let _managerInstance = null;

export class DatabaseConnectionsManager {
  _databaseConfigCache: {[id:string]: DatabaseConfig };
  _databaseCache: {[id:string]: Database};

  static instance(): DatabaseConnectionsManager {
    if (!_managerInstance) {
      _managerInstance = new DatabaseConnectionsManager();
    }
    return _managerInstance;
  }

  constructor() {
    this._databaseConfigCache = {};
    this._databaseCache = {};
  }

  addDatabaseConfig(appId: string, config: DatabaseConfig) {
    this._databaseConfigCache[appId] = config;
  }

  getDatabaseConfig(appId: string): DatabaseConfig {
    return this._databaseConfigCache[appId];
  }

  clearConfigCache() {
    this._databaseConfigCache = {};
  }

  getDatabaseController(appId: string): Promise<DatabaseController> {
    let database = this._databaseCache[appId];
    if (database) {
      return Promise.resolve(database);
    }

    let config = this.getDatabaseConfig(appId);
    return config.adapter.connect(appId, config.uri, config.collectionPrefix).then(database => {
      this._databaseCache[appId] = database;
      return database;
    });
  }
}
