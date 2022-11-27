import {ProductRatingModel} from "./product-rating.model";

export interface ProductModel {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly image: string;
  readonly rating: ProductRatingModel;
}
