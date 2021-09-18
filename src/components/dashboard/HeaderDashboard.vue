<template>
    <div>
        <header>
            <div class="title">
                <h2>HADIGU<span>app</span></h2>
            </div>
            <div class="action">
                <div class="logout">
                    <p>logout <i class="fas fa-sign-out-alt"></i></p>
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap');
header{
    width: 100%;
    height: 80px;
    background-color: rgb(160, 0, 160);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-family: 'Signika Negative', sans-serif;
}
h2{
    padding: 0 20px;
    margin: 0;
    background-color: purple;
    width: 265.75px;
    height: 80px;
    display: flex;
    align-items: center;
}
p{
    margin: 0 20px;
}
p{
    background-color: rgb(216, 245, 216);
    padding: 2px 5px;
    border-radius: 3px;
    color: grey;
}
span{
    color: rgba(255, 255, 255, 0.651);
}
</style>