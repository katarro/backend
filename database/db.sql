CREATE DATABASE dbgeeksudp

CREATE TABLE files(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR
);