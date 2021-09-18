<template>
    <li>
        <h3><router-link to="/costumers">
            <i class="fas fa-bars"></i>  Costumers
        </router-link></h3>
        
        <i class="fas fa-angle-right"></i>
    </li>
</template>

<script>
export default {
    
}

</script>
<style scoped>
li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    transition: 0.3s;
    padding: 5px 10px;
    border-radius: 3px;
    color: gray;
}
h3{
    font-size: 1.2rem;
    margin: 0;
}
li:hover
{
    background-color: rgba(255, 255, 255, 0.575) ;
    transform: scale(1.05);
}
a{
    color: gray;
    text-decoration: none;
}
</style>