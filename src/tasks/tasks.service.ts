import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  // private 지정을 하지 않으면 해당 Service 를 inject 한 컴포넌트에서 해당 값을 변경 가능
  // 여기서 (원래 Service) 에서만 (메서드를 통해) 변경할 수 있도록 private 지정하는 듯.
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
