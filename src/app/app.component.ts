import { Component } from '@angular/core';
import { EquiposComponent } from './components/equipos/equipos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EquiposComponent],
  template: `<app-equipos></app-equipos>`,
})
export class AppComponent {}
