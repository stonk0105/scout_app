# Next.js + Flask 應用

這是一個使用 Next.js 作為前端、Flask 作為後端的完整應用示例，可以部署到 Vercel。

## 專案結構

```
scout_app/
├── app/                    # Next.js 應用目錄
│   ├── page.tsx           # 主頁面
│   ├── layout.tsx         # 佈局組件
│   └── globals.css        # 全局樣式
├── components/            # React 組件
│   └── ApiTest.tsx        # API 測試組件
├── api/                   # Flask 後端 API
│   └── index.py           # Flask 應用主文件
├── next.config.ts         # Next.js 配置
├── vercel.json            # Vercel 部署配置
├── requirements.txt       # Python 依賴
└── package.json           # Node.js 依賴
```

## 本地開發

### 1. 安裝前端依賴

```bash
npm install
```

### 2. 安裝 Python 依賴

```bash
pip install -r requirements.txt
```

### 3. 啟動 Flask 後端（在一個終端）

```bash
cd api
python index.py
```

或者使用 Flask 開發服務器：

```bash
flask --app index run --port 5328
```

### 4. 啟動 Next.js 前端（在另一個終端）

```bash
npm run dev
```

打開 [http://localhost:3000](http://localhost:3000) 查看應用。

## API 端點

- `GET /api/hello` - 返回 "Hello, World from Flask!" 訊息
- `GET /api/health` - 健康檢查端點

## 部署到 Vercel

### 方法 1: 使用 Vercel CLI

1. 安裝 Vercel CLI：
```bash
npm i -g vercel
```

2. 登入 Vercel：
```bash
vercel login
```

3. 部署：
```bash
vercel
```

### 方法 2: 使用 GitHub

1. 將代碼推送到 GitHub 倉庫
2. 在 [Vercel Dashboard](https://vercel.com/dashboard) 中導入項目
3. Vercel 會自動檢測 Next.js 項目並配置部署

## 配置說明

### next.config.ts

`rewrites()` 函數將所有以 `/api/` 開頭的請求代理到 Flask 後端：
- 本地開發：`http://127.0.0.1:5328/api/:path*`
- Vercel 部署：自動路由到 Python serverless functions

### vercel.json

配置了 Python 函數的排除規則，以減少打包大小並保持在 250MB 限制內。

### requirements.txt

包含 Flask 框架依賴。

## 注意事項

1. **本地開發**：確保 Flask 後端在端口 5328 上運行，Next.js 才能正確代理請求。
2. **Vercel 部署**：Vercel 會自動處理 Python serverless functions，不需要單獨運行 Flask 服務器。
3. **API 路由**：在 Vercel 上，`/api/*` 路由會自動映射到 `api/*.py` 文件。

## 技術棧

- **前端**: Next.js 16, React, TypeScript, Tailwind CSS
- **後端**: Flask (Python 3.12)
- **部署**: Vercel
