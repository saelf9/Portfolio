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
        <a href="/src/assets/resume.pdf" target="_blank" class="resume-link text-xl text-accent underline hover:text-gold animate__animated animate__fadeIn animate__delay-4.5s">
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

    <!-- Background Shapes Container -->
    <div id="background-shapes" class="background-shapes"></div>
  </section>
</template>

<script>
import { onMounted, nextTick } from 'vue';

export default {
  name: "About",
  setup() {
    let mouseX = 0;
    let mouseY = 0;
    let shapes = [];
    let isMouseMoving = false;

    const createShapes = () => {
      nextTick(() => {
        const container = document.getElementById("background-shapes");
        if (!container) return;
        container.innerHTML = '';

        // Create more shapes (e.g., 30 for a fuller effect)
        for (let i = 0; i < 20; i++) {
          const shape = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          shape.setAttribute("class", "shape");

          // Set size between 5px and 20px (smaller sizes)
          const size = Math.random() * 15 + 5; // Size between 5px and 20px
          shape.setAttribute("width", size);
          shape.setAttribute("height", size);

          // Random shape type (circle, ellipse, rectangle, triangle, polygon)
          const shapeType = Math.floor(Math.random() * 5); // 5 types of shapes
          let svgElement;

          if (shapeType === 0) {
            // Circle
            svgElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            svgElement.setAttribute("cx", size / 2);
            svgElement.setAttribute("cy", size / 2);
            svgElement.setAttribute("r", size / 2);
          } else if (shapeType === 1) {
            // Ellipse
            svgElement = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            svgElement.setAttribute("cx", size / 2);
            svgElement.setAttribute("cy", size / 2);
            svgElement.setAttribute("rx", size / 2);
            svgElement.setAttribute("ry", size / 3);
          } else if (shapeType === 2) {
            // Rectangle
            svgElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            svgElement.setAttribute("x", 0);
            svgElement.setAttribute("y", 0);
            svgElement.setAttribute("width", size);
            svgElement.setAttribute("height", size);
          } else if (shapeType === 3) {
            // Triangle
            svgElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            const points = `${size / 2},0 ${size},${size} 0,${size}`;
            svgElement.setAttribute("points", points);
          } else {
            // Polygon with random sides (3 to 7 sides)
            const sides = Math.floor(Math.random() * 5) + 3;
            let points = '';
            for (let j = 0; j < sides; j++) {
              const angle = (j * 2 * Math.PI) / sides;
              const x = size / 2 + Math.cos(angle) * size / 2;
              const y = size / 2 + Math.sin(angle) * size / 2;
              points += `${x},${y} `;
            }
            svgElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            svgElement.setAttribute("points", points.trim());
          }
          shape.appendChild(svgElement);

          // Random position across the entire page (ensuring no overflow)
          let randomX, randomY;
          const margin = 80;  // Increase margin to avoid overlap

          const cornerProbability = 0.3;
          if (Math.random() < cornerProbability) {
            const corner = Math.floor(Math.random() * 4);
            switch (corner) {
              case 0: // Top-left
                randomX = Math.random() * margin;
                randomY = Math.random() * margin;
                break;
              case 1: // Top-right
                randomX = window.innerWidth - size - Math.random() * margin;
                randomY = Math.random() * margin;
                break;
              case 2: // Bottom-left
                randomX = Math.random() * margin;
                randomY = window.innerHeight - size - Math.random() * margin;
                break;
              case 3: // Bottom-right
                randomX = window.innerWidth - size - Math.random() * margin;
                randomY = window.innerHeight - size - Math.random() * margin;
                break;
            }
          } else {
            // For random positions
            randomX = Math.random() * (window.innerWidth - size);
            randomY = Math.random() * (window.innerHeight - size);
          }

          // Check for overlap with existing shapes (basic collision detection)
          let overlap = false;
          for (let j = 0; j < shapes.length; j++) {
            const existingShape = shapes[j];
            const dx = randomX - existingShape.initialX;
            const dy = randomY - existingShape.initialY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < size + 20) { // If shapes are too close
              overlap = true;
              break;
            }
          }

          // Retry if there was overlap
          if (overlap) {
            i--;
            continue;  // Skip this iteration and try again
          }

          shape.style.left = `${randomX}px`;
          shape.style.top = `${randomY}px`;
          shape.style.position = 'absolute';

          // Set hollow shape: Add stroke and remove fill, make stroke thicker
          const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
          svgElement.setAttribute("stroke", color);
          svgElement.setAttribute("fill", "none"); // Hollow shapes
          svgElement.setAttribute("stroke-width", 2); // Thicker stroke

          container.appendChild(shape);
          shapes.push({ element: shape, initialX: randomX, initialY: randomY });
        }
      });
    };


    const moveShapesWithMouse = () => {
      shapes.forEach(shape => {
        const dx = mouseX - shape.initialX;
        const dy = mouseY - shape.initialY;

        // Move shape toward mouse gradually
        shape.element.style.left = `${shape.initialX + dx * 0.05}px`;
        shape.element.style.top = `${shape.initialY + dy * 0.05}px`;
      });
    };

    // Add event listener to track mouse position
    const updateMousePosition = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      isMouseMoving = true;
    };

    onMounted(() => {
      createShapes();
      window.addEventListener("mousemove", updateMousePosition);

      // Update shapes' positions if the mouse is moving
      setInterval(() => {
        if (isMouseMoving) {
          moveShapesWithMouse();
        }
      }, 16); // Update 60 times per second (60fps)
    });

    return {};
  },
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
/* Hover effect for resume link */
.resume-link {
  transition: color 0.3s ease, transform 0.3s ease;
}
.resume-link:hover {
  color: #ffd700; /* Gold color on hover */
  transform: scale(1.1); /* Slightly enlarge the link */
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
  animation: typewriter 2s steps(14, end) 1s forwards, blink 0.75s step-end infinite;
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
  z-index: 0; /* Ensure the background shapes are behind content */
  background: transparent;
}

.right-column, .middle-column, .left-column {
  z-index: 10;
}

.shape {
  position: absolute;
  stroke: white;
  fill: none; /* Hollow shapes */
}
</style>
