export class persona {
    id?: number ;
    nombre: String;
    apellido: String;
    img: String;
    descripcion: String;

    constructor (nombre: String, apellido: String, img: String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    
    }

}