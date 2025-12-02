export interface MenuItem {
  id: number;
  title: string;
  file: string;
}

export const MENU_IMAGES: MenuItem[] = [
  { id: 1, title: "Appetizers & Starters", file: "/images/menu/1.jpg" },
  { id: 2, title: "Kofta & Paneer", file: "/images/menu/2.jpg" },
  { id: 8, title: "Main Page", file: "/images/menu/8.jpg" },
  { id: 3, title: "Veg Chinese & Soup", file: "/images/menu/3.jpg" },
  { id: 4, title: "Chicken & Mutton", file: "/images/menu/4.jpg" },
  { id: 5, title: "Biryani & Soup", file: "/images/menu/5.jpg" },
  { id: 6, title: "Fish & Noodles", file: "/images/menu/6.jpg" },
  { id: 7, title: "Tandoori & Rules", file: "/images/menu/7.jpg" },
];
