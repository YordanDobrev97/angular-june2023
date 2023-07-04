import { Injectable } from '@angular/core';
import { TodoItem } from './types/todoItem'
import { genereteId } from './utils/generated'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoItem[] = []

  constructor() {
  }

  getAll() {
    return this.todos
  }

  add(value: string) {
    this.todos.push({
      id: genereteId(),
      title: value,
      completed: false
    })
  }

  updateTodo(id: number, value: string) {
    const todo = this.todos.find((t) => t.id === id)
    if (todo) {
      todo.title = value
    }
  }

  markTodo(id: number) {
    const currentTodo = this.todos.filter((t) => t.id == id)[0]
    currentTodo.completed = !currentTodo.completed
  }

  delete(id: number) {
    const deleteIndex = this.todos.findIndex((t) => t.id == id)
    this.todos.splice(deleteIndex, 1)
  }
}
