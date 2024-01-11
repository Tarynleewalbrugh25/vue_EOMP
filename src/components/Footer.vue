<template>
    <footer class="footer fixed-bottom bg-light">
      <p>Taryn-lee Walbrugh Portfolio&copy; {{ currYear }}</p>
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
    background-color: #f0f0f0;
    text-align: center;
    padding: 10px 0;
  }
  
 
  </style>