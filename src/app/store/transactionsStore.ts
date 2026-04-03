import { defineStore } from "pinia";

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
};

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    transactions: JSON.parse(sessionStorage.getItem("tx") || "[]") as Transaction[],
  }),

  getters: {
    income: (state) =>
      state.transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0),

    expense: (state) =>
      state.transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0),

    balance(): number {
      return this.income - this.expense;
    },
  },

  actions: {
    addTransaction(tx: Omit<Transaction, "id">) {
      const newTx = { ...tx, id: Date.now() };
      this.transactions.unshift(newTx);
      this.persist();
    },

    deleteTransaction(id: number) {
      this.transactions = this.transactions.filter((t) => t.id !== id);
      this.persist();
    },

    persist() {
      sessionStorage.setItem("tx", JSON.stringify(this.transactions));
    },
  },
});