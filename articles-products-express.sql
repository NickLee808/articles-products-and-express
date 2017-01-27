\c postgres

DROP DATABASE IF EXISTS articles-products-express;

DROP USER IF EXISTS postgres;

CREATE USER postgres;

CREATE DATABASE articles-products-express WITH OWNER postgres;

\c articles-products-express;

DROP TABLE IF EXISTS;

CREATE TABLE (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR (90) NULL DEFAULT NULL,
  body VARCHAR (90) NULL DEFAULT NULL,
  author VARCHAR (90) NOT NULL,
);