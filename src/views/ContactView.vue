<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
  <div class="container d-flex">
           <div class="row">
             <h2 class="display-2 text-center">Contact</h2>
             <div class="sec1" >
              <form class="align-center"
               action="https://formspree.io/f/xpzgvddd" 
               method="POST"
               style="margin: 0 auto; max-width: 400px;">
               <input name="name" type="text" class="form-control" placeholder="Taryn-lee">
               <br>
               <input name="surname" type="text" class="form-control" placeholder="Walbrugh">
               <br>
               <input name="email" type="email" class="form-control" placeholder="walbrught@gmail.com">
               <br>
               <textarea name="Message" class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
               <br>
               <button type="submit" class="btn btn-info">Submit</button>
             </form>
             </div>
              <div class="sec2">
                <i class="bi bi-facebook"><br>
                  Taryn-lee Walbrugh</i><br>
                  <i class="bi bi-linkedin"><br>
                    Taryn-lee Walbrugh</i>
                    <i class="fa fa-instagram"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-codepen"></i>
               </div>
         </div>
         </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .sec1, .sec2{
    display: flex;
    width: 50%;
  }
  .row {
    text-align: center;
    padding: 20px;
  }
  
  input, textarea, button {
    width: 100%;
    margin-bottom: 10px;
  }

  </style>
  