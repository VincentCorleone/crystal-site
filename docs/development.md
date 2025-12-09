# 开发指南

## 环境要求

### 必需软件

- **Node.js**: 18.x 或更高版本
- **npm**: 9.x 或更高版本（或 yarn/pnpm）
- **PostgreSQL**: 14.x 或更高版本
- **Redis**: 7.x 或更高版本

### 推荐工具

- **Git**: 版本控制
- **VS Code**: 代码编辑器
- **Postman**: API测试
- **pgAdmin**: PostgreSQL管理工具

## 本地开发设置

### 1. 克隆项目

```bash
git clone <repository-url>
cd crystal-site
```

### 2. 安装后端依赖

```bash
cd backend
npm install
```

### 3. 配置后端环境变量

创建 `backend/.env` 文件：

```env
# 数据库配置
DATABASE_URL=postgresql://postgres:password@localhost:5432/medusa_db

# Redis配置
REDIS_URL=redis://localhost:6379

# JWT密钥
JWT_SECRET=your-jwt-secret-key

# Cookie密钥
COOKIE_SECRET=your-cookie-secret-key

# 后端URL
BACKEND_URL=http://localhost:9000

# 前端URL（用于CORS）
STORE_CORS=http://localhost:3000

# 管理后台URL
ADMIN_CORS=http://localhost:7001
```

### 4. 运行数据库迁移

```bash
cd backend
npx medusa migrations run
```

### 5. 创建管理员用户

```bash
npx medusa user -e admin@xingxi.com -p admin123
```

### 6. 启动后端服务

```bash
npm run dev
```

后端将在 `http://localhost:9000` 运行

### 7. 安装前端依赖

```bash
cd ../storefront
npm install
```

### 8. 配置前端环境变量

创建 `storefront/.env.local` 文件：

```env
# Medusa后端URL
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000

# 基础URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# 默认区域
NEXT_PUBLIC_DEFAULT_REGION=cn

# 支付配置（开发环境）
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
```

### 9. 启动前端服务

```bash
npm run dev
```

前端将在 `http://localhost:3000` 运行

## 开发工作流

### 后端开发

#### 创建新的API端点

1. 在 `backend/src/api/` 创建路由文件
2. 定义路由处理器
3. 添加必要的验证和权限检查

示例：
```typescript
// backend/src/api/custom/route.ts
import { Router } from "express"

export default (router: Router) => {
  router.get("/custom/hello", (req, res) => {
    res.json({ message: "Hello from custom API" })
  })
}
```

#### 创建自定义服务

1. 在 `backend/src/services/` 创建服务文件
2. 继承 `TransactionBaseService`
3. 实现业务逻辑

#### 数据库迁移

```bash
# 创建新迁移
npx medusa migrations create AddCustomField

# 运行迁移
npx medusa migrations run

# 回滚迁移
npx medusa migrations revert
```

### 前端开发

#### 创建新页面

1. 在 `storefront/src/app/[locale]/` 创建页面目录
2. 添加 `page.tsx` 文件
3. 实现页面组件

示例：
```typescript
// storefront/src/app/[locale]/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>关于星禧水晶</h1>
    </div>
  )
}
```

#### 创建组件

1. 在 `storefront/src/components/` 创建组件文件
2. 使用 TypeScript 定义 props
3. 实现组件逻辑

#### 添加翻译

1. 在 `storefront/src/i18n/locales/zh-CN/` 添加翻译键
2. 在 `storefront/src/i18n/locales/en-US/` 添加对应翻译
3. 在组件中使用 `useTranslations` hook

## 常用命令

### 后端

```bash
# 开发模式
npm run dev

# 构建
npm run build

# 生产模式
npm start

# 运行迁移
npx medusa migrations run

# 创建管理员
npx medusa user -e email@example.com -p password

# 数据库种子
npm run seed
```

### 前端

```bash
# 开发模式
npm run dev

# 构建
npm run build

# 生产模式
npm start

# 类型检查
npm run type-check

# Lint检查
npm run lint
```

## 调试技巧

### 后端调试

1. 使用 `console.log` 或 `logger.info()`
2. 在 VS Code 中配置调试器
3. 使用 Postman 测试 API

### 前端调试

1. 使用 React DevTools
2. 使用浏览器开发者工具
3. 检查 Network 标签查看 API 请求

## 代码规范

### TypeScript

- 使用严格模式
- 为所有函数和变量添加类型
- 避免使用 `any` 类型

### 命名规范

- 组件：PascalCase (例: `ProductCard`)
- 函数：camelCase (例: `fetchProducts`)
- 常量：UPPER_SNAKE_CASE (例: `API_URL`)
- 文件：kebab-case (例: `product-card.tsx`)

### 组件结构

```typescript
// 1. Imports
import { useState } from 'react'

// 2. Types
interface Props {
  title: string
}

// 3. Component
export default function MyComponent({ title }: Props) {
  // 4. Hooks
  const [state, setState] = useState()
  
  // 5. Functions
  const handleClick = () => {}
  
  // 6. Render
  return <div>{title}</div>
}
```

## 测试

### 单元测试

```bash
# 运行测试
npm test

# 测试覆盖率
npm run test:coverage
```

### E2E测试

```bash
# 运行 Playwright 测试
npm run test:e2e
```

## 性能优化

### 前端优化

- 使用 Next.js Image 组件优化图片
- 实现代码分割和懒加载
- 使用 React.memo 避免不必要的重渲染
- 优化 bundle 大小

### 后端优化

- 使用 Redis 缓存
- 优化数据库查询
- 实现分页
- 使用索引

## 常见问题

### 数据库连接失败

检查 PostgreSQL 是否运行：
```bash
# Windows
net start postgresql-x64-14

# Linux/Mac
sudo service postgresql start
```

### Redis 连接失败

检查 Redis 是否运行：
```bash
# Windows
redis-server

# Linux/Mac
sudo service redis start
```

### 端口被占用

更改端口配置或停止占用端口的进程

## 资源链接

- [Medusa 文档](https://docs.medusajs.com)
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs)

## 获取帮助

- 查看项目文档
- 搜索 GitHub Issues
- 联系团队成员