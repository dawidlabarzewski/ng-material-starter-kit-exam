import {ProductRatingModel} from "./product-rating.model";

export interface ProductDetailModel {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly image: string;
  readonly description: string;
  readonly rating: ProductRatingModel;
}
