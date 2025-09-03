# Todolist Server (Nitro + TypeScript)

一个基于 Nitro 的 TypeScript 服务器，使用 Drizzle ORM + PostgreSQL 与 Zod 做输入校验。提供待办项（todos）的 REST API。

## 快速开始
- 安装依赖：`pnpm i`
- 启动数据库（Docker）：`docker-compose up -d`
- 配置环境变量：在 `.env` 设置 `NITRO_DATABASE_URL`（Nitro 会映射到 `runtimeConfig.databaseUrl`）。示例：
  `NITRO_DATABASE_URL=postgres://todolist:123123@localhost:5432/todolist`
- 推送数据库结构：`pnpm db:push`
- 启动开发：`pnpm dev` 打开 `http://localhost:3000`
- 验证：`curl http://localhost:3000/api/todos`

## 脚本命令
- `pnpm dev`：开发服务器（HMR）
- `pnpm build`：构建到 `.output/`
- `pnpm preview`：运行构建产物
- `pnpm lint`：Oxlint 类型感知检查并修复
- `pnpm format`：Prettier 格式化
- `pnpm db:push`：根据 `server/db/schema.ts` 同步数据库
- `pnpm db:studio`：打开 Drizzle Studio

## API 示例
- 列表：`GET /api/todos`
- 创建：`POST /api/todos`，JSON：`{"title":"TODO 1","description":"..."}`
- 获取：`GET /api/todos/:id`
- 更新：`PUT /api/todos/:id`，JSON 可选字段：`title`、`description`、`completed`
- 删除：`DELETE /api/todos/:id`

可以参考 `api.http` 直接在 REST Client 中调用。

## 项目结构
- `server/api/`：路由处理（文件式路由，如 `todos/index.get.ts`、`[id].put.ts`）
- `server/db/`：Drizzle 表结构（`schema.ts`）
- `server/utils/`：通用工具（`db.ts` 暴露数据库实例）
- `nitro.config.ts`：Nitro 配置（`runtimeConfig.databaseUrl`）
- `.env`：本地配置（不要提交敏感信息）

## Docker 快速启动
```bash
docker-compose up -d
```

## 代码风格与约定
- TypeScript + ESM；变量/函数 camelCase，类型 PascalCase，目录/文件 kebab-case
- Prettier：tab 缩进、单引号、无分号、print width 100
- 在处理器中使用 Zod 校验输入；外部 I/O 封装到 `server/utils/`
