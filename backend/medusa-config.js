const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {
  console.log("Error loading .env file");
}

// CORS配置
const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7001,http://localhost:7000";
const STORE_CORS = process.env.STORE_CORS || "http://localhost:3000";

// 数据库配置
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/medusa_db";

// Redis配置
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Medusa配置
module.exports = {
  projectConfig: {
    // Redis配置
    redis_url: REDIS_URL,
    
    // 数据库配置
    database_url: DATABASE_URL,
    database_type: "postgres",
    
    // 存储配置
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
    
    // JWT配置
    jwt_secret: process.env.JWT_SECRET || "supersecret",
    cookie_secret: process.env.COOKIE_SECRET || "supersecret",
    
    // 数据库额外配置
    database_extra: process.env.NODE_ENV !== "development"
      ? { ssl: { rejectUnauthorized: false } }
      : {},
  },
  
  // 插件配置
  plugins: [
    // 管理后台
    {
      resolve: "@medusajs/admin",
      options: {
        autoRebuild: true,
        develop: {
          open: process.env.OPEN_BROWSER !== "false",
        },
      },
    },
    
    // 文件存储 - 本地存储
    {
      resolve: "@medusajs/file-local",
      options: {
        upload_dir: "uploads",
      },
    },
    
    // Redis缓存
    {
      resolve: "@medusajs/cache-redis",
      options: {
        redisUrl: REDIS_URL,
        ttl: 30,
      },
    },
    
    // Redis事件总线
    {
      resolve: "@medusajs/event-bus-redis",
      options: {
        redisUrl: REDIS_URL,
      },
    },
    
    // Stripe支付（可选，后续配置）
    // {
    //   resolve: "medusa-payment-stripe",
    //   options: {
    //     api_key: process.env.STRIPE_API_KEY,
    //     webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
    //   },
    // },
  ],
  
  // 模块配置
  modules: {
    // 可以在这里添加自定义模块
  },
  
  // 功能标志
  featureFlags: {
    product_categories: true,
  },
};