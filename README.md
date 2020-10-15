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
        PRIMARY KEY (id)
      );"

      "CREATE TABLE category (
        id int auto_increment,
        categories text not null, -- categories of photos (menu, drinks, pasta, soups)
        PRIMARY KEY(no)
        FOREIGN KEY(id) REFERENCES photos(category_id)
      );"
    }
```




## Server API


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
