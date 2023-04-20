<template>
  <div>
    <p>{{ gender }}</p>
    <vue-slider class="gender-slider" v-model="value" />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    VueSlider,
  },
  props: {
    gender: String,
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>
<style>
.gender-slider {
}
</style>
