<template>
  <div>
    <Datepicker class="datepicker" v-model="date" :format="format" dark/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();

const format = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
};

</script>
<style>
.datepicker {
  width: 20vw;
  margin-left: 10px;
  margin-bottom: 10px;
  
}
</style>
