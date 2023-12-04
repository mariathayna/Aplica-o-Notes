
<template>
    <div class="form-notes">
      <div class="form-notes__group">
        <label for="nota"></label>
        <textarea class="form-notes__small" id="nota" placeholder="Exp,; Ao ligar falar com Luiza"></textarea>
      </div>
  
      <div class="form-notes__group">
        <label for="potencial">Potencial de Negócio</label>
        <input type="number" id="potencial" placeholder="$00,00" />
      </div>
  
      <div class="form-notes__group">
        <label for="importancia">Categorização</label>
        <select id="importancia" placeholder="Selecione a importância">
          <option value="importante">Importante</option>
          <option value="nao-tao-importante">Não tão importante</option>
          <option value="mega-importante">Mega importante</option>
        </select>
      </div>
  
      <div class="form-notes__group">
        <label for="data">Lembrete</label>
        <input type="date" id="data" placeholder="Selecione uma data" />
      </div>
      <div class="form-notes__buttons">
          <ButtonNotes :customStyle="botaoEstilo1" @click="deleteNote">
            <GoogleIcon class="form-notes__buttondelete"  icon="delete"/>
          </ButtonNotes>
          <ButtonNotes :customStyle="botaoEstilo2" @click="saveNote">
            Salvar
          </ButtonNotes>
        </div>
    </div>
  </template>

  
  <script>
  import ButtonNotes from './ButtonNotes.vue';
  import GoogleIcon from './GoogleIcon.vue';
  import {saveNote, deleteNote} from '@/services/indexedDB'

 
  export default {
    components: {
    ButtonNotes,
    GoogleIcon,
    // TheMask,
},

data() {
    return {
      botaoEstilo1: {
        backgroundColor: '#f1705f', 
        color: '#ffffff', 
        borderRadius: '50%', 
        width: '40px',
        height:'38px',
      },
      botaoEstilo2:{
        backgroundColor: '#0e98f7', 
        color: '#ffffff', 
        borderRadius: '20px', 
        width:'215px'
      },
      nota: '',
      potencial: '',
      importancia: 'importante',
      data: '',
    
    };
},
methods: {
  deleteNote() {
      // Adicione a lógica para excluir a nota
      deleteNote()
        .then(() => {
          // Após excluir, notifique o componente pai para avançar para o próximo passo (CardList)
          this.$emit('nextStep');
        })
        .catch((error) => {
          console.error(`Erro ao excluir a nota: ${error}`);
        });
    },
 
    saveNote() {
      // Adicione a lógica para salvar a nota no IndexedDB
      const note = {
        content: this.nota,
        potencial: this.potencial,
        importancia: this.importancia,
        data: this.data,
      };

      saveNote(note)
        .then(() => {
          // Após salvar, notifique o componente pai para avançar para o próximo passo (CardList)
          this.$emit('nextStep');
        })
        .catch((error) => {
          console.error(`Erro ao salvar a nota: ${error}`);
        });
    },
}
  }
  </script>
  

  <style lang="scss" scoped>
  .form-notes {
    background-color: #f4f3f8; 
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 85px;
    // height: 80vh;

    &__group{
        margin-bottom: 15px;
        
    }

    &__small{
        height: 100px;
        border-radius: 8px;
    }

    &__buttons{
        display: flex;
        justify-content: space-between;
    }

    &__buttondelete{
        font-size: 18px;
        margin-left: -9px;
        margin-top: -1px;
        margin-bottom: 10px;
    }
  }
  label {
    font-weight: 500;
    display: block;
    font-size: 14px;
    color: #929ca2;
    margin-bottom: 12px;
    margin-bottom: 8px;
  }
  
  textarea,
  input,
  select {
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd; 
    border-radius: 20px;
    box-sizing: border-box;
  }
  
  </style>
  