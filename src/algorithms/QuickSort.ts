import Bar from 'src/utils/Bar'
import { IAlgorithm } from 'src/utils/interface'
import changeStatusOfElement from 'src/utils/changeStatusOfElement'
import swapElements from 'src/utils/swapElements'
import { BarStatus } from 'src/utils/enum'
import Steps from 'src/utils/Steps'

const { ACTIVE, SORTED, UNSORTED, PIVOT } = BarStatus

export default class QuickSort implements IAlgorithm {
    private steps!: Steps

    public sort(arr: Bar[]): Bar[][] {
        this.steps = new Steps(arr)
        this.quickSort(this.steps.getLastStep(), 0, arr.length - 1)
        return this.steps.getSteps()
    }

    private quickSort(items: Bar[], left: number, right: number) {
        let index;
        if (left < right) {
            index = this.partition(this.steps.getLastStep(), left, right)
            this.quickSort(this.steps.getLastStep(), left, index - 1)
            this.quickSort(this.steps.getLastStep(), index, right)
        }
        return items;
    }

    private partition(items: Bar[], left: number, right: number): number {
        const initialLeft = left;
        const initialRight = right;
        const pivot = items[Math.floor((right + left) / 2)]
        changeStatusOfElement(this.steps.getSteps(), pivot, BarStatus.PIVOT)

        // this.printUpToThirdStep(left, right, "AFTER PIVOT")

        while (left <= right) {
            // changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
            // changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)

            while (items[left].value < pivot.value) {
                if (initialLeft !== left) {
                    changeStatusOfElement(this.steps.getSteps(), items[left - 1], UNSORTED)
                }
                changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
                this.steps.addStep()
                left++;
            }

            while (items[right].value > pivot.value) {
                if (initialRight !== right) {
                    changeStatusOfElement(this.steps.getSteps(), items[right + 1], UNSORTED)
                }
                changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)
                this.steps.addStep()
                right--;
            }

            if (left <= right) {
                if (initialLeft !== left) {
                    changeStatusOfElement(this.steps.getSteps(), items[left - 1], UNSORTED)
                }
                if (initialRight !== right) {
                    changeStatusOfElement(this.steps.getSteps(), items[right + 1], UNSORTED)
                }
                changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
                changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)
                items = swapElements([...this.steps.getLastStep()], items[left], items[right])
                this.steps.addStep(items)
                this.steps.addStep()
                if (Math.abs(initialRight - initialLeft) <= 2) {
                    changeStatusOfElement(this.steps.getSteps(), items[left], SORTED)
                    changeStatusOfElement(this.steps.getSteps(), items[right], SORTED)
                    changeStatusOfElement(this.steps.getSteps(), pivot, SORTED)
                }

                left++;
                right--;
            }
        }

        return Math.max(left, right)
    }


    private printUpToThirdStep(left: number, right: number, message: string) {
        if (left <= 3 && right <= 9) {
            console.log({ message, left, right, steps: this.steps.getLastStep() })
        }
    }

    // private getPreviousRight(pivot: Bar){
    //     this.steps.getLastStep().find()
    // }

}
