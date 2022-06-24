<script setup>
  import UnosComponent from '@/components/UnosComponent.vue';
</script>

<template>

  <h4>Unos i pregled pročitanih knjiga</h4>
 <div class="box">
 <div class="row">
 <div class="col-5">
<UnosComponent/>
<UnosComponent/>
<UnosComponent/>
<UnosComponent/>
<UnosComponent/>
 </div>
 <div class="col-5">
  <div class="kolumna5">
    <UnosComponent/>
    <UnosComponent/>
    <UnosComponent/>
    <UnosComponent/>
    <UnosComponent/>


  </div>
 </div>
 </div>
 </div>

</template>

<style>

h4 {
    position: center;
  font-family: Garamond;
  font-size: 50px;
  color: #883b04;
}

.komulna5{
     position: center;
}

.box{
    margin: 30px 10px 30px 200px;

}

</style>