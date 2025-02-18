import { Component } from '@angular/core';
import { TeamApiService } from '../../services/team-api.service';
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
  teams: Team[] = [];

  constructor(private teamService: TeamApiService) {}

  loadTeams() {
    console.log('🔹 Botón clicado, ejecutando loadTeams()');
    this.teamService.getTeams().subscribe({
      next: (data) => {
        console.log('✅ Datos recibidos:', data);
        this.teams = data;
      },
      error: (error) => {
        console.error('❌ Error al obtener equipos:', error);
      }
    });
  }
}
