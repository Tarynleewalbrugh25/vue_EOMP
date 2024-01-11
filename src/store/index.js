import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value;
    },
    setAbout(state, value) {
      state.about = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setSkills(state, value) {
      state.skills = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
    setProjects(state, value) {
      state.projects = value;
    }
  },
  
  actions: {
    fetchData({ commit }) {
      axios.get('https://tarynleewalbrugh25.github.io/vueEompData/data')
        .then(res => {
          const data = res.data;
          commit('setEducation', data.education);
          commit('setSkills', data.skills);
          commit('setTestimonials', data.testimonials);
          commit('setProjects', data.projects);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  getters: {
  }
});
