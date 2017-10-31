# Mutably Starter Project
For goal #383

## To get this project running
1. `npm install`
2. `psql -f ./schema.sql` to make up the db and the tables
3. `psql -f ./load-data.sql` to fill the table in the database
4. `npm start` to run (uses nodemon)

Note the schema removes any database named 'mutably'.
