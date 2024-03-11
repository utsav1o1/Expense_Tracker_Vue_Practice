<template>
  <Header></Header>
  <div class="container">
    <Balance :balanceAmount="totalBalance" />
    <IncomeExpense :incomeExpense="calculateIncomeExpense" />
    <History :transactionData="transactions" :setTransaction="savedTransactionLocalStorage" />
    <AddTransaction @transactionSubmited="handleTransaction"  />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import History from './components/History.vue';
import AddTransaction from './components/AddTransaction.vue';

import { ref, computed, onMounted } from 'vue';

const transactions = ref([ ])

onMounted(() => {
  const savedTransaction = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransaction) {
    transactions.value = savedTransaction
  }
});

const totalBalance = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});



const calculateIncomeExpense = computed(() => {
  let income = 0;
  let expenses = 0;

  transactions.value.forEach(transaction => {
    if (transaction.amount > 0) {
      income += transaction.amount;
    } else {
      expenses += Math.abs(transaction.amount);
    }
  });

  return { income, expenses };
});


const handleTransaction = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.trasnDescription,
    amount: transactionData.amount
  })
  savedTransactionLocalStorage();
}

const savedTransactionLocalStorage = () =>
{
  localStorage.setItem('transactions',JSON.stringify(transactions.value));
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}
</script>