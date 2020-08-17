import { TaskStatus } from '../task.model';

export class UpdateTaskDto {
  id: string;
  title: string;
  desc: string;
  status: TaskStatus;
}
