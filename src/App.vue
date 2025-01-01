<template>
  <div id="app">
    <NavBar />
    <div>
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import About from './components/about.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';

export default {
  components: {
    NavBar,
    Home,
    About,
    Education,
    Experience,
    Projects,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth; /* Enables smooth scrolling */
}

#app {
  background-color: #0a192f;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

</style>
