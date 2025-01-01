<template>
  <nav class="navbar fixed-top text-white shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <a href="#" class="navbar-brand text-white">Safae Elfattahi</a>

      <!-- Navigation Links -->
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#projects">Projects</a>
        </li>
      </ul>

      <!-- Social Icons -->
      <div class="d-flex">
        <a href="mailto:safaeelfattahi2002@gmail.com" class="text-white me-3">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/saelf9" target="_blank" class="text-white me-3">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/safae-elfattahi-5519a8233/" target="_blank" class="text-white">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #0a192f; /* Replace with your desired color */
  z-index: 1030; /* Ensure it stays above other elements */
  font-size: 0.75rem; /* Smaller text for compact navbar */

}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.flex.space-x-6 a {
  padding: 0 8px; /* Adds spacing between links */
}
.flex.space-x-4 a {
  font-size: 1rem;
  padding: 0 5px;
}
</style>
