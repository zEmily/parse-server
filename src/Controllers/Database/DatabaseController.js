/** @flow weak */

import requiredParameter from '../../requiredParameter';
import type { DatabaseAdapter } from '../../Adapters/Database/DatabaseAdapter';
import type { Database } from '../../Adapters/Database/DatabaseType';
import DatabaseCache from './DatabaseCache';

//
// This interfaces describes a generic DatabaseAdapter that allows you to change the underlying database.
//
const DefaultDatabaseURI = 'mongodb://localhost:27017/parse';

export function DatabaseController(
  cache: DatabaseCache = requiredParameter('cache is required'),
  adapter: DatabaseAdapter = requiredParameter('DatabaseAdapter is required'),
  { appId = requiredParameter('appId is required'),
    databaseURI = DefaultDatabaseURI,
    collectionPrefix = '' } = {}
) {
  return {
    getDatabase(): Database {
      let database = cache.getDatabase(appId);
      if (database) {
        return database;
      }
      database = adapter.connect(databaseURI, {
        collectionPrefix: collectionPrefix
      });
      cache.cacheDatabase(database, appId);
      return database;
    }
  };
}
