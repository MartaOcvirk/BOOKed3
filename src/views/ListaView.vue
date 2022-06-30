<template>

  <!-- Input -->
  <div class="row">
    <div class="col-4">
      <img src="@/assets/djevojkaCita3.jpg" width="515" height="685" alt="Djevojka cita...." />
    </div>
    <div class="col-8">
      <header>
        <h4>Lista za čitanje</h4>
      </header>
      <div class="box1">
        <div class="mt-5">
          <input type="text" v-model="task" placeholder="Unos knjige" class="w-100 form-control" />
          <button class="btn btn-secondary btn-lg" @click="submitTask">
            Prikači
          </button>
        </div>
      </div>

      <!-- table -->
      <div class="box2">
        <table class="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">Knjiga</th>
              <th scope="col" style="width: 120px">Status</th>

              <th scope="col" class="text-center">Obriši</th>

          <th scope="col" class="text-center">Izmjeni</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
              <td>
                <span :class="{ 'line-through': task.status === 'finished' }">
                  {{ task.name }}
                </span>
              </td>
              <td>
                <span class="pointer noselect" @click="changeStatus(index)" :class="{
                  'text-danger': task.status === 'to-do',
                  'text-success': task.status === 'finished',
                  'text-warning': task.status === 'in-progress',
                }">
                  {{ capitalizeFirstChar(task.status) }}
                </span>
              </td>
              
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash"></span>
            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
          
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebaseApp";
import firebase from 'firebase'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      /* Status može biti 'to-do' / 'in-progress' / 'finished' */
      tasks: []
    };
  },
  methods: {
    /**
     * Veliko slovo
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * Promjena statusa
     */
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];

      this.updateCollection();
    },
    /**
     * Brisanje (task) knjige
     */
    deleteTask(index) {
      this.tasks.splice(index, 1);

      this.updateCollection();
    },
    /**
     * Uređivanje (task) knjige
     */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;

      this.updateCollection();
    },
    /**
     * Dodavanje i updatanje (task) knjige
     */
    submitTask() {
      if (this.task.length === 0) return;
      /* updatanje */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        /* dodavanje */
        this.tasks.push({
          name: this.task,
          status: "to-do",
        });
      }
      this.task = "";

      this.updateCollection();
    },
    updateCollection() {
      const listCollection = firebaseApp.collection("/list");
      var user = firebase.auth().currentUser;

      listCollection.where("user", "==", user.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({ list: this.tasks })
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  },
  async mounted() {
    const listCollection = firebaseApp.collection("/list");
    var user = firebase.auth().currentUser;

    listCollection.where("user", "==", user.email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let listBooks = doc.data().list
          this.tasks = listBooks
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.noselect {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.line-through {
  text-decoration: line-through;
}

.btn {
  background-color: rgb(216, 208, 208);
  border-color: rgb(216, 208, 208);
  font-family: Garamond;
  font-size: 20px;
  color: #883b04;
  margin: 10px;
  position: absolute;
  top: 180px;
  left: 495px;
  transform: translate(-210, -210);
}

.mt-5 {
  width: 500px;
  position: center;
  padding: 30px;
  left: 50%;
}

.box1 {
  margin: 30px 10px 30px 280px;
}

.box2 {
  margin: 30px 10px 30px 280px;
}

h4 {
  font-family: Garamond;
  font-size: 45px;
  color: #883b04;
}
</style>