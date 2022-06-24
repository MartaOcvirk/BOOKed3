<template>

<div class="row">
 <div class="col-5">
 <img src="@/assets/covjekCita.jpg"
 width="650"
 height="685"
 />
 </div>
 <div class="col-7">
    <div class="kolumna8">
  <h1>BOOKed</h1> 
      <div class="button_align">
        <router-link :to="{ path: '/pregled' }"><button type="button" class="btn1">Unos i pregled pročitanih knjiga</button></router-link>
        <router-link :to="{ path: '/lista' }"><button type="button" class="btn2">Lista knjiga za pročitati</button></router-link>
     
       <a href="https://pula.zaki.com.hr/pages/search.aspx?&currentPage=1&searchById=-1&age=0" class="btn3">E-katalog Gradske knjižnice i čitaonice Pula</a>
      </div>   
 </div>
 </div>
</div>

</template>

<style>

.kolumna8 {
    padding: 50px;
 position: center;
}


.btn1 {
  background-color: #ffffff;
  border:dashed purple 2px;
  color:#883b04;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  position: absolute;
  top: 25%;
  left: 10%;
  tranform: translate(-25, -10);
}

.btn1 {border-radius: 50%;}

.btn2 {
  background-color: #ffffff;
  border:dashed rgb(35, 145, 31) 2px;
  color:#883b04;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  position: absolute;
  top: 50%;
  left: 55%;
  tranform: translate(-50, -55);
}

.btn2 {border-radius: 50%;}

.btn3 {
  background-color: #ffffff;
  border:dashed rgb(245, 85, 11) 2px;
  color:#883b04;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  position: absolute;
  top: 75%;
  left: 10%;
  tranform: translate(-70, -20);
}

.btn3 {border-radius: 50%;}
</style>
