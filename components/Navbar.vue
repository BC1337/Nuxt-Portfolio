<template>
  <nav class="sticky-nav">
    <div class="bg-gray-100 ">
        <div class="flex justify-between items-center bg-white py-4 px-8">
          <!-- Logo -->
          <a href="#home" class="text-2xl font-bold text-gray-800">Home</a>

          <!-- Navbar Links -->
          <div class="flex items-center space-x-4">
            <nuxt-link to="#techstack" class="text-gray-800 hover:text-gray-600">Techstack</nuxt-link>
            <nuxt-link to="#projects" class="text-gray-800 hover:text-gray-600">Projects</nuxt-link>
            <nuxt-link to="#contact" class="text-gray-800 hover:text-gray-600">Contact</nuxt-link>
          </div>
        </div>
    </div>
  </nav>



</template>

<script setup>

</script>

<style scoped>
  .sticky-nav {
  position: sticky;
  top: 0;
  z-index: 100;
}

</style>