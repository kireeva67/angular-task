import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponentComponent } from 'src/app/components/tasks-component/tasks-component.component';

@NgModule({
  declarations: [TasksComponent, TasksComponentComponent],
  imports: [CommonModule, TasksRoutingModule, MatButtonModule, SharedModule],
})
export class TasksModule {}
