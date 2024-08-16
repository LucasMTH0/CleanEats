import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../interface/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  createRecipe(recipe: Recipe){
    this.http.post(environment.API+ '/recipes', JSON.stringify(recipe));
  }

  getRecipes(limit: number = 0) {
    return this.http.get(environment.API+ (limit > 0 ? `/recipes?limit=${limit}` : '/recipes') );
  }

  editRecipe() {

  }


}
