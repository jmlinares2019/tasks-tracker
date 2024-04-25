import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private taskService: TaskService, private UiService: UiService ){
    /* this.subscription = this.UiService
      .onToggle()
      .subscribe(
        (value) => this.showAddTask = value
      ); */
  }

  ngOnInit(): void{
    this.taskService
      .getTasks()
      .subscribe(
        (tasks) => this.tasks = tasks
      );
  }

  addTask(task: Task){
    this.taskService
      .addTask(task)
      .subscribe(
        (task) => (this.tasks.push(task))
      );
  }

  deleteTask(task: Task){
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService
      .updateTaskReminder(task)
      .subscribe();
  }

}
