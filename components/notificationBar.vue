<script setup lang="ts">
let Open = ref(true);
onMounted(()=>{
  document!.getElementById("notification-close-button")!.addEventListener('click',()=>{
    Open.value = false;
  })
})
</script>

<template>
  <UAlert
      v-show='Open'
      class="fixed  top-10 w-2/3 items-center "
      style="  margin: 0 50vw auto ; transform: translateX(-50%);"
      :close-button="{ id:'notification-close-button',  icon: 'i-heroicons-x-mark-20-solid',   variant: 'link', padded: false }"
      title="This Site Is Under Development"
      icon="i-material-symbols:warning"
      description="This is a developmental site that may contain broken/laggy/jank code, your mileage will vary."
  />
</template>

<style scoped>

</style>