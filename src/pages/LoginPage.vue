<template>
  <q-page class="page-padding text-white flex justify-center column">
    <div class="logo-title flex justify-center q-mb-lg">
      <div class="logo q-mb-md flex">
        <img src="cal_logo.png"/>
      </div>
      <div class="title full-width q-mb-lg flex justify-center">
        <span class="text-capitalize text-white text-h5 text-bold">log in</span>
      </div>
    </div>

    <div class="contain_form">
      <div class="auth-form flex column">
        <div class="form-section flex items-center justify-center column">
          <div class="inputs full-width">
            <Input
              @updated="userMail"
              placeholder="Email "
              @clearInput="clearEmail"
              show-icon
              height="2.8rem"
              icon="eva-email-outline"
              icon-color="primary"
              width="100%"
              class="q-mb-md"
              type="email"
              radius="5px"
              text-color="white"
              background="rgba(var(--q-primary-rgb), 0.2)"
            />
            <Input
              @updated="userPassword"
              placeholder="Password"
              @clearInput="clearPassword"
              icon="eva-lock-outline"
              icon-color="primary"
              width="100%"
              height="2.8rem"
              show-icon
              class="q-mb-sm"
              type="password"
              radius="5px"
              text-color="white"
              background="rgba(var(--q-primary-rgb), 0.2)"
            />
            <div class="forgot_pass flex justify-end">
              <span
                class="text-capitalize text-info q-mt-sm cursor-pointer"
                @click.stop="redirect('')"
              >
                forgot password?
              </span>
            </div>
            <Button
              bname="log in"
              flat
              dense
              W="100%"
              H="2.8rem"
              btn-pad="10px 0"
              name-color="white"
              radius="30px"
              @clicked="signInWithEmail"
              background="var(--q-primary)"
              class="q-my-lg"
            />
            <div class="propose-signup full-width text-center q-mt-xl">
              <span>Don't have an account?
                <span class="login text-primary text-bold cursor-pointer text-subtitle1 q-ml-sm" @click.stop="redirect('register')">
                  Sign up
                </span>
              </span>
            </div>
          </div>
        </div>

        <div class="separate full-width q-my-md flex justify-center">
          <span class="or-text text-bold text-subtitle1">OR</span>
        </div>

        <div class="btn-section q-mt-sm">
          <Button
            bname="log in with google"
            flat
            dense
            is-icon
            icon-name="eva-google"
            icon-margin="0 10px 0 0"
            W="100%"
            H="3rem"
            btn-pad="10px 0"
            radius="30px"
            icon-size="22px"
            fSize=""
            fWeight="500"
            name-color="white"
            @clicked="signIn('google')"
            background="rgba(var(--q-primary-rgb), 0.1)"
            class="q-mb-sm"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/userStore';
import { useRedirect } from 'src/composables/useRedirect';
import Input from 'src/components/Common/Input.vue';
import Button from 'src/components/Common/Button.vue';

import { useQuasar } from 'quasar'
import { supabase } from 'src/boot/supabase';

const $q = useQuasar()


const router = useRouter()
const {redirect} = useRedirect()
const userStore = useUserStore()

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

watch(
  () => userStore.isConnected,
  (connected) => {
    if (
      connected &&
      router.currentRoute.value.meta?.requireAuth === false
    ) {
      router.replace({ name: 'home' })
    }
  },
  { immediate: true }
)

//Login
const signIn = async (provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
       redirectTo: `${window.location.origin}/auth/callback`
    }
  })

  if (error) {
    $q.notify({
      type: 'negative',
      message: `Login with ${provider} failed: ${error.message}`
    })
  }

}

const signInWithEmail = async () => {
  if (!email.value || !password.value){
    $q.notify({
      type: 'negative',
      message: "Fill all the inputs!"
    })
    return
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
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
</script>

<style lang="scss">
.q-page{
  .logo-title{
    .logo{
      height: 7rem;
      width:7rem;

      img{
        height:100%;
        width:100%;
        object-fit:cover;
      }
    }
  }
}
</style>
