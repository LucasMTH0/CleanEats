import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Recipe, RecipeListDescription } from 'src/app/interface/Recipe';
// import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.page.html',
  styleUrls: ['./recipe-create.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RecipeCreatePage {
  ingredients: RecipeListDescription[] = [{ description: ''}]
  prepareMode: RecipeListDescription[] = [{ description: ''}]
  recipeFormRegister: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
    videoTutorial: new FormControl('', Validators.required),
    ingredients: new FormArray([
      new FormControl('')
    ])
  })
  constructor(private formBuilder: FormBuilder) { 

  }

  handleCreateRecipe(){
    console.log(this.recipeFormRegister.value);
  }

  addNewIngredient(){
    this.ingredients.push({ description: '' })
  }
  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  addNewPrepareMode(){
    this.prepareMode.push({ description: '' })
  }
  removePrepareMode(index: number) {
    this.prepareMode.splice(index, 1);
  }



}
