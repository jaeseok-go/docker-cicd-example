DROP DATABASE IF EXISTS cicdapp;

CREATE DATABASE cicdapp;
USE cicdapp;

CREATE TABLE LISTS (
    id INTEGER AUTO INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);