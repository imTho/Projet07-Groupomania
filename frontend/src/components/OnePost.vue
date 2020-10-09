<template>
    <div class="onePost">
        my post
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'OnePost',

    mounted(){
        this.getOnePost();
    },

    methods: {
        getOnePost(){
            const postId = this.$route.params.id;
            console.log(postId);

            axios.post(`${this.$apiUrl}/posts/getOnePost`,
                {
                    postId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(res => {
                console.log(res.data[0])
            })
        }
    }
}
</script>

<style>

</style>