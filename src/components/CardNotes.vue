<template>
    <div class="card-notes">
      <GoogleIcon  class="card-notes__cliproute" icon="attachment"/>
      <div class="card-notes__texts">
        <h3 class="card-notes__title">{{ data.title }}</h3>
        <p class="card-notes__datetime">{{ formatDatetime(data.datetime) }}</p>
      </div>
      <button class="card-notes__button"  @click="mostrarModal">
        <GoogleIcon class="card-notes__icon" icon="delete"/>
      </button>
      <ModalNotes
      :show="showConfirmationModal"
      @cancel="fecharModal"
      @confirm="excluirNota"
      :mainText="'Deseja excluir esta anotaçao'"
      :subText="'Você está prestes a deletar uma anotação e esta ação não poderá ser desfeita. Tem certeza que deseja excluí-la?'"
    />
    
    </div>
    </template>
     
      
       <!-- <ModalNotes>
       <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-close" @click="hideModal">×</span>
        </div>
        <div class="modal-body">
          <div class="modal-text">
            <p>Deseja excluir realmente esta nota?</p>
            <button class="card-container__close-button" @click="closeApp">
                <span class="material-symbols-outlined card-container__icon">
                  close
                </span>
            </button>
          </div> -->
          <!-- <div class="modal-buttons">
            <button class="modal-close" @click="hideModal">Close</button>
            <button class="modal-cancel" @click="hideModal">Cancelar</button>
            <button class="modal-confirm" @click="confirmDelete">Excluir</button>
          </div> -->
        <!-- </div>
      </div>
       </div>
       </ModalNotes>
    </div> -->
          
       
    
    
    <!-- <ModalNotes v-if="showConfirmationModal" @confirm="excluirNota" @cancel="fecharModal">
      <p class="card-notes__textone">Deseja excluir esta anotação</p>
      <p>Você esta prestes a deletar uma anotação e esta ação não poderá ser desfeita. 
        <span>Tem certeza que deseja exclui-la?</span></p>
    </ModalNotes> -->
    
  
  
  <script>
import GoogleIcon from './GoogleIcon.vue';
import ModalNotes from './ModalNotes.vue';


  export default {
    components: { GoogleIcon, ModalNotes },
    props: {
        data: {
            type: Object,
            default: null,
        },
    },
    data() {
    return {
      showConfirmationModal: false,
    };
  },

    mounted() {
      console.log(this.data)
    },

    methods: {
        formatDatetime(dataHora) {
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return new Date(dataHora).toLocaleDateString('pt-BR', options);
        },
        remove(id) {
           this.$emit('remove', id)
        },
        mostrarModal() {
      this.showConfirmationModal = true;
    },
    fecharModal() {
      this.showConfirmationModal = false;
    },
    excluirNota() {
      // Adicione a lógica real para excluir a nota
      this.$emit('remove', this.data.id);
      this.showConfirmationModal = false;
    },
    //     showModal() {
    //   this.showDeleteModal = true;
    // },
    // hideModal() {
    //   this.showDeleteModal = false;
    // },
    // confirmDelete() {
    //   this.$emit('remove', this.data.id);
    //   this.hideModal();
    // },
      //   mostrarModal() {
      //      this.showConfirmationModal = true;
      //   },
      //   fecharModal() {
      //       this.showConfirmationModal = false;
      //   },
      //   excluirNota() {
      // // Adicione a lógica real para excluir a nota
      //   this.$emit('remove', this.data.id);
      //   this.showConfirmationModal = false;
      //   },
    },
   
};
  </script>
  
  <style lang="scss" scoped>
  .card-notes{
    display: grid;
    grid-template-columns: 30px 1fr 50px;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 8px;

    &__cliproute{
      font-size:20px;
      color: #929ca2;
      transform: rotate(135deg);
      margin-right: 8px;
    }
    

    &__icon{
      font-size:20px;
      color: #f1705f;
    }

    &__textone{
      color: #68696b;
      font-weight:500;
    }

    &__texts{
      display: flex;
      flex-direction: column;
      row-gap: 4px;
    }

    &__title{
      text-decoration: underline;
      font-weight: 500;
      overflow: hidden;
     -webkit-line-clamp: 1;
     -webkit-box-orient: vertical;
     display: -webkit-box;
     font-size: 14px;
    } 

    &__datetime{
      font-size: 11px;
    }
    

    &__button{
      border:none;
      background-color:transparent;
      color: lightcoral;
      grid-column-end: none;
    }
  }
  </style>
  
