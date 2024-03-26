<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
     <div class="container-fluid">
       <div class="row justify-content-center">
         <div class="col-md-6">
           <div class="rotating-text-wrapper ">
             <h2 class="card-text text-sm">Taryn-lee Walbrugh</h2>
             <h2 class="card-text text-sm">Aspiring Developer</h2>
           </div>
         </div>
       </div>
     </div>
</template>

<script>
export default {}
</script>

<style scoped>

.rotating-text-wrapper {
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
}
.rotating-text-wrapper h2 {
font-size: 4rem;
margin: 0;
padding: 0.3em;
color:white;
box-shadow: 0 10px 10px #CDBCA5 ;
opacity: 0;
animation-duration: 5s;
animation-iteration-count: infinite;
}
.rotating-text-wrapper h2:nth-child(1) {
animation-name: rotating-text-1;
}
@keyframes rotating-text-1 {
0%, 100% {
  opacity: 0;
  transform: translateY(100%);
}
10%, 90% {
  opacity: 1;
  transform: translateY(0);
}
}
.rotating-text-wrapper h2:nth-child(2) {
animation-name: rotating-text-2;
}
@keyframes rotating-text-2 {
0%, 100% {
  opacity: 0;
  transform: translateY(100%);
}
30%, 70% {
  opacity: 1;
  transform: translateY(0);
}
}
.card-text {
  margin: 0; 
}

.text-sm {
  font-size: 0.875rem; 
}
@media (max-width: 576px) {
  p.text-sm {
    font-size: 12px; 
  }
}
</style>
