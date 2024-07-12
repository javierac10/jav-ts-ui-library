<template>
    <div class="q-pa-md q-gutter-sm">
      <div class="avatar">
        <q-avatar color="primary" text-color="white">{{ value }}</q-avatar>
      </div>
    </div>
  </template>
<script lang="ts" setup>

  interface Props {
    value: string
  }

  defineProps<Props>();

</script>
<style scoped>
  .avatar {
    background-color: red;
    &:hover {
      background-color: rgba(255,0,0, 0.8);
    }
  }
  
</style>
  