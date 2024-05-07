import { Cuisine } from "../../cuisine/model/cuisine.model";

export interface Recipe
{
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    author: string;
    imageUrl: string;
    publishedDate: Date;
    cuisines: Cuisine[];
}