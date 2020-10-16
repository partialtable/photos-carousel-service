## POSTGRESQL SCHEMA:
```json 
    {
      "DROP DATABASE IF EXISTS restaurantPhotos;"

      "CREATE DATABASE restaurantPhotos;"

      "USE restaurantPhotos;"

      "CREATE TABLE restaurants (
        id int not null auto_increment,
        restaurantName text,
        PRIMARY KEY(id)
      );"

      "CREATE TABLE photoAlbum (
        restaurantId int not null auto_increment, -- id specific to each restaurant album
        photosId int not null auto_incrememnt, -- id specific to each photo album
        PRIMARY KEY(no)
        FOREIGN KEY(restaurantId) REFERENCES restaurants(id)
        FOREIGN KEY(photosId) REFERENCES photos(id)
      )"

      "CREATE TABLE photos (
        id int not null auto_increment, -- id specific to each photo
        photoUrl url not null, -- individual photos
        photoDescription text not null UNIQUE, -- photo name/description
        user text [][], -- array with id, full name, username, and avatar in each nested array
        categoryId int [][], -- link to categoryId table
        PRIMARY KEY (id),
        FOREIGN KEY(categoryId) REFERENCES category(id),
      );"

      "CREATE TABLE category (
        id int auto_increment,
        categories text not null, -- categories of photos (menu, drinks, pasta, soups)
        PRIMARY KEY(id)
      );"
    }
```

## Server API for PostgreSQL


### Get restaurant photos
  * GET `/api/restaurants/:id/photos`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "user": "String Array",
      "photoDescription": "String",
      "categoryId": "Number Array",
    }
```



### Add restaurant photos
  * POST `/api/restuarants/:id/photos/:photoUrl`
  
**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "user": "String Array",
      "photoDescription": "String",
      "category": "String",
    }
```




### Update(PATCH) restaurant photo info
  * PATCH `/api/restaurants/:id/photos/:photoUrl`

**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "user": "String Array",
      "photoDescription": "String",
      "category": "String",
    }
```



### Update(PUT) restaurant photo/s info
  * PUT `/api/restaurants/:id/photos/:photoUrl`

**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "photoUrl": "String location",
      "user": "String Array",
      "photoDescription": "String",
      "category": "String",
    }
```



### Delete restaurant photo
  * DELETE `/api/restaurants/:id/photos/:photoUrl`

**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "photoUrl": "String location",
    }
```




### Get list of restaurants
  * GET `/api/restaurants/`

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String"
    }
```



### Add new restaurant
  * POST `/api/restuarants/`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "name": "String"
    }
```




### Get name and username of photo
  * GET `/api/restaurants/:id/photos/:photosUrl`
  
  
**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "user": "String Array"
    }
```


### Get description of photo
  * GET `/api/restaurants/:id/photos/:photosUrl`
  
  
**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "description": "String"
    }
```


### Get link of photo
  * GET `/api/restaurants/:id/photos/:photosUrl`
  
  
**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

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


### Get restaurant photos
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
      "category": "Number Array",
      "user": "String Array"
    }
```



### Add restaurant photos
  * POST `/api/restuarants/:id/photos/:url`
  
**Path Parameters:**
  * `id` restaurant id
  * `url` photo URL

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "description": "String",
      "url": "String location",
      "category": "Number Array",
      "user": "String Array"
    }
```




### Update(PATCH) restaurant photo info
  * PATCH `/api/restaurants/:id/photos/:url`

**Path Parameters:**
  * `id` restaurant id
  * `url` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "description": "String",
      "url": "String location",
      "category": "Number Array",
      "user": "String Array"
    }
```



### Update(PUT) restaurant photo/s info
  * PUT `/api/restaurants/:id/photos/:url`

**Path Parameters:**
  * `id` restaurant id
  * `url` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "description": "String",
      "url": "String location",
      "category": "Number Array",
      "user": "String Array"
    }
```



### Delete restaurant photo
  * DELETE `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number"
    }
```




### Get list of restaurants
  * GET `/api/restaurants/`

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String"
    }
```



### Add new restaurant
  * POST `/api/restuarants/`

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
