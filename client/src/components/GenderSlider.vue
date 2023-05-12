<template>
  <div class="gender-slider-container">
    <p class="gender-title">{{ gender }}</p>
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
.gender-title {
  margin: 2px;
  padding: 0px;
}
.vue-slider:hover
  .vue-slider-ltr:hover
  .gender-slider:hover
  .gender-slider:hover {
  background-color: #08e694;
}
.vue-slider-rail {
  background-color: #cdf5e6;
}
.vue-slider-rail:hover {
  background-color: #08e694;
}
.vue-slider:hover .vue-slider-dot-handle-focus {
  border-color: black;
}
.gender-slider-container {
  border: 2px solid #a4e4cb;
  padding: 10px;
  margin: 10px;
  width: 60%;
}
.vue-slider-dot-handle {
  background-color: #a4e4cb;
  border: 2px solid rgb(8, 14, 10);
}
.vue-slider-process {
  background-color: #a4e4cb;
}
.gender-slider {
}
</style>
