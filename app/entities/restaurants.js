export default class RestaurantEntity {
  constructor(id, name, rating, adress, description, image, cpfDono, distance) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.adress = adress;
    this.description = description;
    this.image = image;
    this.cpfDono = cpfDono;
    this.distance = distance;
  };
};