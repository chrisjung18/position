<template>
  <q-scroll-area
    class="scroll-area"
    :vertical-bar-style="barStyle"
    :vertical-thumb-style="thumbStyle"
    :style="{height: height, width: width}"
    :delay="1000"
    :horizontal="horizontal"
    :visible="false"
  >
    <div :style="{display: 'flex', flexDirection: horizontal ? 'row' : 'column' }">
      <slot></slot>
    </div>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'ScrollArea',
  props: {
    height: { type: String, default: "5rem" },
    width: { type: String, default: "100%" },
    horizontal: { type: Boolean, default: true },
  },
  data () {
    return {
      barStyle: {
        borderRadius: '10px',
        background: 'var(--q-positive-bg)',
        opacity: 0.3,
        padding: '0',
        width: '5px',
      },
      thumbStyle: {
        borderRadius: '5px',
        background: 'var(--q-positive)',
        opacity: 0.7,
        width: '5px',
        padding: "0",
        height: '0.5rem !important'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll-area{
    .q-item{
      display: flex;
      padding: .6rem 0 !important;
      &:first-child{
        padding-top: 0 !important;
      }
      &:nth-child(n):not(:last-child){
        border-bottom: 1.5px solid var(--q-search);
      }
    }
  }
</style>
