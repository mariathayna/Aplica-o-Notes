
<template>
    <div v-if="show" class="modal-notes">
      <div class="modal-notes__contentt">
        <div class="modal-notes__header">
          <p class="modal-notes__textheader">{{ mainText }}</p>
          <ButtonNotes class="modal-notes__closeheader" @click="hide">
                <span class="material-symbols-outlined card-notes__iconx ">
                  close
                </span>
          </ButtonNotes>
        </div>
        <div class="modal-notes__divider"></div>
         <div class="modal-notes__body">
          <!-- <div class="modal-note__text">
            <p>{{ mainText }}</p>
          </div> -->
          <!-- <div class="modal-notes__divider"></div> -->
          <div class="modal-notes__subtext">
            <p>{{ subText }}</p>
          </div>
          <div class="modal-notes__buttons">
            <ButtonNotes :customStyle="botaoEstilo" class="modal-notes__cancel" @click="cancel">Cancelar</ButtonNotes>
            <ButtonNotes :customStyle="botaoEstilo" class="modal-notes__confirm" @click="confirm">Excluir</ButtonNotes>
          </div>
        </div> 
      </div>
    </div>
  </template>
  
  <script>
import ButtonNotes from './ButtonNotes.vue';

  export default {
    props: {
        show: Boolean,
        mainText: String,
        subText: String,
    },
    methods: {
        hide() {
            this.$emit('update:show', false);
        },
        cancel() {
            this.hide();
            this.$emit('cancel');
        },
        confirm() {
            this.hide();
            this.$emit('confirm');
        },
    },
    components: { ButtonNotes }
};
  </script>
  
  <style lang="scss" scoped>
  .modal-notes {
    position: fixed;
    top: 143px;
    left: 0;
    width: 100%;
    // height: 100%;
    display: flex;
    border-radius: 12px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color:white; 
   
  
  &__contentt {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    // max-width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  &__header{
    display: flex;
    justify-content: space-between;
  }

  &__textheader{
   color: #646569;
   font-weight: 500;
  }
  
  &__closeheader {
    cursor: pointer;
    border:none;
    background-color: #ffff;
    color: #c2c1c6;
    margin-top: -12px;
  }

  
  &__iconx{
    background-color: #c2c1c6;
    font-size: 12px;
  }
  
  &__body {
    text-align: center;
  }
  
  &__text {
    margin-bottom: 20px;
  }
  
  &__divider {
    border-bottom: 1px solid #ccc;
    margin: -6px -18px 20px;
  }
  
  &__subtext {
    margin-bottom: 20px;
    font-size: 13px;
    text-align: left;
  }

  &__buttons{
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  &__cancel{
    background-color: #fff; 
    color: #999b9a;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  &__confirm{
    background-color: #f1705f;
    color:  white;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>

  