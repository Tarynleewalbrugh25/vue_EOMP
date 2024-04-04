<template>
   <div class="container">
    <div class="row">
     <h2 class="display-2 d-flex justify-content-center">About</h2>
     <div class="col-md-6">
          <img class="img-fluid rounded-4" src="https://i.ibb.co/1GFxL0B/20231022-161301.jpg" loading="lazy" alt="profile">
        </div>
       <div class="col-md-6">
        <p class="text-sm">NAME:<span class="spacer"> </span>Taryn-lee</p>
        <p class="text-sm">SURNAME:<span class="spacer"> </span>Walbrugh</p>
        <p class="text-sm">DOB:<span class="spacer"> </span>25 August 2000</p>
        <p class="text-sm">ADDRESS:<span class="spacer"> </span>72 Hockey Crescent<br>Beacon Valley<br>Mitchell's Plain<br>7785
         </p>
         <p class="text-sm">CONTACT:<span class="spacer"> </span>0682714785/0649430819</p>
         <p class="text-sm">LANGUAGES:<span class="spacer"> </span>English & Afrikaans</p>
         <p class="text-sm">HOBBIES:<span class="spacer"> </span>During my down time i enjoy reading,<br> cooking and learning new programming languages and the .</p>
       </div>
     </div>
   </div>
</template>

<script>

export default {

}
</script>

<style>
.spacer {
 padding-right: 25px; 
}
.text-sm {
 font-size: 0.875rem; 
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-md-6 {
  text-align: center;
}
.img-fluid {
  width: 200px; /* Adjust the width as needed */
  display: block;
  margin: 0 auto; /* Center the image */
}

.container {
  margin: 20px; /* Adjust the margin as needed */
}
h2.display-2 {
  margin-bottom: 60px; /* Adjust the margin between the heading and content */
}
</style>


