<template>
    <div class="header">
        <router-link to='/'>
            <img src="/assets/img/groupomania-logo-header.png" alt="Groupomania logo">
        </router-link>

        <nav>
            <router-link to='/profile'>
                <div>Mon compte</div>
            </router-link>
            <div id="disconnect-btn" @click = disconnect()>Se déconnecter</div>
        </nav>
    </div> 
</template>

<script>
export default {
    name: 'Header',

    methods: {
        disconnect(){
            localStorage.removeItem('user');
            location.href = "/";
        }
    }
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 70px 20px 70px;
    }

    .header img{
        width: 250px;
        height: auto;
    }

    nav{
        display: flex;
    }

    nav div{
        margin-left: 30px;
        font-weight: bold;
        cursor: pointer;
        transition-duration: .2s;
    }

    .fas{
        font-size: 1.5rem;
    }

    nav div:hover{
        color: rgb(117, 117, 117);
    }
</style>