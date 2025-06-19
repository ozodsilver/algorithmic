<script setup lang="ts">
import Button from 'primevue/button'
import AlgoInput from '~/components/ui/AlgoInput.vue'
import Divider from 'primevue/divider'
import { useToast } from 'primevue/usetoast'
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

const toast = useToast()
const token = useCookie('token')
const refreshToken = useCookie('refreshToken')

definePageMeta({
  layout: 'auth',
})

const form = reactive({
  emailOrUserName: '',
  password: '',
})

const rules = reactive({
  emailOrUserName: { required },
  password: { required },
})

const v$ = useVuelidate(rules, form)

const isLoading = ref(false)
const captchaToken = ref('')

const navigateToSignUp = () => {
  navigateTo('/auth/sign-up')
}

const navigateToDashboard = async () => {
  try {
    v$.value.$touch()
    if (!v$.value.$invalid) {
      isLoading.value = true
      const response = await useCustomFetch<{
        accessToken: string
        refreshToken: string
        message: string
      }>('/Authentication/Login', {
        method: 'POST',
        body: form,
        query: {
          captchaToken: captchaToken.value,
        },
      })
      if (response.success) {
        token.value = response.data.accessToken
        refreshToken.value = response.data.refreshToken
        navigateTo('/home')
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
          life: 5000,
        })
      }
    } else {
      console.log('Validation failed')
    }
  } catch (e: any) {
    toast.add({ severity: 'error', summary: 'Error', detail: e?.data?.message, life: 5000 })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="sign-in">
    <form @submit.prevent="navigateToDashboard" class="content">
      <h1 class="content__title">Algorithmic.uz</h1>

      <AlgoInput
        v-model.trim="form.emailOrUserName"
        class="w-full mt-[20px]"
        name="mdi:email-outline"
        :invalid="v$.emailOrUserName.$error"
        placeholder="Enter your email"
      />

      <p v-if="v$.emailOrUserName.$error" class="text-red-500 text-sm mt-2">
        Email or username is required
      </p>

      <AlgoInput
        v-model="form.password"
        :invalid="v$.password.$error"
        class="w-full mt-[15px]"
        name="mdi:lock-outline"
        type="password"
        placeholder="password"
      />

      <p v-if="v$.password.$error" class="text-red-500 text-sm mt-2">Password is required</p>

      <nuxt-link class="forgot-password"> Forgot password?</nuxt-link>

      <NuxtTurnstile class="mt-5 mx-auto flex justify-center" v-model="captchaToken" />

      <Button :loading="isLoading" type="submit" class="w-full mt-5" severity="primary">
        Sign in
        <Icon name="mdi:login" v-if="!isLoading" />
        <Icon name="mdi:loading" class="animate-spin " v-else />
      </Button>

      <Divider class="mt-10 text-slate-400" align="center"> or </Divider>

      <div class="social">
        <Button outlined rounded>
          <Icon name="mdi:google" class="text-slate-400 text-xl" />
          Google
        </Button>

        <Button outlined rounded>
          <Icon name="mdi:github" class="text-slate-400 text-xl" />
          Github
        </Button>
      </div>

      <NuxtLink class="text-slate-400 text-center block mt-5"> Have no account yet? </NuxtLink>

      <Button class="w-full mt-5 text-slate-500" outlined @click="navigateToSignUp">
        Sign up
      </Button>
    </form>
  </main>
</template>

<style lang="scss" scoped>
.sign-in {
  @apply z-50 relative;
  .content {
    @apply w-full;
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
