export interface CreateProductBody {
  code: string;
  categoryId: string;
  name: string;
}

export interface CreateProductResponse {
  [k: string]: any;
}
