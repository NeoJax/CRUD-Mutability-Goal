# Mutably Starter Project
For goal #383

## To get this project running
1. `npm install`
2. `cd db` to change the current directory to the database directory for the next commands
3. `psql -f ./schema.sql` to make up the db and the tables
4. `psql -f ./load-data.sql` to fill the table in the database
5. `npm start` to run (uses nodemon)

Note the schema removes any database named 'mutably'.
