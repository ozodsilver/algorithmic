<script setup lang="ts">
import AlgoInput from '~/components/ui/AlgoInput.vue';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast';

const toast = useToast()

const formData = reactive({
  currentPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
})

const sendData = ()=>{
  toast.add({ severity: 'success', summary: 'Success', detail: 'Password updated successfully!', life: 3000 });
}
</script>

<template>
  <section class="privacy">
    <div class="privacy__header">
      <h1 class="title">Privacy</h1>
    </div>

    <form class="form-container">
      <div class="col-span-6">
        <label class="input-label" for="current-password">Current password</label>
        <AlgoInput
          id="current-password"
          v-model="formData.currentPassword"
          type="password"
          placeholder="Current password"
        />
      </div>


      <div class="col-span-6">
        <label class="input-label"  for="new-password">New password</label>
        <AlgoInput
          id="new-password"
          v-model="formData.newPassword"
          type="password"
          placeholder="New password"
        />
      </div>


      <div class="col-span-12">
        <label class="input-label"  for="repeat">Repeat new password</label>
        <AlgoInput
          id="repeat"
          v-model="formData.newPasswordConfirm"
          type="password"
          placeholder="Repeat new password"
        />
      </div>


      <div class="button-wrapper">
        <Button severity="primary" label="Submit" @click="sendData" />
      </div>
    </form>
  </section>



</template>

<style scoped lang="scss">
.privacy {
  @apply edit-profile-section mt-6;
  &__header {
    @apply edit-profile-section-header;
    .title {
      @apply text-white m-0 text-lg font-semibold p-2;
    }
  }

  .form-container {
    @apply p-4 grid grid-cols-12 gap-3 mt-3;
    .input-label {
      @apply block my-1 text-xs text-slate-400;
    }

    .button-wrapper {
      @apply flex justify-end col-span-12;
    }
  }
}
</style>
