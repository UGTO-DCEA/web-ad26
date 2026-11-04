import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ICatMarca } from '../../models/ICatMarca';
import { NuevoVehiculo } from '../crear-vehiculo/crear-vehiculo';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-editar-vehiculo',
  styleUrl: './editar-vehiculo.scss',
  templateUrl: './editar-vehiculo.html',
})
export class EditarVehiculo implements OnInit {
  ngOnInit(): void {
    this.obtenerMarcas().subscribe({
      next: (marcas) => {
        this.marcas.set(marcas);
      },
      error: (error) => {
        console.error('Error al obtener las marcas:', error);
      },
    });
  }

  vehiculoId = input.required<number>();

  private form = inject(FormBuilder);
  private readonly urlCatMarcas = 'https://localhost:7189/api/catalogos';
  private readonly urlGuardarVehiculo = 'https://localhost:7189/api/vehiculos';

  private readonly http = inject(HttpClient);

  marcas = signal<ICatMarca[]>([]);
  nuevoVehiculo = signal<NuevoVehiculo>({
    year: '',
    modelo: '',
    catMarcaId: 0,
  });

  formulario = this.form.group({
    year: [''],
    modelo: [''],
    catMarcaId: [0],
  });

  obtenerMarcas() {
    return this.http.get<ICatMarca[]>(this.urlCatMarcas);
  }

  editarVehiculo() {
    const valoresFormulario = this.formulario.getRawValue();
    this.nuevoVehiculo.set({
      ...valoresFormulario,
      catMarcaId: valoresFormulario.catMarcaId ? Number(valoresFormulario.catMarcaId) : 0,
    });
    console.log('Nuevo Vehículo:', this.nuevoVehiculo());

    this.http
      .put(this.urlGuardarVehiculo + '/' + this.vehiculoId(), this.nuevoVehiculo())
      .subscribe({
        next: (response) => {
          console.log('Vehículo guardado exitosamente:', response);
        },
        error: (error) => {
          console.error('Error al guardar el vehículo:', error);
        },
      });
  }
}
