<script setup>
  import LoginComponent from '@/components/LoginComponent.vue';
</script>

<template>

<div class="row">
 <div class="col-5">
 <img src="@/assets/ribarCita.jpg"
 width="650"
 height="685"
 />
 </div>
 <div class="col-7">
  <div class="kolumna7">
  <h1>Prijava!</h1>
  <LoginComponent />
  </div>
 </div>
 </div>

</template>

<script>
  console.log("Login please!!!");
</script>

<style>

.kolumna7 {
    padding: 50px;
 position: center;
}

</style>