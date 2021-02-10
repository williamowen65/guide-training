<template>
  <h1>Flora</h1>

  <p>This is a list of animals you'll see out here. Each name links to a google search. </p>
  <div class="group">

    <div>
        <p><b>Coniferous/Evergreen Trees</b></p>
        <ul>
            <li><a href="#!">
                Douglas Fir
            </a></li>
        </ul>
    </div>
    <div>
        <p><b>Deciduous Trees</b></p>
        <ul>
            <li><a href="#!">
                Madrona
            </a></li>
        </ul>
    </div>
    
  </div>
<hr>



</template>

<script>
export default {

}
</script>

<style>
.group {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
}
.group div {
    /* margin: auto; */
}
</style>