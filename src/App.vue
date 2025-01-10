<template>
  <div id="app">
    <NavBar />
    <div>
      <About />
      <Projects />
      <Education />
      <Experience />
      <Contact />

    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import About from './components/about.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

export default {
  components: {
    NavBar,
    About,
    Projects,
    Contact,
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
