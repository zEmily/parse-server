/** @flow weak */

import type { Database } from './DatabaseType';
import type { DatabaseAdapter } from './DatabaseAdapter';
import ExportAdapter from '../../ExportAdapter';

export default function MongoDatabaseAdapter(): DatabaseAdapter {
  return {
    connect: (connectionURI: string, options: Object): Database => {
      let exportAdapter = new ExportAdapter(connectionURI, options);
      exportAdapter.connect();
      return exportAdapter;
    }
  }
}
