<template>
  <div>
    <q-btn-dropdown
      :color="color"
      :label="label"
      :text-color="textColor"
      :dropdown-icon="dropIcon"
      :auto-close="autoClose"
      :transition-show="tranShow"
      :transition-hide="tranHide"
      :loading="loading"
      :disable-dropdown="disable"
      :disable-main-btn="disableMain"
      :icon="icon"
      :size="size"
      :outline="outline"
      :flat="flat"
      :unelevated="unelevated"
      :rounded="rounded"
      :fab="fab"
      :padding="padding"
      :dense="dense"
      :content-style="contentStyle"
      :content-class="contentClass"
      no-caps
      class="dropdown"
      @click.stop="$emit('clicked')"
    >
      <q-list class="list" dense :separated="separated" v-if="list">
        <q-item
          v-for="(item, index) in items"
          :key="index"
          clickable
          v-close-popup
          @click.stop="$emit('changeOption', item)"
          style="display: flex;align-items: center;font-size: .9rem;font-weight: 500;text-transform: capitalize;"
          class="item"
        >
          <span>{{ item }}</span>
        </q-item>
      </q-list>
      <template v-else>

      </template>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    list:{ type: Boolean },
    items: { type: Array || Object },
    id: { type: Number },
    select: { type: Object },
    name: { type: String, default: "Drop name" },
    color: { type: String, default: "transparent" },
    label: { type: String, default: "Drop name", required: true },
    dropIcon: { type: String, default: "eva-chevron-down-outline" },
    autoClose: { type: Boolean },
    tranShow: { type: String },
    tranHide: { type: String },
    loading: { type: Boolean },
    disable: { type: Boolean },
    disableMain: { type: Boolean },
    size: { type: String },
    outline: { type: Boolean },
    flat: { type: Boolean },
    unelevated: { type: Boolean },
    rounded: { type: Boolean },
    fab: { type: Boolean },
    padding: { type: String },
    icon: { type: String },
    dense: { type: Boolean },
    textColor: { type: String },
    separated: { type: Boolean },
    contentStyle: { type: Object },
    contentClass: { type: String },
  },
  mounted(){
    const dropdowns = document.querySelectorAll(".q-btn-dropdown")
    dropdowns.forEach(drop => {
      drop.classList.remove("q-hoverable")
      drop.classList.remove("q-focusable")
    })
  }
}
</script>

<style lang="scss" scoped>
  .q-btn-dropdown{
    transition: .3s all ease-in-out;
    color: var(--q-positive) !important;;
    &:hover{
      transition: .3s all ease-in-out;
      opacity: 0.7;
    }
  }
</style>
