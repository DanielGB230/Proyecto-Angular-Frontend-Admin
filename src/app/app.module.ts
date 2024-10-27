import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PuestosComponent } from './administracion/gestion-usuarios/puestos/puestos.component';
import { NuevoPuestoComponent } from './administracion/gestion-usuarios/nuevo-puesto/nuevo-puesto.component';
import { ClientesComponent } from './administracion/gestion-usuarios/clientes/clientes.component';
import { NuevoClienteComponent } from './administracion/gestion-usuarios/nuevo-cliente/nuevo-cliente.component';
import { DeliveryComponent } from './administracion/relaciones-proveedores/delivery/delivery.component';
import { RegistroDeliveryComponent } from './administracion/relaciones-proveedores/registro-delivery/registro-delivery.component';
import { RegisterComponent } from './administracion/auth/register/register.component';
import { LoginComponent } from './administracion/auth/login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NuevoProductoComponent } from './administracion/gestion-productos/nuevo-producto/nuevo-producto.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SweetAlert2Module,
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
        PuestosComponent,
        NuevoPuestoComponent,
        ClientesComponent,
        NuevoClienteComponent,
        DeliveryComponent,
        RegistroDeliveryComponent,
        RegisterComponent,
        LoginComponent,
        NuevoProductoComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
