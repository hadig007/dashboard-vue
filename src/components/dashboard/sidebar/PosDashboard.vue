<template>
    <li>
        <h3><router-link to="/pos">
           <i class="fas fa-tachometer-alt"></i>  POS
        </router-link></h3>
    </li>
</template>

<script>
export default {
    
}

</script>
<style scoped>
li{
    list-style: none;
}
h3{
    font-size: 1.3rem;
    transition: 0.3s;
    padding: 5px 10px;
    border-radius: 3px;
}
a{
    color: rgb(19, 58, 90);
    text-decoration: none;
    font-weight: bold;
}
svg{
    color: rgb(19, 58, 90);
}
h3:hover{
    background-color: rgba(255, 255, 255, 0.575) ;
    transform: scale(1.05);
}
</style>