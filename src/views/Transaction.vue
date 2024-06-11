<script setup>
import { ref, inject } from "vue";

const myAxios = inject("myAxios");

const formData = ref({
  AccountID: "",
  BankID: "",
  Amount: "",
  TransactionDate: "",
});

const handleSubmit = async () => {
  try {
    // Parse the Amount field to an integer
    formData.value.Amount = parseInt(formData.value.Amount);

    const response = await myAxios.post("/transaction/datatransaksi", formData.value);
    console.log("Response:", response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

</script>

<template>
   <v-card variant="tonal" class="pa-3">
    <div class="container">
        <div>
            <label>AccountID</label>
            <v-text-field type="text" v-model="formData.AccountID"/>
        </div>
        <div>
            <label>BankID</label>
            <v-text-field type="text" v-model="formData.BankID"/>
        </div>
     
        <div>
            <label>Amount</label>
            <v-text-field v-model="formData.Amount"/>
        </div>

        <div>
            <label>TransactionDate</label>
            <v-text-field id="TransactionDate" v-model="formData.TransactionDate" />
        </div>
        <v-btn variant="tonal" @click="handleSubmit">
            Button
        </v-btn>
    </div>
</v-card>
</template>
