import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './administracion/gestion-productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './administracion/gestion-productos/nuevo-producto/nuevo-producto.component';
import { VenderProductosComponent } from './administracion/gestion-productos/vender-productos/vender-productos.component';
import { NuevoRolComponent } from './administracion/gestion-usuarios/nuevo-rol/nuevo-rol.component';
import { NuevoUsuarioComponent } from './administracion/gestion-usuarios/nuevo-usuario/nuevo-usuario.component';
import { RolesComponent } from './administracion/gestion-usuarios/roles/roles.component';
import { UsuariosComponent } from './administracion/gestion-usuarios/usuarios/usuarios.component';
import { DashboardComponent } from './administracion/gestion-ventas/dashboard/dashboard.component';
import { VentasComponent } from './administracion/gestion-ventas/ventas/ventas.component';
import { NuevoProveedorComponent } from './administracion/relaciones-proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoServicioComponent } from './administracion/relaciones-proveedores/nuevo-servicio/nuevo-servicio.component';
import { ProveedoresComponent } from './administracion/relaciones-proveedores/proveedores/proveedores.component';
import { ServicioTecnicoComponent } from './administracion/relaciones-proveedores/servicio-tecnico/servicio-tecnico.component';
import { InicioComponent } from './administracion/gestion-ventas/inicio/inicio.component';
import { EmpleadosComponent } from './administracion/gestion-usuarios/empleados/empleados.component';
import { NuevoEmpleadoComponent } from './administracion/gestion-usuarios/nuevo-empleado/nuevo-empleado.component';

const routes: Routes = [
  { path: 'administracion/inicio', component: InicioComponent },
  { path: 'administracion/gestion/producto/nuevo', component: NuevoProductoComponent },
  { path: 'administracion/gestion/producto/lista', component: ListaProductosComponent },
  { path: 'administracion/gestion/producto/vender', component: VenderProductosComponent },
  { path: 'administracion/gestion/usuarios/roles', component: RolesComponent },
  { path: 'administracion/gestion/usuarios/rol/nuevo', component: NuevoRolComponent },
  { path: 'administracion/gestion/usuarios', component: UsuariosComponent },
  { path: 'administracion/gestion/usuarios/nuevo', component: NuevoUsuarioComponent },
  { path: 'administracion/gestion/ventas/dashboard', component: DashboardComponent },
  { path: 'administracion/gestion/ventas', component: VentasComponent },
  { path: 'administracion/gestion/proveedores', component: ProveedoresComponent },
  { path: 'administracion/gestion/proveedores/nuevo', component: NuevoProveedorComponent },
  { path: 'administracion/gestion/servicioTecnico', component: ServicioTecnicoComponent },
  { path: 'administracion/gestion/servicioTecnico/nuevo', component: NuevoServicioComponent },
  { path: 'administracion/gestion/usuarios/empleados', component: EmpleadosComponent },
  { path: 'administracion/gestion/usuarios/empleados/nuevo', component: NuevoEmpleadoComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}