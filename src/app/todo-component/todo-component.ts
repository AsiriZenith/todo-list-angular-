import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-component.html',
  styleUrls: ['./todo-component.scss'],
})
export class TodoComponent implements OnInit {
  todoDetails: any[] = [];

  ngOnInit(): void {
    this.getTodoDetails();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private TodoService: TodoService
  ) {}

  getTodoDetails() {
    this.TodoService.getTodoDetails().subscribe((data) => {
      debugger;
    });
  }
}
