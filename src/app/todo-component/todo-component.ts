import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector:'app-todo',
  templateUrl:'./todo-component.html',
  styleUrls:['./todo-component.scss']
})
export class TodoComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }
}
