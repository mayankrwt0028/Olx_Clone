import carImage from "../images/category/car.png";
import bikeImage from "../images/category/Bike.png";
import propertiesImage from "../images/category/propteries.png";
import electronicImage from "../images/category/Electronic.png";
import mobileImage from "../images/category/mobile.png";
import commercialImage from "../images/category/commercial.png";
import jobsImage from "../images/category/jobs.png";
import furnitureImage from "../images/category/furniture.png";
import fashionImage from "../images/category/fashion.png";
import petsImage from "../images/category/pets.png";
import booksImage from "../images/category/book.png";
import serviceImage from "../images/category/service.png";
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}
export const categories: Category[] = [
  { id: 1, name: "Car", slug: "vehicle", image: carImage },
  { id: 2, name: "Bike", slug: "motorcycle", image: bikeImage },
  { id: 3, name: "Properties", slug: "properties", image: propertiesImage },
  {
    id: 4,
    name: "Electronic & Appliances",
    slug: "electronics",
    image: electronicImage,
  },
  { id: 5, name: "Mobile", slug: "smartphones", image: mobileImage },
  {
    id: 6,
    name: "Commercial Vehicles",
    slug: "commercial-vehicles",
    image: commercialImage,
  },
  { id: 7, name: "Jobs", slug: "jobs", image: jobsImage },
  { id: 8, name: "Furniture", slug: "furniture", image: furnitureImage },
  { id: 9, name: "Fashion", slug: "fashion", image: fashionImage },
  { id: 10, name: "Pets", slug: "pets", image: petsImage },
  {
    id: 11,
    name: "Books, Sports & Hobbies",
    slug: "books-sports-hobbies",
    image: booksImage,
  },
  { id: 12, name: "Services", slug: "services", image: serviceImage },
];
