<template>
  <!-- Projects Section -->
  <section class="bg-gray-100 py-24" id="projects">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-gray-800 text-center">Projects</h2>
      <div class="flex justify-center mt-8">

        <!-- Project Card 1 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <ProductCard
            :title="'Vue & Express Auth + Crud'"
            :description="'This project features user authentication, private routes, global state management and fullstack CRUD actions'"
            :codeUrl="'https://github.com/BC1337/Fullstack-Vue-Express-Auth'"
          />
          
          <!-- Project Card 2 -->
          <ProductCard
            :title="'Vue-Firebase-Auth'"
            :description="'This project highlights an authentication system using Firebase that makes use of local login and oAuth google sign in'"
            :codeUrl="'https://github.com/BC1337/Vue-Firebase-Auth'"
          />

          <!-- Project Card 3 -->
          <ProductCard
            :title="'Portfolio Project'"
            :description="'Nuxt 3, Tailwindcss & Nitro 2.3.3 Project hosted on vercel and mailing done with nodemailer'"
            :codeUrl="'https://github.com/BC1337/Nuxt-Portfolio'"
          />

          <!-- Project Card 4 -->
          <ProductCard
            :title="'Vue + Pinia Todo Manager'"
            :description="'A Todo list manager while learning about Pinia & json-server'"
            :codeUrl="'https://github.com/BC1337/Vue-Pinia-Todo-Manager'"
          />
        </div>

      </div>
    </div>
    <div id="contact"></div>
  </section>
</template>
<script setup>
const filteredCards = () => {
        if (this.selectedFilter === 'all') {
          return this.cards;
        } else if (this.selectedFilter === 'frontend') {
          return this.cards.filter(card => card.category === 'frontend');
        } else if (this.selectedFilter === 'backend') {
          return this.cards.filter(card => card.category === 'backend');
        }
      }
</script>

<style>
    section {
  position: relative;
  overflow: hidden;
}
section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.max-w-sm:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

html {
  scroll-behavior: smooth;
}
</style>