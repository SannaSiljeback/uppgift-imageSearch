![Skärmbild 2024-03-22 131034](https://github.com/SannaSiljeback/uppgift-imageSearch/assets/144778923/1378324e-4607-4b14-98d0-238df98be265)

# Search Safari! 
A fullstack image search app that uses Google Custom Search and Auth0 for user authentication.

## Packages used
* React
* Vite
* Node Express
* Axios
* Typescript
* Joi

## Key Features
* User authentication with both Google and Github, facilitated by Auth0.
* Image search functionality with automatic suggestions for misspelled queries.
* Display of search results along with search duration.
* Ability to save favorite images and view them on your own favorite page.

## Set up
* Before starting, ensure you have Node.js installed, as well as a Google Custom Search JSON API Key and an Auth0 application.

* Clone repository from [Github](https://github.com/SannaSiljeback/uppgift-imageSearch/)
* Navigate to the project directory.

* First, navigate to the client side within the project directory:
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

* Next, navigate to the server side within the project directory:
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

* Once finished, access the app at http://localhost:5173/ in your browser.

## API Endpoints
* POST /users
* GET /users/{userId}/favorites
* DELETE /users/{userId}/favorites/:favoriteImage
