<script setup lang="ts">

const links = [{
  label: 'Projects',

  }, {
  label: 'Blog',
  }, {
  label: 'Contact Me',
}]

</script>

<template>
  <div class="w-screen flex flex-row justify-center">
    <div class=" flex flex-row w-screen   border-b border-gray-200 dark:border-gray-800">
      <UButton class="flex flex-row" color="transparent">
        <NuxtImg src="/image/test.png" width="70"/>
        <div style="font-family: Kode Mono, sans-serif; font-size: 2.5rem; ">
          BDP.blue
        </div>
      </UButton>
      <UHorizontalNavigation :links="links"/>
    </div>

  </div>
</template>

<style scoped>

</style>