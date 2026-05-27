<template>
  <Modal
    Flat
    dense
    radius="4px"
    modalH="auto"
    modalW="auto"
    headerDisplay="none"
    transShow="scale"
    transHide="scale"
    background="white"
    :openModal="openConfirm"
    class="modal"
    style="position: relative;"
    @hide="$emit('hide')"
  >
    <div class="modal-content">
      <div class="header flex items-center column">
        <q-icon :name="iconName" :color="iconColor" size="35px" class="q-mb-md" />
        <span class="title"> {{ actionTitle }} </span>
      </div>
      <div class="buttons flex q-gutter-md q-mt-sm">
        <Button
          v-for="(btn, index) in btns"
          :key="index"
          :bname="btn.btnName"
          :background="btn.background"
          H="1.8rem"
          W="4rem"
          Flat
          dense
          fSize="12px"
          @clicked="handleConfirm(btn.btnName)"
        />
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "../Common/ModalComponent.vue"
import Button from "../Common/Button.vue"

export default {
  name: 'ConirmActionPopup',
  components: { Modal, Button },
  props: {
    actionTitle: { type: String, default: "What is the action ?" },
    openConfirm: { type: Boolean },
    iconName: { type: String },
    iconColor: { type: String },
    iconSize: { type: String },
  },
  data () {
    return {
      open: this.openConfirm,
      btns: [
        {
          btnName: "no",
          background: "var(--q-negative)",
        },
        {
          btnName: "yes",
          background: "var(--q-positive)",
        },
      ]
    }
  },
  methods:{
    handleConfirm(btnName){
      btnName === "no" ? this.$emit("close") : this.$emit("onOk")
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-content{
    .title{
      color: var(--q-search);
      font-size: .9rem;
      font-weight: 600;
    }
  }
</style>
