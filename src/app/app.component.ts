import { Component } from '@angular/core';
import { TeamListComponent } from "./components/team-list/team-list.component";

@Component({
  selector: 'app-root',
  imports: [TeamListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-teams';
}
