<template>
<div class="rescue">

  <div v-if="rescue == 'Paddle Float'">
    <h1>{{ rescue }}</h1>

    <p>This rescue uses a prop called the paddle float, which each guide takes with them on trips when they go out in a single person kayak.</p>

    <p>While this rescue may seem moot once you learn how to reenter by cowboy, it would hypothetically be good backup technique if your balance was comprimised by waves.</p>

    <p>After this rescue, you'd bail out water with pump or go to shore to dump water.</p>

    <div class="iframe">
      <iframe src="https://www.youtube.com/embed/IUHYtQR79Z4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>

    <p>Important things to note:</p>

    <ul>
      <li>You should always know where your float is and how/if it is physically secured.</li>
      <li>Secure the empty paddle float to your paddle end by <b>double wrapping</b> the buckle around the shaft, or your float may just slide off</li>
      <li>As you climb up, your weight is always shifted toward the paddle float.</li>
      <li>Keep low to the boat when on top of the deck </li>
      <li>Don't let go of your paddle like the guy in the video @ 1 minute</li>
    </ul>




  </div>
  <div v-if="rescue == 'Cowboy Self-rescue'">
    <h1>{{ rescue }}</h1>

    <p>This will likely be the go to rescue. It's pretty easy once you've practiced some. </p>

    <p>You push the stern of the boat down into the water as you hop on top of the deck, swing your leg across to straddle the boat, and hop/scoot on up with your paddle in your hands.</p>

    <p>Then bail out the water with a pump or go to shore to dump water.</p>

    <div class="iframe">
      <iframe src="https://www.youtube.com/embed/4bupgSO1XBE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>
    

    <p>Important things to note:</p>
    <ul>
      <li>Common mistake is for your gear to snag on your boat as you move towards your seat</li>
      
    </ul>


  </div>
  <div v-if="rescue == 'T-rescue'">
    <h1>{{ rescue }}</h1>

    <p>This is what you'll use to get guests back in their boats, and dump their water out before they reenter.</p>

    <p>Important things to note:</p>
    <ul>
      <li>When dumping water from the boat slide the boat on to your deck from the bow, not the stern.</li>
      <li>When you align your boats before reentry, make them bow to stern. That way you brace aginst their bow, and they use their stern for reentery.  </li>
    </ul>

    <div class="iframe">
      <iframe src="https://www.youtube.com/embed/cap1wHLDOW4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>
 

  </div>
  <div v-if="rescue == 'Wet Exit'">
    <h1>{{ rescue }}</h1>

    <p>The spray skirts we use for guests are easy to release -- They will practically fall out. However, we still show guests the release technique. </p>

    <p>You'll often be in a single kayak with a neoprene skirt that's a bit tighter. It's important to make sure your release loops are exposed and not tucked away under the skirt. </p>

    <!-- <p>Wearing a spray skirt is sometimes optional, but it's always required to have one easily accessable. Their main purpose is comfort -- to keep the lower half of your body warm and dry on cold or wet days, and to prevent waves splashing into the boat. Not to mention, <router-link :to="{ name: 'Skill', params: { skill: 'Kayak Rolling'}}">kayak rolling</router-link>.
    </p> -->


    <div class="iframe">
      <iframe src="https://www.youtube.com/embed/blJFzirv3-E?start=47" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>
  

  </div>
  <div v-if="rescue == 'Towing'" class="towing">
    <h1>{{ rescue }}</h1>
     <p>Towing is a must have skill and although simple in theory, it is best to practice with it. </p>


    <ul>
        <li><a href="https://www.rei.com/learn/expert-advice/kayak-towing.html">REI covers it in this article</a></li>
    </ul>



    <p>It important to have a tow rope on before you need it, but if you don't have it on make sure it is easily accessable at all times.</p>

    <p>If you have to use one, be cautious of your rope and don't let it become a hazard.</p>

    <br><br>

    <ul>
        <li><b>Contact Tow</b> -- this video shows a rough sea rescue and towing techniques for unstable rescues.</li>
    </ul>

    <div class="iframe">
      <iframe src="https://www.youtube.com/embed/1OhowpFVDe8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>

  </div>
</div>

</template>

<script>
export default {
    props: ['rescue']

}
</script>

<style>
.rescue li {
  margin: 7px 0;
}
.towing ul {
  list-style-type: none;
}
</style>