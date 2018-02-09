<img src="https://i.imgur.com/ser5chI.png">

# Unit 3 - Final Assessment

## Introduction (By Instructor)

This **Introduction** section will be read in class by the instructor.

Students are to have their laptops closed during this intro period.

Students will be self-directed beginning with the **Instructions & Time Guidelines** section below.

### GOAL

The goal of this final assessment is to gauge your ability to develop a **minimal** NodeJS web application using the Express framework.

### OVERALL APPLICATION REQUIREMENTS

The requirements of the application are detailed in STEP 3 below, however, in brief, the application:

- Will obtain an array of **post** objects by making a request from the backend to a third-party API endpoint (provided).
- Will have only two views rendered using the EJS view engine. Both views are to render **Home** and **All Posts** links at the top of the view to provide navigation between the two views when clicked.
- Will not persist any data and thus will not require: a connection to a database; any models to be defined, etc.

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

The good news is that it's "open book" - you may reference anything on your computer, Google, use notes, etc.

This assessment will be timed and no further work on the assessment will be allowed after the cutoff time (written on the wall). 

## Instructions & Time Guidelines

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 3 minutes)
- **STEP 2 - Set up the Project** (&asymp; 2 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 30 minutes)
- **STEP 4 - Deploy** (&asymp; 5 minutes)

**Total time allowed to complete this assessment is 40 minutes.**

## Assessment Steps to Complete

### STEP 1 - Prepare (3 minutes)

- Briefly read through the rest of this assignment to better understand what is required before starting to code.
- In Terminal, move to a directory that is not within an existing repo. You will be creating a repo for this assessment and, as you know, nested repos suck!

### STEP 2 - Set up the Project (2 minutes)

- Use Express Generator to generate an app named `unit-3-assessment` and is pre-configured to use the EJS view engine.
- There is no need to spend time renaming `app.js` to `server.js`.

> Reminder: Express Generator does not install the modules, it only lists them as dependencies in the `package.json` file.

- Open the project in VSCode.

- Start the web app using `nodemon`.

### STEP 3 - Implement the App's Requirements (30 minutes)

#### The Navigation Bar

Both views should display two links at the top of the page like this:

<img src="https://i.imgur.com/Cl0auWw.png">

- Clicking **HOME** will return to the application's root route (`/`).
- Clicking **ALL POSTS** will browse to the path of `/posts`.


#### Implement the ROOT Route (`/`)

Upon typing `localhost:3000` or clicking the **HOME** link, the app should display a simple landing page that looks like this:

<img src="https://i.imgur.com/n2jYliJ.png">

#### Implement the `/posts` Route

Upon clicking the **ALL POSTS** link, the app should return a view that displays all _post_ objects returned by an API endpoint like this:

<img src="https://i.imgur.com/aLVe4KH.png">

The _post_ objects are being displayed in the page using a `<table>`.

> Note: The borders on the table's cells are optional. If time permits, feel free to add additional CSS as desired to the existing **style.css**.

#### API Endpoint

- Requests to the third-party API endpoint will be made from the backend (server), not the client (browser).
- The URL of the API endpoint is: `https://jsonplaceholder.typicode.com/posts`

> Reminder: Making an HTTP request from the server requires the install of another NPM module...

> Yet Another Reminder: The "body" returned by the aforementioned module to make HTTP requests is a string and needs to be parsed before being passed to the view.

### STEP 4 - Deploy (5 minutes)

Follow these steps to deploy your app:

- Create a local repository: `$ git init`
- Create the first commit: `$ git add -A` then `$ git commit -m "Initial commit"`
- Create a remote link to Heroku: `$ heroku create`
- Deploy: `$ git push heroku master`
- Test the application: `$ heroku open`

> It may take a minute for the application to become functional on Heroku.

**Slack the deployed app's link to your instructors - congrats, you are done!**




