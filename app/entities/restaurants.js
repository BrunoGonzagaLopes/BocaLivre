export default class RestaurantEntity {
  constructor(id, name, rating, adress, description, image, distance, urlMap) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.adress = adress;
    this.description = description;
    this.image = image;
    this.distance = distance;
    this.urlMap = urlMap
  };
};