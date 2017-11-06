export class AddressModel {
    sender: Array<Address>;
    receiver: Array<Address>;
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
