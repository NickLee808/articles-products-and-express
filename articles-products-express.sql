\c postgres;

DROP DATABASE IF EXISTS articles_products_express;

DROP USER IF EXISTS articles_products_user;

CREATE USER articles_products_user WITH ENCRYPTED PASSWORD 'postgres';

CREATE DATABASE articles_products_express WITH OWNER articles_products_user;

\c articles_products_express;

DROP TABLE IF EXISTS products;

CREATE TABLE "products" (
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  inventory INTEGER NOT NULL
);

DROP TABLE IF EXISTS articles;

CREATE TABLE "articles" (
  id SERIAL NOT NULL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author TEXT NOT NULL
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO articles_products_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO articles_products_user;