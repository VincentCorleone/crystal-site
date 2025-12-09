# 安装说明

## 依赖版本问题修复

由于Medusa v2目前还不稳定，我们已将项目降级到稳定的Medusa v1.20版本。

## 安装步骤

### 1. 清理之前的安装（如果有）

```bash
cd backend
rm -rf node_modules package-lock.json
```

### 2. 安装依赖

```bash
npm install
```

如果仍然遇到依赖冲突，可以使用：

```bash
npm install --legacy-peer-deps
```

### 3. 配置环境变量

```bash
cp .env.template .env
```

编辑 `.env` 文件，配置以下内容：

```env
DATABASE_URL=postgresql://postgres:your-password@localhost:5432/medusa_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-jwt-key
COOKIE_SECRET=your-super-secret-cookie-key
```

### 4. 确保数据库和Redis运行

**PostgreSQL:**
```bash
# Windows
net start postgresql-x64-14

# Linux/Mac
sudo service postgresql start
```

**Redis:**
```bash
# Windows
redis-server

# Linux/Mac  
sudo service redis start
```

### 5. 创建数据库

```bash
# 使用psql创建数据库
psql -U postgres
CREATE DATABASE medusa_db;
\q
```

### 6. 运行数据库迁移

```bash
npm run migrations
```

### 7. 创建管理员用户

```bash
npx medusa user -e admin@xingxi-crystal.com -p admin123
```

### 8. 启动开发服务器

```bash
npm run dev
```

服务将在以下地址运行：
- 后端API: http://localhost:9000
- 管理后台: http://localhost:7001

## 版本信息

当前使用的版本：
- @medusajs/medusa: ^1.20.0
- @medusajs/admin: ^7.1.0
- @medusajs/cache-redis: ^1.9.0
- @medusajs/event-bus-redis: ^1.8.0
- @medusajs/file-local: ^1.0.0

## 常见问题

### Q: 为什么不使用Medusa v2？

A: Medusa v2目前还在开发中，admin包与核心包存在版本不兼容问题。v1.20是当前最稳定的生产版本。

### Q: 如何升级到v2？

A: 等Medusa v2正式发布稳定版后，我们会提供升级指南。

### Q: 遇到端口被占用怎么办？

A: 在 `.env` 中修改端口：
```env
PORT=9001
ADMIN_PORT=7002
```

## 获取帮助

如果遇到问题，请查看：
- [Medusa文档](https://docs.medusajs.com)
- [GitHub Issues](https://github.com/medusajs/medusa/issues)
- 项目的 `README.md` 和 `docs/development.md`