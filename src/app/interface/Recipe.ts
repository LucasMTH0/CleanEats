export interface Recipe {
    id: string;
    title: string;
    category: string;
    description: string;
    ingredients: RecipeListDescription[];
    prepareMode: RecipeListDescription[];
    photo: string;
    videoTutorial: string;
}

export interface RecipeListDescription {
    description: string;
}