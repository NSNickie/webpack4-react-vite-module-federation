# Webpack4 Web应用

一个基于Webpack4构建的现代化Web应用，包含完整的开发和生产环境配置。

## 🚀 功能特性

- ✅ **Webpack4** - 现代化的模块打包工具
- ✅ **Babel** - ES6+ 语法转译支持
- ✅ **CSS处理** - 样式模块化和优化
- ✅ **资源处理** - 图片、字体等静态资源处理
- ✅ **开发服务器** - 热重载开发环境
- ✅ **生产优化** - 代码分割、压缩、缓存优化
- ✅ **响应式设计** - 移动端友好的UI设计

## 📁 项目结构

```
ModuleFederation/
├── src/
│   ├── index.html          # HTML模板
│   ├── index.js            # JavaScript入口文件
│   ├── styles/
│   │   └── main.css        # 主样式文件
│   └── utils/
│       ├── time.js         # 时间工具函数
│       └── logger.js       # 日志工具函数
├── webpack.config.js       # Webpack配置文件
├── .babelrc               # Babel配置
├── package.json           # 项目依赖配置
└── README.md             # 项目说明文档
```

## 🛠️ 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式

启动开发服务器（自动打开浏览器）：
```bash
npm start
```

或者构建并监听文件变化：
```bash
npm run dev
```

### 3. 生产构建

```bash
npm run build
```

构建完成后，`dist` 目录包含优化后的生产文件。

## 📦 技术栈

### 核心依赖
- **webpack**: ^4.46.0 - 模块打包工具
- **webpack-cli**: ^4.9.2 - Webpack命令行工具
- **webpack-dev-server**: ^3.11.3 - 开发服务器

### 加载器 (Loaders)
- **babel-loader**: ^8.2.3 - JavaScript转译
- **css-loader**: ^5.2.7 - CSS处理
- **style-loader**: ^2.0.0 - 样式注入
- **file-loader**: ^6.2.0 - 文件处理
- **url-loader**: ^4.1.1 - URL处理

### 插件 (Plugins)
- **html-webpack-plugin**: ^4.5.2 - HTML模板处理
- **mini-css-extract-plugin**: ^1.6.2 - CSS提取
- **clean-webpack-plugin**: ^3.0.0 - 清理构建目录

### 工具
- **@babel/core**: ^7.16.0 - Babel核心
- **@babel/preset-env**: ^7.16.0 - Babel预设
- **lodash**: ^4.17.21 - 工具库

## 🎨 样式特性

- **现代化设计** - 渐变背景、毛玻璃效果
- **响应式布局** - 移动端适配
- **动画效果** - 平滑的过渡动画
- **交互反馈** - 悬停和点击效果

## 🔧 配置说明

### Webpack配置特性

1. **开发/生产环境区分**
   - 开发环境：热重载、源码映射
   - 生产环境：代码压缩、资源优化

2. **资源处理**
   - 图片：自动优化和压缩
   - 字体：支持多种字体格式
   - CSS：模块化处理

3. **代码分割**
   - 自动分割第三方库
   - 按需加载优化

4. **缓存优化**
   - 文件名哈希
   - 长期缓存策略

## 🚀 开发指南

### 添加新页面
1. 在 `src` 目录创建新的HTML文件
2. 在 `webpack.config.js` 中添加新的HtmlWebpackPlugin配置

### 添加新样式
1. 在 `src/styles` 目录创建CSS文件
2. 在JavaScript文件中导入样式

### 添加新功能
1. 在 `src/utils` 目录添加工具函数
2. 在 `src/index.js` 中导入和使用

## 📝 脚本命令

| 命令 | 描述 |
|------|------|
| `npm start` | 启动开发服务器 |
| `npm run dev` | 开发模式构建并监听 |
| `npm run build` | 生产模式构建 |

## 🌟 浏览器支持

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request！

---

**享受使用Webpack4构建的现代化Web应用！** 🎉 