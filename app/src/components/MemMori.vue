<template>
<div class="mem-mori">
    <h3>
        Memento-mori: My life in weeks
    </h3>
    <transition name="fade">
        <div ref="memori" @click="goBack"></div>
    </transition>
</div>

</template>

<script>
export default {
    name: "Memori",
    mounted() {
        function weeksBetween(d2, d1) {
            return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
        }

        let nWeeksTotal = 52 * 99;
        let nWeeksLived = weeksBetween(new Date(), new Date(1992, 2, 26));
        let memori = this.$refs.memori;
        for (let i = 0; i < nWeeksTotal; i++) {
            let x = document.createElement("div");
            x.classList.add("weekBox");
            if (i < nWeeksLived) {
                x.style.background = "#222";
            }
            if (i == nWeeksLived) {
                x.style.background = "red";
                x.classList.add("strobeWeek");
            }
            memori.appendChild(x);
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
    .mem-mori{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
<style>
.strobeWeek {
    -webkit-animation: strobe 0.9s infinite;
}
@-webkit-keyframes strobe {
    0% {
        opacity: 0.9;
        background: #eee;
    }
    100% {
        opacity: 1;
        background: red;
    }
}
.weekBox {
    height: 6px;
    width: 6px;
    color: #fff;
    margin: 5px 5px;
    position: relative;
    float: left;
    border: solid 1px black;
}
</style>