# 星禧水晶 - Next.js前端应用

## 快速开始

### 1. 安装依赖

```bash
cd storefront
npm install
```

### 2. 配置环境变量

复制环境变量模板并配置：

```bash
cp .env.local.template .env.local
```

编辑 `.env.local` 文件，配置后端URL等信息。

### 3. 启动开发服务器

```bash
npm run dev
```

前端将在 `http://localhost:3000` 运行

## 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm start` - 启动生产服务器
- `npm run lint` - 运行ESLint检查
- `npm run type-check` - 运行TypeScript类型检查

## 项目结构

```
storefront/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 根布局
│   │   ├── page.tsx      # 首页
│   │   └── globals.css   # 全局样式
│   ├── components/       # React组件（待创建）
│   ├── lib/              # 工具库（待创建）
│   └── types/            # TypeScript类型（待创建）
├── public/               # 静态资源
│   ├── images/
│   └── icons/
├── next.config.js        # Next.js配置
├── tailwind.config.js    # Tailwind配置
├── tsconfig.json         # TypeScript配置
└── package.json          # 依赖配置
```

## 技术栈

- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **状态管理**: Zustand
- **数据获取**: TanStack Query
- **国际化**: next-intl
- **API客户端**: @medusajs/medusa-js

## 环境要求

- Node.js 18+
- npm 9+

## 开发指南

详细的开发指南请参考 [`../docs/development.md`](../docs/development.md)

## 国际化

项目支持中英文双语：
- 中文 (zh-CN) - 默认语言
- 英文 (en-US)

## 连接Medusa后端

确保Medusa后端服务正在运行（默认端口9000），并在 `.env.local` 中正确配置：

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
```

## 许可证

MIT
