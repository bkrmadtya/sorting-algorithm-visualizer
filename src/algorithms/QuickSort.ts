import Bar from 'src/utils/Bar'
import { IAlgorithm } from 'src/utils/interface'
import changeStatusOfElement from 'src/utils/changeStatusOfElement'
import swapElements from 'src/utils/swapElements'
import { BarStatus } from 'src/utils/enum'
import Steps from 'src/utils/Steps'

const { ACTIVE, SORTED, UNSORTED } = BarStatus

export default class QuickSort implements IAlgorithm {
    private steps!: Steps

    public sort(arr: Bar[]): Bar[][] {
        this.steps = new Steps(arr)
        this.quickSort(this.steps.getLastStep(), 0, arr.length - 1)
        return this.steps.getSteps()
    }

    private quickSort(items: Bar[], left: number, right: number) {
        let index;
        if (items.length > 1) {
            index = this.partition(this.steps.getLastStep(), left, right)
            if (left < index - 1) {
                this.quickSort(this.steps.getLastStep(), left, index - 1)
            }
            if (index < right) {
                this.quickSort(this.steps.getLastStep(), index, right)
            }
        }
        return items;
    }

    private partition(items: Bar[], left: number, right: number): number {
        const pivot = items[Math.floor((right + left) / 2)]
        changeStatusOfElement(this.steps.getSteps(), pivot, BarStatus.PIVOT)
        this.steps.addStep()

        while (left <= right) {
            while (items[left].value < pivot.value) {
                changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
                this.steps.addStep()
                left++;
                changeStatusOfElement(this.steps.getSteps(), items[left - 1], UNSORTED)
            }
            while (items[right].value > pivot.value) {
                changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)
                this.steps.addStep()
                right--;
                changeStatusOfElement(this.steps.getSteps(), items[right + 1], UNSORTED)
            }
            if (left <= right) {
                changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
                changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)
                this.steps.addStep()
                if (left !== right) {
                    items = swapElements(items, items[left], items[right])
                    // changeStatusOfElement(this.steps.getSteps(), items[left], UNSORTED)
                    // changeStatusOfElement(this.steps.getSteps(), items[right], UNSORTED)
                    this.steps.addStep(items)
                }
                left++;
                right--;
            }
        }



        return left
    }

}

