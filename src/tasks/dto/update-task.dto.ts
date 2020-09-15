import { TaskStatus } from '../task-status.enum';

export class UpdateTaskDto {
  id: string;
  title: string;
  desc: string;
  status: TaskStatus;
}
