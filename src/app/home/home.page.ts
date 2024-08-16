import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interface/Recipe';
import { CardRecipeComponent } from '../components/card-recipe/card-recipe.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRouterLink, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CardRecipeComponent],
})
export class HomePage {
  recipes: Recipe[] = [];
  constructor(private recipesService: RecipesService) {
    this.getRecipes()
  }
  getRecipes(){
    this.recipesService.getRecipes(8).subscribe((recipes: any) => {
      console.log("Receitas: ", recipes)
      this.recipes = recipes
    })
  }
}
