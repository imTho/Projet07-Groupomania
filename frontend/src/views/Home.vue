<template>
  <div class="home">
    <SignupForm/>
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Home',
  components: {
    SignupForm,
    LoginForm
  }
}
</script>
