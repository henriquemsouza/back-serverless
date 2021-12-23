export interface UpdateProductBody {
  id: string
  categoryId: string;
  name: string;
}

export interface UpdateInternalResponse {
  generatedMaps: unknown[];
  raw: unknown[];
  affected: number;
}

export interface UpdateProductResponse {
  [k: string]: any;
}
