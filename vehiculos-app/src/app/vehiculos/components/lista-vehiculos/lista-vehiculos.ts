import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IVehiculo } from '../../models/IVehiculo';
import { Observable } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-lista-vehiculos',
  styleUrl: './lista-vehiculos.scss',
  templateUrl: './lista-vehiculos.html',
})
export class ListaVehiculos implements OnInit {
  ngOnInit(): void {
    this.obtenerVehiculos().subscribe((vehiculos) => {
      this.listaVehiculos.set(vehiculos);
    });
  }

  //? Inject HttpClient
  private httpClient = inject(HttpClient);

  //? Variable de datos de vehiculos
  listaVehiculos = signal<IVehiculo[]>([]);

  //?URL
  private url = 'https://localhost:7189/api/vehiculos';

  //? Funcion para obtener la lista de vehiculos
  obtenerVehiculos(): Observable<IVehiculo[]> {
    return this.httpClient.get<IVehiculo[]>(this.url);
  }
}
