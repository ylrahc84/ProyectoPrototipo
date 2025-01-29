export class Usuario{

    constructor(
        
        public usuarioID:string,
        public usuario:string,
        public password:string,
        public nombreUsuario:string,
        public apellidoUsuario:string,
        public email:string,
        public idReserva:string,
        public numeroHabitacion:string,
        public role:string,
        public fechaCracion:string,
        public fechaLogeo?:string,

    ) {}

}