<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-semibold">Dashboard</h1>
        <p class="text-gray-500 text-sm">Track your financial health</p>
      </div>
      <div class="text-sm text-gray-400">
        Last updated: Just now
      </div>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      <!-- Balance -->
      <div class="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-5 rounded-2xl shadow">
        <p class="text-sm opacity-80">Total Balance</p>
        <h2 class="text-2xl font-bold mt-2">₹{{ store.balance }}</h2>
      </div>

      <!-- Income -->
      <div class="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
        <p class="text-gray-500 text-sm">Income</p>
        <h2 class="text-green-600 text-xl font-semibold mt-2">₹{{ store.income }}</h2>
      </div>

      <!-- Expenses -->
      <div class="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
        <p class="text-gray-500 text-sm">Expenses</p>
        <h2 class="text-red-500 text-xl font-semibold mt-2">₹{{ store.expense }}</h2>
      </div>

    </div>

    <!-- Recent Transactions -->
    <div class="bg-white p-5 rounded-2xl shadow">

      <div class="flex justify-between items-center mb-4">
        <h3 class="font-semibold">Recent Transactions</h3>
        <RouterLink to="/dashboard/transactions" class="text-sm text-indigo-600">
          View All →
        </RouterLink>
      </div>

      <div class="space-y-3">
        <div
          v-for="t in store.transactions.slice(0, 5)"
          :key="t.id"
          class="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition"
        >
          <div>
            <p class="font-medium">{{ t.title }}</p>
            <p class="text-xs text-gray-400">{{ t.type }}</p>
          </div>

          <span
            :class="t.type === 'expense'
              ? 'text-red-500'
              : 'text-green-600'"
            class="font-semibold"
          >
            {{ t.type === 'expense' ? '-' : '+' }}₹{{ t.amount }}
          </span>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { useTransactionsStore } from "../../store/transactionsStore";

const store = useTransactionsStore();
</script>