# Hi! Welcome to blog management portal

## Steps to run the application locally

## IMPORTANT NOTE: Redux state as well as backend are working, to know more, please read the last section.

### 1. clone the project into your system
        Use the git clone command or download the zip file of the project.
### 2. Install node modules
        Open the folder in terminal/cmd/bash
        install modules in backend and frontend separately
        change directory by using: `cd frontend` || `cd backend`
        run `npm i` or `npm install`
### 3. Run the applications
        Type `npm start` in the respective repos to boot up frontend and backend
### 4. Go to localhost:3000
        Click on a blog to reveal more actions such as Remove and Edit
        Click on the heart to like/unlike the blog
        Click on the Read more button to read the whole blog.
        Click on the add blog button to add a blog.
        Database access is currently set open to any ip, however, do change the database connection uri with your own database, 
        as i will gradually close the access after some time.
### Tech stack and dependencies
        1. Backend is made using Node js 
        2. Frontend is made using React JS
        3. MongoDB is used for the database
        4. Mongoose is used for interacting with the database and schemas.
        5. Redux and Routers are used in React for routing and state management.
### Other (Redux and backend):
        i. Currently, Both the Redux and API calls are working side by side. To Observe the Redux state changes, 
           Download and use the Redux web toolkit chrome extension or observe the susbscribed messages in the console.
        ii. Remove the api calls and replace the `blogs` state with `blog`(state selector of redux) in the application to 
           convert this into purely react redux application
