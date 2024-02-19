interface IProduct {

    // all the method are abstract method in interface.
    // all methods from interface are by default public .
    
    id: number;
    name: string;
    description: string;
    price: number;

}

class Product implements IProduct{
    id: number;
    name: string;
    description: string;
    price: number;
    constructor(id:number,name: string, description: string, price: number){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
    }

}
 var mobile=new Product(101,"Iphone","This is nice",10000);
 console.log(mobile);
 