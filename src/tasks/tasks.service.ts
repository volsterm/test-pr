import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateTaskDto, TaskMessage } from './create-task.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class TasksService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskMessage> {
    const task: TaskMessage = {
      id: randomUUID(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      createdAt: new Date(),
    };

    await this.amqpConnection.publish('task_exchange', 'task.create', task);

    return task;
  }
}
