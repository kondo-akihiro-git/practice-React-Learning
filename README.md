# React × MUI 学習アプリ

React（TypeScript）と MUI を使って、Reactの基本的なフックや機能を学べる学習用アプリです。  
各機能ごとにボタンで画面を切り替え、実際のデモと実装コードを確認できます。

## 📂 ディレクトリ概要

このアプリは、Reactの基本フック（useStateなど）を学習するための簡易デモを提供するものです。構成は以下のようになっています：

- `public/`：Viteで使用される基本のHTMLを格納
- `src/`：すべてのReactコンポーネントやロジックが入る場所
  - `App.tsx`：ボタンを使って各学習モジュールを切り替えるメイン画面
  - `components/UseStateDemo.tsx`：`useState`の説明＋動き＋コードを表示するカード形式のUI
- `README.md`：ディレクトリ構成とタスク管理を一体化したこのドキュメント
- `tsconfig.json` / `vite.config.ts`：開発用設定ファイル
- `package.json`：ライブラリやコマンド管理

---

## ✅ タスク一覧

### 完了済み
- [x] React + TSセットアップ
- [x] MUI導入
- [x] useStateページのUI/UX実装

### 進行中・予定
- [ ] useEffect学習ページの追加
- [ ] テンプレコンポーネントのリファクタリング
- [ ] デプロイ環境整備
