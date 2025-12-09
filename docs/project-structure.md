# 项目结构说明

## 目录结构

```
crystal-site/
│
├── backend/                    # Medusa后端服务
│   ├── src/
│   │   ├── api/               # API路由
│   │   ├── models/            # 数据模型
│   │   ├── services/          # 业务逻辑服务
│   │   ├── subscribers/       # 事件订阅者
│   │   └── migrations/        # 数据库迁移
│   ├── uploads/               # 上传文件存储
│   ├── medusa-config.js       # Medusa配置
│   ├── package.json
│   └── .env                   # 环境变量
│
├── storefront/                # Next.js前端应用
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   │   ├── [locale]/    # 国际化路由
│   │   │   │   ├── page.tsx          # 首页
│   │   │   │   ├── products/         # 产品页面
│   │   │   │   ├── cart/             # 购物车
│   │   │   │   ├── checkout/         # 结账
│   │   │   │   ├── account/          # 用户账户
│   │   │   │   └── about/            # 关于我们
│   │   │   └── api/          # API路由
│   │   ├── components/       # React组件
│   │   │   ├── common/       # 通用组件
│   │   │   ├── product/      # 产品相关组件
│   │   │   ├── cart/         # 购物车组件
│   │   │   └── layout/       # 布局组件
│   │   ├── lib/              # 工具库
│   │   │   ├── data/         # 数据获取
│   │   │   ├── util/         # 工具函数
│   │   │   └── hooks/        # 自定义Hooks
│   │   ├── styles/           # 样式文件
│   │   ├── types/            # TypeScript类型
│   │   └── i18n/             # 国际化配置
│   │       ├── locales/
│   │       │   ├── zh-CN/    # 中文翻译
│   │       │   └── en-US/    # 英文翻译
│   │       └── config.ts
│   ├── public/               # 静态资源
│   │   ├── images/
│   │   └── icons/
│   ├── next.config.js        # Next.js配置
│   ├── tailwind.config.js    # Tailwind配置
│   ├── package.json
│   └── .env.local            # 本地环境变量
│
├── docs/                      # 项目文档
│   ├── project-structure.md  # 项目结构说明
│   ├── api-documentation.md  # API文档
│   ├── deployment.md         # 部署指南
│   └── development.md        # 开发指南
│
├── .gitignore                # Git忽略文件
├── README.md                 # 项目说明
└── project-plan.md           # 项目规划

```

## 主要目录说明

### Backend (Medusa后端)

- **src/api**: 自定义API端点
- **src/models**: 数据库模型定义
- **src/services**: 业务逻辑服务层
- **src/subscribers**: 事件监听和处理
- **src/migrations**: 数据库迁移脚本
- **uploads**: 产品图片等上传文件

### Storefront (Next.js前端)

- **src/app**: Next.js 14 App Router页面
- **src/components**: 可复用的React组件
- **src/lib**: 工具函数和数据获取逻辑
- **src/i18n**: 国际化配置和翻译文件
- **public**: 静态资源（图片、图标等）

### Docs (文档)

- 项目相关的所有文档和指南

## 关键文件说明

### 后端配置文件

- **medusa-config.js**: Medusa核心配置
- **.env**: 环境变量（数据库、Redis、支付等）
- **package.json**: 依赖和脚本

### 前端配置文件

- **next.config.js**: Next.js配置（国际化、图片优化等）
- **tailwind.config.js**: Tailwind CSS配置
- **.env.local**: 前端环境变量
- **package.json**: 依赖和脚本

## 数据流

```
用户请求 → Next.js前端 → Medusa API → 数据库/Redis
                ↓
            支付网关 (PayPal/支付宝/微信)
```

## 开发工作流

1. 后端开发：在`backend/`目录中开发API和业务逻辑
2. 前端开发：在`storefront/`目录中开发UI和用户交互
3. 数据同步：通过Medusa API进行前后端数据交互
4. 测试：分别测试后端API和前端功能
5. 部署：后端和前端可独立部署

## 环境变量

### 后端 (.env)
```
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
JWT_SECRET=...
COOKIE_SECRET=...
```

### 前端 (.env.local)
```
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_STRIPE_KEY=...
```

## 端口配置

- 后端 (Medusa): `9000`
- 前端 (Next.js): `3000`
- PostgreSQL: `5432`
- Redis: `6379`