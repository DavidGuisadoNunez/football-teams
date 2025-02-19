import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposService } from '../../services/equipos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  private equiposService = inject(EquiposService);
  equipos: any[] = [];
  nuevoEquipo = { name: '', country: '', stadium: '' };

  ngOnInit() {
    this.obtenerEquipos();
  }

  obtenerEquipos() {
    this.equiposService.getEquipos().subscribe(
      (equipos: any[]) => {
        this.equipos = equipos;
      },
      error => console.error('❌ Error al obtener los equipos:', error)
    );
  }

  agregarEquipo() {
    if (!this.nuevoEquipo.name || !this.nuevoEquipo.country || !this.nuevoEquipo.stadium) {
      alert('Todos los campos son obligatorios');
      return;
    }
  
    this.equiposService.addEquipo(this.nuevoEquipo).subscribe(
      () => {
        console.log("✅ Equipo agregado. Recargando lista...");
        this.obtenerEquipos(); // 🔄 Recargar la lista desde la API
        this.nuevoEquipo = { name: '', country: '', stadium: '' }; // Limpiar formulario
      },
      error => console.error('❌ Error al agregar el equipo', error)
    );
  }

  eliminarEquipo(id: string) { // 🔹 Cambiamos el tipo a `string`
    if (!id) {
      console.error("❌ Error: ID no definido.");
      return;
    }
  
    if (!confirm(`¿Seguro que deseas eliminar el equipo con ID ${id}?`)) return;
  
    console.log(`🔹 Intentando eliminar equipo con ID: ${id}`);
  
    this.equiposService.deleteEquipo(id).subscribe(
      () => {
        console.log(`✅ Equipo con ID ${id} eliminado correctamente`);
        this.obtenerEquipos(); // 🔄 Recargar la lista después de eliminar
      },
      (error) => console.error(`❌ Error al eliminar el equipo:`, error)
    );
  }
  
}
