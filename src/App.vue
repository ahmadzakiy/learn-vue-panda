<template>
  <div :class="center({ height: '100vh' })">
    <Button @click="handleAlert">Click Me</Button>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import { center } from "../styled-system/patterns";

export default {
  name: "App",
  components: {
    Button,
  },
  methods: {
    center,
    handleAlert() {
      alert("Button Clicked");
    },
  },
};
</script>
