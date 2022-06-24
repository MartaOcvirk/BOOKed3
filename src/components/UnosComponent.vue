<template>
<div class="Unos">
  <input style="display: none"
   type="file"
    @change="onFileSelected"
     ref="fileInput">
  <button class="btn btn-secondary btn-lg" @click="$refs.fileInput.click()">Odaberite datoteku</button>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-5">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">Naslov knjige</h5>
        <p class="card-text">Podatci o knjizi</p>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>

export default{
  data() {
    return {
      selectedFile: null
    }
    
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {

    }
  }
}
</script>

<style scoped>

.btn{
  background-color: rgb(216, 208, 208);
  border-color:rgb(216, 208, 208);
  font-family: Garamond;
   font-size: 20px;
   color: #883b04;
   margin: 10px;
}

h5{
  font-family: Garamond;
   font-size: 20px;
   color: #883b04;
}

p{
  font-family: Garamond;
   font-size: 20px;
   color: #883b04;
}
</style>
