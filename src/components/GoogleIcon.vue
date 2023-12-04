<template>
    <span class="material-symbols-outlined">
        {{ icon }}
      </span>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: '',
        },
    },
}
</script>
