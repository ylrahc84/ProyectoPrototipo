import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      titulo:'dashboard',
      icono:'fa-solid fa-gauge',
      submenu:[
        {titulo:'Main', url:'/' },
        /*
        {titulo:'ProgressBar', url:'progress' },
        {titulo:'Grafica', url:'grafica1' },
        {titulo:'Promesas', url:'promesas' },
        {titulo:'Rxjs', url:'rxjs' },
        */
      ]
    },
    {
      titulo:'Reservas',
      icono:'fa-solid fa-calendar-days',
      submenu:[
        {titulo:'Lista Clientes/Agencias', url:'listaclientes' },
        {titulo:'Lista de Tarifas', url:'listatarifas'},
        {titulo:'_________________'},
        {titulo:'Listado de Reservas', url:'listareservas'},
        {titulo:'Pronosticos de Reservas', url:'pronostico'},
        {titulo:'Manejo de Prepagos', url:'prepagos'},
        {titulo:'_________________'},
        {titulo:'Estadistica de Reservas', url:'estadistica'},
        {titulo:'Reservas por Agencia', url:'reservasxagencia'}
      ]
    },
    {
      titulo:'Recepcion',
      icono:'fa fa-bed',
      submenu:[
        {titulo:'Habitaciones In-house', url:'habInHouse' },
        {titulo:'Asignar Habitaciones', url:'asignaHabitaciones'},
        {titulo:'Ingresar Arrivos', url:'ingresarArrivo'},
        {titulo:'_________________'},
        {titulo:'Lista de Pax In-house', url:'lstPaxInHouse'},
        {titulo:'Pronosticos de Reservas', url:'pronostico'},
        {titulo:'_________________'},
        {titulo:'Lista de Documentos', url:'listaDocumentos'},
      ]
    },
    {
      titulo:'Punto de Venta',
      icono:'fa fa-cart-arrow-down',
      submenu:[
        {titulo:'Documentos de Venta', url:'listaDocumentos'},
        {titulo:'Notas de Credito', url:'notaCredito'},
        {titulo:'_________________'},
        {titulo:'Mantenimiento de Categorias', url:'lstCategorias' },
        {titulo:'Mantenimiento de Recetas', url:'lstRecetas' },
        {titulo:'Listas de Precios', url:'lstPrecios'},
        {titulo:'_________________'},
        {titulo:'Estadistica x Pnt. Venta', url:'estadisticaVentas'},
        {titulo:'Ventas x Facturador', url:'ventasFacturador'},
      ]
    },
    {
      titulo:'Proveeduria',
      icono:'fa fa-truck',
      submenu:[
        {titulo:'Lista de Proveedores', url:'listaProveedor' },
        {titulo:'Lista de Articulos', url:'listaArticulos'},
        {titulo:'_________________'},
        {titulo:'Ordenes de Compra', url:'ordenesCompra'},
        {titulo:'Registrar Compra', url:'registroCompras'},
        {titulo:'_________________'},
        {titulo:'Inventario Fisico', url:'inventario'},
        {titulo:'Salidad de Almacen', url:'salidaAlmacen'},
        {titulo:'Existencias por Almacen', url:'existencias'},
        {titulo:'_________________'},
        {titulo:'Estadistica de Compras', url:'estadisticaCompra'},
        {titulo:'Compras por Proveedor', url:'comprasProveedor'}
      ]
    },
    {
      titulo:'Caja y Bancos',
      icono:'fa fa-briefcase',
      submenu:[
        {titulo:'Depositos Bancarios', url:'depositosBanco' },
        {titulo:'Retiros Bancarios', url:'retirosBanco'},
        {titulo:'Informacion de Movimientos', url:'informeCuenta'},
        {titulo:'_________________'},
        {titulo:'Cuentas por Pagar', url:'cuentaPorPagar'},
        {titulo:'Cuentas por Cobrar', url:'cuentaPorCobrar'},
        {titulo:'_________________'},
        {titulo:'Conciliacion Bancaria', url:'conciliacion'},
        {titulo:'Estadistica de Movimientos', url:'estadisticaCuentas'}
      ]
    },
    {
      titulo:'Contabilidad',
      icono:'fa fa-briefcase',
      submenu:[
        {titulo:'Libro Diario', url:'libroDiario' },
        {titulo:'Libro Mayor', url:'libroMayor'},
        {titulo:'Libro de Inventario', url:'libroInventario'},
        {titulo:'_________________'},
        {titulo:'Catalogo Contable', url:'catalgoContable'},
        {titulo:'Asientos Manuales', url:'asientoManual'},
        {titulo:'_________________'},
        {titulo:'Balance General', url:'balanceGeneral'},
        {titulo:'Estado de Resultados', url:'estadoResultados'},
        {titulo:'Balance de Comprobacion', url:'subcategorias'},
        {titulo:'Estado de Cambios en el Patrimonio', url:'subcategorias'},
        {titulo:'Estado de Flujo de Efectivo', url:'subcategorias'}

      ]
    },
    {
      titulo:'HouseKeeping',
      icono:'fa fa-home',
      submenu:[
        {titulo:'Mantenimiento de Habitaciones', url:'mantenimientoHouse' }
      ]
    },
    {
      titulo:'Reportes',
      icono:'fa fa-print',
      submenu:[
        {titulo:'Usuarios', url:'usuarios' },
        {titulo:'Categorias', url:'categorias'},
        {titulo:'SubCategorias', url:'subcategorias'}
      ]
    },
    {
      titulo:'Configuraciones',
      icono:'fa fa-cogs',
      submenu:[
        {titulo:'Conf. General', url:'usuarios' },
        {titulo:'Conf. Reservas', url:'usuarios' },
        {titulo:'Conf. FrontDesk', url:'categorias'},
        {titulo:'Conf. PntVenta', url:'subcategorias'},
        {titulo:'Conf. Proveeduria', url:'subcategorias'},
        {titulo:'Conf. Contabilidad', url:'subcategorias'}
      ]
    }

  ]


  constructor() { }
}
