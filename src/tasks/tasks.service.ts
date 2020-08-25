import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // private 지정을 하지 않으면 해당 Service 를 inject 한 컴포넌트에서 해당 값을 변경 가능
  // 여기서 (원래 Service) 에서만 (메서드를 통해) 변경할 수 있도록 private 지정하는 듯.
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }
    if (search) {
      tasks = tasks.filter(
        task => task.title.includes(search) || task.desc.includes(search),
      );
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    // find task in tasks and return task
    // const task: Task = this.tasks.filter(item => item.id === id)[0];
    const task: Task = this.tasks.find(task => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with Id "${id}" not found`);
    }

    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    // parameter 를 활용해서 task 구성

    const { title, desc } = createTaskDto;

    const task: Task = {
      id: uuidv1(),
      title,
      desc,
      status: TaskStatus.OPEN,
    };

    // 생성한 task 를 tasks 에 push
    this.tasks.push(task);
    // task 에 추가 작업을 한 뒤에,
    // 생성한 task 를 리턴
    // 생성한 task 를 리턴함으로써 다시 한번 생성 된 task 를 확인할 수 있음.
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  changeStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
