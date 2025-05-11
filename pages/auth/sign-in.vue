<script setup lang="ts">
import Button from 'primevue/button'
import AlgoInput from '~/components/ui/AlgoInput.vue'
import Divider from 'primevue/divider'

definePageMeta({
  layout: 'auth'
})

const form = ref({
  email: '',
  password: ''
})

const navigateToSignUp = () => {
  navigateTo('/auth/sign-up')
}

const navigateToDashboard = () => {
  navigateTo('/home')
}

</script>

<template>
  <main class="sign-in">
    <form class="content">
      <h1 class="content__title">Algorithmic.uz</h1>

      <AlgoInput
          v-model="form.email"
          class="w-full mt-[20px]"
          name="mdi:email-outline"
          placeholder="Enter your email"
      />

      <AlgoInput
          v-model="form.password"
          class="w-full mt-[15px]"
          name="mdi:lock-outline"
          type="password"
          placeholder="password"
      />

      <nuxt-link class="forgot-password"> Forgot password?</nuxt-link>

      <Button
          class="w-full  mt-5"
          severity="primary"
          @click="navigateToDashboard">
        Sign in
        <Icon name="mdi:login"/>
      </Button>

      <Divider class="mt-10 text-slate-400" align="center">
        or
      </Divider>

      <div class="social">

        <Button outlined rounded>
          <Icon name="mdi:google" class="text-slate-400 text-xl  "/>
          Google
        </Button>

        <Button outlined rounded>
          <Icon name="mdi:github" class="text-slate-400 text-xl "/>
          Github
        </Button>
      </div>

      <NuxtLink class="text-slate-400 text-center block mt-5">
        Have no account yet?
      </NuxtLink>

      <Button
          class="w-full mt-5 text-slate-500"
          outlined
          @click="navigateToSignUp">
        Sign up
      </Button>

    </form>
  </main>
</template>

<style lang="scss" scoped>
.sign-in {
  @apply z-50 relative;
  .content {
    @apply w-full ;
    &__title {
      @apply text-center text-2xl font-semibold;
    }

    .forgot-password {
      @apply text-end block mt-4 text-primary;
    }

    .social {
      @apply flex justify-center mt-10 gap-4;
    }
  }
}
</style>
