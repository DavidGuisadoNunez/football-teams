import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface Equipo {
  id: number;
  name: string;
  country: string;
  stadium: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private http = inject(HttpClient);
  private apiUrl = 'https://football-api-1-ckzy.onrender.com/equipos'; // ✅ Nueva URL de la API

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  // ✅ Obtener equipos
  getEquipos(): Observable<Equipo[]> {
    return this.http.get<{ success: boolean; data: Equipo[] }>(this.apiUrl)
      .pipe(map(response => response.data));
  }

  // ✅ Agregar equipo
  addEquipo(equipo: Omit<Equipo, 'id'>): Observable<Equipo> {
    return this.http.post<Equipo>(this.apiUrl, equipo, { headers: this.headers });
  }

  // ✅ Eliminar equipo por ID
  deleteEquipo(id: string): Observable<void> { // 🔹 MongoDB usa `id` como string (ObjectId)
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}

