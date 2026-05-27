<template>
  <Dialog
    :openModal="alert"
    @closeModal="$emit('closeAlert', alert)"
    headerBackground="transparent"
    headerDisplay="none"
    modalW="70%"
    modalH="auto"
    :background="options?.background"
    btnColor="red"
    class="modal"
    iconSize="12px"
  >
    <div class="contain">
      <div class="top">
        <span class="title">{{options.title}}</span>
        <p class="text"> {{options.message}}</p>
      </div>
      <div class="bottom">
        <Button
          v-for="(btn, index) in buttons"
          :key="index"
          :bname="btn.name"
          :background="btn.background"
          :nameColor="btn.nameColor"
          dense
          Flat
          v-if="btn.show"
          fSize="12px"
          W="4em"
          H="2.2em"
          radius="3px"
          @clicked="handleClick(index)"
        />
      </div>
    </div>
  </Dialog>
</template>

<script>
import Dialog from './DialogComponent.vue'
import Button from './Button.vue'

export default {
  name: 'AlertComponent',
  props: {
    alert: {type: Boolean},
    options: {
      type: Object,
      background: { type: String, default: ""}
    },
    buttons: { type: Array || Object },

  },
  components: {
    Dialog,
    Button
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick(index){
      if(index === 0) this.$emit('closeAlert', this.expand)
      else this.$emit("delete")
    }
  }
}
</script>

<style lang="scss" scoped>
  .contain{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0;

    .top{
      display: flex;
      flex-direction: column;
      gap: 10px;

      .title{
        font-size: 18px;
        font-weight: 600;
      }
      .text{
        font-size: 15px;
        font-weight: 400;
      }
    }
    .bottom{
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  }
</style>
