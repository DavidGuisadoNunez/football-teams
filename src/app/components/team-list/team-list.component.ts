import { Component } from '@angular/core';
import { Team } from '../../models/team.model';
import { TeamCardComponent } from "../team-card/team-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  imports: [TeamCardComponent, CommonModule]
})
export class TeamListComponent {
  teams: Team[] = [
    { name: 'Real Madrid', country: 'España', stadium: 'Santiago Bernabéu' },
    { name: 'Barcelona', country: 'España', stadium: 'Spotify Camp Nou' },
    { name: 'Manchester United', country: 'Inglaterra', stadium: 'Old Trafford' },
    { name: 'Bayern Munich', country: 'Alemania', stadium: 'Allianz Arena' }
  ];
}
