<template>
    <div class="posts">
        Liste de posts
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
        this.getAllPost()
    },

    methods: {
        getAllPost(){
            let token = JSON.parse(localStorage.user).token;

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
        }
    }
}
</script>

<style>

</style>