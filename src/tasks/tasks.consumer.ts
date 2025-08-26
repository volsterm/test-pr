import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import type { TaskMessage } from './create-task.dto';

@Injectable()
export class TasksConsumer {
  @RabbitSubscribe({
    exchange: 'task_exchange',
    routingKey: 'task.create',
    queue: 'task_queue',
  })
  public handleTask(task: TaskMessage) {
    console.log('=== ЗАДАЧА ПОЛУЧЕНА ===');
    console.log(`ID: ${task.id}`);
    console.log(`Название: ${task.title}`);
    console.log(`Описание: ${task.description}`);
    console.log(`Создана: ${String(task.createdAt)}`);
    console.log('======================');
  }
}
