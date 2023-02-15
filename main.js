class producto {
    constructor (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio= precio;
    this.stock = stock;
    }
    get_datos () {
    console.log ("<------------>")
    console.log ("Nombre:", this.nombre);
    console.log("Precio:", this.precio);
    console.log ("Stock:", this.stock);
    console.log ("");
    }

    get_stock () {
        if (this.stock <= 0) {
            return false
        }
        else {
            return true
        }
    }

    venta_stock (cantidad) {
        if (this.stock >= cantidad) {
            this.stock = this.stock - cantidad;
            return true
        }
        else {
            return false
        }

    }

}

let opcion = prompt ("1-Ingresar nuevo productos 2-Comprar productos");

let list_productos = [];
list_productos.push ( new producto ("procesador", 20.000, 10));
list_productos.push ( new producto ("mother", 36.000, 5));
list_productos.push ( new producto ("cooler", 8.000 , 3));
list_productos.push ( new producto ("memoria ram", 10.200, 5));
list_productos.push ( new producto ("placa de video", 100.000, 10));
list_productos.push ( new producto ("fuente", 17.000, 5));
list_productos.push ( new producto ("gabinete", 25.000, 3));
list_productos.push ( new producto ("kit de perifericos", 17000, 5));

console.log("lista de productos");
for (let producto of list_productos){
    producto.get_datos();
}

function buscar_componente (producto) {
    return producto.nombre == compradel_usuario
}
let compradel_usuario = prompt ("Ingrese el nombre del componente que desea comprar") 
let resultadode_busqueda = list_productos.find (buscar_componente);

if (resultadode_busqueda !=undefined) {
    if (resultadode_busqueda.get_stock()) {
        console.log ("Contamos con stock del prodcuto:", resultadode_busqueda.nombre)
        let unidades = prompt ("Ingrese la cantidad del componente que necesita")
        if (resultadode_busqueda.venta_stock (unidades)) {
            console.log ("¡Gracias por tu compra!")
            

        }      
    }
    else {
        console.log ("No tenemos stock del producto:", resultadode_busqueda.nombre, "te pedimos disculpas por las molestias ocasionadas.")
    }
    resultadode_busqueda.get_datos ();
}
else {
    console.log ("No se pudo encontrar el producto", compradel_usuario);
}

function ordenBaratos(){
    const productosBaratos = producto
    productosBaratos.sort(function(a, b){return a.precio - b.precio})
    console.table(productosBaratos)
}

