<template>
  <div class="=Form">
    <p>Email:</p>
    <p><input type="email" v-model="username" /></p>
    <p>Lozinka:</p>
    <p><input type="password" v-model="password" /></p>
    <p>Ime:</p>
    <p><input type="ime" v-model="name" /></p>
    <p><button class="btn btn-primary" @click="signup()">Pridruži se</button></p>
  </div>
</template>


<script>
import firebase from 'firebase'
import firebaseApp from "../firebaseApp";

export default {
  name: 'Signup',
  data() {
    return {
      username: "",
      password: "",
      name: "",
    }
  },
  methods: {
    signup() {
      console.log(this.$router);

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Uspješna registracija", result);
          this.addEmptyListDocument();
          this.addEmptyHistoryDocument();
          this.$router.replace({ name: 'main' });
        })
        .catch(function (e) {
          console.error('Greška', e);
        });
      console.log('Nastavak');
      // https://blog.logrocket.com/vue-firebase-authentication/
    },
    addEmptyListDocument() {
      const listCollection = firebaseApp.collection("/list");
      var user = firebase.auth().currentUser;

      listCollection.doc().set({
        user: user.email,
        list: []
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    addEmptyHistoryDocument() {
      const historyCollection = firebaseApp.collection("/history");
      var user = firebase.auth().currentUser;

      historyCollection.doc().set({
        user: user.email,
        list: []
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  },
};
</script>


<style scoped>
p {
  font-family: Garamond;
  font-size: 25px;
  color: #883b04;
}

.Form {
  position: center;
}

.btn {
  background-color: rgb(216, 208, 208);
  border-color: rgb(216, 208, 208);
  font-family: Garamond;
  font-size: 25px;
  color: #883b04;
}
</style>