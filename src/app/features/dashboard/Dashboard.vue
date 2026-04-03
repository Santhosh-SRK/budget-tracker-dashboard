<template>
  <div class="space-y-6">

    <!-- Title -->
    <div>
      <h1 class="text-2xl font-semibold">Dashboard</h1>
      <p class="text-gray-500">Overview of your finances</p>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

      <div class="bg-white p-5 rounded-2xl shadow-sm">
        <p class="text-gray-500 text-sm">Balance</p>
        <h2 class="text-xl font-semibold mt-1">₹{{ store.balance }}</h2>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm">
        <p class="text-gray-500 text-sm">Income</p>
        <h2 class="text-green-600 font-semibold mt-1">₹{{ store.income }}</h2>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm">
        <p class="text-gray-500 text-sm">Expenses</p>
        <h2 class="text-red-500 font-semibold mt-1">₹{{ store.expense }}</h2>
      </div>

    </div>

    <!-- Recent Transactions -->
    <div class="bg-white p-5 rounded-2xl shadow-sm">
      <h3 class="font-semibold mb-4">Recent Transactions</h3>

     <div v-for="t in store.transactions.slice(0, 5)" :key="t.id" class="flex justify-between">
  <span>{{ t.title }}</span>
  <span :class="t.type === 'expense' ? 'text-red-500' : 'text-green-600'">
    {{ t.type === 'expense' ? '-' : '+' }}₹{{ t.amount }}
  </span>
</div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useTransactionsStore } from "../../store/transactionsStore";

const store = useTransactionsStore();
</script>