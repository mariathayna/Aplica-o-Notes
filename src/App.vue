<template>
  <div id="app">
     <CardContainer>
      <div v-if="step === 1" class="content">
        <span class="material-symbols-outlined content-clip">
         attachment
        </span>
        <p class="anote">Anotaçoes</p>
        <p>by Speedio</p>
        <button @click="nextStep">+ Criar Anotação</button>
      </div>
      <div v-if="step === 2" class="second-step">
         <FormNotes @delete="deleteNote" @nextStep="nextStep"/> 
      </div>
      <div v-if="step === 3">
        <CardList :list="notes" @nextStep="navigateToForm" /> 
      </div>
     </CardContainer>
  </div>
</template>

<script>
import CardContainer from './components/CardContainer.vue';
import FormNotes from './components/FormNotes.vue';
import CardList from './components/CardList.vue';

export default {
  components: {
    CardContainer,
    CardList,
     FormNotes,
    
},
  data() {
    return {
      notes: [
            {
          id: 1,
          title: 'Mussum Ipsum, cacilds vidis litro abertis. Morbi viverra placerat justo, vel pharetra turpis. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo. Per aumento de cachacis, eu reclamis.',
          datetime: new Date(),
        },
        {
          id: 2,
          title: 'Mussum Ipsum, cacilds vidis litro abertis. Morbi viverra placerat justo, vel pharetra turpis. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo. Per aumento de cachacis, eu reclamis.',
          datetime: new Date(),
        },
        {
          id: 3,
          title: 'Mussum Ipsum, cacilds vidis litro abertis. Morbi viverra placerat justo, vel pharetra turpis. Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo. Per aumento de cachacis, eu reclamis.',
          datetime: new Date(),
        },
    ],
    step: 1,
    
    };
  },
  

  methods: {
    nextStep() {
      if (this.step === 1) {
        this.step = 2;
      } else if (this.step === 2) {
        this.step = 3;
      }
    },

    deleteNote() {
      // Adicione a lógica para excluir a nota
      console.log('Nota excluída');

      // Volte para o passo 1 após excluir
      this.step = 1;
    },
    navigateToForm(step) {
      this.step = step;
    },
  },
  };
</script>

<style>

#app{
  background: #f4f3f8; 
  font-family: 'Roboto', sans-serif;
  color: #6f6e73;
  font-weight: 400;
  height: 100dvh;
 
}
h2{
  font-weight: 500;
 }
 .content {
  text-align: center;
  margin-top: 170px;
}


.content p {
  margin: 10px 0;
  color:#929ca2;
  font-size: 13px;
}

.content .anote{
  color: #0e98f7;
  font-size: 25px;
  font-weight: 500;
}

.content-clip{
  font-size: 60px;
  color: #929ca2;
  transform: rotate(135deg);
}

.content button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}
.second-step {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f3f8; 
}
@media (max-width: 768px) {
  .content {
    margin-top: 70px;
  }
}

</style>
