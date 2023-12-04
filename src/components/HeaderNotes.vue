<!-- /components/Header.vue -->
<template>
    <header>
      <h1 class="anotes">Anotaçoes</h1>
      <!-- <i @click="fecharTela" class="fas fa-times"></i> -->
      <button @click="closeApp"><span class="material-symbols-outlined">
close
</span></button>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      closeApp() {
        this.$emit('closeApp');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos do cabeçalho */
  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }
  header .anotes {
  font-size: 25px;
}
header button{
    border: none;
    background: #fff;
    font-size: 20px;
}

  </style>
  