LANDING PAGE - login, sign up, 
sign up - email, name, mobile no., password
login - email, password
dashboard
MySQL
NodeJs
express- api
frontend - react
login api - post

signup api - post
post 

login api 200 message login successful return token

Authenthentication using react and mysql

# Sql Commands for creating a database

1. CREATE DATABASE user_auth;

2. USE user_auth;

3. CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    mobile VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  

