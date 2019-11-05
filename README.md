# Movie App

## Tech Stack
NodeJS + Express + Neo4J

## Run the application
- load data into Neo4J DB
  
  `bin/neo4j-admin import --nodes /Users/jes2ica/Documents/GitHub/movie_app/data/movies.csv \
  --nodes /Users/jes2ica/Documents/GitHub/movie_app/data/casts.csv \
  --nodes /Users/jes2ica/Documents/GitHub/movie_app/data/crews.csv \
  --relationships /Users/jes2ica/Documents/GitHub/movie_app/data/talent_movie_rel.csv \
  --ignore-duplicate-nodes true --ignore-missing-nodes true`
  
- start the server

  `npm start`
 
- go to localhost:3000

## Implementation details:
- Overview:
 - MVC Pattern:
    - /models: modify data from db, pass to view.
    - /views: render the results.
    - /routes: invoke apis to get the data and show the results.
  
- API Design:
  - getMovie(): take a movie id, query the Neo4J db to get movie info as well as related titles.
  - getTalent(): take a talent id, query the Neo4J db. `MATCH credit =(talent {id: {id}})-[r]->(movie) RETURN *`
  - loadGraph(): use `MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 300` to get all the relations, visualize it using neovis library.
