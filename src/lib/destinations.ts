
export type Destination = {
  id: string;
  name: string;
  continent: string;
  image: string;
  gallery: string[];
  description: string;
  details: string;
  attractions: { name: string; description: string }[];
  popular: boolean;
};

export type ApiDestination = {
  id: number;
  company_id: number;
  name: string;
  hero_heading: string;
  hero_subheading: string;
  hero_bg_image_url: string;
  intro_heading: string;
  intro_image_url: string;
  location: string;
  image_url: string | null;
  description: string;
  gallery_image_urls: string[];
  things_to_do: {
    title: string;
    description: string;
    image_url: string;
    icon: string;
  }[];
  nearby_attractions: string[];
  travel_tips: {
    heading: string;
    icon: string;
    description: string;
  }[];
  is_popular: boolean;
  map_link: string;
  created_at: string;
  updated_at: string;
};


export const destinations: Destination[] = [];
