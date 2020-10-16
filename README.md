## POSTGRESQL SCHEMA:
```json 
DROP DATABASE IF EXISTS restaurantPhotos;

CREATE DATABASE restaurantPhotos;

\c restaurantPhotos;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  restaurantName VARCHAR(50),
  PRIMARY KEY(id),
);

CREATE TABLE photoAlbum (
  restaurantId INT NOT NULL, -- id specific to each restaurant album
  photosId INT NOT NULL, -- id specific to each photo album
  FOREIGN KEY(restaurantId) REFERENCES restaurants(id),
  FOREIGN KEY(photosId) REFERENCES photos(id),
)

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT, -- id specific to each photo
  url VARCHAR(100) NOT NULL, -- individual photos link
  description VARCHAR(200) NOT NULL, -- photo name/description
  userid INT NOT NULL,
  categoryId INT NOT NULL,
  PRIMARY KEY (id, userId),
  FOREIGN KEY(userId) REFERENCES users(id),
  FOREIGN KEY(categoryId) REFERENCES category(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT, -- id specific to each user
  firstName VARCHAR(10) NOT NULL, -- user first name
  lastName VARCHAR(10) NOT NULL, -- user last name
  username VARCHAR(25) NOT NULL UNIQUE,
  avatarPic VARCHAR(50) NOT NULL -- link to user's picture
)

CREATE TABLE category (
  id INT NOT NULL AUTO_INCREMENT,
  categories VARCHAR(20) NOT NULL, -- categories of photos (menu, drinks, pasta, soups)
  PRIMARY KEY(id),
);


```

## Server API for PostgreSQL


### GET restaurant photos
  * GET `/api/restaurants/:id/photos`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "userId": "Number",
      "photoDescription": "String",
      "categoryId": "Number",
    }
```



### ADD restaurant photos
  * POST `/api/restuarants/:id/photos/:photoId`
  
**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "userId": "["{
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]",
      "photoDescription": "String",
      "category": "String",
    }
```




### UPDATE (PATCH) restaurant photo info
  * PATCH `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "userId": "["{
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]",
      "photoDescription": "String",
      "category": "String",
    }
```



### UPDATE (PUT) restaurant photo/s info
  * PUT `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "userId": "["{
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]",
      "photoDescription": "String",
      "category": "String",
    }
```



### DELETE restaurant photo
  * DELETE `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "photoId": "Number",
    }
```




### GET list of restaurants
  * GET `/api/restaurants`

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String"
    }
```



### ADD new restaurant
  * POST `/api/restuarants`

**Success Status Code:** `202`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "name": "String"
    }
```




### GET name and username of photo
  * GET `/api/restaurants/:id/photos/:photosId`
  
  
**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "user": "["{
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]"
    }
```


### GET description of photo
  * GET `/api/restaurants/:id/photos/:photosId`
  
  
**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "description": "String"
    }
```


### GET link of photo
  * GET `/api/restaurants/:id/photos/:photosId`
  
  
**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "url": "String"
    }
```



### ArangoDB Schema

`{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "restaurants": { "type": "array", "items": [{ "type": "object", "properties": {
            "restaurantId": { "type": "integer" },
            "name": { "type": "string" },
            "photos": { "type": "array", "items": [{ "type": "object", "properties": {
                    "id": { "type": "integer" },
                    "description": { "type": "string" },
                    "url": { "type": "string" },
                    "category": { "type": "array",
                       "items": [{ "type": "string" }, { "type": "string" }]
                    },
                    "user": { "type": "array",
                      "items": [{ "type": "string" }, { "type": "string" }, { "type": "string" }]
                   }
                  },
                  "required": [ "id", "description", "url", "category" ]
                }
              ]
            }
          },
          "required": ["restaurantId", "name", "photos"]
        }
      ]
    }
  },
  "required": ["title", "restaurants"]
}`




## Server API for ArangoDB


### GET restaurant photos
  * GET `/api/restaurants/:id/photos`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "description": "String",
      "url": "String location",
      "category": "Number",
      "user": "["{
        "id": "Number",
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]"
    }
```



### ADD restaurant photos
  * POST `/api/restuarants/:id/photos/:photoId`
  
**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `202`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "description": "String",
      "url": "String location",
      "category": "Number",
      "user": "["{
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]"
    }
```




### UPDATE (PATCH) restaurant photo info
  * PATCH `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "photoId": "Number",
      "description": "String",
      "url": "String location",
      "category": "Number",
      "user": "["{
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]"
    }
```



### UPDATE (PUT) restaurant photo/s info
  * PUT `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "description": "String",
      "url": "String location",
      "category": "Number",
      "user": "["{
        "firstName": "String",
        "lastName": "String",
        "username": "String",
        "avatarPic": "String location"
      }"]"
    }
```



### DELETE restaurant photo
  * DELETE `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**
  * `id` restaurant id
  * `photoId` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "photoId": "Number"
    }
```




### GET list of restaurants
  * GET `/api/restaurants/`

**Success Status Code:** `202`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String"
    }
```



### ADD new restaurant
  * POST `/api/restuarants`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
    }
```

### GET list of restaurants
  * GET `/api/restaurants`

**Success Status Code:** `204`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String"
    }
```



### ADD new restaurant
  * POST `/api/restuarants`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
    }
```



# photos-carousel-service
A grouped photos module of selected restaurants, when clicked pulls up a carousel of all photos.

Legacy code's database: mongo
Legacy code's endpoints:
  PORT: 3003
  PATH: http://localhost:3003
  GET: /api/restaurants/
  GET: /api/restaurants/photos/:id (restuanrantId)

PostgreSQL:
GET    : /api/restaurants/:restaurantId/photos
POST   : /api/restuarants/:restaurantId/photo/:photoUrl
PUT    : /api/restaurants/:restaurantId/photo/:photoUrl
PATCH  : /api/restaurants/:restaurantId/photo/:photoUrl
DELETE : /api/restaurants/:restaurantId/photo/:photoUrl

ArangoDB
GET    : /api/restaurants/:restaurantId
POST   : /api/restuarants/:restaurantId/photos/:url
PUT    : /api/restaurants/:restaurantId/photos/:url
PATCH  : /api/restaurants/:restaurantId/photos/:url
DELETE : /api/restaurants/:restaurantId/photos/:url
