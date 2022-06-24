<script setup>
  import SignupComponent from '@/components/SignupComponent.vue';
</script>


<template>
<div class="row">
 <div class="col-4">
 <img src="@/assets/djevojkaCita2.jpg"
 width="490"
 height="685"
 />
 </div>
 <div class="col-8">
  <div class="kolumna8">
  <h1>Pridruži se!</h1>
  <SignupComponent />
  </div>
 </div>
 </div>

</template>


<script>
    console.log("Signup please!!!");
</script>

<style>

.kolumna8 {
    padding: 50px;
 position: center;
}

</style>