<template>
    <div class="footerOffset">
        <div id="nav">
            <img
                :src="
                    require('@/assets/title.svg')
                "
                alt=""
            />
            <!-- <div class="flex"> -->
            <h2>Guide training resources</h2>
            <!-- </div> -->
        </div>
        <div class="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/rescues"
                >Rescues</router-link
            >
            |
            <router-link
                to="/skills"
                style="width: fit-content"
                >Rolling & other
                skills</router-link
            >
        </div>
        <div class="container">
            <router-view />
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from "@/components/Footer";
export default {
    components: { Footer },
};
</script>

<style>
body,
html {
    padding: 0;
    margin: 0;
    background: rgb(213, 229, 235);
}
#app {
    font-family: Avenir, Helvetica, Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}

#nav {
    padding: 30px;
    max-width: 100%;
    margin: auto;
    text-align: center;
    background: linear-gradient(
        180deg,
        rgb(255, 0, 0) -40%,
        rgb(255, 166, 0) 35%,
        rgb(223, 221, 217)
    );
}
#nav h1 {
    color: rgb(17, 17, 156);
}
#nav img {
    max-width: 100%;
}

#nav h2 {
    color: rgb(23, 23, 90);
}
#nav h1 {
    /* background: radial-gradient(); */
    /* border-radius: 50%; */
    /* background: radial-gradient(transparent, rgb(255, 166, 0), transparent);
  background-position: 50px; */
    /* border: 1px solid black; */
    /* width: 120%; */
    box-shadow: 0xp 0px 3px 3px rgb(255, 166, 0);
    width: fit-content;
    height: 40px;
    margin: auto;
}
#nav h2 {
    margin-top: 40px;
}
@media screen and (max-width: 323px) {
    #nav h2 {
        margin-top: 80px;
    }
}
.nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

.nav a.router-link-exact-active {
    text-decoration: underline;
    color: rgb(100, 80, 212);
}
div.nav {
    position: sticky;
    top: 0;
    padding: 10px 30px 10px;
    text-align: center;
    z-index: 100;
    background: linear-gradient(
        180deg,
        rgb(223, 221, 217),
        rgb(146, 199, 218) 87%,
        transparent
    );
}
div.nav a {
    /* background: gray; */
    line-height: 22px;
}
.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 15px 0;
    min-height: 100vh;
}
.flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footerOffset {
    min-height: 78vh;
}
.box {
    text-align: center;
    padding: 0 10px;
    border: 1px solid gray;
}
.iframe {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 700px;
    margin: 50px auto 0;
    padding-top: 56.25%;
}
iframe {
    max-height: 393.75px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
hr {
    margin: 40px 0;
}
</style>
