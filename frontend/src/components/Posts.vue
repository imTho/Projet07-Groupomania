<template>
    <div class="posts">
        <div class="post" v-for = "post in posts" :key="post.id">
            <router-link :to="{ name: 'Post', params: { id: post.id } }">
                <div class="post-header">
                    <span class="post-info">Posté le : {{post.date}} par {{post.prenom}} {{post.nom}}</span>
                    <span v-if="post.userId == $user.userId">Modifier</span> 
                </div>  
                <h2 class="post-title">{{post.title}}</h2>
                <div class="post-content">{{post.content}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Posts',

    data(){
        return {
            posts: [],
            visible: false
        }
    },

    created() {
        if(localStorage.user != undefined){
            this.getAllPost();
        }
    },

    methods: {
        getAllPost(){
            axios.get(`${this.$apiUrl}/posts/getAllPost`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(res => {
                this.posts = res.data;
            })
        }
    }
}
</script>

<style scoped>
    .posts{
        margin: 0 auto;
        padding: 20px;
        max-width: 800px;
    }

    .post{
        position: relative;
        padding: 20px 20px 20px 30px;
        margin-bottom: 30px;
        border-left: 5px solid red;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        text-align: left;
        transition-duration: .1s;
    }

    .post:hover{
        box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.2);
    }

    .post h2{
        margin-top: 7px;
    }

    .post-header{
        display: flex;
        justify-content: space-between;
        color: rgb(175, 175, 175);
        font-size: .8rem;
    }

    .post-content{
        font-size: .9rem;
    }
</style>