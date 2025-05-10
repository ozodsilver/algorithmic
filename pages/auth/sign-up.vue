<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import AlgoInput from "~/components/ui/AlgoInput.vue";

definePageMeta({
  layout: 'auth'
})

const form = ref({
  fullName: '',
  username: '',
  email: '',
  password: '',
  passwordAgain: ''
})

const rules = computed(() => ({
  fullName: { required },
  username: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  passwordAgain: { required, sameAsPassword: sameAs(form.value.password) }
}))

const v$ = useVuelidate(rules, form)

const handleSubmit = async () => {
  v$.value.$touch()
  if (!v$.value.$invalid) {
    console.log('Form valid:', form.value)
  } else {
    console.log('Validation failed')
  }
}
</script>


<template>
  <main class="sign-up">
    <form class="content" @submit.prevent="handleSubmit">
      <h1 class="content__title">Algorithmic.uz</h1>

      <AlgoInput
          v-model="form.fullName"
          class="w-full mt-[20px]"
          name="mdi:account"
          :invalid="v$.fullName.$error"
          placeholder="Full name"
      />

      <AlgoInput
          v-model="form.username"
          class="w-full mt-[15px]"
          :invalid="v$.username.$error"
          name="mdi:mail-ru"
          type="text"
          placeholder="username"
      />

      <AlgoInput
          v-model="form.email"
          class="w-full mt-[15px]"
          :invalid="v$.email.$error"
          name="mdi:email-outline"
          type="text"
          placeholder="email"
      />

      <AlgoInput
          v-model="form.password"
          class="w-full mt-[15px]"
          :invalid="v$.password.$error"
          name="mdi:lock-outline"
          type="password"
          placeholder="password"
      />

      <AlgoInput
          v-model="form.passwordAgain"
          class="w-full mt-[15px]"
          name="mdi:lock-outline"
          :invalid="v$.passwordAgain.$error"
          type="password"
          placeholder="Password again"
      />
      
      <p v-if="v$.passwordAgain.$error" class="text-red-500 text-sm mt-2">
        Passwords do not match
      </p>

      <Button type="submit" severity="primary" class="mt-5 w-full">
        Sign up
      </Button>

      <NuxtLink class="mt-4 block text-slate-400 text-end">
        Have already account?
      </NuxtLink>

      <NuxtLink to="/auth/sign-in" class=" mt-5 text-slate-500 flex items-center justify-end">
        Sign in
        <Icon name="mdi:login" />
      </NuxtLink>
    </form>
  </main>
</template>

<style lang="scss" scoped>
.sign-up {
  @apply z-50 relative;
  .content {
    @apply w-full ;
    &__title {
      @apply text-center text-2xl font-semibold;
    }
  }
}
</style>
