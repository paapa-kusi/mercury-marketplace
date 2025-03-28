import { universities } from "./Universities";

export const featuredItems = [
  {
    id: 1,
    title: "Organic Chemistry Textbook",
    price: 45,
    image: "/assets/textbook.jpg",
    seller: "John Smith",
    university: "University of Florida",
    category: "Course Materials",
    date: "November 15, 2019",
    description:
      "This comprehensive Organic Chemistry textbook covers a wide range of topics essential for students pursuing a degree in chemistry. With detailed explanations, practice problems, and a focus on the fundamentals of organic chemistry, it's an invaluable resource for both beginners and advanced learners.",
  },
  {
    id: 2,
    title: "Lab Coat",
    price: 25,
    image: "/assets/labcoat.jpg",
    seller: "Sarah Johnson",
    university: "Stanford University",
    category: "Course Materials",
    date: "November 15, 2019",
    description:
      "This high-quality lab coat is designed for students and professionals in scientific fields. Made from durable, breathable fabric, it provides comfort and protection while conducting experiments in chemistry, biology, or other laboratory settings. It features a classic fit, multiple pockets, and is easy to care for.",
  },
  {
    id: 3,
    title: "Scientific Calculator",
    price: 35,
    image: "/assets/calculator.jpg",
    seller: "Michael Brown",
    university: "University of Miami",
    category: "Electronics",
    date: "November 15, 2019",
    description:
      "This scientific calculator is a must-have tool for students in mathematics, physics, engineering, and other technical fields. With advanced features like trigonometric functions, logarithms, and a large, easy-to-read display, it's perfect for solving complex equations, graphing functions, and performing statistical analysis.",
  },
  {
    id: 4,
    title: "Mini Fridge",
    price: 80,
    image: "/assets/mini-fridge.jpg",
    seller: "Emily Davis",
    university: "Michigan State University",
    category: "Dorm Supplies",
    date: "November 15, 2019",
    description:
      "This compact mini fridge is ideal for students living in dorm rooms or small apartments. It offers plenty of storage for snacks, drinks, and personal items while fitting into tight spaces. With an adjustable thermostat, energy-efficient operation, and sleek design, it’s a great addition to any living space.",
  },
  {
    id: 5,
    title: "Room Fan",
    price: 25,
    image: "/assets/fan.jpg",
    seller: "Rachel Lee",
    university: "Texas A&M University",
    category: "Dorm Supplies",
    date: "November 15, 2019",
    description:
      "Stay cool and comfortable with this powerful yet quiet room fan. Designed for dorm rooms, apartments, or offices, it offers multiple speed settings, adjustable tilt, and a space-saving design. Whether you need a gentle breeze or a more powerful airflow, this fan provides effective cooling without the noise.",
  },
];

export const categories = [
  {
    name: "Course Materials",
    icon: <i className="fas fa-book text-4xl"></i>,
    color: "bg-white/80 shadow-md",
  },
  {
    name: "Electronics",
    icon: <i className="fas fa-laptop text-4xl"></i>,
    color: "bg-white/80 shadow-md",
  },
  {
    name: "Dorm Supplies",
    icon: <i className="fa-solid fa-building text-4xl"></i>,
    color: "bg-white/80 shadow-md",
  },
  {
    name: "Miscellaneous",
    icon: <i className="fas fa-shuffle text-4xl"></i>,
    color: "bg-white/80 shadow-md",
  },
];
