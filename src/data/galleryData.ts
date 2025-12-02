export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  thumbnail_url: string;
  display_order: number;
}

// Place your image files under: public/images/gallery/
// Update filenames below to match your actual files (extensions assumed .jpg).
const GALLERY_FILES: Array<{
  filename: string;
  category: string;
  title?: string;
}> = [
  // Food (s1..s12)
  ...Array.from({ length: 12 }, (_, i) => ({
    filename: `s${i + 1}.jpg`,
    category: "Food",
  })),
  // Dining (r1..r28)
  ...Array.from({ length: 28 }, (_, i) => ({
    filename: `r${i + 1}.jpg`,
    category: "Dining",
  })),
  // Others
  { filename: "k1.jpg", category: "Others" },
  { filename: "Staff1.jpg", category: "Others" },
];

export const GALLERY_IMAGES: GalleryImage[] = GALLERY_FILES.map((item, idx) => {
  const path = `/images/gallery/${item.filename}`;
  return {
    id: `${idx + 1}`,
    title: item.title ?? "",
    description: "",
    category: item.category,
    image_url: path,
    thumbnail_url: path,
    display_order: idx + 1,
  } as GalleryImage;
});
