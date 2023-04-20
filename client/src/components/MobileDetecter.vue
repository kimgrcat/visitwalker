<template>
  <div id="app">
    <div v-if="$isMobile()">MOBILE</div>
    <div v-else>DESKTOP OR TABLET</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$isMobile());
  },
};
</script>
