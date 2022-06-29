<template>
    <div class="=Form">
        <p>Email:</p>
        <p><input type="email" v-model="username" /></p>
        <p>Lozinka:</p>
        <p><input type="password" v-model="password" /></p>
        <p><button class="btn btn-primary" @click="login()">Prijavi se</button></p>
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    login() {
        console.log("login try" + this.username);
        console.log(this.$router);

        firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
        console.log('Uspješna prijava', result);
        this.$router.replace({ name: 'main'});
    })
    .catch(function(e) {
        console.error('Greška', e);
        // https://blog.logrocket.com/vue-firebase-authentication/
    });
  },
  },
};
</script>

<style scoped>

p {
font-family: Garamond;
  font-size: 25px;
  color: #883b04;
}

.Form{
  position: center;
}

.btn{
  background-color: rgb(216, 208, 208);
  border-color:rgb(216, 208, 208);
  font-family: Garamond;
   font-size: 25px;
   color: #883b04;
}
</style>