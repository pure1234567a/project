export class RatesModel {
    lamunphan: arrayRate = new arrayRate();
    thaipost: arrayRate = new arrayRate();

}
export class Rates {
    name: string;
    description: string;
    value: string;
}
export class arrayRate {
    rates: Array<Rates>
}