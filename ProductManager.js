class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    const id = this.generateUniqueId();
    const product = { id, title, description, price, thumbnail, code, stock };
    this.products.push(product);
    return product;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  }

  updateProduct(id, updatedFields) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedFields };
      return this.products[index];
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1)[0];
      return deletedProduct;
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  generateUniqueId() {
    // Esta función puede ser más compleja en una implementación real
    return Date.now().toString();
  }
}

// Pruebas
const productManager = new ProductManager();

console.log("getProducts inicial:", productManager.getProducts()); // []

const newProduct = productManager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

console.log("Producto agregado:", newProduct);

console.log("getProducts después de agregar:", productManager.getProducts()); // [newProduct]

const retrievedProduct = productManager.getProductById(newProduct.id);
console.log("getProductById:", retrievedProduct);

const updatedProduct = productManager.updateProduct(newProduct.id, {
  price: 250,
});
console.log("Producto actualizado:", updatedProduct);

console.log("getProducts después de actualizar:", productManager.getProducts());

const deletedProduct = productManager.deleteProduct(newProduct.id);
console.log("Producto eliminado:", deletedProduct);

console.log("getProducts después de eliminar:", productManager.getProducts());
