<template>
  <q-btn
    v-if="show"
    class="main-btn"
    :class="{'custom-hover' : applyHover}"
    :elevated="elevated"
    :type="type"
    @click.stop.prevent="$emit('clicked')"
    @mouseenter="$emit('mouseEnter')"
    @mouseleave="$emit('mouseLeave')"
    :rounded="rounded"
    :round="round"
    :unelevated="unelevated"
    :dense="dense"
    :disable="disable"
    :color="color"
    :flat="Flat"
    :style="[
      styleBtn,
      {
        borderRadius: radius,
        background: background,
        color: iconColor,
        height: H,
        width: W,
        padding: btnPad,
        flexDirection: iconPosition,
        boxShadow: shadow,
        borderColor: borderColor,
        border: border,
      },
    ]"
  >

    <q-icon
      v-if="isIcon"
      round
      class="icon"
      :style="{fontSize: iconSize, margin: iconMargin}"
      :name="iconName"
    />

    <div class="img-name flex">

      <span
        class="name"
        :style="{
          color: nameColor,
          fontSize: fSize,
          fontWeight: fWeight
        }"
      >
        {{ bname }}
      </span>
    </div>
  </q-btn>
</template>

<script>
export default {
  name: 'Button',
  props:{
    background: {type: String, default: "blue"},
    iconColor: {type: String, default:"white"},
    bname: {type: String},
    shadow: {type: String},
    nameColor: { type: String },
    H: {type: String, default: "auto"},
    W: {type: String, deafult: "auto"},
    type:{type:String},
    iconPosition:{type:String},
    btnImg:{type:String},
    styleBtn: {type: Object},
    borderColor: {type: String},
    color: {type: String},
    border: {type: String},
    iconName: {type: String},
    iconSize: {type: String},
    radius: {type: String},
    noBtnName: {type: String, default: ""},
    rounded: {type: Boolean},
    disable: {type: Boolean},
    dense: {type: Boolean},
    round: {type: Boolean},
    unelevated: {type: Boolean},
    elevated: {type: Boolean},
    btnPad: {type: String, default: "0"},
    fSize: {type: String},
    fWeight: {type: String},
    Flat: {type: Boolean},
    isIcon: {type: Boolean},
    iconMargin: {type: String},
    show: {type: Boolean, default: true},
    applyHover: {type: Boolean}
  },
  data () {
    return {
      expand: false
    }
  },
}
</script>

<style lang="scss" scoped>
.q-btn{
  line-height: 0 !important;
}
.custom-hover{
  .q-btn{
    display: flex !important;
    transition: .4s all ease-in-out !important;
    &:hover{
      transition: .4s all ease-in-out;
      background: var(--q-positive) !important;
      border: 1px solid transparent !important;
      color: 1.5px solid var(--q-positive) !important;
    }
  }
}
  .main-btn{
    font-weight: bold;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    min-width: auto !important;

    .name{
      text-transform: capitalize;
    }
  }

    @media (max-width: "820px"){

  }
</style>

