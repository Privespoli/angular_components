import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  // Asegúrate de que esta línea exista y se llame exactamente 'nombre'
  nombre = signal('Nombre inicial'); 
}
