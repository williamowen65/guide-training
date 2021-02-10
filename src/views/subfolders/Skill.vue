<template>
  <div v-if="skill == 'kayak-rolling'">
    <h1>Kayak Rolling</h1>

    <p></p>

    <ul>
      <li>Eskimo Roll</li>
      <li>The Butterfly</li>
      <li>The half-paddle</li>
      <li>Hand Roll</li>
    </ul>

  </div>
  <div v-if="skill == 'sculling'">
    <h1>Sculling</h1>

    <p>This is what you get with my limited animation skills, but hopefully it gets the idea across.</p>

    <p>Sculling over laps with rolling skills. The leading edge of the paddle is always up.</p>

    <div class="scullContainer">
      <div class="kayak dip">
        <div class="cockpit"></div>
      </div>
      <div class="paddle dip"></div>
      <hr class="water">
    </div>
 
    <p>This demo above shows how you can use a scull to dip yourself in the water on a hot day without completely falling over, but there are more uses for this skill.</p>

    <p >Below shows how to use sculling to move your boat side-to-side. This animation timing falls off point after a littler while, fyi.</p>

    <p style="margin-bottom: 100px">Sculling like this will help you position yourself next to client boats. </p>

    <div class="scullContainer side">
      <div class="kayak side">
        <div class="cockpit"></div>
        <div class="paddle side"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { gsap }from 'gsap'
import { onMounted } from 'vue'
export default {
    props: [ 'skill' ],
    setup() {

      onMounted(() => {
        const scull = gsap.timeline({repeat: -1, defaults: {ease: "sine"}})
        scull.to('.paddle.dip', { left: '75%', duration: 2 })
            .to('.paddle.dip', { rotate: '130', duration: 0.3}, 1.6)
            .to('.paddle.dip', { left: '25%', duration: 1.8})
            .to('.paddle.dip', { rotate: '50', duration: 0.3}, 3.6)

            
        const paddleside = gsap.timeline({repeat: -1, defaults: {ease: "linear"}})
        paddleside.to('.paddle.side', { left: '15%', duration: 2 })
            .to('.paddle.side', { rotate: '130', duration: 0.3})
            .to('.paddle.side', { left: '75%', duration: 1.8})
            .to('.paddle.side', { rotate: '50', duration: 0.6}, 3.6)

            .to('.paddle.side', { y: '-70px', rotate: '130', duration: 0.3}, 5.3)
            .to('.paddle.side', { left: '25%', duration: 2 })
            .to('.paddle.side', { rotate: '50', duration: 0.3})
            .to('.paddle.side', { left: '75%', duration: 1.6})
            .to('.paddle.side', { rotate: '130', duration: 0.3})
            .to('.paddle.side', { y: 0, rotate: '50', duration: 0.3}, 10.4)
            // .to('.paddle.side', { left: '60%', duration: 0.5 })


        const scullside = gsap.timeline({ repeat: -1, ease: 'power1.inOut'})
        scullside.to('.scullContainer.side', { left: '30%', duration: 5.3 }, 0)
            .to('.kayak.side', {rotate: '5deg'}, 0)
            .to('.scullContainer.side', { left: '90%', duration: 5.3 }, 5.3)
            .to('.kayak.side', {rotate: '-5deg'}, "<")
            
           
      })

    }
}
</script>

<style>
.paddle.dip {
  width: 10px;
  height: 50px;
  background: gray;
  border-radius: 100%;
  position: relative;
  left: 25%;
  /* animation: dip 2s linear infinite alternate both; */
  transform: rotate(50deg) translateX(30px);
}

.scullContainer.side {
  /* margin-left: 100px; */
  position: absolute;
  transform: rotate(90deg) translateY(200px);
  left: 90%;
  /* margin: auto; */
}
.scullContainer {
  max-width: 500px;
  position: relative;
  margin: auto;
  height: 170px;
}
.scullContainer.dip {
  margin: 0 auto;
}
.water {
  transform: translate(20px,1px);
  width: 55%;
  margin: 0 auto;
}
.kayak{
  width: 55%;
  height: 50px;
  background: rgba(0, 0, 255, 0.144);
  border-radius: 50%;
  margin: 0 auto;
  transform: translate(20px, 65px);
}
.kayak.dip {
  clip-path: inset(0 0 29% 0);
}
.kayak.side {
  width: 250px;
}
.cockpit{
  width: 12%;
  height: 20px;
  background: rgb(213, 229, 235);
  margin: auto;
  border-radius: 50%;
  transform: scale(2) translateY(8px);
}
.paddle.side {
  width: 10px;
  height: 50px;
  background: gray;
  border-radius: 100%;
  position: absolute;
  left: 75%;
  transform: rotate(50deg) translateX(35px);
}

</style>