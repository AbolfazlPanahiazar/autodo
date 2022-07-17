import { Todo } from "./todo";

export class App {
  public message: string = "Hello World!";
  public todo: Todo;

  constructor() {
    this.todo = new Todo("Clean my room.");
  }
}
