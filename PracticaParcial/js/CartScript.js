//Crear objeto "Carrito" con un array de "Items",
//implementar metodo para devolver precio total, implementar metodo toString
//y mostrarlos por consola
var Item = function(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;

    Item.prototype.toString = function (){
        return '{ ' + 
                'Nombre: ' + this.nombre + ',\n' +
                'Precio: ' + this.precio + ' }';
    }
}

var Carrito = function(){
    this.items = [];

    Carrito.prototype.add = function (item){
        this.items.push(item);
    }

    Carrito.prototype.getTotal = function (){
        var total = 0;
        this.items.forEach((item) => {
            total += item.precio;
        });

        return total;
    }

    Carrito.prototype.toString = function (){
        return '[' +
            this.items.forEach((item) => {
                item.toString();
                + ',\n'
            }) + ']\n' +
            'Total: ' + this.getTotal();
    }
}

var item1 = new Item('Notebook',2500);
var item2 = new Item('Desktop',3000);
var item3 = new Item('Mayonesa',45);
var carrito = new Carrito();

carrito.add(item1);
carrito.add(item2);
carrito.add(item3);
console.log(item1.toString());
console.log(carrito.getTotal());
console.log(carrito.toString());