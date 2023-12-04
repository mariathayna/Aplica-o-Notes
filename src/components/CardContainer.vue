<template>
    <div class="card-container">
        <div class="card-container__header">
            <h2 class="card-container__anotes">Anotaçoes</h2>
             <button class="card-container__close-button" @click="closeApp">
                <span class="material-symbols-outlined card-container__icon">
                  close
                </span>
            </button>
        </div>
       <div class="card-container__content">
        <slot></slot>
       </div>
    </div>
</template>

<script>
export default {
  methods: {
    closeApp() {
        window.close();
    //   this.$emit('closeApp');
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container{
    background-color:#f4f3f8;
    border-radius: 6px;
    height: 100%;

    &__header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 25px;
        
    }

    &__anotes{
        // color: #1a1a1a;
        color: #6a6b70;
        font-size: 20px;
        padding: 15px;
    }

    &__close-button{
        border:none;
        background-color: #f4f3f8;
        font-size: 20px;
    }

    &__icon{
        color: #c2c1c6;
    }

    // &__content{
    //     // padding-left:23px;
    //     // padding-right: 23px;
    //     // margin-top: -45px;
    // }
}

</style>