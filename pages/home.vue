<template>
  <!-- Allows scrolling to the very top rather than 85% -->
  <body id="home"></body> 
  <div class="bg-gray-100" >
    <!-- Hero Section -->
    <section class="bg-gray-800 py-16" >
      <div class="container mx-auto px-4 py-10">
        <h1 class="text-5xl font-bold text-white text-center">Welcome to My Portfolio</h1>
        <p class="text-xl text-gray-300 text-center mt-4">I'm a Fullstack Web Developer</p>
        <div class="flex justify-center mt-12">
          <a href="#projects" class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md">View Portfolio</a>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="bg-white py-16" >
      <div class="container mx-auto px-4 py-10">
        <h2 class="text-4xl font-bold text-gray-800 text-center">About Me</h2>
        <p class="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">I'm a passionate Fullstack Web Developer with experience in building modern web applications using cutting-edge technologies. I love to create meaningful and interactive user experiences.</p>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="bg-gray-100 py-16" id="projects">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-800 text-center">Projects</h2>
        <div class="flex justify-center mt-8">

          <!-- Project Card 1 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="#" alt="Project 1">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Vue & Express Auth + Crud</h3>
                <p class="text-gray-600 text-base">This project features user authentication, private routes, global state managment and fullstack CRUD actions</p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>

            <!-- Project Card 2 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="#" alt="Project 2">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Vue-Firebase-Auth</h3>
                <p class="text-gray-600 text-base">This project highlights an authentication system using Firebase that makes use of local login and oAuth google sign in</p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>

            <!-- project card 3 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="#" alt="Project 2">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Portfolio Project</h3>
                <p class="text-gray-600 text-base">Nuxt 3, Tailwindcss & Nitro 2.3.3 Project hosted on vercel and mailing done with nodemailer </p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>

            <!-- Project Card 4 -->
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img class="w-full h-32 object-cover" src="#" alt="Project 4">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Vue + Pinia Todo Manager</h3>
                <p class="text-gray-600 text-base">A Todo list manager while learning about Pinia & json-server</p>
              </div>
              <div class="px-6 py-4">
                <a href="#" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </section>

        <!-- Contact Section -->
      <section >   
        <p class="text-4xl font-bold text-gray-800 text-center mt-5">Contact</p>
        <div class="flex justify-center items-center h-screen">
        <form  class="w-96 flex flex-col gap-4  mb-20"  @submit.prevent="submit(form)">
          <div class="flex flex-col w-full">
            <label for="email" class="text-sm">Your E-Mail:</label>
            <input required v-model="form.email" placeholder="youremail@emai.com" type="email" name="email" class="border-none rounded-lg bg-gray-300 bg-opacity-50 py-4 px-6  mt-1" />
          </div>
          <div class="flex flex-col w-full">
            <label for="name" class="text-sm">Your Name</label>
            <input required v-model="form.name" placeholder="Bob" type="text" name="name" class="border-none rounded-lg bg-gray-300 bg-opacity-50 py-4 px-6  mt-1" />
          </div>
          <div class="flex flex-col w-full">
            <label for="subject" class="text-sm">The Subject</label>
            <input v-model="form.subject" placeholder="new project" type="text" name="subject" class="border-none rounded-lg bg-gray-300 bg-opacity-50 py-4 px-6  mt-1" />
          </div>
          <div class="flex flex-col w-full">
            <label for="message" class="text-sm">The Message</label>
            <textarea required v-model="form.message" placeholder="I've got a new project for you!" type="text" name="message" class="border-none rounded-lg bg-gray-300 bg-opacity-50 py-4 px-6  mt-1 min-h-[10rem]"></textarea>
          </div>
          <button type="submit" class="border-none py-4 px-6 rounded-lg bg-orange-500 font-semibold text-gray-100">
            <template v-if="waiting">Loading</template>
            <template v-if="!waiting">Send</template>
          </button>
          <p v-if="errors" class="text-red-500">🔥 Error Error!.</p>
          <p v-if="success" class="text-green-500">📩 Email Sent!</p>
        </form>
      </div>
      </section> 


  </div>
</template>

<script setup >
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const errors = ref(false);
const success = ref(false);
const waiting = ref(false);

async function submit(form) {
  waiting.value = true;
  await $fetch("http://localhost:3000/server/contact.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then(() => {
      errors.value = false;
      success.value = true;
      waiting.value = false;
      form.name = "";
      form.email = "";
      form.subject = "";
      form.message = "";
    })
    .catch(() => {
      errors.value = true;
      success.value = false;
      waiting.value = false;
    });
}


</script>

<style scoped>
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
