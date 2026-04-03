<template>
  <div class="p-4 space-y-6">

    <h1 class="text-xl font-semibold">Budget Tracker</h1>

    <nav class="space-y-2">
      <RouterLink to="/dashboard" class="block p-2 rounded hover:bg-gray-100">
        Dashboard
      </RouterLink>

      <RouterLink to="/dashboard/transactions" class="block p-2 rounded hover:bg-gray-100">
        Transactions
      </RouterLink>

      <RouterLink to="/dashboard/analytics" class="block p-2 rounded hover:bg-gray-100">
        Analytics
      </RouterLink>
    </nav>

  </div>
</template>