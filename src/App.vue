<template>
  <div>
    <NavBar/>
    <div id="home" class="section">
      <HomeView/>
    </div>
    <div id="about" class="section">
      <AboutView/>
    </div>
    <div id="projects" class="section">
      <ProjectView/>
    </div>
    <div id="resume" class="section">
      <ResumeView/>
    </div>
    <div id="testimonials" class="section">
      <TestimonialsView/>
    </div>
    <div id="contact" class="section">
      <ContactView/>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ProjectView from './views/ProjectView.vue';
import ResumeView from './views/ResumeView.vue';
import TestimonialsView from './views/TestimonialsView.vue';
import ContactView from './views/ContactView.vue';
export default {
  components: {
    Footer,
    NavBar,
    HomeView,
    AboutView,
    ProjectView,
    ResumeView,
    TestimonialsView,
    ContactView
  }
}
</script>
<style>
.section {
  height: 100vh; /* Adjust as needed */
  overflow-y: scroll;
}
</style>



