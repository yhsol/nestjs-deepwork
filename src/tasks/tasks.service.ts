import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  // private tasks: Task[] = [];
  // getTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilter(getTasksFilterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = getTasksFilterDto;
  //   console.log(getTasksFilterDto);
  //   let tasks = this.getTasks();
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       task => task.title.includes(search) || task.desc.includes(search),
  //     );
  //   }
  //   return tasks;
  // }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Tasks with ID: ${id} is not found`);
    }

    return found;
  }
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Tasks with ID(${id}) is not found`);
  //   }
  //   return found;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, desc } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv1(),
  //     title,
  //     desc,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateTaskById(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  // deleteTaskById(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(task => task.id !== found.id);
  // }
}
