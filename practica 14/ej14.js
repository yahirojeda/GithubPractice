const inventario = [
  {
    id: 1,
    name: "TORT1K",
    description: "1K de tortilla",
    price: 20,
    stock: 2,
    maxStock: 12,
    restock: "2d",
  },
  {
    id: 2,
    name: "KLGSFL",
    description: "Froot loops caja",
    price: 40,
    stock: 5,
    maxStock: 6,
    restock: "1w",
  },
  {
    id: 3,
    name: "BRCHIP",
    description: "Chips variado",
    price: 18,
    stock: 9,
    maxStock: 12,
    restock: "2w",
  },
  {
    id: 4,
    name: "SRJL1L",
    description: "1L Leche sello rojo",
    price: 25,
    stock: 2,
    maxStock: 12,
    restock: "2w",
  },
  {
    id: 5,
    name: "GLPH1K",
    description: "1k Huevo guadalupana",
    price: 45,
    stock: 6,
    maxStock: 30,
    restock: "2w",
  },
  {
    id: 6,
    name: "FJPR1K",
    description: "1K frijol peruano",
    price: 40,
    stock: 0,
    maxStock: 10,
    restock: "1w",
  },
  {
    id: 7,
    name: "CSTCHJ",
    description: "Lata de chiles jalapeños la costeña",
    price: 12,
    stock: 12,
    maxStock: 12,
    restock: "1w",
  },
];

//FILTER AND MAP
//1.-Mostrar la description de los productos sin stock
//['1K frijol peruano']
let sinStock = inventario.filter(p => p.stock === 0).map(p => p.description);

//2.-Mostrar la description de los productos con un stock menor a 5
//['1K de tortilla', '1L Leche sello rojo', '1K frijol peruano']
let bajoStock = inventario.filter(p => p.stock < 5).map(p => p.description);

//3.-Mostrar el name de los productos cuyo restock es cada semana = "1w"
// ['KLGSFL', 'FJPR1K', 'CSTCHJ']
let weeklyRestock = inventario.filter(p => p.restock === "1w").map(p => p.name);

//4.-Mostrar el name de los productos cuyo restock no es cada semana = "1w"
//['TORT1K', 'BRCHIP', 'SRJL1L', 'GLPH1K']
let notWeeklyRestock = inventario.filter(p => p.restock !== "1w").map(p => p.name);

//5.-Mostrar el id de los productos que tienen un stock máximo mayor a 15 y un precio mayor a 30
//[5]
let mostValuableProduct = inventario.filter(p => p.maxStock > 15 && p.price > 30).map(p => p.id);

//EVERY
//6.-Todos los productos tienen por lo menos un producto en stock?
//false
let inventoryHasStock = inventario.every(p => p.stock > 0);

//7.-Todos los productos tienen un precio mayor a 10?
//true
let everythingPricy = inventario.every(p => p.price > 10);

//SOME
//8.-Algún producto tiene el stock completo?
//true
let anyFullStock = inventario.some(p => p.stock === p.maxStock);

//9.-Algún producto tiene el stock en 0?
//true
let anyEmptyStock = inventario.some(p => p.stock === 0);

//REDUCE
/*10.-Iniciando el acumulador en -1 calcular cuanto dinero se ha vendido en total de todo el inventario,
si un producto tiene 10 de stock maximo y 8 de stock significa que vendió 2.
El resultado sería el valor del producto*2-1 por el inicio del acumulador.*/
//2023
let moneyEarned = inventario.reduce((acc, p) => 
  (acc += p.price * (p.maxStock -p.stock)), -1);
