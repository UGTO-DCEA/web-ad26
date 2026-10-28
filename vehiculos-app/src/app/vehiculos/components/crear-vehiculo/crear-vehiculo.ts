import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ICatMarca } from '../../models/ICatMarca';

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
  private readonly http = inject(HttpClient);

  marcas = signal<ICatMarca[]>([]);

  formulario = this.form.group({
    year: [''],
    modelo: [''],
    marcaId: [0],
  });

  obtenerMarcas() {
    return this.http.get<ICatMarca[]>(this.urlCatMarcas);
  }
}
