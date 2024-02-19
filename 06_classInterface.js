var Product = /** @class */ (function () {
    function Product(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    return Product;
}());
var mobile = new Product(101, "Iphone", "This is nice", 10000);
console.log(mobile);
