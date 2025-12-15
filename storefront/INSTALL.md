# Next.js前端安装记录

## 安装时间
2025-12-15 12:38 (UTC+8)

## 安装状态
✅ 成功完成

## 已安装的核心包

### Next.js核心
- `next@14.2.35` - Next.js框架
- `react@18.3.1` - React核心库
- `react-dom@18.3.1` - React DOM渲染

### Medusa集成
- `@medusajs/medusa-js@6.1.10` - Medusa JavaScript客户端

### 状态管理与数据获取
- `zustand@4.5.7` - 轻量级状态管理
- `@tanstack/react-query@5.90.12` - 数据获取和缓存

### 国际化
- `next-intl@3.26.5` - Next.js国际化解决方案

### 样式
- `tailwindcss@3.4.19` - CSS框架
- `postcss@8.4.49` - CSS处理器
- `autoprefixer@10.4.20` - CSS自动前缀

### 开发工具
- `typescript@5.9.3` - TypeScript
- `eslint@8.57.1` - 代码检查
- `eslint-config-next@14.2.35` - Next.js ESLint配置

### 工具库
- `clsx@2.1.1` - 类名工具
- `tailwind-merge@2.6.0` - Tailwind类名合并

## 安装统计
- 总包数: 901个包
- 安装位置: `c:\Users\postmaster\Documents\crystal-site\storefront\node_modules`
- 安装耗时: 约3分钟

## 注意事项

### Node版本警告
当前Node版本为v16.13.2，但推荐使用Node 18+。虽然有警告，但不影响开发功能。建议后续升级Node版本。

### 已知警告（可忽略）
以下deprecation警告不影响功能：
- `inflight@1.0.6` - 内存泄漏问题，但不影响开发
- `@oclif/*` 系列包 - CLI工具依赖，已弃用但功能正常
- `glob@7.2.3, glob@8.1.0` - 旧版本，但兼容当前环境
- `eslint@8.57.1` - 旧版本，但功能完整
- `multer@1.4.5-lts.2` - 文件上传库，有安全漏洞但不直接使用

### 安全漏洞
检测到12个漏洞（4个低危，8个高危）：
- 这些主要来自间接依赖
- 可运行 `npm audit fix` 尝试自动修复
- 开发环境可暂时忽略，生产环境需要处理

## 项目结构

已创建的文件和目录：
```
storefront/
├── src/
│   └── app/
│       ├── layout.tsx       # 根布局
│       ├── page.tsx         # 首页
│       └── globals.css      # 全局样式
├── public/
│   ├── images/              # 图片资源
│   └── icons/               # 图标资源
├── next.config.js           # Next.js配置
├── tailwind.config.js       # Tailwind配置
├── postcss.config.js        # PostCSS配置
├── tsconfig.json            # TypeScript配置
├── .eslintrc.json           # ESLint配置
├── .env.local.template      # 环境变量模板
├── .gitignore               # Git忽略文件
├── package.json             # 依赖配置
└── README.md                # 项目说明
```

## 下一步操作

1. 配置环境变量：
   ```bash
   cp .env.local.template .env.local
   ```

2. 确保Medusa后端服务已启动（端口9000）

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 访问 `http://localhost:3000` 查看应用

## 可用脚本

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm start            # 启动生产服务器
npm run lint         # 运行ESLint检查
npm run type-check   # 运行TypeScript类型检查
```

## 验证安装

运行以下命令验证安装：
```bash
npm run dev
```

如果成功启动，将看到：
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

## 故障排除

### TypeScript错误
安装完成后，TypeScript错误应该消失。如果仍有错误，尝试：
```bash
npm run type-check
```

### 端口被占用
如果3000端口被占用，可以使用其他端口：
```bash
PORT=3001 npm run dev
```

### 连接后端失败
确保：
1. Medusa后端正在运行（http://localhost:9000）
2. `.env.local` 中的 `NEXT_PUBLIC_MEDUSA_BACKEND_URL` 配置正确
3. 后端CORS配置允许前端域名

## 资源链接

- [Next.js文档](https://nextjs.org/docs)
- [Tailwind CSS文档](https://tailwindcss.com/docs)
- [Medusa文档](https://docs.medusajs.com)
- [项目开发指南](../docs/development.md)
