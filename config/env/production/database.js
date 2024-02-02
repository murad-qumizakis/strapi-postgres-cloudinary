const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  // const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  const host = env("DATABASE_HOST", "roundhouse.proxy.rlwy.net");
  const port = env.int("DATABASE_PORT", 5432);
  const database = env("DATABASE_NAME", "railway");
  const user = env("DATABASE_USERNAME", "postgres");
  const password = env("DATABASE_PASSWORD", "34E6CB6E1d4fgf15A6D1a15eFBgAec54");

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
