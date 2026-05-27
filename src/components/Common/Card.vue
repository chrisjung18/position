<template>
  <div>
    <q-card
      :flat="Flat"
      dense
      class=""
      :style="{
        background: bg,
        width: W,
        height: H,
        // minWidth: minW,
        boxShadow: shadow,
        borderRadius: radius,
        border: border
      }"
      @click.stop="$emit('click')"
    >
      <q-card-section :style="{ padding: pad }">
        <slot></slot>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  components: {  },
  props: {
    bg:{type: String, default: "white"},
    H:{type: String, default: "2vh"},
    // minW:{type: String, default: "auto"},
    W:{type: String, default: "0"},
    Flat:{type: Boolean},
    shadow:{type: String},
    radius:{type: String},
    border:{type: String},
    pad:{type: String}
  }
}
</script>
