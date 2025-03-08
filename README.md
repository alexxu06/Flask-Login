# Simple Social Media Web Application

## Overview
Uses flask as backend and react as frontend. JWT tokens will be used to authenticate user.
- Can signup, login and logout
- JWT will be used and stored as a HTTP only cookie
- CSRF Double Submit Cookie to enhance security
- Refreshes JWT token (Implicit) 
- Create posts
- Delete posts
- Edit posts
- Admins can modify any post while users can only modify their own posts
- Admins can delete users, but not other admins

## Resources Used
- [Flask-JWT-Extended’s Documentation](https://flask-jwt-extended.readthedocs.io/en/stable/)
- [Axios Docs](https://axios-http.com/docs/intro)
- [React Router Official Documentation](https://reactrouter.com/home)
- [30-Days-Of-React](https://github.com/Asabeneh/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md)
- [Testing Flask Applications](https://flask.palletsprojects.com/en/stable/testing/)

## Special Mention
- [Today's rabbit hole: securing JWTs for authentication, httpOnly cookies, CSRF tokens, secrets & more](https://dev.to/petrussola/today-s-rabbit-hole-jwts-in-httponly-cookies-csrf-tokens-secrets-more-1jbp). Since my backend and frontend are on different domains, I had some issues and figured out from this article that I needed to proxy the request. Tutorials I've seen did do this but it was on the create-react-app and I'm using vite, so it didn't work for me.
- [Django & React Web App Tutorial - Authentication, Databases, Deployment & More...](https://www.youtube.com/watch?v=c-QsfbznSXI). Even though Django is used here and tokens are stored in localstorage, I mainly looked through the frontend (React) section to get a general idea of how to structure and implement my frontend.