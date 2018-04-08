import {Recipe} from './recipe.model';

export class Restaurant{
  _id: string;
  name: string;
  address: string;
  recipes: Recipe;
  pic: string;
  type: String;
}
