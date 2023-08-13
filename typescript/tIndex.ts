abstract class Car {
    id: number;
    manufacturerName: string;
    modelName: string;
    price: number;


    constructor(id : number, manufacturerName: string, modelName : string, price : number) {
        this.id = id;
        this.manufacturerName = manufacturerName;
        this.modelName = modelName;
        this.price = price;
    }
    showInfo() : void {
        console.log(`Id : ${this.id}`);
        console.log(`Manufacturer : ${this.manufacturerName}`);
        console.log(`Model : ${this.modelName}`);
        console.log(`Price : ${this.price}`);
    }
}

class Mercedes extends Car{

    constructor(id : number, manufacturerName: string, modelName : string, price : number) {
        super(id, manufacturerName, modelName, price);
    }
    showInfo(): void {
        console.log("Mercedes I.N.C");
        super.showInfo();
    }
}
class Kia extends Car{

    constructor(id : number, manufacturerName: string, modelName : string, price : number) {
        super(id, manufacturerName, modelName, price);
    }
    showInfo(): void {
        console.log("Kia I.N.C");
        super.showInfo();
    }
}

let mercedes = new Mercedes(0, "Mercedes-Benz Group", "AMG", 10000);
let kia = new Mercedes(1, "Kia Corporation", "Sportage", 5000);
mercedes.showInfo();
kia.showInfo();