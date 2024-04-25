import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(
    private UiService: UiService,
    private router: Router){
    this.subscription = this.UiService
      .onToggle()
      .subscribe(
        (value) => (this.showAddTask = value)
      );
  }

  toggleAddTask(){
    this.UiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
