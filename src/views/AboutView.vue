<template>
   <div class="container-1">
    <div class="row">
     <h2 class="display-2 d-flex justify-content-center  text-black">About</h2>
     <div class="col-md-6">
  <div class="personal-info">
    <p class="text-sm text-black">
      Name:<span class="spacer"></span>Taryn-lee<br>
      Surname:<span class="spacer"></span>Walbrugh<br>
      Dob:<span class="spacer"></span>25 August 2000<br>
      Address:<span class="spacer"></span>72 Hockey Crescent<br>Beacon Valley<br>Mitchell's Plain<br>7785<br>
      Contact:<span class="spacer"></span>0682714785/0649430819
    </p>
    <p class="text-sm text-black">
      In my leisure time, I engage in enriching activities such as reading, exploring innovative coding methodologies, and acquiring proficiency in various programming languages. Moreover, I am proficient in both Afrikaans and English languages.
    </p>
  </div>
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
.personal-info {
  background-color: #f0f0f0; /* Set background color */
  padding: 20px; /* Add padding for better readability */
}

@media screen and (max-width: 768px) {
  /* Adjust styling for smaller screens if needed */
}

</style>


