<template>
  <div class="contain">
    <q-dialog
      :value="openModal"
      :persistent="persistent"
      :seamless="seamless"
      :allow-focus-outside="focusOutside"
      :transition-show="transShow"
      :transition-hide="transHide"
      :maximized="maximized"
      :full-height="fullHeight"
      :full-width="fullWidth"
      :position="position"
      :no-focus="noFocus"
      :style="{margin: margin}"
      @hide="$emit('hide')"
    >
      <q-card
        class="modal-card"
        :style="{
          width: modalW,
          height: modalH,
          background: background,
          boxShadow: shadow,
          borderRadius: radius
        }"
      >
        <q-card-section
          class="card-header"
          :style="{
            height: headerH,
            width: headerW,
            background: headerBackground,
            display: headerDisplay,
            padding: headerPad,
            position: headerPosition,
            zIndex: zIndexHeader
          }"
        >
          <span class="heading"
            :style="{
              fontSize: titleSize,
              fontWeight: titleWeight,
              color: titleColor,
            }"
          >
            {{ title }}
          </span>
          <q-btn
            dense
            class="close-btn"
            @click.stop="$emit('closeModal')"
            :unelevated="unelevated"
            :style="{
              color: btnColor,
              background: btnBackground,
              padding: btnPad,
              margin: btnMargin,
              fontSize: btnSize
            }"
            :rounded="btnRound"
            :icon="btnIcon"
            :outlined="outlined"
            :flat="Flat"
          />
        </q-card-section>
        <q-card-section class="body" :style="{padding: bodyPad, margin: bodyMar, height: bodyH}">
          <slot></slot>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'ModalComponent',
  components: { Button },
  props:{
    openModal: {type: Boolean, default: false},
    modalW: {type: String, default: "100%"},
    modalH: {type: String, default: "auto"},
    btnRound: { type: Boolean },
    unelevated: { type: Boolean },
    outlined: { type: Boolean },
    btnColor: { type: String,},
    btnIcon: { type: String, default: "eva-close-outline" },
    btnPad: { type: String },
    btnMargin: { type: String },
    btnSize: { type: String },
    btnBackground: { type: String },
    headerPad: { type: String },
    margin: { type: String },
    Flat: { type: Boolean },
    focusOutside: { type: Boolean },
    noFocus: { type: Boolean },
    title: {type: String},
    radius: {type: String},
    titleSize: {type: String},
    titleWeight: {type: String},
    background: {type: String, default: "white"},
    headerH: {type: String, default: "6vh"},
    headerW: {type: String, default: "100%"},
    headerBackground: {type: String, default: "black"},
    headerDisplay: {type: String},
    headerPosition: { type: String },
    zIndexHeader: { type: String },
    titleColor: { type: String },
    bodyPad: {type: String},
    bodyMar: {type: String},
    bodyH: {type: String},
    persistent: {type: Boolean},
    seamless: {type: Boolean},
    transShow: {type: String},
    transHide: {type: String},
    fullHeight: {type: Boolean},
    fullWidth: {type: Boolean},
    position: {type: String},
    maximized: {type: Boolean},
    shadow: {type: String}
  },
  data () {
    return {
      close: true,
      model: this.openModal
    }
  },
  computed: {

  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
  .modal-card{
    .card-header{
      border-radius: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;

      .heading{
        font-size: 18px;
        font-weight: 500;
        color: white;
      }

      .close-btn{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
