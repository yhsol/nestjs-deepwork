import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(
  //   @Query(ValidationPipe) getTasksFilterDto: GetTasksFilterDto,
  // ): Task[] {
  //   console.log('getTasksFilter: ', getTasksFilterDto);
  //   if (Object.keys(getTasksFilterDto).length) {
  //     return this.tasksService.getTasksWithFilter(getTasksFilterDto);
  //   } else {
  //     return this.tasksService.getTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Patch('/:id/update')
  // updateTaskById(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  // ): Task {
  //   return this.tasksService.updateTaskById(id, status);
  // }

  // @Delete('/:id')
  // deleteTasksById(@Param('id') id: string): void {
  //   this.tasksService.deleteTaskById(id);
  // }
}
