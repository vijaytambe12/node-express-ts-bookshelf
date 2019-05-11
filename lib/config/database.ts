import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

export class DatabaseConfig {

    private static _knex:Knex = Knex({
        client: 'mysql',
        connection: {
            host     : 'localhost',
            user     : 'user',
            password : 'pw',
            database : 'db',
            charset  : 'utf8'
        }
    });

    private static _bookshelf:Bookshelf = Bookshelf(DatabaseConfig._knex);

    public static bookshelf(): Bookshelf {
        DatabaseConfig._bookshelf.plugin('registry');
        return DatabaseConfig._bookshelf;
    }
}
