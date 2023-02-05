DROP DATABASE IF EXISTS cicdapp;

CREATE DATABASE cicdapp;

USE cicdapp;

CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);
