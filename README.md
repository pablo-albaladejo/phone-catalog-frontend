# Phone Catalog Frontend

This is the frontend implementation for the Phone Catalog App.

There is a live version at github pages:
* https://pablo-albaladejo.github.io/phone-catalog-frontend

It uses the phone-catalog-backend API, witch can be found at:
* https://github.com/pablo-albaladejo/phone-catalog-backend

A live backend API hosted at Goolge Cloud is available at:
  * https://us-central1-phone-catalog-backend-abc4a.cloudfunctions.net/phones/

## Installation
It can be easily installed via npm

```bash
npm install
```

## Running the app
Just run at console

```bash
npm start
```
It will start a web server at http://localhost:3000/

For local testing, it is also required a running copy of the backend API.

```bash
git clone https://github.com/pablo-albaladejo/phone-catalog-backend.git
cd phone-catalog-backend
npm install
npm start
```
A node server should be launcher at http://0.0.0.0:8080

The full information can be found at https://github.com/pablo-albaladejo/phone-catalog-backend


## Testing

### Unit tests
To run unit test via jest suite just run at console

```bash
npm test
```

Test specification are located:
* Business Logic: `/src/services/___tests___`
* UI Components: `/src/components/**/___tests___`

### e2e tests
For End-to-End testing TestCafe suite is used

In a separated console, and while web server is running:

```bash
npm run-script test:e2e:all
```
Test specification are located `/test/e2e/*.test.js`

## DevOps
If you want to use docker with this project, there is a public repository tagged as
* pabloalbaladejo/phone-catalog-frontend

Assuming docker is installed in your machine:

```bash
docker pull pabloalbaladejo/phone-catalog-frontend
docker run -p 3000:3000 phone-catalog-frontend
```

## Author
Feel free to be in touch at:
* pablo.albaladejo.mestre@gmail.com
* https://www.karmaemprendedor.com
* https://stackoverflow.com/users/3395884/pablo-albaladejo