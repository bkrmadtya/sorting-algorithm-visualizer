import Bar from 'src/utils/Bar'
import { IAlgorithm } from 'src/utils/interface'
import changeStatusOfElement from 'src/utils/changeStatusOfElement'
import swapElements from 'src/utils/swapElements'
import { BarStatus } from 'src/utils/enum'

const { ACTIVE, SORTED, UNSORTED, PIVOT } = BarStatus

export default class QuickSort implements IAlgorithm {
    private steps: Bar[][] = []

    public sort(arr: Bar[]): Bar[][] {
        this.steps = [[...arr], [...arr]]

        this.quickSort(this.steps[1], 0, arr.length - 1)

        return this.steps
    }


    private quickSort(items: Bar[], left: number, right: number) {
        let index;

        if (items.length > 1) {
            index = this.partition(items, left, right)
            if (left < index - 1) {
                console.log('UP ::')
                this.quickSort(items, left, index - 1)
            }
            if (index < right) {
                console.log('DOWN ::')
                this.quickSort(items, index, right)
            }
        }
        return items;
    }

    private partition(items: Bar[], left: number, right: number): number {
        const pivot = items[Math.floor((right + left) / 2)]

        changeStatusOfElement(this.steps, pivot, PIVOT)
        changeStatusOfElement(this.steps, items[left], ACTIVE)
        changeStatusOfElement(this.steps, items[right], ACTIVE)
        this.pushNewStep()

        while (left <= right) {
            while (items[left].value < pivot.value && left < this.steps[0].length - 1) {
                // console.log({ items, left, leftItem: items[left], pivot })
                changeStatusOfElement(this.steps, items[left], UNSORTED)
                changeStatusOfElement(this.steps, items[left + 1], ACTIVE)
                this.pushNewStep()
                left++;
                // console.log({ left })
            }
            while (items[right].value > pivot.value && right > 0) {
                // console.log({ items, right, rightItem: items[right], pivot })
                changeStatusOfElement(this.steps, items[right], UNSORTED)
                changeStatusOfElement(this.steps, items[right - 1], ACTIVE)
                this.pushNewStep()
                right--;
                // console.log({ right })
            }

            if (left <= right) {
                swapElements(this.getLastStep(), items[left], items[right])
                this.pushNewStep()
                left++;
                right--;
            }
        }

        // console.log("STEPSS :: ",this.getLastStep())
        changeStatusOfElement(this.steps, pivot, SORTED)

        return left
    }

    private pushNewStep() {
        this.steps.push([...this.getLastStep()])
    }

    private getLastStep() {
        const length = this.steps.length
        return this.steps[length - 1]
    }
}



