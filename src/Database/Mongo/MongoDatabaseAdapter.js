/** @flow weak */

import * as LegacyDatabase from '../../ExportAdapter';
import * as LegacyDatabaseAdapter from '../../DatabaseAdapter';
import { MongoDatabase } from './MongoDatabase';
import type { DatabaseAdapter } from '../DatabaseTypes';

const adapter: DatabaseAdapter = {
  connect(appId: string, uri: string, collectionPrefix: string): Promise<MongoDatabase> {
    // Get the legacy ExportAdapter via cache, so we reuse connections
    let legacyDatabase = LegacyDatabaseAdapter.getDatabaseConnection(appId, collectionPrefix);
    // Make sure it's connected, so we can get to the raw mongodb.
    return legacyDatabase.connect().then(() => {
      return new MongoDatabase(legacyDatabase.db, collectionPrefix);
    })
  }
};

export default adapter;
