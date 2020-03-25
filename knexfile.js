// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version:'7.18.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '2020Banco',
      database : 'backend',
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'backend',
      user:     'postgres',
      password: '2020Banco'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
