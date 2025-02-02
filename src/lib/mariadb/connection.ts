import { createPool } from 'mysql2/promise';

const {
  MARIADB_HOST: host,
  MARIADB_PORT: port,
  MARIADB_USER: user,
  MARIADB_PASSWORD: password,
  MARIADB_DATABASE: database,
  MARIADB_TIMEZONE: timezone,
  MARIADB_CHARSET: charset,
} = process.env;

if (!host || !port || !user || !password || !database) {
  throw new Error(
    'Missing required MariaDB configuration environment variables.',
  );
}

const pool = createPool({
  host,
  port: Number(port),
  user,
  password,
  database,
  timezone,
  charset,
});

export default pool;
