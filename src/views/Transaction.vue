<script setup>
import { reactive,inject } from 'vue';
import { VNumberInput } from 'vuetify/labs/VNumberInput'
const data = reactive({
    AccountID: "",
    BankID:"",
    Amount:0,
    //TransactionDate:"",
    pesanLogin: "",
})



const myAxios = inject('myAxios')



const submit = () => {
    console.log("Submit",data);
    myAxios.post("/transaction/datatransaksi",{
      AccountID:data.AccountID,
      BankID:data.BankID,
      Amount:data.Amount,
      //TransactionDate:data.TransactionDate,
    }).then((res) => {
      if(res.status==200){
        data.pesanLogin="Transaksi Berhasil"
      }
      data.snackbar= true
    }, (err) => {
      data.pesanLogin = "Transaksi Gagal"
      data.snackbar = true
    })
     
}
</script>

<template>
   <v-card variant="tonal" class="pa-3">
    <div class="container">
        <div>
            <label>AccountID</label>
            <v-text-field type="text" v-model="data.AccountID"/>
        </div>
        <div>
            <label>BankID</label>
            <v-text-field type="text" v-model="data.BankID"/>
        </div>
     
        <div>
            <label>Amount</label>
            <v-number-input v-model="data.Amount"/>
        </div>

        <!-- <div>
            <label>TransactionDate</label>
            <v-number-input v-model="data.TransactionDate"/>
        </div> -->
        <v-btn variant="tonal" @click="submit">
  Button
</v-btn>
    </div>
</v-card>
  </template>
  <script>
    
  </script>