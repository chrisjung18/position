<template>
  <div class="">

    <!-- Login -->
    <!--<Modal
      Flat
      dense
      header-display="none"
      radius="10px"
      modalH="500px"
      modalW="400px"
      btnSize="12px"
      btnRound
      trans-show="fade"
      trans-hide="fade"
      background="white"
      v-model="userStore.isAuthModal"
      class="modal"
      @hide="userStore.setAuthModal(false)"
    >
    <div class="auth-form flex column q-mt-lg">
      <div class="btn-section">
        <Button
          v-for="(btn, index) in logButtons"
          :key="index"
          :bname="btn.name"
          is-icon
          flat
          dense
          W="100%"
          H="auto"
          btn-pad="10px 0"
          radius="5px"
          icon-size="25px"
          :icon-margin="btn.margin"
          fSize=""
          fWeight="500"
          icon-color="var(--q-primary)"
          name-color="var(--q-dark)"
          border="1px solid var(--q-primary-opacity)"
          @clicked="signIn(btn.provider)"
          :background="btn.background"
          :icon-name="btn.icon"
          class="q-mb-sm"
        />
      </div>
      <div class="separate full-width q-my-md flex justify-center">
        <span class="or-text">OR</span>
      </div>

      <div class="form-section flex items-center justify-center column">
        <div class="inputs full-width">
          <Input
            @inputValue="userMail"
            placeholder="Email "
            @clearInput="clearEmail"
            icon="mdi-email"
            icon-color="dark"
            width="100%"
            class="q-mb-sm"
            type="email"
          />
          <Input
            @inputValue="userPassword"
            placeholder="Password"
            @clearInput="clearPassword"
            icon="mdi-account-key"
            icon-color="dark"
            width="100%"
            class="q-mb-sm"
            type="password"
          />
          <Button
            bname="Sign in"
            flat
            dense
            W="100%"
            btn-pad="10px 0"
            name-color="white"
            @clicked="signInWithEmail(email, password)"
            background="var(--q-primary)"
            class="q-my-lg"
          />
          <div class="propose-signup full-width text-center">
            <span>Don't have an account?
              <span class="signup text-primary text-bold cursor-pointer" @click.stop="isSignupModal = true">
                Sign up
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Modal>-->

    <!-- Sign Up -->
    <Modal
      Flat
      dense
      header-display="none"
      radius="10px"
      modalH="500px"
      modalW="400px"
      btnSize="12px"
      btnRound
      trans-show="fade"
      trans-hide="fade"
      background="white"
      v-model="isSignupModal"
      class="modal"
      @hide="isSignupModal = false"
    >
      <Button
        bname="To Sign In"
        is-icon
        icon-name="mdi-arrow-left-thin"
        icon-size="30px"
        icon-color="var(--q-primary)"
        f-size="15px"
        icon-margin="0 5px 0 -5px"
        f-weight="500"
        flat
        dense
        W="auto"
        btn-pad="2px 20px"
        name-color="var(--q-dark)"
        @clicked="isSignupModal = false"
        background="rgba(0,0,0,.05)"
      />
      <div class="auth-form flex column justify-center" style="height: 430px">
        <div class="full-width flex justify-center q-px-lg q-mb-lg">
          <span class="text-center text-h6">Sign Up for a new account using your E-mail</span>
        </div>
        <div class="form-section flex items-center justify-center column">
          <div class="inputs full-width">
            <Input
              @inputValue="userMail"
              placeholder="Email "
              @clearInput="clearEmail"
              icon="mdi-email"
              icon-color="dark"
              width="100%"
              class="q-mb-sm"
              type="email"
            />
            <Input
              @inputValue="userPassword"
              placeholder="Password"
              @clearInput="clearPassword"
              icon="mdi-account-key"
              icon-color="dark"
              width="100%"
              class="q-mb-sm"
              type="password"
            />
            <Button
              bname="Sign up"
              flat
              dense
              W="100%"
              btn-pad="10px 0"
              name-color="white"
              @clicked="signUpWithEmail(email, password)"
              background="var(--q-primary)"
              class="q-my-lg"
            />
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>

import Modal from "components/Common/ModalComponent.vue";
import Input from "components/Common/Input.vue";
import Button from "components/Common/Button.vue";
import { supabase } from "boot/supabase.js";
import { useUserStore } from "stores/userStore.js";
import { useQuasar, QSpinnerGears } from "quasar";
import { ref, onMounted } from "vue"

const userStore = useUserStore()
const $q = useQuasar()



const isSignupModal = ref(false)
const email = ref("")

const password = ref("")
const userMail = (value) => {
  email.value = value
}
const clearEmail = () => {
  email.value = ""
}
const userPassword = (value) => {
  password.value = value
}
const clearPassword = () => {
  password.value = ""
}

onMounted(() => {

})

//Login
const signIn = async (provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: window.location.origin
    }
  })

  if (error) {
    $q.notify({
      type: 'negative',
      message: `Login with ${provider} failed: ${error.message}`
    })
  }

}
const signInWithEmail = async (email, password) => {
  if (!email || !password) return

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (data?.user) {
    userStore.setCurrentUser(data.user)
  }

  if (error) {
    $q.notify({
      type: 'negative',
      message: error.message
    })
  }
}

//Sign up
const signUpWithEmail = async (email, password) => {
  if(!email || !password) {
    console.log("not email or password")
  }

  let { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  console.log("User created: ", data)

  if (error) {
    $q.notify({
      type: 'negative',
      message: `Login failed: ${error.message}`
    })
  }
}

</script>

<style scoped lang="scss">

</style>
