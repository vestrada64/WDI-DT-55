# Building Our Application 

There are our routes.

| HTTP Verb | Path                 | Controller Action |
|-----------|----------------------|-------------------|
| GET       | /users               | users#index       |
| GET       | /users/new           | users#new         |
| POST      | /users               | users#create      |
| GET       | /users/:id           | users#show        |
| POST      | /users/:id/posts     | posts#create      |
| DELETE    | /users/:id/posts/:id | posts#destroy     |

This is what your application's file structure should look like: 

```
.
├── bin
│   └── www
├── config
│   └── database.js
├── controllers
│   ├── postsController.js
│   └── usersController.js
├── models
│   ├── post.js
│   └── user.js
├── package.json
├── package-lock.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── posts.js
│   └── users.js
├── server.js
└── views
    ├── error.ejs
    ├── posts
    │   └── show.ejs
    └── users
        ├── index.ejs
        ├── new.ejs
        └── show.ejs
```