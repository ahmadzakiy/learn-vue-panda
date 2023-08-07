<template>
  <button :class="styles" @click="handleClick"><slot></slot></button>
</template>

<script>
import { css } from "../../styled-system/css";

export default {
  name: "Button",
  computed: {
    styles() {
      return css({
        cursor: "pointer",
        borderWidth: "2px",
        borderColor: "sky.100",
        background: "blue.400",
        paddingY: "2",
        paddingX: "4",
        rounded: "xl",
        color: "white",
        fontWeight: "bold",
        transition: "all 250ms",
        _hover: {
          background: "blue.500",
          
        }
      });
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
