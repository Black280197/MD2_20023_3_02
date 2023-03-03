import {Circle} from "./Circle";

export class Cylinder extends Circle {
    hight: number;

    constructor(radius: number, color: string, hight: number) {
        super(radius, color);
        this.hight = hight;
    }

    getTheTich(): number {
        return super.getDienTich() * this.hight;
    }


}