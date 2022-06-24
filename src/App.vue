
<template>

  <div id="app">
    <nav id="nav" class=" navbar navbar-light bg-light">
      <a class="navbar-brand">
        <h1> BOOKed </h1>
      </a>

      <router-link to="/">
        <h2>Home</h2>
      </router-link>
      <router-link to="/login">
        <h2>Prijava</h2>
      </router-link>
      <router-link to="/signup">
        <h2>Pridruži se</h2>
      </router-link>
      <a @click="logout()"><h2>Odjava</h2></a>
   </nav>
  </div>
  <router-view />
   
</template>


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

<!--
<script>
/*import { firebase } from '@/firebase'; */

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log(user.email);
  } else {
    // User is not signed in.
    console.log('No user');
  }
});

export default {
  setup() {
    
  },

methods: {
  logout() {
    firebase
    .auth()
    .signOut()
    .then(() => {
      this.$router.push({ name: 'home'});
    });
  },
},
}

</script>
-->