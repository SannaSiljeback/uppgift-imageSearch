# Search Safari! 
An fullstack image search app that uses Google Custom Search and Auth0

## Packages used
* React
* Vite
* Node Express
* Axios
* Typescript
* Tailwind
* Joi

## Key Features
* 
* 
* 
*  
* 

## Set up
* Before you start you have to have node.js installed, a Google Custom Search JSON API Key and Auth0 application.

* Clone repository from [Github](https://github.com/SannaSiljeback/uppgift-imageSearch/)
* Navigate to the project directory.

* For Client: First type ```cd client``` to navigate to client side of the project directory.
* Then run ```npm i``` to install dependencies.
* Create a .env file in the project root and add the following:
  
```VITE_AUTH0_CLIENT_ID={your_auth0_client_id}
VITE_AUTH0_DOMAIN={your_auth0_domain}
VITE_API_KEY={your_google_api_key}
VITE_GOOGLE_ID={your_google_search_engine_id}```

* Run ```npm run dev``` to start the development server.


* For Server: Run ```npm i``` to install dependencies and ```node server``` to start the server.

* When you're finished, go to http://localhost:5173/ in your browser to use the app.

## API Endpoints
* POST /users
* GET /users/{userId}/favorites
