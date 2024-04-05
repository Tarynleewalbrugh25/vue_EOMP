<template>
    <NavBar/>
      <HomeView/>
      <AboutView/>
      <ProjectView/>
      <ResumeView/>
      <TestimonialsView/>
      <ContactView/>
    <Footer/>
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
</style>



