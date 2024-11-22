<script setup>
import { ref} from 'vue'

import {useBMIStore} from "../stores/BmiStore.js";// importing BmiStore so the data can be used here

import {storeToRefs} from "pinia";// converts these properties into refs in the components

const BMIStore = useBMIStore()// calling the function, getting reference

const {userHeight}=storeToRefs(BMIStore)//using the userHeight from the BmiStore and saving in a variable
const {userWeight}= storeToRefs(BMIStore)////using the userWeight from the BmiStore and saving in a variable

</script>

<template>

  <div id="user-inputs">
    <h2>Enter your height and weight</h2>
    <label for="meters">Height in Meters</label>
    <input type="number" v-model="userHeight" id="meters" ><br><!--using v-model to connect to the user input-->
    <label for="weight">Weight in Kilogram</label>
    <input type="number" v-model="userWeight" id="weight" ><br>
  </div>


</template>

<style scoped>

#user-inputs{
  border: 3px solid red;
}
#calculate{
  background-color: #646cff;
}
</style>
