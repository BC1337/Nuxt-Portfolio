<template>
    <!-- Contact Section -->
  <section class="bg-gray-800 text-white">   
    <p class="text-4xl font-bold text-white-800 text-center mt-5">Contact</p>
    <div class="flex justify-center items-center h-screen">
      <form  class="w-96 flex flex-col gap-4  mb-20"  @submit.prevent="submit(form)">
        <div class="flex flex-col w-full">
           <label for="email" class="text-sm">Your E-Mail:</label>
          <input required v-model="form.email" placeholder="youremail@emai.com" type="email" name="email" class="border-none rounded-lg bg-gray-300 bg-opacity-50 py-4 px-6  mt-1" />
        </div>
        <div class="flex flex-col w-full">
          <label for="name" class="text-sm">Your Name</label>
          <input required v-model="form.name" placeholder="your name" type="text" name="name" class="border-none rounded-lg bg-gray-300 bg-opacity-50 py-4 px-6  mt-1" />
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
</template>

<script setup>
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
  await $fetch("http://localhost:3000/api/contact", {
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

