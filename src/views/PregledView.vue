<template>

  <div class="row">
    <div class="col-4">
      <img src="@/assets/djevojkaCita4.jpg" width="542" height="685" alt="Djevojka cita...." />
    </div>
    <div class="col-8">
      <header>
        <h4>Unos i pregled pročitanih knjiga</h4>
      </header>
      <div class="Form">
        <p>Naslov knjige:</p>
        <p><input type="text" v-model="title" /></p>
        <p>Autor knjige:</p>
        <p><input type="text" v-model="author" /></p>
        <p>Ocjena:</p>
        <p><input type="number" v-model="mark" /></p>
        <p><button class="btn btn-primary" style="text-font: 20px;" @click="submitRecord">Unesi knjigu</button></p>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Naslov knjige</th>
            <th scope="col">Ime autora</th>
            <th scope="col">Ocjena</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="(item, index) in history" :key="index">
            <th scope="row">{{index}}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.rate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebaseApp";
import firebase from 'firebase'

export default {
  name: 'Unos_p_knjige',
  data() {
    return {
      title: "",
      author: "",
      mark: "",
      history: []
    }
  },

  methods: {
    submitRecord() {
      this.history.push({
        title: this.title,
        author: this.author,
        rate: this.mark,
      });

      this.updateCollection();
    },
    updateCollection() {
      const historyCollection = firebaseApp.collection("/history");
      var user = firebase.auth().currentUser;

      historyCollection.where("user", "==", user.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({ list: this.history })
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  },
  async mounted() {
    const historyCollection = firebaseApp.collection("/history");
    var user = firebase.auth().currentUser;

    historyCollection.where("user", "==", user.email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let listBooks = doc.data().list
          this.history = listBooks
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
};
</script>


<style>
h4 {
  position: center;
  font-family: Garamond;
  font-size: 45px;
  color: #883b04;
}

p {
  font-family: Garamond;
  font-size: 20px;
  color: #883b04;
}

th {
  position: center;
  font-family: Garamond;
  font-size: 25px;
  color: #883b04;
}

td {
  position: center;
  font-family: Garamond;
  font-size: 20px;
  color: #883b04;
}
</style>
