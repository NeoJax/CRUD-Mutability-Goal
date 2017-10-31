\c mutably;

\COPY books FROM './books.csv' DELIMITER ',' CSV HEADER;

\COPY pokemon FROM './pokemon.csv' DELIMITER ',' CSV HEADER;

\COPY albums FROM './albums.csv' DELIMITER ',' CSV HEADER;
