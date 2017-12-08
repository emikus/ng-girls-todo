import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input" 
      [value]="title"
           (keyup.enter)="submitValue($event.target.value)"
           #inputElement>

    <button class="btn btn-red" (click)="submitValue(inputElement.value)">
      Save
    </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';

  constructor() { }

  ngOnInit() {
  }

  @Output() submit: EventEmitter<string> = new EventEmitter();

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
