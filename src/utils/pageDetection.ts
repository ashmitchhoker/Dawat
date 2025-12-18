import { useEffect, useState } from "react";
import { useSEO } from "./seo";

export const usePageDetection = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentPage(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial page

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return currentPage;
};

export const PageSEOManager = () => {
  const currentPage = usePageDetection();

  const pageConfig: Record<
    string,
    { title: string; description: string; canonical: string; ogImage?: string }
  > = {
    home: {
      title: "Dawat Restaurant Gandhinagar - Authentic Veg & Non-Veg Cuisine",
      description:
        "Experience authentic flavors at Dawat Restaurant, Gandhinagar's premier destination for vegetarian and non-vegetarian cuisine since 2006.",
      canonical: "https://www.dawatrestaurant.co.in/",
      ogImage: "https://www.dawatrestaurant.co.in/images/gallery/r23.jpg",
    },
    menu: {
      title: "Menu - Dawat Restaurant Gandhinagar | Authentic Dishes",
      description:
        "Browse Dawat Restaurant's authentic menu in Gandhinagar - featuring Shawarma, Biryani, and traditional Indian & Pakistani non-veg cuisine.",
      canonical: "https://www.dawatrestaurant.co.in/#menu",
      ogImage: "https://www.dawatrestaurant.co.in/images/gallery/r4.jpg",
    },
    gallery: {
      title: "Gallery - Dawat Restaurant Gandhinagar | Food Photos",
      description:
        "View Dawat Restaurant Gandhinagar's gallery - authentic non-veg cuisine photos, ambiance, and signature dishes.",
      canonical: "https://www.dawatrestaurant.co.in/#gallery",
      ogImage: "https://www.dawatrestaurant.co.in/images/gallery/r1.jpg",
    },
    contact: {
      title: "Contact - Dawat Restaurant Gandhinagar | Location & Hours",
      description:
        "Contact Dawat Restaurant in Gandhinagar - location, phone, hours, and directions. Serving IIT Gandhinagar & GIFT City.",
      canonical: "https://www.dawatrestaurant.co.in/#contact",
      ogImage: "https://www.dawatrestaurant.co.in/images/gallery/r23.jpg",
    },
  };

  const config = pageConfig[currentPage] || pageConfig.home;
  useSEO(config);

  return null;
};
