# BCS350_Project2

## Features
- New users must create an account before they can log in. Also, if an user already exist in the databse, the user can log in with his credentials.
- The quiz contains 10 random questions of the json file. these questions never repeated in the same order. Also, every time the user clicks "start quiz" button, he will get new questions every time.
- There is also a timer of 10 seconds, whithin this period of time the user must answer the question. If the time reach 0, the next question is display and that question will be 0.
- there is a result page where shows the user's score in the quiz he finished.
- Leaderboard page where is the rank of the 10 players
- User profile, there the user can see his name, email, and the history of quizes.
- The scores are saved in MySQL database
- When the user finsih the quiz, he is available to replay with new random questions.

## How I run the server
- first, I installed MAMP
- I clone my repo into MAMP's htdocs folder
- start the MAMP and sure Apache and MySQL are running correctly
- then I tested the project in http://localhost:8888/BCS350_Project2/html_files/login.html

## Actual URL
http://oscarquiz.infinityfreeapp.com

## databese Schema

### users
| Colum    | Type           | Notes |
|----------------------------------
| id       | int            | Primary key, Auto increment
| name     | varchart (50)  | not null
| lastName | varchart (50)  | not null
| email    | varchart (100) | Unique, not null
| password | varchart (255) | Hashed, not null

### scores
| Colum    | Type           | Notes |
|----------------------------------
| id       | int            | Primary key, Auto increment
| user_id  | int            | foreing key > user.id
| score    | int            | not null
| date     | datetime       | not null

