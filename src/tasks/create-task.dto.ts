export class CreateTaskDto {
  title: string;
  description: string;
}

export interface TaskMessage {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
