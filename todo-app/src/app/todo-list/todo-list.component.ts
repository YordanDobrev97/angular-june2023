import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TodoService } from '../todo.service'
import { TodoItem } from '../types/todoItem'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  list: TodoItem[] = []
  populShow: boolean = false
  @Output() edit = new EventEmitter<number>()
  editId: number = 0

  constructor(private todoService: TodoService) {
    const todos = todoService.getAll()
    this.list = todos
  }

  markAsCompleted(id: number) {
    this.todoService.markTodo(id)
  }

  showEdit(id: number) {
    if (!this.populShow) {
      this.populShow = !this.populShow
      this.editId = id
      this.edit.emit(this.editId)
    }
  }

  deleteTodo(id: number) {
    this.todoService.delete(id)
  }
}
