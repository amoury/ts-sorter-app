import {Sortable} from "./Sorter";

class NumbersCollection implements Sortable {
    constructor(public data: number[]) {}

    get length(): number {
        return this.data.length;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }

    compare(leftIndex: number, rightIndex: number) : boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
}

export default NumbersCollection;