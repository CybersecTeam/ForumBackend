//  This file is to setup the environment, mainly for development purposes

//  =============================
//  PORT
//  =============================
process.env.PORT = process.env.PORT || 3000;


//  =============================
//  Server
//  =============================

process.env.CURRENT_SERVER = process.env.CURRENT_SERVER || "https";

//  =============================
//  Database
//  =============================

process.env.URL_DB = process.env.URL_DB || "mongodb://localhost:27017/test";


//  =============================
//  Authentication seed
//  =============================

process.env.SEED = process.env.SEED || "development-seed";


//  =============================
//  Authentication for database
//  =============================

process.env.DB_USER = process.env.DB_USER;
process.env.DB_PASSWORD = process.env.DB_PASSWORD;
