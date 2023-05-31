
class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Verificar que no se repita el código
        const existingProduct = this.products.find((product) => product.code === code);
        if (existingProduct) {
          console.error("Error: el código ya existe");
          return;
        }


        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Error: faltan datos del producto");
            return;
        }
        // Agregar el nuevo producto con un ID autoincrementable
        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(newProduct);
        console.log("Producto agregado:", newProduct);
        }

    getProducts ()  { 
        return this.products
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
          console.error("Producto no encontrado");
          return;
        }
        return product;
      }
    }

    const manager = new ProductManager();
  
    manager.addProduct("producto prueba1", "Este es un producto prueba1", 200, "thumbnail1.jpg", "abc123", 25);
    manager.addProduct("producto prueba2", "Este es un producto prueba2", 300, "thumbnail2.jpg", "abc124", 26);
    console.log("Todos los productos:", manager.getProducts());

    console.log("Producto con ID 2:", manager.getProductById(2));
