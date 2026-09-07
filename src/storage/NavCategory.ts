export interface NavCategory {
  id: number;
  name: string;
  slug: string;
}

export const navCategories: NavCategory[] = [
  {
    id: 1,
    name: "Cars",
    slug: "vehicle",
  },
  {
    id: 2,
    name: "Motorcycles",
    slug: "motorcycle",
  },
  {
    id: 3,
    name: "Mobile Phone",
    slug: "smartphones",
  },
  {
    id: 4,
    name: "For Sale: Houses & Apartments",
    slug: "sale",
  },
  {
    id: 5,
    name: "For Rent: Houses & Apartments",
    slug: "rent",
  },
  {
    id: 6,
    name: "Beds & Wardrobes",
    slug: "furniture",
  },
  {
    id: 7,
    name: "TVs, Video & Audio",
    slug: "laptops",
  },
];