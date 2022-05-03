<template>
  <hello-world />
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
  },
  mounted() {
    console.log(`the component is now mounted.`);
  },
};
</script>
