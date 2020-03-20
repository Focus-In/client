<template>
    <div class="container">
        <div class="winner-layout">
            <div class="winner-column">
                <div class="winner-image-box">
                    <img src="../assets/winner.png" alt="" class="winner-image">
                </div>
                <div class="winner-result">
                    <div class="card">
                        <div class="card-header">
                            <h3>The Winner Is</h3>
                        </div>
                        <div class="result">
                            <div class="player-winner">
                            <img src="../assets/user.png" alt="">
                            <p>Nama Pemenang</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-winner">
                        <router-link class="btn btn-info" to="/">Back to home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Winner'
}
</script>
<style>

.winner-layout{
    height: 100vh;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.winner-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.winner-image-box{
    width: 70%;
}

.winner-image{
    max-width: 70%;
}

.winner-result{
    padding: 10px;
    width: 100%;
}

.card-header{
    background-color: #186277;
}

.player-winner{
    padding: 10px;
}

.footer-winner{
    padding: 10px;
}

</style>
