const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
      acquireConnectionTimeout: 1000000,
      pool: {
        min: 0,
        max: 15,
        acquireTimeoutMillis: 300000,
        createTimeoutMillis: 300000,
        destroyTimeoutMillis: 300000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 2000,
      },
      debug: false,
    },
  };
};
