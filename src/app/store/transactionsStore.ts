import { defineStore } from "pinia";

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
};

export const useTransactionsStore = defineStore("transactions", {
  state: () => ({
    transactions:
      JSON.parse(sessionStorage.getItem("tx") || "null") ||
      ([
        { id: 1, title: "Salary", amount: 50000, type: "income" },
        { id: 2, title: "Groceries", amount: 2500, type: "expense" },
        { id: 3, title: "Swiggy Order", amount: 600, type: "expense" },
        { id: 4, title: "Freelance", amount: 12000, type: "income" },
        { id: 5, title: "Electricity Bill", amount: 1800, type: "expense" },
        { id: 6, title: "Movie Night", amount: 900, type: "expense" },
      ] as Transaction[]),
  }),

  getters: {
    income: (state): number =>
      state.transactions
        .filter((t: Transaction) => t.type === "income")
        .reduce((sum: number, t: Transaction) => sum + t.amount, 0),

    expense: (state): number =>
      state.transactions
        .filter((t: Transaction) => t.type === "expense")
        .reduce((sum: number, t: Transaction) => sum + t.amount, 0),

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
      this.transactions = this.transactions.filter(
        (t: Transaction) => t.id !== id,
      );
    },

    persist() {
      sessionStorage.setItem("tx", JSON.stringify(this.transactions));
    },
  },
});