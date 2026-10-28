import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-crear-vehiculo',
  styleUrl: './crear-vehiculo.scss',
  templateUrl: './crear-vehiculo.html',
})
export class CrearVehiculo {
  private form = inject(FormBuilder);

  formulario = this.form.group({
    year: [''],
    modelo: [''],
    marcaId: [0],
  });
}
