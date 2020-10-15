## POSTGRESQL SCHEMA:
```json 
    {
      "DROP DATABASE IF EXISTS restaurantPhotos;"

      "CREATE DATABASE restaurantPhotos;"

      USE restaurantPhotos;

      CREATE TABLE restaurants (
        restaurantId int not null auto_increment,
        restaurantName text,
      );

      CREATE TABLE photoAlbum (
        restaurantId int not null auto_increment, -- id specific to each restaurant album
        photosId int not null auto_incrememnt, -- id specific to each photo album
      )

      CREATE TABLE photos (
        photosId int not null auto_increment, -- id specific to each photo
        photoUrl url not null, -- individual photos
        photoDescription text not null UNIQUE, -- photo name/description
        categoryId int [][], -- link to categoryId table
      );

      CREATE TABLE category (
        categoryId int auto_increment,
        categories text not null, -- categories of photos (menu, drinks, pasta, soups)`
      );
    }
```




## Server API


### Get restaurant photos
  * GET `/api/restaurants/:restaurantId/`

**Path Parameters:**
  * `restaurantId` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "photoId": "Number",
      "photoUrl": "String location",
      "photoDescription": "String",
      "categoryId": "Number Array",
    }
```



### Add restaurant
  * POST `/api/restuarants/:restaurantId/photoUrl/:photoUrl`
  
**Path Parameters:**
  * `restaurantId` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "restaurantId": "Number",
      "photoUrl": "String location",
      "photoDescription": "String",
      "category": "String",
    }
```




### Update(PATCH) restaurant info
  * PATCH `/api/restaurants/:restaurantId/photoUrl/:photoUrl`

**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "restaurantId": "Number",
      "photoUrl": "String location",
      "photoDescription": "String",
      "category": "String",
    }
```



### Update(PUT) restaurant info
  * PUT `/api/restaurants/:restaurantId/photoUrl/:photoUrl`

**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "restaurantId": "Number",
      "photoUrl": "String location",
      "photoDescription": "String",
      "category": "String",
    }
```



### Delete restaurant
  * DELETE `/api/restaurants/:restaurantId/photoUrl/:photoUrl`

**Path Parameters:**
  * `id` restaurant id
  * `photoUrl` photo URL

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "restaurantId": "Number",
      "photoUrl": "String location",
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
GET    : /api/restaurants/:restaurantId/photos/:photoId
POST   : /api/restuarants/:restaurantId/photos/:photoId/ (:photoName || req.body = photoName)
PUT    : /api/restaurants/:restaurantId/photos/:photoId/ (:photoName || req.body = photoName)
PATCH  : /api/restaurants/:restaurantId/photos/:photoId/ (:photoName || req.body = photoName)
DELETE : /api/restaurants/:restaurantId/photos/:photoId/ (:photoName || req.body = photoName)

Cassandra:
GET    : /api/restaurants/:restaurantId
POST   : /api/restuarants/:restaurantId/photos/:photoName
PUT    : /api/restaurants/:restaurantId/photos/:photoName
PATCH  : /api/restaurants/:restaurantId/photos/:photoName
DELETE : /api/restaurants/:restaurantId/photos/:photoName
