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
      <div class="middle-column text-white max-w-2xl space-y-14">
        <!-- Added Typewriter Effect for Introduction -->
        <h1 class="text-6xl font-extrabold mb-16">
          <span id="typewriter" class="typewriter">Hi, I'm Safae</span>
        </h1>

        <p class="text-xl leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2.5s">
          I am a 22-year-old Moroccan student currently studying at Université Laval. I have a strong passion for technology and mathematics, constantly seeking opportunities to create projects and deepen my understanding in these fields.
        </p>
        <p class="text-xl leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-3s">
          Here are some technologies I have been working with:
        </p>
        <ul class="grid grid-cols-2 gap-x-8 gap-y-4 text-accent list-disc pl-5 mb-6 animate__animated animate__fadeIn animate__delay-3.5s">
          <li>Python</li>
          <li>Vue.js</li>
          <li>Java</li>
          <li>JavaScript ES6+</li>
          <li>C++</li>
          <li>MATLAB</li>
        </ul>
        <p class="text-xl leading-relaxed mt-4 animate__animated animate__fadeIn animate__delay-4s">
          Beyond my studies, I am an avid video game enthusiast, I'm also drawn to social and puzzle games. I enjoy exploring new worlds, solving challenges, and engaging with others. My curiosity extends beyond the digital realm, as I am also passionate about sports. I stay active through swimming, hiking, and bodybuilding, always looking for ways to improve my physical fitness and overall well-being.
        </p>
        <!-- Added Link to Resume with Hover Effect -->
        <a :href="resumeUrl" target="_blank" class="resume-link text-xl text-accent underline hover:text-gold animate__animated animate__fadeIn animate__delay-4.5s">
          View My Resume
        </a>
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
  </section>
</template>
<script>
import resume from '@/assets/resume.pdf'; // Ensure the path is correct

export default {
  name: "About",
  data() {
    return {
      resumeUrl: resume,
    };
  }
};
</script>

<style scoped>
/* Reset overflow and layout for the body */
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Hide horizontal overflow */
}

/* About section styling */
.about-section {
  background-color: #0a192f; /* Dark blue background */
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

/* Typewriter effect */
@keyframes typewriter {
  from { width: 0; }
  to { width: 13.5ch; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  font-family: monospace;
  width: 13.5ch;
  animation: typewriter 3s steps(14, end) 1s forwards, blink 0.75s step-end infinite;
}

/* Hover effect for resume link */
.resume-link {
  transition: color 0.3s ease, transform 0.3s ease;
}
.resume-link:hover {
  color: #ffd700; /* Gold color on hover */
  transform: scale(1.1); /* Slightly enlarge the link */
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


.right-column, .middle-column, .left-column {
  z-index: 10;
}

.shape {
  position: absolute;
  stroke: white;
  fill: none; /* Hollow shapes */
}

@media (max-width: 768px) {
  .right-column {
    display: none; /* Hides the social icons in mobile view */
  }

  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left-column img {
    max-width: 80%;
  }

  .middle-column {
    max-width: 90%;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}

</style>
