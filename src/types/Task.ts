export enum TaskState {
    Todo = 0,
    InProgress = 1,
    Done = 2
}

export class Task {
    state: TaskState;
    constructor(public id: number, public title: string, public description: string ){
        this.state = TaskState.Todo;
    }

    start(): void{
        this.state = TaskState.InProgress
    }

    complete(): void{
        this.state = TaskState.Done;
    }
}