<template>
    <button :class="customClass" :style="customStyle" @click="handleClick">
      <slot></slot>
    </button>
</template>
  
  <script>
  export default {
    props: {
      customClass: String,
      customStyle: Object,
    },
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #3498db;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }
  
  .custom {
    background-color: #e74c3c;
  }
  </style>
  