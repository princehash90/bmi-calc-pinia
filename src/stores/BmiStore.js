import {defineStore} from "pinia";// importing defineStore function
import {ref, computed} from "vue";// importing the ref and computed

//function for the reactive data that our BMistore will use
export const useBMIStore = defineStore('bmi', ()=>{
    const userHeight= ref(0)// the reactive height that will be stored in the store
    const userWeight = ref(0)// the reactive weight that will be stored in the stored

    const calculatedBMI = computed (()=>{
        const bmi = userWeight.value / (userHeight.value  * userHeight.value);// doing the calculation for bmi
        const formattedBmi = bmi.toFixed(2)//formating the bmi to be only digit fraction
        return formattedBmi// returning the formattedBmi
    })

    return {// returning the data in from the function
        userHeight,
        userWeight,
        calculatedBMI
    }
})