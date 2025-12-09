# 星禧水晶 - Medusa后端服务

## 快速开始

### 1. 安装依赖

```bash
cd backend
npm install
```

### 2. 配置环境变量

复制环境变量模板并配置：

```bash
cp .env.template .env
```

编辑 `.env` 文件，配置数据库和Redis连接信息。

### 3. 运行数据库迁移

确保PostgreSQL和Redis已启动，然后运行：

```bash
npm run migrations
```

### 4. 创建管理员用户

```bash
npx medusa user -e admin@xingxi-crystal.com -p admin123
```

### 5. 启动开发服务器

```bash
npm run dev
```

后端服务将在 `http://localhost:9000` 运行
管理后台将在 `http://localhost:7001` 运行

## 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm start` - 启动生产服务器
- `npm run migrations` - 运行数据库迁移
- `npm run migrations:create` - 创建新的迁移文件
- `npm run seed` - 导入种子数据

## 项目结构

```
backend/
├── src/
│   ├── api/          # 自定义API端点
│   ├── models/       # 数据模型
│   ├── services/     # 业务逻辑服务
│   ├── subscribers/  # 事件订阅者
│   └── migrations/   # 数据库迁移
├── uploads/          # 上传文件存储
├── medusa-config.js  # Medusa配置
├── package.json      # 依赖配置
└── .env             # 环境变量
```

## 环境要求

- Node.js 18+
- PostgreSQL 14+
- Redis 7+

## 配置说明

### 数据库

默认使用PostgreSQL。在 `.env` 中配置：

```env
DATABASE_URL=postgresql://user:password@localhost:5432/medusa_db
```

### Redis

用于缓存和事件总线。在 `.env` 中配置：

```env
REDIS_URL=redis://localhost:6379
```

### 支付网关

支持多种支付方式，在 `.env` 中配置相应的密钥：

- Stripe
- PayPal
- 支付宝
- 微信支付

## API文档

启动服务器后，访问：
- API: `http://localhost:9000`
- 管理后台: `http://localhost:7001`

## 开发指南

详细的开发指南请参考 [`../docs/development.md`](../docs/development.md)

## 故障排除

### 数据库连接失败

确保PostgreSQL正在运行：

```bash
# Windows
net start postgresql-x64-14

# Linux/Mac
sudo service postgresql start
```

### Redis连接失败

确保Redis正在运行：

```bash
# Windows
redis-server

# Linux/Mac
sudo service redis start
```

## 许可证

MIT