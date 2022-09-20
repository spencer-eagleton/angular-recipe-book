import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  title = 'angular-recipe-book';
  onNavigate(feature: string) {
    this.loadedFeature = feature;

  }
}
