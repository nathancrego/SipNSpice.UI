export interface UpdateRecipe
{
    name: string;
    shortDescription: string;
    description: string;
    author: string;
    imageUrl: string;
    publishedDate: Date;
    cuisines: string[];
}