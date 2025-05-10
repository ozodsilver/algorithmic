<script setup lang="ts">
import {useRoute} from 'vue-router'
import {ref, watch} from 'vue'
import gsap from 'gsap'

const route = useRoute()
const torusRef = ref<HTMLElement | null>(null)

watch(() => route.fullPath, (newVal) => {
  if (newVal.includes('sign-up')) {
    gsap.fromTo(
        '.torus__background',
        {x: 0, y: 0},
        {
          x: -290,
          y: -390,
          duration: 0.3,
          ease: 'expo.in',
        }
    )
  } else {
    gsap.fromTo(
        '.torus__background',
        {x: 0, y: 0},
        {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'back.inOut',
        }
    )
  }
})
</script>


<template>
  <main class="auth">
    <section class="auth__container">
      <article class="auth__intro">
        <NuxtImg
            src="/images/torus.svg"
            loading="lazy"
            fit="cover"
            class="torus"
        />
        <div class="content">
          <NuxtImg
              src="/images/cosmo.svg"
              responsive
              fit="cover"
              loading="lazy"
              class="cosmo"
          />
          <h1 class="content__title">Welcome aboard my friend</h1>
          <h2 class="content__subtitle">just a couple of clicks and we start</h2>
        </div>
      </article>
      <div class="auth__form" aria-labelledby="form-title">
        <Transition name="page" mode="out-in">
          <slot/>
        </Transition>
      </div>

      <NuxtImg
          ref="torusRef"
          src="/images/torus.svg"
          loading="lazy"
          fit="cover"
          class="torus__background"
      />

    </section>
  </main>
</template>

<style lang="scss" scoped>
.auth {
  @apply min-h-screen flex justify-center items-center relative;

  &__container {
    @apply w-[80%] rounded-2xl   h-[560px] flex relative;

    .auth__intro {
      @apply w-[60%] bg-primary rounded-tl-3xl rounded-bl-3xl flex items-center justify-center relative;
      .torus {
        @apply absolute -left-20 w-[160px];
      }

      .content {
        @apply flex flex-col items-center justify-center text-center text-white;
        .cosmo {
          @apply w-[180px];
        }

        &__title {
          @apply text-2xl mt-5 font-bold;
        }

        &__subtitle {
          @apply text-sm;
        }
      }
    }

    .torus__background {
      @apply absolute bottom-0 xl:-right-2 -right-20 w-[200px] -z-50 transition-all duration-500 ease-in-out;
      transform: translate(0, 0);

      .torus-anim {
        transform: translate(-20px, 20px);
      }
    }
  }

  .auth__form {
    @apply w-[40%] rounded-tr-2xl h-full rounded-br-2xl p-5 px-16 shadow-custom-light relative ;
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.45);
  }
}
</style>
