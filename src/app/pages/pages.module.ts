import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { BaseChartDirective } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
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


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    UsuariosComponent,
    CategoriasComponent,
    SubcategoriaComponent,
    SubCategoriaItemComponent,
    ListaClienteComponent,
    ListaTarifasComponent,
    ListaReservasComponent,
    PronosticoComponent,
    ListaPrepagosComponent,
    EstadisticaReservasComponent,
    ReservasAgenciaComponent,
    HabitacionesInHouseComponent,
    AsignarHabitacionComponent,
    IngresarArrivosComponent,
    LstPaxInHouseComponent,
    ListaDocumentosComponent,
    NotasCreditoComponent,
    ListaCategoriasComponent,
    ListaRecetasComponent,
    ListaPreciosComponent,
    EstadisticaPntVentaComponent,
    VentasFacturadorComponent,
    ListaProveedoresComponent,
    ListaArticulosComponent,
    OrdenCompraComponent,
    RegistroCompraComponent,
    InventarioComponent,
    SalidasAlmacenComponent,
    ExistenciaAlmacenComponent,
    EstadisticaCompraComponent,
    CompraProveedorComponent,
    DepositosComponent,
    RetirosComponent,
    InformacionCuentaComponent,
    CuentaPorPagarComponent,
    CuentaPorCobrarComponent,
    ConciliacionComponent,
    EstadisticaBancosComponent,
    LibroDiarioComponent,
    LibroMayorComponent,
    LibroInventarioComponent,
    CatalogoContableComponent,
    AsientoManualComponent,
    BalanceGeneralComponent,
    EstadoResultadosComponent,
    MantenimientoHouseComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class PagesModule { }
