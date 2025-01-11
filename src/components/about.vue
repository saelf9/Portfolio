<template>
  <section id="about" class="about-section py-40 min-h-screen flex flex-col items-center justify-center">
    <div class="container mx-auto flex items-start gap-12">
      <!-- Left Column: About Me Title and Image -->
      <div class="left-column flex flex-col items-center max-w-lg">
        <h2 class="text-5xl font-bold text-white mb-8 animate__animated animate__fadeIn">About Me</h2>
        <img
            src="@/assets/pixel-avatar.png"
            alt="Profile Picture"
            class="rounded-lg shadow-lg max-w-xs animate__animated animate__fadeIn animate__delay-1s hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Middle Column: Text Content -->
      <div class="middle-column text-white max-w-2xl space-y-6">
        <p class="text-xl leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2s">
          I am a 22-year-old Moroccan student currently studying at Université Laval. I have a strong passion for technology and mathematics, constantly seeking opportunities to create projects and deepen my understanding in these fields.
        </p>
        <p class="text-xl leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2.5s">
          Here are some technologies I have been working with:
        </p>
        <ul class="grid grid-cols-2 gap-x-8 gap-y-4 text-accent list-disc pl-5 mb-6 animate__animated animate__fadeIn animate__delay-3s">
          <li>Python</li>
          <li>Vue.js</li>
          <li>Java</li>
          <li>JavaScript ES6+</li>
          <li>C++</li>
          <li>MATLAB</li>
        </ul>
        <p class="text-xl leading-relaxed mt-4 animate__animated animate__fadeIn animate__delay-3.5s">
          Beyond my studies, I am an avid video game enthusiast, I'm also drawn to social and puzzle games. I enjoy exploring new worlds, solving challenges, and engaging with others. My curiosity extends beyond the digital realm, as I am also passionate about sports. I stay active through swimming, hiking, and bodybuilding, always looking for ways to improve my physical fitness and overall well-being.
        </p>
      </div>

      <!-- Right Column: Social Icons -->
      <div class="right-column flex flex-col items-center justify-start ml-8">
        <a href="mailto:safaeelfattahi2002@gmail.com" class="social-icon mb-4">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/saelf9" target="_blank" class="social-icon mb-4">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/safae-elfattahi-5519a8233/" target="_blank" class="social-icon">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

    <!-- Background Shapes Container -->
    <div id="background-shapes" class="background-shapes"></div>
  </section>
</template>

<script>
export default {
  name: "About",
  mounted() {
    this.createShapes();

    document.addEventListener('mousemove', (e) => {
      this.moveShapes(e);
    });
  },
  methods: {
    createShapes() {
      const container = document.getElementById("background-shapes");
      for (let i = 0; i < 10; i++) {
        const shape = document.createElement("div");
        shape.classList.add("shape");
        container.appendChild(shape);
      }
    },
    moveShapes(e) {
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach(shape => {
        const randomX = (Math.random() - 0.5) * 100; // random movement in X axis
        const randomY = (Math.random() - 0.5) * 100; // random movement in Y axis
        const speed = 0.05;

        const x = e.clientX * speed + randomX;
        const y = e.clientY * speed + randomY;

        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  }
};
</script>

<style scoped>
/* Reset overflow and layout for the body */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Hide horizontal overflow */
}

/* About section styling */
.about-section {
  background-color: #0a192f;
  color: #ccd6f6;
  padding: 6rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow-x: hidden; /* Prevents horizontal overflow */
  width: 100%;
}

/* Container setup */
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
}


.left-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

.middle-column {
  max-width: 600px;
  text-align: left;
  margin-top: 1rem;
}


.left-column img {
  max-width: 350px;
  width: 100%;
  margin-top: 50px;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}


.text-accent {
  color: #ccd6f6;
}


ul {
  margin-top: 1rem;
  list-style-type: disc;
  padding-left: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 1.5rem;
}

ul li {
  color: #ccd6f6;
  transition: transform 0.3s, color 0.3s;
}

ul li:hover {
  transform: scale(1.1);
  color: gold;
}

/* Social icons column */
.right-column {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-icon {
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  color: green;
  transform: scale(1.1);
}
.left-column img:hover {
  transform: scale(1.1);
}
/* Background shapes styling */
.background-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
}

.shape {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.5);
  animation: moveShape 6s ease-in-out infinite;
}

.shape:nth-child(odd) {
  background-color: rgba(0, 255, 0, 0.5);
}

.shape:nth-child(even) {
  background-color: rgba(0, 0, 255, 0.5);
}

@keyframes moveShape {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(100px, 100px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
