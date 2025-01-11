<template>
  <section id="projects" class="projects-section text-white py-5">
    <div class="container">
      <h2 class="text-center mb-5 text-black">Projects</h2>

      <!-- Featured Projects Section (Zigzag layout) -->
      <div class="d-flex flex-column gap-4">
        <div
            v-for="(project, index) in featuredProjects"
            :key="index"
            :class="[
      'card text-bg-dark',
      { 'left-card': index % 2 === 0, 'right-card': index % 2 !== 0 }
    ]"
        >
          <img :src="project.image" class="card-img" :alt="project.title" />
          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <h3 class="card-title text-center">{{ project.title }}</h3>
            <p class="card-text text-center">{{ project.description }}</p>
            <p class="text-info text-center">{{ project.stack }}</p>
            <div class="text-center">
              <a
                  :href="project.github"
                  target="_blank"
                  class="btn btn-outline-light btn-lg"
              >
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Small Cards Section -->
      <div class="d-flex justify-content-start mt-5 flex-wrap gap-4">
        <div v-for="(project, index) in smallProjects" :key="index" class="card small-card">
          <img :src="project.image" class="card-img" :alt="project.title" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="text-center">
              <a :href="project.github" target="_blank" class="btn btn-outline-light btn-sm">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portfolioImage from "@/assets/website portfolio pic.png";
import ufoodImage from "@/assets/ufood pic.png";
import intergalacticImage from "@/assets/space.jpg";
import restaloImage from "@/assets/ufood.png";
import TaskTracker from "@/assets/task tracker app.png";
import UFIX from "@/assets/ufix.png";
import Chekers from "@/assets/checkers.png";
import weather from "@/assets/weather app.png";
import algo from "@/assets/algo.png";
import chalet from "@/assets/chalet.png";
export default {
  name: "Projects",
  data() {
    return {
      featuredProjects: [
        {
          title: "UFood website",
          description:
              "A responsive web application for discovering restaurants, sharing favorites, and tracking visits.",
          stack: "JavaScript, HTML, CSS, Vue.js, MongoDB",
          github: "https://github.com/saelf9/ufood-h2024",
          image: ufoodImage,
        },
        {
          title: "Portfolio.js",
          description:
              "A small JS library for clear and succinct data presentation.",
          stack: "Node.js, JavaScript, HTML, CSS, Vue.js",
          github: "https://github.com/saelf9/Portfolio",
          image: portfolioImage,
        },
        {
          title: "Restalo",
          description: "Restaurant Reservation System.",
          stack: "Node.js, Vue.js, MongoDB",
          github: "https://github.com/saelf9/Restalo",
          image: restaloImage,
        },
        {
          title: "Intergalactic Coachella",
          description:
              "A system to manage the ultimate cosmic music festival. From ticket sales to logistics, oxygen supply, artist scheduling, and profit calculation.",
          stack: "Java",
          github: "https://github.com/saelf9/Intergalactic-coachella",
          image: intergalacticImage,
        },

      ],
      smallProjects: [
        {
          title: "Task Tracker",
          description: "A simple web-based task tracker.",
          stack: "Node.js, Vue.js",
          github: "https://github.com/saelf9/Task-tracker",
          image: TaskTracker,
        },
        {
          title: "ChatCLT",
          description: "An app to customize your house build",
          stack: "java, Swing,UML",
          github: "https://github.com/saelf9/Task-tracker",
          image: chalet,
        },
        {
          title: "algorithmic optimisation",
          description: "Efficient Shortest Path Algorithms for Routes on the RTC Network",
          stack: "C++",
          github: "https://github.com/saelf9/Optimisation-algorithmique",
          image: algo,
        },
        {
          title: "Checkers Game",
          description: "A simple checks game",
          stack: "Python",
          github: "https://github.com/saelf9/Checker-game",
          image: Chekers,
        },
        {
          title: "Weather Application",
          description: "A weather app using an open weather API.",
          stack: "Vue.js, Axios",
          github: "https://github.com/saelf9/Weather-app",
          image: weather,
        }, {
          title: "File System",
          description: "A basic file system inspired by UFS to handle file and directory management.",
          stack: "C++",
          github: "https://github.com/saelf9/File-system-UFIX-",
          image: UFIX,
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  background-color: white;
  padding-bottom: 40px;
}

.card {
  height: 400px;
  border: none;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-img {
  object-fit: cover;
  height: 100%;
}

.card-img-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
}

.btn-outline-light {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-outline-light:hover {
  background-color: #fff;
  color: #000;
  transform: scale(1.05);
}

/* Zigzag styles for large cards */
.left-card {
  margin-left: 5%;
}

.right-card {
  margin-right: 5%;
}

/* Large card hover effect */
.left-card, .right-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect: Shadow slides in from the top-left and bottom-right */
.left-card:hover, .right-card:hover {
  transform: translateY(-10px); /* Slight lift */
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.3), -15px -15px 50px rgba(0, 0, 0, 0.1); /* Sliding shadow effect */
}

/* Optional: Add perspective to give the section a bit more depth */
.projects-section {
  perspective: 1000px;
}

/* Small Cards Section */
.small-card {
  width: 22%; /* Adjust width to make cards fit on one line */
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  height: 250px; /* Fixed height for the card */
  background-color: #ccd6f6;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  overflow: hidden; /* Prevent content from overflowing */
}

/* Image Styling */
.small-card .card-img {
  height: 95px; /* Adjusted image height */
  object-fit: cover;
}

/* Card Body Styling */
.small-card .card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures space between title, text, and button */
  flex-grow: 1; /* Allow content to grow if necessary */
  overflow: hidden; /* Prevents overflowing content */
}

/* Title and Text Styling */
.small-card .card-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem; /* Space between title and text */
}

.small-card .card-text {
  font-size: 0.9rem;
  margin-bottom: 1rem; /* Space between text and button */
  flex-grow: 1; /* Ensures space is distributed evenly */
  overflow: hidden; /* Prevents text from overflowing */
}

/* Button Styling */
.small-card .btn-outline-light {
  font-size: 0.8rem;
  padding: 0.5rem;
  background-color: white;
  color: black;
  align-self: center; /* Center the button */
  margin-top: auto; /* Ensure the button stays at the bottom */
  z-index: 1; /* Make sure the button stays above content */
}

.d-flex {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px; /* Space between the cards */
}

</style>
