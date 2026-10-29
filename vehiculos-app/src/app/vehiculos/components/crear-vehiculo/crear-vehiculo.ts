import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ICatMarca } from '../../models/ICatMarca';

export interface NuevoVehiculo {
  year: string | null;
  modelo: string | null;
  catMarcaId: number | null;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-crear-vehiculo',
  styleUrl: './crear-vehiculo.scss',
  templateUrl: './crear-vehiculo.html',
})
export class CrearVehiculo implements OnInit {
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

  guardarVehiculo() {
    const valoresFormulario = this.formulario.getRawValue();
    this.nuevoVehiculo.set({
      ...valoresFormulario,
      catMarcaId: valoresFormulario.catMarcaId ? Number(valoresFormulario.catMarcaId) : 0,
    });
    console.log('Nuevo Vehículo:', this.nuevoVehiculo());

    this.http.post(this.urlGuardarVehiculo, this.nuevoVehiculo()).subscribe({
      next: (response) => {
        console.log('Vehículo guardado exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al guardar el vehículo:', error);
      },
    });
  }
}
