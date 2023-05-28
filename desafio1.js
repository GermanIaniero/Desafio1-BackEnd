
class ProductManager {

    constructor() {
        this.products = []
    }

    getProducts = () => { return this.products}

    getNextID = () => {
        const count = this.products.length
 
        if (count > 0) {

            return this.products[count - 1].id + 1
        } else {
            return 1
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.getNextID(),
            
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(product)
    }



}


const newproducto = new ProductManager()
newproducto.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25)
newproducto.addProduct('producto prueba2', 'Este es un producto prueba2', 300, 'Sin imagen2', 'abc124', 26)
console.log(newproducto.getProducts())
