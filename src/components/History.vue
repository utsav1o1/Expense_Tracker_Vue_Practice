<script setup>
import { defineProps, defineEmits, toDisplayString } from 'vue';
import {useToast} from 'vue-toastification'

const toast = useToast();
const props = defineProps({
    transactionData: {
        type: Array,
        required: true
    },
    setTransaction:{
        type:Function,
        required: true
    }
})

const getClass = (transaction) => {
    return transaction.amount > 0 ? 'plus' : 'minus';
};

const removeTransaction = (index) => {
    props.transactionData.splice(index,1)
    props.setTransaction();
    toast.success("Item Delete Sucessfully")
}


</script>

<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="(transaction,index) in transactionData" :key="index" :class="getClass(transaction)">
            {{ transaction.text }} <span>{{transaction.amount > 0 ? '+' : '-'}}${{ transaction.amount }}
            </span><button class="delete-btn" @click="removeTransaction(index)">x</button>
        </li>
    </ul>
</template>