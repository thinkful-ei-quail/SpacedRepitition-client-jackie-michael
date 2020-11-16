# Spaced Repetition
Spaced Repetition is a web app designed to allow users to learn a language using the spaced repetition method.
Check out [Spaced Repetition](https://spaced-repitition-client-jackie-michael.vercel.app/)

## Summary
Users can create accounts, track stats, and learn a language. Users who are not registered can login to a demo account to see how the app workds before signing up for an account. This app uses the Spaced Repeition API to handle HTTP requests. See the documentation for the API here: [Spaced Repetition API](https://github.com/mloldacre/battleship-server-jmkbh)

## App Screens
The app has 4 main page views. The components for each page view are found in the routes directory. Smaller components that are part of each screen are found in the components directory.

### Login Page
From the Landing Page users can view the Login Page. Already registered users can log in here. New users can click the link to create an account. A demo user account is also available to allow new users to try out the app as well.<br>
<img alt="Login Page" src="src/Images/Screenshots/login.png">

### Registration Page
The registration page is for new users to create an account. If you already have an account, you can click on a link that will redirect you to the login page.<br>
<img alt="Registration Page" src="src/Images/Screenshots/register.png">

### Dashboard Page
The dashboard page is where users can view their stats and click "start learning" to start learning their language<br>
<img alt="Dashboard Page" src="src/Images/Screenshots/dashboard.png">

### Learn Page
The learn page is where users are prompted to translate a word, type it in the submission box and submit their answer. Users will then be told if they got the answer right or wrong and can choose to view another word.
<img alt="Dashboard Page" src="src/Images/Screenshots/learn.png">


## Stack
Create-React-App was used to bootstrap the project.
React Router(DOM) was used to handle navigation through page views.
Testing used the Cypress test framework.