# 💰 Budget Tracker (Vue 3 + TypeScript)

A clean, modern, and scalable **budget management application** built using **Vue 3 Composition API**, **Pinia**, and **Tailwind CSS**.

---

## 🚀 Features

* 🔐 Mock Authentication (session-based)
* 📊 Dashboard with:

  * Total Balance
  * Income & Expense Summary
  * Recent Transactions
* 💸 Transactions:

  * Add Income / Expense
  * Delete Transactions
  * Filter (All / Income / Expense)
* 📱 Fully Responsive UI
* 🍔 Toggleable Sidebar (Hamburger Menu)
* ⚡ Real-time updates using Pinia
* 💾 Session persistence (sessionStorage)

---

## 🧠 Tech Stack

* Vue 3 (Composition API)
* TypeScript
* Pinia (State Management)
* Tailwind CSS (UI)
* Vue Router

---

## 🏗️ Architecture

Feature-based scalable structure:

```
src/
├── app/
│   └── store/
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── transactions/
│   ├── analytics/
├── shared/
│   ├── layout/
│   ├── components/
├── router/
├── services/
```

---

## 🔐 Authentication

* Mock JWT-like token
* Stored in `sessionStorage`
* Route protection using Vue Router guards

---

## 📊 State Management

Centralized using Pinia:

* Transactions Store
* Auth Store
* Derived values (income, expense, balance)

---

## 🎨 UI/UX Highlights

* Clean, minimal SaaS-style UI
* Consistent spacing & typography
* Soft shadows and rounded cards
* Accessible color contrast
* Mobile-first responsive layout

---



## ⚡ Getting Started

```bash
npm install
npm run dev
```

---

## 📌 Future Improvements

* Charts (D3 / Recharts equivalent)
* Edit transactions
* Category support
* Backend integration (Node / .NET)

---

## 👨‍💻 Author

Santhosh
Frontend Developer (React | Angular | Vue)

---
