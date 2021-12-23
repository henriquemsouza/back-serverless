export interface ProductsHeaders {
  code: string;
  category: string;
  id: string;
}

export interface ProductsResponse {
  products: Product[];
  [k: string]: any;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  code: string;
  name: string;
  createdAt: Date;
  category?: Category;
}
