import type { FindOneData as _product_FindOneData, FindOneData__Output as _product_FindOneData__Output } from '../product/FindOneData';
export interface FindOneResponse {
    'statusCode'?: (number);
    'error'?: (string)[];
    'data'?: (_product_FindOneData | null);
}
export interface FindOneResponse__Output {
    'statusCode'?: (number);
    'error'?: (string)[];
    'data'?: (_product_FindOneData__Output);
}
