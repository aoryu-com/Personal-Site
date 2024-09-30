<script setup lang="ts">
const img = useImage()
</script>

<template>
  <div class="w-lvw h-lvh overflow-clip " id="image-container">
    <NuxtImg
      src= "/image/placeholders/nebular.webp"
      fit="outside"
    />
  </div>
</template>

<style scoped>
.foggy{
  backdrop-filter: blur(10px);
}
</style>