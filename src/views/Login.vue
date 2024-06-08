<script setup>
import router from '@/router';
import { inject, reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore()

const data = reactive({
    username: '',
    password: '',
    snackbar: false
})

const myAxios = inject('myAxios')

const login = () => {
    console.log('login clicked', data);

    myAxios.post('/auth/login', {
      username: data.username,
      password: data.password
    }).then((res) => {
      if (res.status == 200) {
        data.pesanLogin = "Anda berhasil Login"
        auth.authenticated()
        router.push('about')
      }
      data.snackbar = true
      
    }, (err) => {
      data.pesanLogin = "Gagal Login"
      data.snackbar = true
    })
      console.log(res)
      data.snackbar = true
}  

const snackbar = ref({
    visible: false,
    message: ''
})

</script>
<template>
    <div class="container">
        <div class="mt-10">
            <v-card title="M-Banking" subtitle="Login" text="" variant="tonal">
            <label>Username</label>
            <v-text-field type="text" v-model="data.username" />
               
            <label>Password</label>
            <v-text-field type="password" v-model="data.password" />
        </v-card>
        </div>
        <div>
            <v-btn prepend-icon="$vuetify" variant="text" @click=" login">
                Login
            </v-btn>
        </div>
        <v-snackbar
      v-model="data.snackbar"
    >
      {{ data.pesanLogin }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="data.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </div>
</template>