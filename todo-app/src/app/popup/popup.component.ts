import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(
    private todoListComponent: TodoListComponent,
    private todoService: TodoService
  ){
  }

  updateTodo(value: HTMLInputElement) {
    const id = this.todoListComponent.editId
    this.todoService.updateTodo(id, value.value)
  }

  closePopup() {
    this.todoListComponent.populShow = false
  }
}
