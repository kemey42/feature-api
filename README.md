# feature-api

Description: Create an API app for MoneyLion interview

## Installation

1. Download git into local repository
2. Run command to install all dependencies

```
npm install
```

3. Run command to start testing the app

```
npm start
```

4. App is listening on localhost port 8000

## List of API

### 1. GET /feature?email=XXX&featureName=XXX

This GET request will return canAccess flag

Example:
http://localhost:8000/feature?email=foo@bar.com&featureName=create-user

### 2. POST /feature

This POST request will accept JSON request body

Example:

```
{
	"featureName": "delete-user",
	"email": "foo@bar.com",
	"enable": false
}
```

### 3. GET /feature (additional API for verification purpose)

This GET request will return all features saved from database in JSON format

Example:
http://localhost:8000/features
