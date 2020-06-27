import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() getTasksFilterDto: GetTasksFilterDto): Task[] {
    console.log('getTasksFilter: ', getTasksFilterDto);
    if (Object.keys(getTasksFilterDto).length) {
      return this.tasksService.getTasksWithFilter(getTasksFilterDto);
    } else {
      return this.tasksService.getTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/update')
  updateTaskById(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskById(id, status);
  }

  @Delete('/:id')
  deleteTasksById(@Param('id') id: string): void {
    this.tasksService.deleteTaskById(id);
  }
}
