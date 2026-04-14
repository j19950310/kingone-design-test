# kingone-design-test

以 **Vite + Vue 3 + TypeScript** 實作的單頁產品介面示範（含分頁切換與彈窗內容區）。`main` 分支 push 後會由 **GitHub Actions** 建置並部署到 **GitHub Pages**。

## 技術棧

- **Bun**（套件管理與執行腳本）
- **Vite**
- **Vue 3**（`<script setup>` + TypeScript）
- **Sass**（`sass-embedded`）
- **GitHub Actions + GitHub Pages**

## 專案結構

```txt
src/
  pages/
    ProductPage.vue       # 頁面組裝、假資料
  components/
    PopUp.vue             # 主要版面與互動
    TabSelect.vue         # 分頁／標籤
    IconSelectBtn.vue     # 圖示切換按鈕
  assets/                 # 圖檔與 SVG
  App.vue                 # 根元件（背景與全域 CSS 變數）
  main.ts
  reset.css               # 基礎樣式重置
```

## 本機開發

需先安裝 [Bun](https://bun.sh)。

```bash
bun install
bun run dev
```

## GitHub Pages（Actions）

Workflow：`.github/workflows/deploy.yml`

在 GitHub 專案 **Settings → Pages** 中，將 **Build and deployment** 設為 **GitHub Actions**。之後每次 push 到 `main` 會執行 `bun install --frozen-lockfile`、`bun run build`，並將 `dist` 部署到 Pages。

### Vite `base`

`vite.config.ts` 在 `GITHUB_ACTIONS` 環境下會將 `base` 設為 `/<repo 名稱>/`，避免在 GitHub Pages 子路徑下靜態資源 404。
