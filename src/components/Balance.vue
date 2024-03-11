<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    balanceAmount:{
        type:Number,
        required:true,
    },
})

</script>
<template>
    <h4>Your Balance</h4>
        <h1 id="balance">${{balanceAmount}}</h1>
</template>