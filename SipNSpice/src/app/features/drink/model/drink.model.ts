import { Base } from "../../base/model/base.model";

export interface Drink
{
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    author: string;
    imageUrl: string;
    publishedDate: Date;
    bases: Base[];
}