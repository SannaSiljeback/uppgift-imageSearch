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
* User authentication with both Google and Github, using Auth0.
* Image search that also comes with suggestions if you mispell.
* Display search results and also shows the search time duration.
* Ability to save favorite images and view them at you're favorite page.

## Set up
* Before you start you have to have node.js installed, a Google Custom Search JSON API Key and Auth0 application.

* Clone repository from [Github](https://github.com/SannaSiljeback/uppgift-imageSearch/)
* Navigate to the project directory.

* First navigate to the client side in the project directory:
1. Run:
```
cd client
```
2. Install dependencies:
```
npm i
```
3. Create a .env file in the project root and add the following:
```
VITE_AUTH0_CLIENT_ID={your_auth0_client_id}
VITE_AUTH0_DOMAIN={your_auth0_domain}
VITE_API_KEY={your_google_api_key}
VITE_GOOGLE_ID={your_google_search_engine_id}
```
4. To start the development server:
```
npm run dev
```

* Then navigate to the server side in the project directory:
1. Run:
```
cd server
```
2. Install dependencies:
```
npm i
```
3. To start the server:
```
node server
```

* When you're finished, go to http://localhost:5173/ in your browser to use the app.

## API Endpoints
* POST /users
* GET /users/{userId}/favorites
