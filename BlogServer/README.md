# BlogServer
This is a standalone server that is being provided to you. It can function alongside any project you wish. It will run on `localhost:4000`.

### Setup
With the terminal navigated to the BlogServer project folder, run the following command:
```
npm install
```
Then, run
```
nodemon
```
This will start up the BlogServer on port **4000**. You should keep this server running while you start up your other server with PlatypusTS for making your website. You can open a new tab in Terminal by using Command T on the keyboard.

## API
* `http://localhost:4000/api/posts`
    * `GET` - Returns an array of all blog posts on the server.
    * `POST` - Saves the blog post sent in the request to the server. Returns the unique id.
* `http://localhost:4000/api/posts/[some_id]`
    * `GET` - Returns an object representing the single blog post that has the supplied id.
    * `PUT` - Use this to update the blog post on the server that has the given id with the data sent in the request.

## Post Format
For you to interact with this server correctly, we must agree on the format of a blog post. Specifically, a blog post must have these properties:
* `title`: The title of the blog post
* `author`: The name of the author of the blog post
* `content`: The long body of the blog post
* `id`: set by the server when it is saved. A unique identifier of this specific blog post
* `createdAt`: set by the server when it is saved. A timestamp for when the server creates/saves the blog post