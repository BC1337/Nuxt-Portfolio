<template>
    <div class="max-w-[75%] bg-white rounded-lg shadow-md p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <img :src="imgSrc" :alt="altText" class="w-20 h-20 mx-auto mb-2 ">
    </div>
</template>

  
  <script setup>
  const props = defineProps({
    imgSrc: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  });
  </script>
  