<template>
    <div class="posts">
        <div class="post" v-for = "post in posts" :key="post.id">
            <div class="post-header">
                <span class="post-info">Posté le : {{post.date}} par {{post.prenom}} {{post.nom}}</span> 
                <span class="modify-btn" v-if="user.userId == post.userId">Modifier le post</span> 
            </div>  
            <h2 class="post-title">{{post.title}}</h2>
            <div class="post-content">{{post.content}}</div>
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
        }
    },

    mounted() {
        this.user = JSON.parse(localStorage.user);
        this.getAllPost();
    },

    methods: {
        getAllPost(){
            const token = JSON.parse(localStorage.user).token;

            axios.get('http://localhost:3000/api/posts/getAllPost',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            .then(res => {
                this.posts = res.data;
            })
        },
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
        border-radius: 0px 10px 10px 0px;
        border-left: 5px solid red;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        text-align: left;
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

    .modify-btn{
        color: red;
        cursor: pointer;
    }

    .post-content{
        font-size: .9rem;
    }

</style>