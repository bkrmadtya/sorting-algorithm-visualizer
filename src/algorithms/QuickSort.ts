import { IAlgorithm, changeStatusOfElement, swapElements, Bar, BarStatus, Steps } from '../utils'

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
        changeStatusOfElement(this.steps.getSteps(), pivot, PIVOT)

        while (left <= right) {
            changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
            changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)

            while (items[left].value < pivot.value) {
                this.makePreviousEleUnsorted(items[left - 1], initialLeft, left)

                changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
                this.steps.addStep()
                left++;
            }

            while (items[right].value > pivot.value) {
                this.makePreviousEleUnsorted(items[right + 1], initialRight, right)

                changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)
                this.steps.addStep()
                right--;
            }

            if (left <= right) {
                this.makePreviousEleUnsorted(items[left - 1], initialLeft, left)
                this.makePreviousEleUnsorted(items[right + 1], initialRight, right)

                changeStatusOfElement(this.steps.getSteps(), items[left], ACTIVE)
                changeStatusOfElement(this.steps.getSteps(), items[right], ACTIVE)

                items = this.steps.getLastStep()
                items = swapElements([...this.steps.getLastStep()], this.steps.getLastStep()[left], this.steps.getLastStep()[right])
                this.steps.addStep(items)
                this.steps.addStep()

                left++;
                right--;
            }

            /**
             * Make element status 'SORTED'
             * @conditions
             * - If the sub array under partition has length 2 or less
             * - And the left and right pointer is not out of array index bound
             * - And left pointer is greater than right pointer then the element is SORTED
             * 
             */

            if (initialRight - initialLeft <= 2 && this.ifIndicesAreOutOfBound(left, right) && left > right) {
                changeStatusOfElement(this.steps.getSteps(), items[left], SORTED)
                changeStatusOfElement(this.steps.getSteps(), items[right], SORTED)
            } else {
                this.makePreviousEleUnsorted(items[left - 1], initialLeft, left)
                this.makePreviousEleUnsorted(items[right + 1], initialRight, right)
            }
        }

        /**
         * Make pivot status SORTED
         * @condition
         * - If the sub array under partition has length 2 or less then the pivot after the loop will be sorted
         */
        this.steps.addStep()
        if ((initialRight - initialLeft) <= 3) {
            changeStatusOfElement(this.steps.getSteps(), pivot, SORTED)
        } else {
            changeStatusOfElement(this.steps.getSteps(), pivot, UNSORTED)
        }
        // return left
        return Math.max(left, right)
    }

    private makePreviousEleUnsorted(ele: Bar, initialIndex: number, currentIndex: number): void {
        // if the element is the first element there is no previous element
        if (initialIndex !== currentIndex) {
            changeStatusOfElement(this.steps.getSteps(), ele, UNSORTED)
        }
    }

    private ifIndicesAreOutOfBound(left: number, right: number): boolean {
        return (left >= 0 && left < this.steps.getLastStep().length) && (right >= 0 && right < this.steps.getLastStep().length)
    }
}
