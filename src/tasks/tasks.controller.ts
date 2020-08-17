import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  // post 요청의 body 값을 가져오기 위해 @Body 사용
  createTask(@Body() body: Task): Task {
    const { title, desc } = body;
    return this.tasksService.createTask(title, desc);
  }
}
