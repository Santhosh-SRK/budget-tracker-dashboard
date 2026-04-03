<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Transactions</h1>

      <button
        @click="showModal = true"
        class="bg-indigo-500 text-white px-4 py-2 rounded-lg"
      >
        + Add
      </button>
    </div>

    <!-- Filter -->
   <!-- Filter -->
<div class="flex gap-2">
  <button @click="filter='all'" class="px-3 py-1 bg-gray-200 rounded">All</button>
  <button @click="filter='income'" class="px-3 py-1 bg-gray-200 rounded">Income</button>
  <button @click="filter='expense'" class="px-3 py-1 bg-gray-200 rounded">Expense</button>
</div>

<!-- List -->
<div class="bg-white p-5 rounded-2xl shadow-sm space-y-3">
  <div v-for="t in filtered" :key="t.id" class="flex justify-between items-center">

    <span>{{ t.title }}</span>

    <div class="flex items-center gap-4">
      <span :class="t.type === 'expense' ? 'text-red-500' : 'text-green-600'">
        {{ t.type === 'expense' ? '-' : '+' }}₹{{ t.amount }}
      </span>

      <button @click="store.deleteTransaction(t.id)" class="text-xs text-gray-400 hover:text-red-500">
        ✕
      </button>
    </div>

  </div>
</div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTransactionsStore } from "../../store/transactionsStore";

const store = useTransactionsStore();

const showModal = ref(false);
const filter = ref("all");

const title = ref("");
const amount = ref(0);
const type = ref<"income" | "expense">("expense");

const filtered = computed(() => {
  if (filter.value === "all") return store.transactions;
  return store.transactions.filter((t) => t.type === filter.value);
});

const add = () => {
  if (!title.value || !amount.value) return;

  store.addTransaction({
    title: title.value,
    amount: amount.value,
    type: type.value,
  });

  showModal.value = false;
  title.value = "";
  amount.value = 0;
};
</script>