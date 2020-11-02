<template>
    <transition name="fade">
        <div class="home">
            <img
                alt="Vue logo"
                src="../assets/logo.png"
                class="logo"
                @click="invert"
                :class="logoClass"
            />
            <LinkContainer />
            <HelloWorld />
            <div class="attribution">
              <footer>&copy; Copyright 2020 Sahil Dawka</footer>
                Icons made by
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                    >Freepik</a
                >
                from
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com</a
                >
                
            </div>
        </div>
    </transition>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LinkContainer from "@/components/LinksContainer.vue";
import { ref } from "vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
        LinkContainer,
    },
    setup() {
        const logoClass = ref({ flip: false });

        function invert() {
            logoClass.value.flip = !logoClass.value.flip;
        }
        return {
            invert,
            logoClass,
        };
    },
};
</script>

<style scoped>
.logo {
    margin-top: 20vh;
    width: 80%;
    transition: transform 0.5s;
}

.flip {
    transform: rotate(180deg);
}

.attribution,
.attribution > * {
    font-size: 10px;
    text-decoration: none;
}
</style>