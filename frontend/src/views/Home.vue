<template>
  <div class="home">
    <SignupForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'Home',
  components: {
    SignupForm
  }
}
</script>
