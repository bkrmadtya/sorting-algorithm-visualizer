import Bar from 'src/utils/Bar'
import { IAlgorithm } from 'src/utils/interface'
import changeStatusOfElement from 'src/utils/changeStatusOfElement'
import swapElements from 'src/utils/swapElements'
import { BarStatus } from 'src/utils/enum'

const { ACTIVE, SORTED, UNSORTED } = BarStatus

export default class QuickSort implements IAlgorithm {
    private steps: Bar[][] = []

    public sort(arr: Bar[]): Bar[][] {
        this.steps = [[...arr], [...arr]]

        const sorted = this.quickSort(this.steps[1], 0, arr.length - 1)

        return this.steps
    }


    private quickSort(items: Bar[], left: number, right: number) {
        let index;

        if (items.length > 1) {
            index = this.partition(items, left, right)
            if (left < index - 1) {
                this.quickSort(items, left, index - 1)
            }
            if (index < right) {
                this.quickSort(items, index, right)
            }
        }
        return items;
    }

    private partition(items: Bar[], left: number, right: number): number {
        const pivot = items[Math.floor((right + left) / 2)]

        while (left <= right) {
            while (items[left].value < pivot.value) {
                left++;
            }
            while (items[right].value > pivot.value) {
                right--;
            }
            if (left <= right) {
                swapElements(items, items[left], items[right])
                left++;
                right--;
            }
        }
        return left
    }
}

