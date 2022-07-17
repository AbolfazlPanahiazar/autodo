import { Todo } from "./todo";

export class App {
  public message: string = "Hello World!";
  public todoList: Todo[] = [];
  public newItem: string = "";

  constructor() {
    this.todoList.push(new Todo("Clean my room"));
    this.todoList.push(new Todo("Take a shower"));
    this.todoList.push(new Todo("Aurelia task"));
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem = "";
  }

  remoteTodo(todo: Todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
