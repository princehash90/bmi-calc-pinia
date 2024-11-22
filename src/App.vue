<script setup>

import BodyMassIndexForm from "./components/BodyMassIndexForm.vue";// importing the BodyMassIndexForm
import {useBMIStore} from "./stores/BmiStore.js";// importing the BmiStore
import {storeToRefs} from "pinia";// importing the storeTorefs from pinia
const BMIStore = useBMIStore();// calling the function

const {calculatedBMI} = storeToRefs(BMIStore)// create a reference, getting the data from the BmiStore

</script>

<template>
  <div id="app-compo">
    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndexForm></BodyMassIndexForm>


    <p>Your BMI is : {{calculatedBMI}}</p>

  </div>


</template>

<style scoped>
#app-compo{
  border: 3px solid blue;
}

</style>
