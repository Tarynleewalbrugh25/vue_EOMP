<template>
<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="container-1">
  <div class="img" id="blob">
      </div>
      <div class="text">
        <h1 class="text-black">Taryn-lee Walbrugh</h1>
      </div>
          </div>
</template>

<script>
export default {
}
</script>

<style>

.container-1{
  height: 100vh;
}
#blob {
    background-image: url(https://i.ibb.co/1GFxL0B/20231022-161301.jpg);
    width: 450px;
    height: 450px;
    background-size: cover;
    background-position: center center;
    margin: 50px; /* Adjust margin to move image to the left */
    border-radius: 50%; /* Make the image round */
    box-shadow: 0 5px 5px 5px rgb(38, 86, 191);
    animation: animate 5s ease-in-out infinite;
    transition: all 1s ease-in-out;
}

@keyframes animate {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

/* Media Queries */
@media screen and (max-width: 768px) {
    #blob {
        width: 300px;
        height: 300px;
    }
}

@media screen and (max-width: 576px) {
    #blob {
        width: 200px;
        height: 200px;
    }
}

</style>
