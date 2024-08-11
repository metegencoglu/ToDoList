export class Model {
  user;
  items;

  constructor() {
    this.user = 'Mete';
    this.items = [
        new TodoItem("Spor",false),
        new TodoItem("kahvaltı",false),
        new TodoItem("Sinema",true),
        new TodoItem("Spor",false),

    ];
  }
}

export class TodoItem {
  description: string;
  action: boolean;

  constructor(description:string, action:boolean) {
    this.description = description;
    this.action = action;
  }
}
