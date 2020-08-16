import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuidv1 } from 'uuid';

@Injectable()
export class TasksService {
  // private 지정을 하지 않으면 해당 Service 를 inject 한 컴포넌트에서 해당 값을 변경 가능
  // 여기서 (원래 Service) 에서만 (메서드를 통해) 변경할 수 있도록 private 지정하는 듯.
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, desc: string): Task {
    // parameter 를 활용해서 task 구성
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
}
