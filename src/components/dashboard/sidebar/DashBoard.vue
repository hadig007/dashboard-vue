<template>
    <li>
        <h3><router-link to="/dashboard">
           <i class="fas fa-chart-line"></i>  Dashboad 
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
h3:hover{
    background-color: rgb(202, 202, 202) ;
    transform: scale(1.05);
    color: rgb(0, 0, 0);
}
</style>