<template>
  <section id="education" class="section py-20 text-white">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-4 text-left text-accent">Education</h2>
      <ul class="list-disc pl-6 text-left">
        <li class="mb-4">
          <strong>Preparatory Studies - Software Engineering</strong> - Université Laval, 2021
        </li>
        <li class="mb-4">
          <strong>Bachelor’s in Software Engineering</strong> - Université Laval, expected graduation in 2026
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
#education {
  background-color: #0a192f;
  padding: 4rem 2rem;
}

.text-accent {
  color: #ccd6f6;
}

#education ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: white;
}

#education ul li {
  margin-bottom: 0.5rem;
}
</style>
