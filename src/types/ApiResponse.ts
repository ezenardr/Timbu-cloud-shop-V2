import {Item} from "@/types/Item";

export type ApiResponse = {
  page: number;
  size: number;
  total: number;
  debug: any;
  previous_page: any;
  next_page: any;
  items: Item[];
}

export type Price = {
  HTG: [number, any, any[]];
}