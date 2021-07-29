import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = '';
  // apellidoInput: string = '';
  
  constructor(private loggingService:LoggingService){

  }
    
  agregarPersona(nombre: HTMLInputElement, apellido: HTMLInputElement){
    const persona = new Persona(nombre.value, apellido.value);
    this.personaCreada.emit(persona);
    this.loggingService.enviarMensajeAConsola(`Enviamos persona ${persona.nombre} ${persona.apellido} `)
    // this.personas.push( persona );
  }

}
