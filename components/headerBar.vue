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
  <div class="w-screen flex flex-row justify-center fixed bg-primary bg-opacity-60">
    <div class=" flex flex-row w-screen   border-b border-gray-200 dark:border-gray-800">
      <UButton class="flex flex-row" :ui="{ rounded: 'rounded-none',  variant:{nothing: 'text-{color}-700 dark:text-{color}-200 disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'}}" color="gray" variant="nothing">
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