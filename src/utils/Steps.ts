import Bar from "./Bar"


export default class Steps {
    private steps: Bar[][]

    constructor(initialArray: Bar[]) {
        // 1st as initial which should not change 
        // and 2nd as last element which will be changed first
        this.steps = [[...initialArray], [...initialArray]]
    }

    public addStep(newSteps?: Bar[]): Bar[] {
        this.steps = [...this.steps, [... (newSteps || this.getLastStep())]]
        return this.getLastStep()
    }

    public getLastStep(): Bar[] {
        return this.steps[this.steps.length - 1]
    }

    public getLength(): number {
        return this.steps.length
    }

    public getSteps(): Bar[][] {
        return this.steps
    }
}
