<!-- App.vue -->
<template>
    <div class="card-list">
        <CardNotes  
        v-for="note of list"
        :key="note.id" 
        :data="note" />
    </div>
    <div class="card-list__buttoncreate">
    <ButtonNotes :customStyle="botaoEstilo" @click="navigateToForm">
      + Criar Anotação
    </ButtonNotes>
    </div>
  </template>
  
  <script>
  import ButtonNotes from './ButtonNotes.vue';
  import CardNotes from './CardNotes.vue';
  
  export default {
    components: {
    CardNotes,
    ButtonNotes
},
data() {
    return {
      botaoEstilo: {
        backgroundColor: '#0e98f7', 
        color: '#ffffff', 
        borderRadius: '20px', 
        width:'100%',
      },
    };
  },
    props: {
        list: {
            type: Array,
            default: ()=>[],
        },
    },
    methods: {
    // Método para lidar com o evento delete emitido pelo FormNotes
    deleteNote() {
      // Lógica para lidar com a exclusão da nota
      console.log('Nota excluída');

      // Atualize o componente pai (App.vue) para voltar ao passo 1
      this.$emit('nextStep', 1);
    },

    // Método para lidar com o evento nextStep emitido pelo FormNotes
    nextStep(step) {
      // Atualize o componente pai (App.vue) para avançar para o próximo passo
      this.$emit('nextStep', step);
    },
    navigateToForm() {
      // Adicione a lógica para navegar para a tela do formulário (passo 2)
      this.$emit('nextStep', 2);
    },

    // Método para lidar com o evento click do botão de criar anotação
    // acaoPersonalizada() {
      
    //   // Adicione lógica personalizada se necessário
    // },
  },
  
  };
  </script>
  
  <style lang="scss" scoped>
  .card-list{
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-bottom: 200px;
    padding: 25px;

    &__buttoncreate{
      display: flex;
      justify-content: center;
    }
  }
 
  
  </style>
  