import { Routes } from '@angular/router';
import { ListaVehiculos } from './vehiculos/components/lista-vehiculos/lista-vehiculos';
import { CrearVehiculo } from './vehiculos/components/crear-vehiculo/crear-vehiculo';

export const routes: Routes = [
  {
    path: 'lista-vehiculos',
    component: ListaVehiculos,
  },
  {
    path: 'crear-vehiculo',
    component: CrearVehiculo,
  },
];
