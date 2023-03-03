export class Circle {
    radius: number;
    color: string;

    constructor(radius: number = 5, color: string) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    getDienTich(): number {
        return this.radius * this.radius * Math.PI;
    }
}