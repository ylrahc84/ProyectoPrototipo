import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { CategoriasComponent } from './mantenimientos/categorias/categorias.component';
import { SubcategoriaComponent } from './mantenimientos/subcategoria/subcategoria.component';
import { SubCategoriaItemComponent } from './mantenimientos/sub-categoria-item/sub-categoria-item.component';
import { ListaClienteComponent } from './reservas/lista-cliente/lista-cliente.component';
import { ListaTarifasComponent } from './reservas/lista-tarifas/lista-tarifas.component';
import { ListaReservasComponent } from './reservas/lista-reservas/lista-reservas.component';
import { PronosticoComponent } from './reservas/pronostico/pronostico.component';
import { ListaPrepagosComponent } from './reservas/lista-prepagos/lista-prepagos.component';
import { EstadisticaReservasComponent } from './reservas/estadistica-reservas/estadistica-reservas.component';
import { ReservasAgenciaComponent } from './reservas/reservas-agencia/reservas-agencia.component';
import { HabitacionesInHouseComponent } from './frontdesk/habitaciones-in-house/habitaciones-in-house.component';
import { AsignarHabitacionComponent } from './frontdesk/asignar-habitacion/asignar-habitacion.component';
import { IngresarArrivosComponent } from './frontdesk/ingresar-arrivos/ingresar-arrivos.component';
import { LstPaxInHouseComponent } from './frontdesk/lst-pax-in-house/lst-pax-in-house.component';
import { ListaDocumentosComponent } from './frontdesk/lista-documentos/lista-documentos.component';
import { NotasCreditoComponent } from './puntoventa/notas-credito/notas-credito.component';
import { ListaCategoriasComponent } from './puntoventa/lista-categorias/lista-categorias.component';
import { ListaRecetasComponent } from './puntoventa/lista-recetas/lista-recetas.component';
import { ListaPreciosComponent } from './puntoventa/lista-precios/lista-precios.component';
import { EstadisticaPntVentaComponent } from './puntoventa/estadistica-pnt-venta/estadistica-pnt-venta.component';
import { VentasFacturadorComponent } from './puntoventa/ventas-facturador/ventas-facturador.component';
import { ListaProveedoresComponent } from './proveeduria/lista-proveedores/lista-proveedores.component';
import { ListaArticulosComponent } from './proveeduria/lista-articulos/lista-articulos.component';
import { OrdenCompraComponent } from './proveeduria/orden-compra/orden-compra.component';
import { RegistroCompraComponent } from './proveeduria/registro-compra/registro-compra.component';
import { InventarioComponent } from './proveeduria/inventario/inventario.component';
import { SalidasAlmacenComponent } from './proveeduria/salidas-almacen/salidas-almacen.component';
import { ExistenciaAlmacenComponent } from './proveeduria/existencia-almacen/existencia-almacen.component';
import { EstadisticaCompraComponent } from './proveeduria/estadistica-compra/estadistica-compra.component';
import { CompraProveedorComponent } from './proveeduria/compra-proveedor/compra-proveedor.component';
import { DepositosComponent } from './cajabancos/depositos/depositos.component';
import { RetirosComponent } from './cajabancos/retiros/retiros.component';
import { InformacionCuentaComponent } from './cajabancos/informacion-cuenta/informacion-cuenta.component';
import { CuentaPorPagarComponent } from './cajabancos/cuenta-por-pagar/cuenta-por-pagar.component';
import { CuentaPorCobrarComponent } from './cajabancos/cuenta-por-cobrar/cuenta-por-cobrar.component';
import { ConciliacionComponent } from './cajabancos/conciliacion/conciliacion.component';
import { EstadisticaBancosComponent } from './cajabancos/estadistica-bancos/estadistica-bancos.component';
import { LibroDiarioComponent } from './contabilidad/libro-diario/libro-diario.component';
import { LibroMayorComponent } from './contabilidad/libro-mayor/libro-mayor.component';
import { LibroInventarioComponent } from './contabilidad/libro-inventario/libro-inventario.component';
import { CatalogoContableComponent } from './contabilidad/catalogo-contable/catalogo-contable.component';
import { AsientoManualComponent } from './contabilidad/asiento-manual/asiento-manual.component';
import { BalanceGeneralComponent } from './contabilidad/balance-general/balance-general.component';
import { EstadoResultadosComponent } from './contabilidad/estado-resultados/estado-resultados.component';
import { MantenimientoHouseComponent } from './frontdesk/mantenimiento-house/mantenimiento-house.component';

const routes: Routes = [
 
  {
    path:'dashboard', 
    component: PagesComponent,
   // canActivate:[authGuard],
    children:[
      {path:'', component: DashboardComponent, data:{titulo:'Dashboard'} },
      {path:'progress', component: ProgressComponent,data:{titulo:'ProgressBAr'} },
      {path:'grafica1', component: Grafica1Component,data:{titulo:'Grafica'} },
      {path:'account-settings', component: AccountSettingsComponent,data:{titulo:'Ajustes de Cuenta'} },
      {path:'promesas', component: PromesasComponent,data:{titulo:'Promesas'} },
      {path:'rxjs', component: RxjsComponent,data:{titulo:'Rxjs'} },
      {path:'usuarios', component: UsuariosComponent,data:{titulo:'Usuarios de aplicacion'} },
      {path:'categorias', component: CategoriasComponent, data:{titulo:'Mantenimiento de Categorias'}},
      {path:'subcategorias', component: SubcategoriaComponent, data:{titulo:'Mantenimiento de Sub Categorias'}},
      {path:'subcategoriaitem/:ID', component: SubCategoriaItemComponent, data:{titulo:'Sub Categorias Item'}},

      {path:'listaclientes', component: ListaClienteComponent, data:{titulo:'Lista de Clientes'}},
      {path:'listatarifas', component: ListaTarifasComponent, data:{titulo:'Lista de Tarifas'}},
      {path:'listareservas', component: ListaReservasComponent, data:{titulo:'Lista de Reservas'}},
      {path:'pronostico', component: PronosticoComponent, data:{titulo:'Pronostico de Reservas'}},
      {path:'prepagos', component: ListaPrepagosComponent, data:{titulo:'Prepagos de Reservas'}},
      {path:'estadistica', component: EstadisticaReservasComponent, data:{titulo:'Estadistica de Reservas'}},
      {path:'reservasxagencia', component: ReservasAgenciaComponent, data:{titulo:'Reservas por Agencia'}},

      {path:'habInHouse', component: HabitacionesInHouseComponent, data:{titulo:'Habitaciones In-house'}},
      {path:'asignaHabitaciones', component: AsignarHabitacionComponent, data:{titulo:'Asignar Habitaciones'}},
      {path:'ingresarArrivo', component: IngresarArrivosComponent, data:{titulo:'Ingresar Arrivos'}},
      {path:'lstPaxInHouse', component: LstPaxInHouseComponent, data:{titulo:'Lista de Pax In-house'}},
      {path:'listaDocumentos', component: ListaDocumentosComponent, data:{titulo:'Lista de Documentos'}},

      {path:'notaCredito', component: NotasCreditoComponent, data:{titulo:'Lista de Notas de Credito'}},
      {path:'lstCategorias', component: ListaCategoriasComponent, data:{titulo:'Lista de Categoria de Productos'}},
      {path:'lstRecetas', component: ListaRecetasComponent, data:{titulo:'Lista de Recetas'}},
      {path:'lstPrecios', component: ListaPreciosComponent, data:{titulo:'Lista de Precios'}},
      {path:'estadisticaVentas', component: EstadisticaPntVentaComponent, data:{titulo:'Estadistica de Ventas'}},
      {path:'ventasFacturador', component: VentasFacturadorComponent, data:{titulo:'Ventas por Facturador'}},

      {path:'listaProveedor', component: ListaProveedoresComponent, data:{titulo:'Lista de Proveedores'}},
      {path:'listaArticulos', component: ListaArticulosComponent, data:{titulo:'Lista de Articulos'}},
      {path:'ordenesCompra', component: OrdenCompraComponent, data:{titulo:'Ordenes de Compra'}},
      {path:'registroCompras', component: RegistroCompraComponent, data:{titulo:'Registro de Compra'}},
      {path:'inventario', component: InventarioComponent, data:{titulo:'Inventario Fisico'}},
      {path:'salidaAlmacen', component: SalidasAlmacenComponent, data:{titulo:'Salidas de Almacen'}},
      {path:'existencias', component: ExistenciaAlmacenComponent, data:{titulo:'Existencias de Almacen'}},
      {path:'estadisticaCompra', component: EstadisticaCompraComponent, data:{titulo:'Estadistica de Compras'}},
      {path:'comprasProveedor', component: CompraProveedorComponent, data:{titulo:'Compras por Proveedor'}},

      {path:'depositosBanco', component: DepositosComponent, data:{titulo:'Depositos Bancarios'}},
      {path:'retirosBanco', component: RetirosComponent, data:{titulo:'Retiros Bancarios'}},
      {path:'informeCuenta', component: InformacionCuentaComponent, data:{titulo:'Informacion de Cuenta Bancarios'}},
      {path:'cuentaPorPagar', component: CuentaPorPagarComponent, data:{titulo:'Cuenta por Pagar'}},
      {path:'cuentaPorCobrar', component: CuentaPorCobrarComponent, data:{titulo:'Cuenta por Cobrar'}},
      {path:'conciliacion', component: ConciliacionComponent, data:{titulo:'Conciliacion Bancaria'}},
      {path:'estadisticaCuentas', component: EstadisticaBancosComponent, data:{titulo:'Estadistica de Cuentas Bancarias'}},

      {path:'libroDiario', component: LibroDiarioComponent, data:{titulo:'Libro Diario'}},
      {path:'libroMayor', component: LibroMayorComponent, data:{titulo:'Libro Mayor'}},
      {path:'libroInventario', component: LibroInventarioComponent, data:{titulo:'Libro Inventarios'}},
      {path:'catalgoContable', component: CatalogoContableComponent, data:{titulo:'Catalogo Contable'}},
      {path:'asientoManual', component: AsientoManualComponent, data:{titulo:'Asiento Manual'}},
      {path:'balanceGeneral', component: BalanceGeneralComponent, data:{titulo:'Balance General'}},
      {path:'estadoResultados', component: EstadoResultadosComponent, data:{titulo:'Estado de Resultados'}},

      {path:'mantenimientoHouse', component: MantenimientoHouseComponent, data:{titulo:'Mantenimiento de House'}},

    ],
  } 

  /*
    {
      path:'', 
      component: PagesComponent,
      children:[
        {path:'dashboard', component: DashboardComponent },
        {path:'progress', component: ProgressComponent },
        {path:'grafica1', component: Grafica1Component },
        {path:'', redirectTo:'/dashboard', pathMatch:'full' },
      ]
    }
  */
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class PageRoutingModule {}
