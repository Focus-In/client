<template>
<div class="container">
    <div class="play-board">
        <div class="play-board-header">
            <div class="score-user">
                Your Score: 10
            </div>
            <div class="logo">
                <h2>Focus In</h2>
            </div>
            <div class="score-user">
                Another User Score: 10
            </div>
        </div>
        <div class="play-board-body">
            <div class="play-image">
                <img src="../assets/soal/soal3.svg" alt="">
            </div>
            <div class="play-board-button">
                <div class="left">
                <button type="button" class="btn btn-dark"> A
                </button>
                </div>
                <div class="right">
                <button type="button" class="btn btn-dark">
                     b
                </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.play-board{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 5vh;
}

.play-board-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px;
}

.play-board-header div{
    background-color: aquamarine;
    margin: 5px;
    padding: 5px;
}

.play-board-body{
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.play-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.play-board-button{
    margin: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
}

.play-board-button div{
    margin: 10px;
    width: 10vw;
    height: 10vh;
}

.play-board-button button{
    width: 100%;
    height: 100%;
}

</style>
