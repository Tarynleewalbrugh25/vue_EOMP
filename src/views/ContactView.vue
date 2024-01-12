<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
  <div class="container-fluid">
           <div class="row">
             <h2 class="display-2 d-flex justify-content-center text-white">Contact</h2>
             <div class="sec1" >
              <form class=" colorful-form align-center"
               action="https://formspree.io/f/xpzgvddd" 
               method="POST">
                     <div class="form-group">
                     <input required="" placeholder="Enter your name" class="form-input" type="text">
                   </div>
                   <div class="form-group">
                     <input required="" placeholder="Enter your Surname" class="form-input" type="text">
                   </div>
                   <div class="form-group">
                     <input required="" placeholder="Enter your email" class="form-input" name="email" id="email" type="email">
                   </div>
                   <div class="form-group">
                     <textarea required="" placeholder="Enter your message" class="form-input" name="message" id="message"></textarea>
                   </div>
                   <button class="form-button" type="submit">Submit</button>
                </form>
             </div>
              <div class="sec2">
                <i class="bi bi-facebook">
                  Taryn-lee Walbrugh</i><br>
                  <i class="bi bi-linkedin">
                    Taryn-lee Walbrugh</i><br>
                    <i class="bi bi-envelope">
                      walbrught@gmail.com
                    </i>
               </div>
         </div>
         </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .row {
    text-align: center;
    padding: 20px;
  }
  
  input, textarea, button {
    width: 100%;
    margin-bottom: 10px;
  }
  .colorful-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #83c5be;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
}

textarea.form-input {
  height: 100px;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #006d77;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #83c5be;
}


  </style>
  