 const products = [];

export class Product {
    constructor(title , price) {
        this.title = title;
        this.price = price;
    }

 save =( ) =>{
        console.log('Saving product');
        products.push(this)
    }

    static fetchAll = () => {
        return products;
    }
}