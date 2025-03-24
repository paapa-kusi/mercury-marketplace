import { universities } from "./Universities";

export const featuredItems = [
  {
    id: 1,
    title: "Organic Chemistry Textbook",
    price: 45,
    image: "/assets/textbook.jpg",
    seller: "John Smith",
    university: "University of Florida",
    category: "Course Materials"
  },
  {
    id: 2,
    title: "Lab Coat",
    price: 25,
    image: "/assets/labcoat.jpg",
    seller: "Sarah Johnson",
    university: "Stanford University",
    category: "Course Materials"
  },
  {
    id: 3,
    title: "Scientific Calculator",
    price: 35,
    image: "/assets/calculator.jpg",
    seller: "Michael Brown",
    university: "University of Miami",
    category: "Electronics"
  },
  {
    id: 4,
    title: "Mini Fridge",
    price: 80,
    image: "/assets/mini-fridge.jpg",
    seller: "Emily Davis",
    university: "Michigan State University",
    category: "Dorm Supplies"
  },
  {
    id: 5,
    title: "Room Fan",
    price: 25,
    image: "/assets/fan.jpg",
    seller: "Rachel Lee",
    university: "Texas A&M University",
    category: "Dorm Supplies"
  }
];

export const categories = [
  { name: "Course Materials", icon: <i className="fas fa-book text-4xl"></i>, color: "bg-white/80 shadow-md" },
  { name: "Electronics", icon: <i className="fas fa-laptop text-4xl"></i>, color: "bg-white/80 shadow-md" },
  { name: "Dorm Supplies", icon: <i className="fa-solid fa-building text-4xl"></i>, color: "bg-white/80 shadow-md" },
  { name: "Miscellaneous", icon: <i className="fas fa-shuffle text-4xl"></i>, color: "bg-white/80 shadow-md" }
]; 