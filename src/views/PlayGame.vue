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
    justify-content: center;
    margin-top: 10vh;
    background-color: beige;
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

</style>
