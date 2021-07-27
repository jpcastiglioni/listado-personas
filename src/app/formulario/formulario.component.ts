import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona(){
    const persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona);
    // this.personas.push( persona );
  }

}