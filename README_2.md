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