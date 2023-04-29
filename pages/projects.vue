<template>
     <!-- Projects Section -->
     <section class="bg-gray-100 py-16" id="projects">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-800 text-center">Projects</h2>
        <div class="flex justify-center mt-8">

          <!-- Project Card 1 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="@/assets/img/codePic.jpeg" alt="Project 1">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Vue & Express Auth + Crud</h3>
                <p class="text-gray-600 text-base">This project features user authentication, private routes, global state managment and fullstack CRUD actions</p>
              </div>
              <div class="px-6 py-4">
                <a href="https://github.com/BC1337/Fullstack-Vue-Express-Auth" target="_blank" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Code</a>
              </div>
            </div>

            <!-- Project Card 2 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="@/assets/img/codePic2.jpeg" alt="Project 2">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Vue-Firebase-Auth</h3>
                <p class="text-gray-600 text-base">This project highlights an authentication system using Firebase that makes use of local login and oAuth google sign in</p>
              </div>
              <div class="px-6 py-4">
                <a href="https://github.com/BC1337/Vue-Firebase-Auth" target="_blank" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Code</a>
              </div>
            </div>

            <!-- project card 3 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="@/assets/img/codePic4.jpeg" alt="Project 2">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Portfolio Project</h3>
                <p class="text-gray-600 text-base">Nuxt 3, Tailwindcss & Nitro 2.3.3 Project hosted on vercel and mailing done with nodemailer </p>
              </div>
              <div class="px-6 py-4">
                <a href="https://github.com/BC1337/Nuxt-Portfolio" target="_blank" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Code</a>
              </div>
            </div>

            <!-- Project Card 4 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="@/assets/img/codePic3.jpeg" alt="Project 4">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Vue + Pinia Todo Manager</h3>
                <p class="text-gray-600 text-base">A Todo list manager while learning about Pinia & json-server</p>
              </div>
              <div class="px-6 py-4">
                <a href="https://github.com/BC1337/Vue-Pinia-Todo-Manager" target="_blank" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </section>
</template>

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