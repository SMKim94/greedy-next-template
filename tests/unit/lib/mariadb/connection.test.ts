/**
 * @jest-environment node
 */

import { loadEnvConfig } from '@next/env';
import { createPool } from 'mysql2/promise';
import type { Pool, PoolConnection, ResultSetHeader } from 'mysql2/promise';

let host: string | undefined;
let port: string | undefined;
let user: string | undefined;
let password: string | undefined;
let database: string | undefined;
let timezone: string | undefined;
let charset: string | undefined;

beforeAll(() => {
  loadEnvConfig(process.cwd());

  host = process.env.MARIADB_HOST;
  port = process.env.MARIADB_PORT;
  user = process.env.MARIADB_USER;
  password = process.env.MARIADB_PASSWORD;
  database = process.env.MARIADB_DATABASE;
  timezone = process.env.MARIADB_TIMEZONE;
  charset = process.env.MARIADB_CHARSET;
});

describe('Environment test', () => {
  test('This is node environment', () => {
    expect(typeof window).toEqual('undefined');
  });

  test('This is test environment', () => {
    expect(process.env.NODE_ENV).toEqual('test');
  });

  test('Environment test', () => {
    expect(host).toBeDefined();
    expect(port).toBeDefined();
    expect(user).toBeDefined();
    expect(password).toBeDefined();
    expect(database).toBeDefined();
    expect(timezone).toBeDefined();
    expect(charset).toBeDefined();
  });

  test('The port number must be between 0 and 65535.', () => {
    expect(port).toMatch(/^\d+$/);
    expect(Number(port)).toBeGreaterThanOrEqual(0);
    expect(Number(port)).toBeLessThanOrEqual(65535);
  });
});

describe('DB Connection Test', () => {
  test('DB connected successfully', async () => {
    let pool: Pool | undefined = undefined;
    let conn: PoolConnection | undefined = undefined;
    try {
      pool = createPool({
        host,
        port: Number(port),
        user,
        password,
        connectionLimit: 5,
      });

      conn = await pool.getConnection();
      expect(conn).toBeDefined();

      conn.release();
    } catch (error) {
      console.error(error);
    } finally {
      if (pool) {
        await pool.end();
      }
    }
  });
});

describe('DB Query Test', () => {
  let pool: Pool | undefined = undefined;
  let conn: PoolConnection | undefined = undefined;

  beforeEach(async () => {
    try {
      pool = createPool({
        host,
        port: Number(port),
        user,
        password,
        connectionLimit: 5,
      });

      conn = await pool.getConnection();
    } catch (error) {
      console.error(error);
    }
  });

  afterEach(async () => {
    if (conn) conn.release();
    if (pool) await pool.end();
  });

  const dbName = 'test';

  test('Create database', async () => {
    try {
      if (!conn) throw new Error('Connection is not defined.');

      const result = await conn.execute(
        `CREATE DATABASE IF NOT EXISTS ${dbName}`,
      );
      const rsh: ResultSetHeader = result[0] as ResultSetHeader;
      if (rsh.warningStatus > 0) {
        const [warnings] = await conn.query('SHOW WARNINGS');
        console.log('Warnings: ', warnings);
      }

      const [rows] = await conn.query('SHOW DATABASES');
      const databases = (rows as Array<{ Database: string }>).map(
        (row) => row.Database,
      );
      expect(databases).toContain(dbName);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  test('Drop database', async () => {
    try {
      if (!conn) throw new Error('Connection is not defined.');

      const result = await conn.execute(`DROP DATABASE IF EXISTS ${dbName}`);
      const rsh: ResultSetHeader = result[0] as ResultSetHeader;
      if (rsh.warningStatus > 0) {
        const [warnings] = await conn.query('SHOW WARNINGS');
        console.log('Warnings: ', warnings);
      }

      const [rows] = await conn.query('SHOW DATABASES');
      const databases = (rows as Array<{ Database: string }>).map(
        (row) => row.Database,
      );
      expect(databases).not.toContain(dbName);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
