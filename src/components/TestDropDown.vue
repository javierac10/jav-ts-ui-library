<template>
    <div class="q-pa-md">
      <q-btn-dropdown color="primary" label="Dropdown Button">
        <q-list>
          <q-item v-for="element in list" clickable v-close-popup @click="onItemClick(element)">
            <q-item-section>
              <q-item-label>{{ element.label }}</q-item-label>
            </q-item-section>
          </q-item>
  
          <!-- <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>
  
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item> -->
        </q-list>
      </q-btn-dropdown>
    </div>
  </template>
  
  <script lang="ts" setup>

  interface DropdownElement {
    id: string;
    label: string;
  }

    interface Props {
        list: DropdownElement[]
    }

    defineProps<Props>();

        const onItemClick = (e: DropdownElement) => {
            console.log('dropDown element', e)     
        }

  </script>
  <style scoped>
  .q-item__label {
    color: red!important;
  }
</style>