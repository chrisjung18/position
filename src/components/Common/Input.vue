<template>
  <div
    class="main"
    :style="{
      background: background,
      width: width,
      height: height,
      borderRadius: radius,
      transition: '.4s all ease-in-out !important'
    }
    ">
    <q-icon
      :name="hidePass ? iconToggle : icon"
      :color="iconColor"
      :size="iconSize"
      :class="{'cursor-pointer' : enableIconClick}"
      style="padding-left: 10px"
    />
    <q-input
      v-model="model"
      ref="inputField"
      borderless
      dense
      :clearable="clearable"
      :color="color"
      :label-color="labelColor"
      :bg-color="bgColor"
      :loading="loading"
      :standout="standout"
      :outlined="outlined"
      :readonly="readonly"
      autocomplete
      :rounded="round"
      @focus="$emit('focused')"
      @blur="$emit('blured')"
      @click.stop="$emit('clicked')"
      :autofocus="autofocus"
      :type="hidePass ? typeToggle : type"
      :placeholder="placeholder"
      :input-style="{

      }"
      :input-class="`flex items-center text-subtitle1 q-pt-none text-${textColor}`"
      @focusin="isFocused = true"
      @focusout="isFocused = true"
      @update:model-value="update"
      @keyup.enter="$emit('onEnter')"
      @clear="clearInput"
    />
    <q-icon
      class="clear"
      name="eva-close-outline"
      :color="clearColor"
      size="20px"
      v-if="model.length > 0"
      style="padding-right: 10px;"
      @click.stop="clearInput"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: { type: String, default: "Artist, track or podcast" },
    placeholderColor: { type: String, default: "white" },
    customPlace: { type: String },
    usePlaceholder: { type: Boolean },
    autofocus: { type: Boolean },
    width: { type: String, default: "" },
    height: { type: String, default: "" },
    icon: { type: String, default: "eva-search-outline" },
    iconColor: { type: String, default: "info" },
    iconSize: { type: String, default: "18px" },
    background: { type: String, default: "var(--q-search)" },
    radius: { type: String, default: "10px" },
    clearColor: { type: String, default: "white" },
    label: { type: String },
    value: { type: String },
    type: { type: String, default: "text" },
    propModel: { type: String, default: '' },
    enableIconClick: { type: Boolean },
    clearable: { type: Boolean },
    color: { type: String },
    labelColor: { type: String },
    bgColor: { type: String },
    textColor: { type: String },
    loading: { type: Boolean },
    standout: { type: Boolean },
    outlined: { type: Boolean },
    readonly: { type: Boolean },
    round: { type: Boolean },
  },
  data () {
    return {
      isFocused: false,
      model: this.propModel,
      hidePass: false,
      typeToggle: this.type,
      iconToggle: this.icon
    }
  },
  watch: {
    isFocused(val){
      this.$refs.inputField.focus()
    },
    propModel(val){
      if(val.length) this.$refs.inputField.focus()
    },
    model(val){
      if(val.length) this.$refs.inputField.focus()
    }
  },
  methods: {
    iconClick(inputType){
      if(inputType === "password"){
        this.$refs.inputField.focus()
        this.hidePass = !this.hidePass
        if(this.hidePass){
          this.typeToggle = "text"
          this.iconToggle = "eva-eye-off-outline"
        }
        else{
          this.typeToggle = "password"
          this.iconToggle = "eva-eye-outline"
        }
      }
      else this.$emit("onIconClick")
    },
    clearInput(){
      this.model = ""
      this.$refs.inputField.focus()
    },
    togglePass(){
      this.hide = !this.hide
      if(this.hide) this.$emit("hidePass", true)
      else this.$emit("hidePass", false)
    },
    update(value){
      this.model = value
      this.$emit("updated", value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    height: 2.5rem;
    border-radius: 10px;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    transition: .4s all ease-in-out !important;

    .clear{
      margin-right: 0 !important;
      margin-left: .5rem !important;
      transition: .4s all ease-in-out !important;
      cursor: pointer;
    }

    .q-input{
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      transition: .4s all ease-in-out !important;

      &::placeholder{
        transition: .4s all ease-in-out !important;
        font-size: 16px !important;
        font-weight: 500;
      }
    }

    .q-icon{
      margin-right: 15px;
    }
  }
</style>
