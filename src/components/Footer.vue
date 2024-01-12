<template>
    <footer class="footer container-fluid fixed">
      <div class="row">
        <p>Taryn-lee Walbrugh Portfolio&copy; {{ currYear }}</p><br><i class="bi bi-telephone-fill">0682714785</i>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style>
.footer {
  background-color: #006D77;
  color: aliceblue;
}
 
  </style>