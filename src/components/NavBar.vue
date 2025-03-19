<template>
  <nav class="navbar fixed-top text-white shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <a href="#" class="navbar-brand text-white">Safae Elfattahi</a>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-button" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Navigation Links -->
      <ul :class="['nav', { 'mobile-hidden': !isMenuOpen }]">
        <li class="nav-item">
          <a class="nav-link text-white" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { isMenuOpen: false };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #0a192f;
  z-index: 1030;
  font-size: 1.1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
}

.navbar .nav-item {
  margin-left: 15px;
}

.navbar .nav-link {
  padding: 0.8rem;
  color: white;
  transition: color 0.3s ease, transform 0.2s ease;
  position: relative;
}

.navbar .nav-link:hover {
  color: orange;
}

.navbar .nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: orange;
  transition: width 0.3s ease;
}

.navbar .nav-link:hover::after {
  width: 100%;
}
/* Mobile View */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    position: absolute;
    background: #0a192f;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 10px;
  }

  .mobile-hidden {
    display: none;
  }

  .mobile-menu-button {
    display: block;
    font-size: 1.5rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
}

@media (min-width: 769px) {
  .mobile-menu-button {
    display: none;
  }
}
</style>
