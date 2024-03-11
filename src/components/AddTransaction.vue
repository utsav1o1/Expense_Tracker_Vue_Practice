<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';


const trasnDescription = ref('')
const amount = ref('')
const toast = useToast();
const emit = defineEmits(['transactionSubmited'])


const OnSubmit = () => {
    if (trasnDescription.value !== '' && amount.value !== '') {
        
        toast.success("Both have value")
    } else {
        toast.error("Please Fill The Input Box")
    }

    const transactionData = {
        trasnDescription: trasnDescription.value,
        amount: parseFloat(amount.value)
    }

    emit('transactionSubmited',transactionData);

    trasnDescription.value=''
    amount.value=''
}

</script>

<template>
    <h3>Add new transaction</h3>
    <form @submit.prevent="OnSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." v-model="trasnDescription" />
        </div>
        <div class="form-control">
            <label for="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>