# Controllers

> Controllers have methods that I like to call modules.

Valor uses an specie of **Model**-**Controller**-**Data** structure, but you can extend views easily if you want it.

The controller is based on HTTP verbs, and it has an *self route register*.

Theres an example of controller:

``` js
new Controller({
    route: 'users',
    /**
     * Single module shortcut
     * endpoint => POST({api}/users)
     */
    post(req, res, next) {
        // do post stuff
    } 
})
```

**If the controller file are in a subfolder, the folders name will prefix the route.**

Eg.: If your controller are `Controllers/users/index.js` all the modules inside of it will be prefixed with `/users`

---

## Middlewares

Controllers can have two types of middlewares: per verbs or per modules.

### Per verbs

Let's supose that you want to add the Authentication middleware in all requests, and RequestLog middleware only in `POST` requests. Your code will be something like:

``` js
new Controller({
    middlewares: {
        '*': [require('Middlewares/Authentication')],
        'post': [require('Middlewares/RequestLog')]
    }
})
```

The same logic for `get`, `put` and `delete` verbs.

### Per module
When you're using [Multiple Modules per Verb](#multiple-modules-per-verb) syntax, you may need to run an middleware only in a specific module. Easy too, look:

``` js
new Controller({
    get: [
        {
            endpoint: ':email?',

            // array of middlewares
            middlewares: [],

            run(req, res, next) {
                // get something by email
            }
        }
    ],
})
```

---

## Multiple modules per verb

If you want an more complete controller, with more than one module per verb, you can use set verb as an array and pass the endpoints and what should run on it:

``` js
new Controller({
    route: 'users',
    get: [
        {
            // endpoint => GET({api}/users)
            endpoint: '/',
            run(req, res, next) {
                // get all users
            }
        },
        {
            // endpoint => GET({api}/users/:id)
            endpoint: ':id',
            run(req, res, next) {
                // get specific user by id
            }
        }
    ]
})
```