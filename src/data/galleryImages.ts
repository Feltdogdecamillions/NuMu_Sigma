export interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: 'events' | 'service' | 'brotherhood' | 'programs' | 'awards' | 'collaboration';
  date: string | null;
  display_order: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '7c0edfed-e652-4473-ae66-9e4736bc28f9',
    title: 'Brotherhood Event',
    description: 'Nu Mu Sigma Chapter gathering',
    image_url: '/IMG_7509.JPG',
    category: 'events',
    date: 'March 2026',
    display_order: 1,
  },
  {
    id: 'ab14c6f1-f238-4794-a4f1-0e0edfe8f717',
    title: 'Chapter Activities',
    description: 'Brothers in fellowship',
    image_url: '/IMG_7970.JPG',
    category: 'brotherhood',
    date: 'March 2026',
    display_order: 2,
  },
  {
    id: 'f06574ee-0d62-47ae-b1d4-624d6463c075',
    title: 'Community Service',
    description: 'Making a difference together',
    image_url: '/IMG_7972.JPG',
    category: 'service',
    date: 'March 2026',
    display_order: 3,
  },
  {
    id: 'aede1c7b-f019-46a2-be41-d72a58226d73',
    title: 'Fraternity Event',
    description: 'Nu Mu Sigma in action',
    image_url: '/IMG_7990.JPG',
    category: 'events',
    date: 'March 2026',
    display_order: 4,
  },
  {
    id: 'd8b7fd03-d153-4e22-8fc7-16dc76fde2be',
    title: 'Chapter Gathering',
    description: 'Brotherhood moments',
    image_url: '/IMG_7992.JPG',
    category: 'brotherhood',
    date: 'March 2026',
    display_order: 5,
  },
  {
    id: '387185a9-14fb-422c-8c05-0e5b15e53e05',
    title: 'Programs and Events',
    description: 'Chapter excellence',
    image_url: '/IMG_7994.JPG',
    category: 'programs',
    date: 'March 2026',
    display_order: 6,
  },
  {
    id: 'b06d63f6-a5b9-4fe9-9d8c-c379ce385dfc',
    title: 'Brotherhood Fellowship',
    description: 'Building lifelong bonds',
    image_url: '/IMG_7996.JPG',
    category: 'brotherhood',
    date: 'March 2026',
    display_order: 7,
  },
  {
    id: '78ac791b-6c42-480d-8a71-da82442f2e31',
    title: 'Chapter Activities',
    description: 'Nu Mu Sigma together',
    image_url: '/IMG_7998.JPG',
    category: 'events',
    date: 'March 2026',
    display_order: 8,
  },
  {
    id: '819ef9fe-7616-476a-ba64-f1806ea44b33',
    title: 'Community Impact',
    description: 'Service and leadership',
    image_url: '/IMG_8002.JPG',
    category: 'service',
    date: 'March 2026',
    display_order: 9,
  },
  {
    id: 'e3672979-3859-4b19-9856-7b2665ae3b64',
    title: 'Fraternity Life',
    description: 'Celebrating brotherhood',
    image_url: '/IMG_8005.JPG',
    category: 'brotherhood',
    date: 'March 2026',
    display_order: 10,
  },
];
