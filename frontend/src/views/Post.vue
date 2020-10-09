<template>
  <div class="post">
    <LoginForm v-if="!connected"/>

    <Header v-if="connected"/>
    <OnePost v-if="connected"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';
import Header from '@/components/Header.vue';
import OnePost from '@/components/OnePost.vue';


export default {
  name: 'Post',

  components: {
    Header,
    LoginForm,
    OnePost
  },

  data() {
    return{
      connected: true
    };
  },

  methods: {
    checkConnected(){
      if(localStorage.user !== undefined){
        this.connected = true;
        console.log('Utilisateur connecté !');
      }
      else if(localStorage.user == undefined){
        this.connected = false;
        console.log('Utilisateur non connecté !');
      }
    }
  },

  mounted(){
    this.checkConnected()
  }
}
</script>
