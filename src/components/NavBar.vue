<template>
    <nav class="navbar navbar-expand-lg  sticky-top">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <RouterLink to="/"  class="nav-link text"><i class="bi bi-house"></i>
             Home
           </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./about"><i class="bi bi-file-person"></i>
             About
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./resume"><i class="bi bi-book"></i>
             Education
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./project"><i class="bi bi-kanban"></i>
             Project
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./testimonials"><i class="bi bi-file-earmark"></i>
             Reviews
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./contact"><i class="bi bi-phone-flip"></i>
             Contact
            </RouterLink>
         </li>
       </ul>
     </div>
   </div>
 </nav>
 </template>
 
 <script>
     export default {
        
     }
 </script>
 
 <style scoped>
 .navbar{
  background-color: #83c5be;
 }
 .navbar a {
  color: black;
 }
 </style>
