CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300) NOT NULL
);

CREATE TABLE users (
    email VARCHAR(255) NOT NULL PRIMARY KEY,
    hashed_password VARCHAR(255) NOT NULL
);