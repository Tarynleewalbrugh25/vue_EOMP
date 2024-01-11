<template>
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4 class="display-4 text-center text-white">Education</h4>
        <div class="card-container d-flex flex-wrap justify-content-center gap-4">
          <div class="card mb-3" style="width:18rem;" v-for="info in education" :key="info.id">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">{{ info.year }}<br>{{ info.place}}</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm">{{ info.description }}<br>{{ info.type }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4 class="display-4 text-center text-white">Skills</h4>
        <div class="card-container d-flex flex-wrap justify-content-center gap-4">
          <div class="card mb-3" style="width:18rem;" v-for="info in skills" :key="info.id">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <p class="card-text">{{ info.title }}</p>
                </div>
                <div class="card-back">
                  <p class="card-text text-sm">{{ info.experience }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills
    }
  },
  mounted() {
    this.$store.dispatch('fetchData');
}
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color:#006d77;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #006d77;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color:#83c5be;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #83c5be;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}
@media (max-width: 576px) {
  p.text-sm {
    font-size: 14px; /* Adjust the font size as needed */
  }
}
.card-text {
  margin: 0; /* Remove default margin */
}

.text-sm {
  font-size: 0.875rem; /* Adjust the font size as needed */
}

</style>