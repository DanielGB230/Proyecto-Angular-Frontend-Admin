import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListaProductosComponent } from './administracion/gestion-productos/lista-productos/lista-productos.component';
import { VenderProductosComponent } from './administracion/gestion-productos/vender-productos/vender-productos.component';
import { EmpleadosComponent } from './administracion/gestion-usuarios/empleados/empleados.component';
import { NuevoEmpleadoComponent } from './administracion/gestion-usuarios/nuevo-empleado/nuevo-empleado.component';
import { NuevoRolComponent } from './administracion/gestion-usuarios/nuevo-rol/nuevo-rol.component';
import { NuevoUsuarioComponent } from './administracion/gestion-usuarios/nuevo-usuario/nuevo-usuario.component';
import { RolesComponent } from './administracion/gestion-usuarios/roles/roles.component';
import { UsuariosComponent } from './administracion/gestion-usuarios/usuarios/usuarios.component';
import { DashboardComponent } from './administracion/gestion-ventas/dashboard/dashboard.component';
import { InicioComponent } from './administracion/gestion-ventas/inicio/inicio.component';
import { VentasComponent } from './administracion/gestion-ventas/ventas/ventas.component';
import { NuevoProveedorComponent } from './administracion/relaciones-proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoServicioComponent } from './administracion/relaciones-proveedores/nuevo-servicio/nuevo-servicio.component';
import { ProveedoresComponent } from './administracion/relaciones-proveedores/proveedores/proveedores.component';
import { ServicioTecnicoComponent } from './administracion/relaciones-proveedores/servicio-tecnico/servicio-tecnico.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcasComponent } from './administracion/gestion-productos/marcas/marcas.component';
import { CategoriasComponent } from './administracion/gestion-productos/categorias/categorias.component';
import { NuevaCategoriaComponent } from './administracion/gestion-productos/nueva-categoria/nueva-categoria.component';
import { NuevaMarcaComponent } from './administracion/gestion-productos/nueva-marca/nueva-marca.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VentasComponent,
    ListaProductosComponent,
    VenderProductosComponent,
    UsuariosComponent,
    RolesComponent,
    ServicioTecnicoComponent,
    ProveedoresComponent,
    NuevoUsuarioComponent,
    NuevoRolComponent,
    NuevoProveedorComponent,
    NuevoServicioComponent,
    InicioComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
    MarcasComponent,
    CategoriasComponent,
    NuevaCategoriaComponent,
    NuevaMarcaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
