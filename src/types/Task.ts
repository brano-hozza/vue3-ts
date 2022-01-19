export enum TaskState {
    ACTIVE = 0,
    COMPLETE = 1,
}

export class Task {
    state: TaskState;
    constructor(public id: number, public title: string, public description: string ){
        this.state = TaskState.ACTIVE;
    }

    complete(): void{
        this.state = TaskState.COMPLETE;
    }
}