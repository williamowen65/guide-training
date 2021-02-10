<template>
<div class="trip-planning">
  <h1>Trip Planning</h1>

  <p>This page has you covered for resources to help you plan a trip. There's a lot to unpack, but it'll become intuitive with practice.</p>

  <p>Click the topics to explore resources.</p>

  <h2>Trip Checklist</h2>

  <ul>
     <li> <router-link :to="{ name: 'TripPlan', params: { id: 'Tides and Currents'}}">Tides and Currents</router-link></li>
      <li><router-link :to="{ name: 'TripPlan', params: { id: 'Weather'}}">Weather</router-link></li>
      <li><router-link :to="{ name: 'TripPlan', params: { id: 'Packing Checklist'}}">Packing Checklist</router-link></li>
  </ul>

  <h2>Group Management</h2>

  <ul>
      <li><router-link :to="{ name: 'TripPlan', params: { id: 'General Expectations'}}">General Expectations</router-link></li>
      <li><router-link :to="{ name: 'TripPlan', params: { id: 'Edge-Cases'}}">Edge-Cases</router-link></li>
  </ul>

  <h2>VHF Radio</h2>
  <ul>
      <li><router-link :to="{ name: 'TripPlan', params: { id: 'Weather' }}">Weather</router-link></li>
      <li><router-link :to="{ name: 'TripPlan', params: { id: 'Radio Calls' }}">Calls</router-link></li>
  </ul>
  
  <h2> Risk Management </h2>
    
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>