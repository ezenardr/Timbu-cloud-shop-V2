import {type Photo} from "@/types/Photo";

export type ProductResponse = {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: any;
  unavailable: boolean;
  unavailable_start: any;
  unavailable_end: any;
  id: string;
  parent_product_id: any;
  parent: any;
  organization_id: string;
  product_image: any[];
  categories: any[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: number;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: any;
  discounted_price: any;
  buying_price: any;
  extra_infos: any[];
}