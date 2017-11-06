export class OrderModel {
    waiting:Array<Order>;
    accept:Array<Order>;
    sorting:Array<Order>;
    receive:Array<Order>;
}
export class Order {
    status: string;
    items: Array<itemModel>;
    sender: Address = new Address();
    receiver: Address = new Address();
    amount : number;

}
export class itemModel {
    item: item = new item();
    qty: number;
    total: number;

}
export class item {
    size: string;
    price: number;
}
export class Address {
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
    tel: string;
    sort: string;
}