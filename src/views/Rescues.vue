<template>
<div class="rescues">
  <div class="header">
    <div class="flex">
      <h1>Rescues </h1><small>-- also check out the <br class="mobile"> <router-link :to="{ name: 'Rescue', params: { rescue: 'Wet Exit'}}"> Wet Exit</router-link></small>
    </div>
  <div class="box towing">
    <p>
      On a related note, see <router-link :to="{ name: 'Rescue', params: { rescue: 'Towing'}}"> Towing </router-link>
    </p>
  </div>
  </div>

  <p>It is a requirement that all guides can perform these basic rescues in a short amount of time (Aiming for that less than a minute mark)</p>

  <p>The most important thing is that you are able to get yourself, or guests back in, <b>any way possible.</b> But here are a few options which you will have the chance to practice early in the season and periodically through the summer.</p>

  <div class="box">
   <p>A rescue doesn't stop when the wet ones are back in their seat, but when they have their composure back. (60 second - 5 minutes)</p>
  </div>
    
  

  <p>Click on the rescue names to learn more</p>

  <h2>Self-rescues</h2>

  <p>Even if you know how to perform a kayak roll, it is important to practice these. </p>

  <ul>
      <li><router-link :to="{ name: 'Rescue', params: { rescue: 'Paddle Float'}}"> paddle float self-rescue </router-link></li>
      <li><router-link :to="{ name: 'Rescue', params: { rescue: 'Cowboy Self-rescue'}}"> cowboy self-rescue </router-link></li>
  </ul>

  <h2>Assisted Rescues</h2>

   <p>In the case of a guest tipping over </p>

  <ul>
      <li><router-link :to="{ name: 'Rescue', params: { rescue: 'T-rescue'}}"> T-rescue </router-link></li>
  </ul>

  <p>If you are having trouble getting guests back up into their boat, for various reasons, here are some alternatives</p>
  <ul>
    <li><router-link :to="{ name: 'Rescue', params: { rescue: 'Stirrup' }}">Stirrup</router-link> -- Stirrups are a prop on your trip packing list</li>
    <li><router-link :to="{ name: 'Rescue', params: { rescue: 'The Scoop' }}">The Scoop</router-link> -- Simplifying the rescue for injured guest</li>
  </ul>
</div>

</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const show = ref(null)
  }

}
</script>

<style>
.rescues .flex {
  display: flex;
}
.rescues .flex small {
 /* display: flex; */
}
.rescues p{
  padding: 0 10px;
}
.rescues .header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.rescues .header small {
  margin-left: 30px;
}
.box{
  border: 1px solid gray;
}
.towing {
  margin-left: auto;
}
@media screen and (max-width: 634px) {
  .towing {
    display: block;
    margin-right: auto;
  }
}
br.mobile {
  display: none;
}
@media screen and (max-width: 366px) {
  br.mobile {
    display:inline;
  }
}
</style>