import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private todoService: TodoService) {
  }
  
  addTodo(input: HTMLInputElement) {
    this.todoService.add(input.value)
    input.value = ''
  }
}
