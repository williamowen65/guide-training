<template>
  <h1>Geography</h1>

  <p>Here are some basic things you could study about the area</p>
  <div class="group">

    <div>
        <p><b>Tectonic Plates</b></p>
        <ul>
            <li><a href="http://cires1.colorado.edu/people/jones.craig/WUStectonics/PacNW/juan_de_Fuca_general.html">
                Juan De Fuca plate/Subduction Zone
            </a> <br>-- don't worry about knowing all the science here, but the general idea --</li>
        </ul>
    </div>
    <div>
        <p><b>Lime</b></p>
        <ul>
            <li><a href="https://www.google.com/search?rlz=1C1VDKB_enUS932US932&sxsrf=ALeKk03m6bmdKEP2ldkxRyLcV78KBu0rEw%3A1613073398844&ei=9oslYO39Mti70PEPwbWK-AU&q=lime+kiln+industry+san+juan+island+history&oq=lime+kiln+industry+san+ju&gs_lcp=CgZwc3ktYWIQARgBMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeOgcIABBHELADUIEKWPgMYP8VaAFwAngAgAFViAGiApIBATSYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab">
            Lime Kiln Industry
            </a></li>
            <li><a href="https://geology.com/rocks/limestone.shtml">
            Lime Stone
            </a> <br> -- Our limestone has japanese plankton fossils! --</li>
            
        </ul>
    </div>
    
  </div>
<hr>
<div class="group">
    <div>
        <p><b>The major rivers</b></p>
        <ul>
            <li>Fraser</li>
            <li>Nisqually</li>
            <li>Nooksack</li>
            <li>Puyallup</li>
            <li>Skagit</li>
            <li>Snohomish</li>
            <li>Squamish</li>
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
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
}
.group li {
    max-width: 200px;
}
.group div {
    /* margin: auto; */
}
</style>