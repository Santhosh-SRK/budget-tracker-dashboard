<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Transactions</h1>

      <button
        @click="showModal = true"
        class="bg-indigo-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-600"
      >
        + Add
      </button>
    </div>

    <!-- Filter -->
    <div class="flex gap-2">
      <button
        @click="filter='all'"
        :class="['px-3 py-1 rounded cursor-pointer', filter==='all' ? 'bg-indigo-500 text-white' : 'bg-gray-200']"
      >
        All
      </button>

      <button
        @click="filter='income'"
        :class="['px-3 py-1 rounded cursor-pointer', filter==='income' ? 'bg-indigo-500 text-white' : 'bg-gray-200']"
      >
        Income
      </button>

      <button
        @click="filter='expense'"
        :class="['px-3 py-1 rounded cursor-pointer', filter==='expense' ? 'bg-indigo-500 text-white' : 'bg-gray-200']"
      >
        Expense
      </button>
    </div>

    <!-- List -->
    <div class="bg-white p-5 rounded-2xl shadow-sm space-y-3">
      <div
        v-for="t in filtered"
        :key="t.id"
        class="flex justify-between items-center"
      >
        <span>{{ t.title }}</span>

        <div class="flex items-center gap-4">
          <span
            :class="t.type === 'expense' ? 'text-red-500' : 'text-green-600'"
          >
            {{ t.type === 'expense' ? '-' : '+' }}₹{{ t.amount }}
          </span>

          <button
            @click="store.deleteTransaction(t.id)"
            class="text-xs text-gray-400 hover:text-red-500 cursor-pointer"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- ✅ MODAL (THIS WAS MISSING) -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-2xl w-[90%] max-w-md space-y-4">

        <h2 class="text-lg font-semibold">Add Transaction</h2>

        <input
          v-model="title"
          placeholder="Title"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          v-model.number="amount"
          type="number"
          placeholder="Amount"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <select
          v-model="type"
          class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div class="flex justify-end gap-2">
          <button
            @click="showModal = false"
            class="px-4 py-2 bg-gray-200 rounded cursor-pointer"
          >
            Cancel
          </button>

          <button
            @click="add"
            class="px-4 py-2 bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-600"
          >
            Add
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Transaction } from "../../store/transactionsStore";
import { useTransactionsStore } from "../../store/transactionsStore";

const store = useTransactionsStore();

type FilterType = "all" | "income" | "expense";

const showModal = ref(false);
const filter = ref<FilterType>("all");

const title = ref("");
const amount = ref<number | null>(null);
const type = ref<"income" | "expense">("expense");

const filtered = computed<Transaction[]>(() => {
  if (filter.value === "all") return store.transactions;

  return store.transactions.filter(
    (t: Transaction) => t.type === filter.value
  );
});

const add = () => {
  if (!title.value || !amount.value) return;

  store.addTransaction({
    title: title.value,
    amount: amount.value,
    type: type.value,
  });

  // reset
  showModal.value = false;
  title.value = "";
  amount.value = null;
  type.value = "expense";
};
</script>