# kingone-design-test（面試切版）

這個 repo 是「單頁切版」面試用專案：以 **Vite + Vue 3 + TypeScript** 建立一個可拆元件、可維護的前端骨架，並透過 **GitHub Actions 自動部署到 GitHub Pages**，讓審查者可以直接看成果。

## 你會看到我重視什麼（該放什麼、該紀錄什麼）

- **專案可讀性**
  - 清楚的目錄結構（pages / layouts / modules / components / styles）
  - 元件拆分有「邊界」：頁面（page）只做組裝；視覺模組放在 `modules/`
- **切版可維護性**
  - 版面以 **Grid/Flex** 組合，避免硬塞絕對定位去撐結構
  - 以 **設計 token（CSS 變數）** 管理顏色、陰影、間距等基礎值（集中在 global）
- **RWD 與一致性**
  - 主要版型在桌機寬度下維持一致（並在小於某斷點時變為單欄）
  - 在 `1400~1920` 的視覺穩定（以 `min()` / `width: min()` 控制內容面板）
- **互動狀態**
  - 分頁（tab）與切換按鈕（chip）有 active / focus-visible 狀態示意
- **部署可重現**
  - 以 **`bun.lock`** 鎖定依賴；push 到 `main` 即自動 build + deploy 到 Pages

> 備註：本專案目前是「頁面骨架 + 元件拆分範例」，你可以把設計圖的實際素材/內容替換進 `src/modules/product/*`。

## 技術棧

- **Bun**（套件管理與執行腳本）
- **Vite**
- **Vue 3**
- **TypeScript**
- **Vue Router**
- **GitHub Actions + GitHub Pages**

## 專案結構

```txt
src/
  layouts/                # 共用頁面框架（header/背景/容器）
  pages/                  # 路由頁（只做組裝）
  modules/                # 以功能區塊拆分（面試切版可讀性高）
    product/
      components/
        TopTabs.vue
        ProductSplit.vue
        ProductMedia.vue
        ProductContent.vue
  router/
    index.ts
  styles/
    global.css            # 全域 token + 基礎樣式
```

## 對照評分重點（你提供的 5 點）

- **1. 整體 HTML 結構佈局方式**
  - `DefaultLayout`（外框）+ `ProductSplit`（左右兩欄）以 Grid/Flex 組合，不靠大量絕對定位撐結構
- **2. 分頁元件啟動/非啟動樣式管理**
  - `TopTabs.vue` 用 `.active` class 管理 active 狀態；同時加上 `:focus-visible` 便於鍵盤操作檢視
- **3. 1920~1400 視覺一致性**
  - 內容面板使用 `width: min(1280px, 100%)`；外層置中，避免螢幕放大後元素散掉
- **4. 各元件間距設定方式**
  - 以 layout gap / padding 控制（例如 `ProductSplit` 的 grid + `ProductContent` 的 gap）
- **5. 整體樣式管理方式**
  - 全域基礎 token 放在 `src/styles/global.css`，元件內只寫 scoped 的結構/局部樣式

## 開發（請你在本機測試）

需先安裝 [Bun](https://bun.sh)。

```bash
bun install
bun run dev
```

## 部署到 GitHub Pages（Actions）

已加入 workflow：`/.github/workflows/deploy.yml`

你需要在 GitHub Repo 設定一次 Pages：

- 進入 Repo → **Settings** → **Pages**
- **Build and deployment** 選 **GitHub Actions**

之後每次 push 到 `main` 會自動：

- `bun install --frozen-lockfile`（依 repo 內的 `bun.lock` 安裝）
- `bun run build`
- 上傳 `dist` 並部署到 Pages

### Vite base 設定

`vite.config.ts` 會在 GitHub Actions 環境下自動把 `base` 設為 `/<repo-name>/`，避免 GitHub Pages 子路徑下資源 404。

## 可再補強（若你要加分）

- 把「設計圖量測的間距」寫成一個小表（例如：左右欄 padding、tab 底線距離、字級等）放在 README 的附錄
- 把 `modules/product` 拆得更貼近設計（例如：Hero、Meta、Description、MediaModes）
- 加上 `:focus-visible`、hover、disabled 的一致設計（可做成 token）

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
