import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interface/Recipe';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, ]
})
export class CardRecipeComponent{
  @Input() recipe: any;
  constructor() { }


}
