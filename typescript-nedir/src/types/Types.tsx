export interface TodoInitialState {
    todos: TodoType[];
}

export interface TodoType { 
    id: number;
    text: string;
    isCompleted: boolean;
}