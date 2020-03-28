
-- command to run the script in terminal
-- 🔻 use this command if your terminal is already in the devTools directory
-- 'psql -U postgres -a -f remakeDatabase.sql' or 'yarn remake'

DROP DATABASE IF EXISTS next_gql;
DROP ROLE IF EXISTS type_user;

CREATE ROLE type_user
WITH 
  LOGIN
  PASSWORD 'password'
  CREATEDB 
  NOSUPERUSER
  NOCREATEROLE
;

CREATE DATABASE next_gql
  WITH 
  OWNER = type_user
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1
;