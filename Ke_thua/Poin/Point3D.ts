import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private _z: number;

    constructor(z:number, _x: number, _y: number) {
        super(_x,_y);
        this._z = z;
    }


    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }

    getXYZ(): object {
        return {x: this.x, y: this.y, z: this.z};
    }

    setXYZ(x: number, y: number, z: number): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}