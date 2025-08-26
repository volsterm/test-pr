# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NestJS TypeScript starter project using pnpm as the package manager. The application runs on port 3000 by default and follows standard NestJS architecture patterns with modules, controllers, and services.

## Essential Commands

**Package Management:**
- `pnpm install` - Install dependencies

**Development:**
- `pnpm run start:dev` - Start development server with hot reload
- `pnpm run start:debug` - Start with debugging enabled
- `pnpm run start` - Start in development mode
- `pnpm run start:prod` - Start in production mode

**Code Quality:**
- `pnpm run lint` - Run ESLint with auto-fix
- `pnpm run format` - Format code with Prettier

**Testing:**
- `pnpm run test` - Run unit tests (Jest, tests in `src/` with `.spec.ts` suffix)
- `pnpm run test:watch` - Run tests in watch mode
- `pnpm run test:e2e` - Run end-to-end tests (tests in `test/` with `.e2e-spec.ts` suffix)
- `pnpm run test:cov` - Run tests with coverage
- `pnpm run test:debug` - Run tests with debugging

**Build:**
- `pnpm run build` - Build the application

## Architecture

**Core Structure:**
- Entry point: `src/main.ts` - Bootstrap application on port 3000
- Root module: `src/app.module.ts` - Main application module
- Root controller: `src/app.controller.ts` - Basic HTTP controller with GET endpoint
- Root service: `src/app.service.ts` - Injectable service providing business logic

**Configuration:**
- TypeScript: Modern ES2023 target with decorators enabled, `nodenext` module resolution
- ESLint: TypeScript ESLint with Prettier integration, some strict rules relaxed
- Prettier: Single quotes, trailing commas enabled
- Testing: Jest for unit tests, Supertest for e2e tests
- Build output: `./dist` directory

**Key Features:**
- Uses `nodenext` module resolution for modern Node.js compatibility
- Decorators enabled for NestJS dependency injection
- Strict null checks enabled but other strict TypeScript features relaxed

## API Testing

- `requests.http` - HTTP client file for testing API endpoints with environment variables

## Development Guidelines

- Use `.cursorrules` for project-specific coding rules and conventions when available