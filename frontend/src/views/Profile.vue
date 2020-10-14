<template>
    <div class="Profile">
        <LoginForm v-if="!connected"/>

        <Header v-if="connected"/>
        <div class="profile-info">
            <h2>Bonjour,</h2>
            <span>{{this.$user.nom}}</span> <span>{{this.$user.prenom}}</span>
        </div>

        <div class="delete-profile" @click="deleteUser()">Supprimer le compte</div>

        <h3>Vos posts :</h3>
        <UserPosts/>
        
    </div>
</template>

<script>
import axios from 'axios';

import LoginForm from '@/components/LoginForm.vue';
import Header from '@/components/Header.vue';
import UserPosts from '@/components/UserPosts.vue';

export default {
    name: 'Profile',

    components: {
        LoginForm,
        Header,
        UserPosts
  },

  data() {
    return{
      connected: true
    };
  },

   mounted(){
    this.checkConnected()
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
    },

    deleteUser(){
      const userId = this.$user.userId;

      axios.post(`${this.$apiUrl}/auth/deleteUser`,
          {
            userId
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.$token}`
            }
          }
      )
      .then(localStorage.removeItem('user'))
      .then(location.href = "/");
    }

  }
}
</script>

<style scoped>

    .profile-info{
        margin: 50px auto;
        max-width: 800px;
        /* text-align: left; */
    }

    .profile-info h2 {
        margin-bottom: 20px;
        font-size: 3rem;
    }

    .profile-info h3 {
        /* text-align: left; */
    }

    .profile-info span {
        font-size: 3rem;
    }

    .delete-profile{
      color: red;
      margin-bottom: 30px;
      cursor: pointer;
    }
</style>