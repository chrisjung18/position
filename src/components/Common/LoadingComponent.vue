<template>
  <Modal
    Flat
    dense
    persistent
    radius="10px"
    modalH="10rem"
    modalW="10rem"
    headerDisplay="none"
    transShow="scale"
    background="var(--q-search)"
    :openModal="state"
    class="modal"
  >
    <div class="body full-width flex justify-center items-center column q-mt-md">
      <q-spinner-bars color="positive" size="2rem"  />
      <span class="text-center q-mt-md" style="line-height: 22px;">
        Loading, please wait...
      </span>
    </div>
  </Modal>
</template>

<script>
import Modal from './ModalComponent.vue';

export default {
  name: 'LoadingComponent',
  components: { Modal },
  props: { state: { type: Boolean } },
  data() {
    return {
      // loadingState: this.state
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
