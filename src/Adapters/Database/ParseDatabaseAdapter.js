/** @flow */

export class ParseDatabaseAdapter {
  connect(): Promise {

  }

  getCollection(name: string): Promise<DatabaseCollection> {
    
  }

  dropCollection(collectionName: string): Promise {

  }
}

export class DatabaseCollection {
  name: string;

  find(query: DatabaseQuery): Promise<Array<DatabaseRowData>> {

  }

  insert(data: DatabaseRowData): Promise {

  }

  update(query: DatabaseQuery, rowData: DatabaseRowData): Promise {

  }

  atomicUpdate(query: DatabaseQuery, data: DatabaseRowData): Promise {

  }
}

export class DatabaseQuery {

}

export class DatabaseRowData {

}
