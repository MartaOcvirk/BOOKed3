<template>
  <div class="row">
    <div class="col-6">
      <img src="@/assets/djevojkaCita1.jpg" width="785" height="685" alt="Djevojka cita...."/>
    </div>
    <div class="col-6">
        <header>
        <h3>BOOKed</h3>
      </header>
      <div class="Button">
        <router-link :to="{ path: '/signup' }"><button type="button" class="btn btn-secondary btn-lg">Pridruži se</button></router-link>
    </div>
  </div>
  </div>
</template>


<script>

</script>

<style>
h3 {
  font-family: Garamond;
  font-size: 50px;
  color: #883b04;
  position: absolute;
  top: 20%;
  left: 40%;
  transform: translate(-20, -40);
}

.btn{
  background-color: rgb(216, 208, 208);
  border-color:rgb(216, 208, 208);
  font-family: Garamond;
   font-size: 25px;
   color: #883b04;
}

.Button{
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50, -45);
}
</style>