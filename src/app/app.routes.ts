import { Routes } from '@angular/router';
import { LoginComponent } from "./administracion/auth/login/login.component";
import { RegisterComponent } from "./administracion/auth/register/register.component";
import { CategoriasComponent } from "./administracion/gestion-productos/categorias/categorias.component";
import { ListaProductosComponent } from "./administracion/gestion-productos/lista-productos/lista-productos.component";
import { MarcasComponent } from "./administracion/gestion-productos/marcas/marcas.component";
import { NuevaCategoriaComponent } from "./administracion/gestion-productos/nueva-categoria/nueva-categoria.component";
import { NuevaMarcaComponent } from "./administracion/gestion-productos/nueva-marca/nueva-marca.component";
import { NuevoProductoComponent } from "./administracion/gestion-productos/nuevo-producto/nuevo-producto.component";
import { VenderProductosComponent } from "./administracion/gestion-productos/vender-productos/vender-productos.component";
import { ClientesComponent } from "./administracion/gestion-usuarios/clientes/clientes.component";
import { EmpleadosComponent } from "./administracion/gestion-usuarios/empleados/empleados.component";
import { NuevoClienteComponent } from "./administracion/gestion-usuarios/nuevo-cliente/nuevo-cliente.component";
import { NuevoEmpleadoComponent } from "./administracion/gestion-usuarios/nuevo-empleado/nuevo-empleado.component";
import { NuevoPuestoComponent } from "./administracion/gestion-usuarios/nuevo-puesto/nuevo-puesto.component";
import { NuevoRolComponent } from "./administracion/gestion-usuarios/nuevo-rol/nuevo-rol.component";
import { NuevoUsuarioComponent } from "./administracion/gestion-usuarios/nuevo-usuario/nuevo-usuario.component";
import { PuestosComponent } from "./administracion/gestion-usuarios/puestos/puestos.component";
import { RolesComponent } from "./administracion/gestion-usuarios/roles/roles.component";
import { UsuariosComponent } from "./administracion/gestion-usuarios/usuarios/usuarios.component";
import { DashboardComponent } from "./administracion/gestion-ventas/dashboard/dashboard.component";
import { InicioComponent } from "./administracion/gestion-ventas/inicio/inicio.component";
import { VentasComponent } from "./administracion/gestion-ventas/ventas/ventas.component";
import { HomeAdminComponent } from "./administracion/home-admin/home-admin.component";
import { NuevoServicioComponent } from "./administracion/relaciones-proveedores/nuevo-servicio/nuevo-servicio.component";
import { ServicioTecnicoComponent } from "./administracion/relaciones-proveedores/servicio-tecnico/servicio-tecnico.component";
/* ***** */
import { NotFoundComponent } from './404/not-found/not-found.component';
import { BannerCatalogoComponent } from './interfaz-usuario/banner-catalogo/banner-catalogo.component';
import { DetalleSupportComponent } from './interfaz-usuario/detalle-support/detalle-support.component';
import { EditarPerfilComponent } from './interfaz-usuario/editar-perfil/editar-perfil.component';
import { HomeCatalogoComponent } from './interfaz-usuario/home-catalogo/home-catalogo.component';
import { NavCatalogoComponent } from './interfaz-usuario/nav-catalogo/nav-catalogo.component';
import { PerfilUsuarioComponent } from './interfaz-usuario/perfil-usuario/perfil-usuario.component';
import { ProductosCatalogoComponent } from './interfaz-usuario/productos-catalogo/productos-catalogo.component';
import { SupportPagoComponent } from './interfaz-usuario/support-pago/support-pago.component';
import { SupportComponent } from './interfaz-usuario/support/support.component';
/* Facturas */
import { BoletoComponent } from './administracion/boleto/boleto.component';
import { DnirucComponent } from './administracion/dniruc/dniruc.component';
import { FacturaComponent } from './administracion/factura/factura.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'home/admin', component: HomeAdminComponent },
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
    { path: 'administracion/gestion/servicioTecnico', component: ServicioTecnicoComponent },
    { path: 'administracion/gestion/servicioTecnico/nuevo', component: NuevoServicioComponent },
    { path: 'administracion/gestion/usuarios/empleados', component: EmpleadosComponent },
    { path: 'administracion/gestion/usuarios/empleados/nuevo', component: NuevoEmpleadoComponent },
    { path: 'administracion/gestion/productos/categorias', component: CategoriasComponent },
    { path: 'administracion/gestion/productos/categorias/nuevo', component: NuevaCategoriaComponent },
    { path: 'administracion/gestion/productos/marcas', component: MarcasComponent },
    { path: 'administracion/gestion/productos/marcas/nuevo', component: NuevaMarcaComponent },
    { path: 'administracion/gestion/usuarios/puestos', component: PuestosComponent },
    { path: 'administracion/gestion/usuarios/puestos/nuevo', component: NuevoPuestoComponent },
    { path: 'administracion/gestion/usuarios/cliente/nuevo', component: NuevoClienteComponent },
    { path: 'administracion/gestion/usuarios/cliente', component: ClientesComponent },
    { path: 'boleto', component: BoletoComponent },
    { path: 'factura', component: FacturaComponent },
    { path: 'dniruc', component: DnirucComponent },

    /* { path: '**', redirectTo: 'home/admin', pathMatch: 'full' }, */
    { path: 'home/catalogo', component: HomeCatalogoComponent },
    { path: 'catalogo', component: NavCatalogoComponent },
    { path: 'banner', component: BannerCatalogoComponent },
    { path: 'productos', component: ProductosCatalogoComponent },
    { path: 'perfil/usuario', component: PerfilUsuarioComponent },
    { path: 'editar/perfil', component: EditarPerfilComponent },
    { path: 'servicio/tecnico', component: SupportComponent },
    { path: 'not/found/404', component: NotFoundComponent },
    { path: 'detalle/support', component: DetalleSupportComponent },
    { path: 'pago/servicio', component: SupportPagoComponent },


    { path: '**', redirectTo: 'not/found/404', pathMatch: 'full' },
    { path: '', redirectTo: 'home/admin', pathMatch: 'full' }
    /* facturas: */

];
