import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = '';
  // apellidoInput: string = '';

  constructor(
    private loggingService: LoggingService,
    private personaService: PersonasService
  ) {}

  agregarPersona(nombre: HTMLInputElement, apellido: HTMLInputElement) {
    let persona = new Persona(nombre.value, apellido.value);
    // this.personaCreada.emit(persona);
    // this.personaService.agregarPersona(persona);
    // this.loggingService.enviarMensajeAConsola(
    //   `Enviamos persona ${persona.nombre} ${persona.apellido} `
    // );
    // this.personas.push( persona );
    this.personaService.agregarPersona(persona);
  }
}
