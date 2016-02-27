/** @flow weak */

import type { Database } from './DatabaseType';

export type DatabaseAdapter = {
  connect: (connectionURI: string, options: Object) => Database;
}
