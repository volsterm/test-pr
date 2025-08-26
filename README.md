# Test PR - NestJS Application

This is a test project demonstrating NestJS with PostgreSQL, GraphQL, and RabbitMQ integration.

## Description

A comprehensive NestJS application featuring REST API, GraphQL API, database integration with TypeORM, and asynchronous task processing with RabbitMQ.

## Features

- **NestJS Framework** with TypeScript
- **PostgreSQL** database integration with TypeORM
- **GraphQL API** with Apollo Server
- **REST API** endpoints
- **RabbitMQ Integration** for task queue processing
- **User Management System** with CRUD operations
- **Task Queue System** with producer/consumer pattern
- **Environment Configuration**
- **Code Quality Tools** (ESLint, Prettier)

## Installation

```bash
pnpm install
```

## Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp .env.example .env
```

Configure the following environment variables:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=test_db

# RabbitMQ Configuration
RABBITMQ_URL=amqp://localhost:5672
```

## Prerequisites

### PostgreSQL Setup
Make sure you have PostgreSQL running and create a database:

```sql
CREATE DATABASE test_db;
```

### RabbitMQ Setup
Install and start RabbitMQ server:

```bash
# Docker
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4-management
```

RabbitMQ Management UI will be available at: `http://localhost:15672` (guest/guest)

## Running the app

```bash
# development with hot reload
pnpm run start:dev

# development
pnpm run start

# production mode
pnpm run start:prod
```

## API Endpoints

### REST API
- `GET /` - Hello World endpoint
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `POST /tasks` - Create a new task (publishes to RabbitMQ queue)

### GraphQL API
- Endpoint: `/graphql`
- Playground available at: `http://localhost:3000/graphql`

### RabbitMQ Task Queue
Tasks created via `POST /tasks` are automatically:
1. Published to `task_exchange` with routing key `task.create`
2. Consumed from `task_queue` by the consumer
3. Processed by printing task details to console

### Sample Requests

Use the `requests.http` file to test all API endpoints including RabbitMQ task examples:
- User management (REST & GraphQL)
- Task creation and queue processing
- Various request patterns

## Testing

```bash
# unit tests
pnpm run test

# watch mode
pnpm run test:watch

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## Code Quality

```bash
# run linter with auto-fix
pnpm run lint

# format code
pnpm run format

# build project
pnpm run build
```

## Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **GraphQL:** Apollo Server
- **Message Queue:** RabbitMQ (@golevelup/nestjs-rabbitmq)
- **Package Manager:** pnpm
- **Code Quality:** ESLint, Prettier
- **Testing:** Jest, Supertest

## Project Structure

```
src/
├── app.controller.ts       # Main application controller
├── app.module.ts           # Root application module
├── app.service.ts          # Main application service
├── main.ts                 # Application entry point
├── tasks/                  # Task queue module
│   ├── create-task.dto.ts  # Task data transfer objects
│   ├── tasks.controller.ts # Task REST endpoints
│   ├── tasks.consumer.ts   # RabbitMQ message consumer
│   ├── tasks.module.ts     # Task module configuration
│   └── tasks.service.ts    # Task producer service
└── users/                  # User management module
    ├── dto/
    │   └── create-user.input.ts
    ├── user.entity.ts
    ├── users.controller.ts
    ├── users.module.ts
    ├── users.resolver.ts
    └── users.service.ts
```

## RabbitMQ Architecture

The application implements a **Producer/Consumer** pattern:

### Producer Flow
1. Client sends `POST /tasks` with task data
2. `TasksService` creates task with unique ID and timestamp
3. Task is published to `task_exchange` with routing key `task.create`
4. Response is returned to client immediately

### Consumer Flow
1. `TasksConsumer` listens to `task_queue`
2. When task is received, it processes by logging task details
3. Task is automatically acknowledged after successful processing

### Queue Configuration
- **Exchange:** `task_exchange` (topic)
- **Queue:** `task_queue`
- **Routing Key:** `task.create`

## Development Guidelines

- Follow existing code style and patterns
- Use TypeScript strict mode
- Write tests for new features
- Use meaningful commit messages
- Update documentation when adding new features
- Ensure RabbitMQ is running for full functionality

## Monitoring

- **Application:** `http://localhost:3000`
- **GraphQL Playground:** `http://localhost:3000/graphql`
- **RabbitMQ Management:** `http://localhost:15672` (guest/guest)

## License

This project is licensed under the UNLICENSED license.