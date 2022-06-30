<template>

  <div id="app">
    <nav id="nav" class=" navbar navbar-light bg-light">
      <a class="navbar-brand">
        <h1> BOOKed </h1>
      </a>

      <router-link to="/" v-if="!isLoggedIn">
        <h2>Home</h2>
      </router-link>
      <router-link to="/main" v-if="isLoggedIn">
        <h2>Home</h2>
      </router-link>
      <router-link to="/login" v-if="!isLoggedIn">
        <h2>Prijava</h2>
      </router-link>
      <router-link to="/signup" v-if="!isLoggedIn">
        <h2>Pridruži se</h2>
      </router-link>
      <a @click="logout" v-if="isLoggedIn">
        <h2>Odjava</h2>
      </a>
    </nav>
  </div>
  <router-view />

</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(true)

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // ako imamo korisnika
  } else {
    isLoggedIn.value = false // ako nemamo korisnika
  }
})
const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      router.push('/');
    }, error => {
      console.log(error)
    })
}
</script>

<style lang="css">
h1 {
  font-family: Garamond;
  font-size: 33px;
  color: #883b04;
}

h2 {
  font-family: Garamond;
  font-size: 25px;
  color: #883b04;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>