<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#256ef1"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-headset-icon lucide-headset"
  >
    <path
      d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
    />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
  </svg>
</template>
<script>
export default {
  name: 'HelpIcon',
};
</script>
<style scoped>
svg {
  transition: transform 0.2s ease;
}

svg:hover {
  transform: scale(1.1);
}
</style>
