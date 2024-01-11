<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
  <div class="container">
    <div class="row">
      <h1 class="display-2 text-center">Testimonials</h1>
    </div>
      </div>
    <div class="card-container d-flex justify-content-center flex-wrap gap-4">
      <div class="card " style="width:18rem;" v-for="info in testimonials" :key="info.id">
        <img 
          :src="info.profile" 
          class="card-img-top w-50"
          loading="lazy"
          alt="profile"
        />
       <div class="card-body">
        <h5 class="card-text text-sm">{{ info.name }} {{ info.surname }}</h5>
        <p class="card-text text-sm">{{ info.quotes }}</p>
       </div>
      </div>
      </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  },
  mounted() {
    this.$store.dispatch('fetchData');
  }
};
</script>

<style>
.card-img-top{
  background-color: #83c5be;
}
.card-body{
  background-color: #83c5be;
}
h5 {
  font-weight: bolder;
}
p {
  font-size: 20px;
}

@media (max-width: 768px) {
  .book {
    height: auto;
  }
}
.card-text {
  margin: 0; /* Remove default margin */
}

.text-sm {
  font-size: 0.875rem; /* Adjust the font size as needed */
}

</style>
