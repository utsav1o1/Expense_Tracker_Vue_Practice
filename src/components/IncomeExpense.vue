<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    incomeExpense:{
        type:Object,
        required:true
    }
})




</script>


<template>
    

        <div class="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" class="money plus">+${{incomeExpense.income}}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" class="money minus">-${{incomeExpense.expenses}}</p>
            </div>
        </div>
  
</template>