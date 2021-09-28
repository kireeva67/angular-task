import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule, MatButtonModule],
})
export class TasksModule {}
