<template>
  <h1>Flora</h1>

  <p>This is a list of animals you'll see out here. Each name links to a google search. </p>
  <div class="group">

    <div>
        <p><b>Coniferous/Evergreen Trees</b></p>
        <ul>
            <li><a>
                Douglas Fir
            </a></li>
            <li><a>
                Cedar
            </a></li>
        </ul>
    </div>
    <div>
        <p><b>Deciduous Trees</b></p>
        <ul>
            <li><a href="https://extension.oregonstate.edu/news/native-madrones-are-special-northwest">
                Madrona
            </a></li>
            <li><a href="https://ohgarryoaksociety.org/what-is-a-garry-oak/">
                Garry Oak
            </a></li>
        </ul>
    </div>
    
  </div>
<hr>
<div class="group">
    <div>
        <p><b>Ferns</b></p>
        <ul>
            <li>Sword</li>
            <li>Lady</li>
            <li>Maidenhair</li>
        </ul>
    </div>
    <div>
        <p><b>Underbrush</b></p>
        <ul>
            <li>Salal</li>
            <li>Ocean Spray</li>
            <li>Snow Berry</li>
        </ul>
    </div>
    <div>
        <p><b>Etc</b></p>
        <ul>
            <li>Wild Rose</li>
            <li>Oregon Manroot</li>
            <li>Prickly Pear Cactus</li>
        </ul>
    </div>
</div>


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