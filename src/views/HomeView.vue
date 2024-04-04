<template>
  <div class="container-fluid">
    <div class="row">
      <div class="display-3" id="Home">
        <!-- <h2>Home</h2> -->
          <div class="row justify-content-center m-3 mb-2" id="HomeText">
            <p class="homeText text-dark text-sm-center"></p>
          </div>
          <div class="front row d-block d-flex m-3 mb-5" id="homeImages">
          </div>
          <div class="back">
          </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HomeView',
  components: {},
  mounted(){
    this.typeWriter('name', 'Taryn-lee Walbrugh, Aspiring Full Stack Developer');
  },
  methods:{
    typeWriter(targetId, text, speed =100){
      const typer = document.getElementById('HomeText');
  if (typer) {
    let i = 0;
    const typeWriterInterval = setInterval(() => {
      if (i < text.length) {
        typer.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typeWriterInterval);
      }
    }, speed);
  }
},
},
}
</script>

<style>
@media screen and (max-width < 360){
  img [alt="cat&owner"]{
    display: block;
    position: relative;
  }
}
.row img [alt="cat&owner"]{
  position: relative;
  overflow: hidden;
}
</style>