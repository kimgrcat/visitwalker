<template>
  <div class="camera-container">
    <camera ref="camera" :resolution="{ width: 500, height: 400 }" autoplay></camera>
    <button @click="cameraAction('snap')">Snapshot</button>
    <img id="pic"/>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Camera from "simple-vue-camera";

export default defineComponent({
    setup() {
      console.log('Camera setup..');
      console.log('taken picture')        
    },
    mounted() {
        console.log(`The camera component is now mounted.`)
    },
    updated() {
        console.log('Camera updated, data changed.')
    },
    methods: {
      cameraAction(opt) {
      if (opt === "snap") {
        const blob = this.$refs.camera?.snapshot();
        blob.then((data) => {
          console.log(data);
          var urlCreator = window.URL || window.webkitURL;
          var imageUrl = urlCreator.createObjectURL(data);
          document.querySelector("#pic").src = imageUrl;
        });
      }
    },
    },
    components: {
        Camera,
    },
});
</script>
<style>
.camera-container{
  margin-left: 10px;
  margin-top: 50px;
  max-width: 500px;
  max-height: 450px;
}
</style>