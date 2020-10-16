DROP DATABASE IF EXISTS restaurantPhotos;

CREATE DATABASE restaurantPhotos;

USE restaurantPhotos;

CREATE TABLE restaurants (
  id int not null auto_increment,
  restaurantName text,
  PRIMARY KEY(id),
);

CREATE TABLE photoAlbum (
  restaurantId int not null, -- id specific to each restaurant album
  photosId int not null, -- id specific to each photo album
  FOREIGN KEY(restaurantId) REFERENCES restaurants(id),
  FOREIGN KEY(photosId) REFERENCES photos(id),
)

CREATE TABLE photos (
  id int not null auto_increment, -- id specific to each photo
  url text(100) not null, -- individual photos
  description text(300) not null , -- photo name/description
  user text [][], -- array with id, full name, username, and avatar in each nested array
  categoryId int [][], -- link to categoryId table
  PRIMARY KEY (id),
  FOREIGN KEY(categoryId) REFERENCES category(id),
);

CREATE TABLE category (
  id int auto_increment,
  categories text not null, -- categories of photos (menu, drinks, pasta, soups)
  PRIMARY KEY(id),
);
