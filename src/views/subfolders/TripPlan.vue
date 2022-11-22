<template>
    <div v-if="id == 'Tides and Currents'">
        <h1>{{ id }}</h1>
        <p>
            Are there any spot's along your route
            where you are going to be fighting the
            current? Ideally not many. Your group
            is only as strong as the weakest
            paddler and there is a stategic safety
            perspective to understanding the
            currents.
        </p>

        <!-- <p>Hypothectical case:</p>
  <p class="box">What if you were towing who was someone was injured? Maybe they're also unstable, and need another kayak to brace them for support (See <router-link :to="{ name: 'Rescue', params: { rescue: 'Towing' }}">Contact Tow</router-link>). Now you are towing two kayaks, god forbid you are also against the current.</p>

  <p>So don't put yourself in that situation by taking the time to understand currents. Have a plan. Observe your plan against the backdrop of the actual currents and compare.</p> -->

        <p>
            This section is to provide information
            to help you understand your resources
            and create your workflow.
        </p>

        <div class="tideResources">
            <h2>
                Use the tide book to plan and use
                DeepZoom to make sure it makes
                sense
            </h2>
            <ul>
                <li>
                    <router-link
                        :to="{
                            name: 'TripPlan',
                            params: {
                                id: 'Tide Book',
                            },
                        }"
                        >Tide Book</router-link
                    >
                </li>
                <li>
                    <a
                        href="https://www.deepzoom.com/"
                        >DeepZoom</a
                    >
                </li>
            </ul>
            <br />

            <p><b>General Knowledge</b></p>
            <ul>
                <li>
                    <router-link
                        :to="{
                            name: 'TripPlan',
                            params: {
                                id: 'Back Eddies',
                            },
                        }"
                        >Back Eddies</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="tideResources">
            <h2>Trip Plan Example</h2>
            <div class="img">
                <img
                    src="https://via.placeholder.com/500x500?text=Picture+of+trip+plan+notes"
                    alt=""
                />
            </div>
        </div>
    </div>
    <div v-if="id == 'Weather'">
        <h1>{{ id }}</h1>

        <p>
            We are specifically concerned with
            wind direction and speed. Take the
            time to compare reports from different
            agecies.
        </p>

        <p>Haro Strait</p>
        <ul>
            <li>
                <a
                    href="https://marine.weather.gov/MapClick.php?lat=48.5356&lon=-123.1998&unit=0&lg=english&FcstType=text&TextType=1"
                    >NOAA</a
                >
            </li>
        </ul>

        <br /><br />
        <br /><br />
        <br /><br />
    </div>
    <div v-if="id == 'Packing Checklist'">
        <h1>{{ id }}</h1>

        <div class="field">
            <input
                type="checkbox"
                name="paddles"
                id="paddles"
            />
            <label for="paddles">Paddles </label>
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="lifeVest"
                id="lifeVest"
            />
            <label for="lifeVest"
                >Life vests</label
            >
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="spraySkirts"
                id="spraySkirts"
            />
            <label for="spraySkirts"
                >Spray Skirts</label
            >
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="bailPumps"
                id="bailPumps"
            />
            <label for="bailPumps"
                >Bailing Pumps</label
            >
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="seatCushions"
                id="seatCushions"
            />
            <label for="seatCushions"
                >Seat Cushions</label
            >
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="towBelt"
                id="towBelt"
            />
            <label for="towBelt">Tow Belt </label>
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="stirrup"
                id="stirrup"
            />
            <label for="towBelt">Stirrup </label>
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="water"
                id="water"
            />
            <label for="water">Spare Water</label>
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="lunches"
                id="lunches"
            />
            <label for="lunches">Lunches</label>
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="radio"
                id="radio"
            />
            <label for="radio"
                >VHF Radio (charged)</label
            >
        </div>
        <div class="field">
            <input
                type="checkbox"
                name="radio"
                id="radio"
            />
            <label for="radio"
                >First aid kit</label
            >
        </div>
    </div>
    <div v-if="id == 'General Expectations'">
        <h1>{{ id }}</h1>

        <p><b>Beach Instruction</b></p>
        <ul>
            <li>
                Instruct guests to not stand in
                their boats when enter/exit
            </li>
        </ul>

        <br />
        <hr />
        <br />

        <p><b>On the Water</b></p>
        <ul>
            <li>Keep your group together</li>
        </ul>

        <br />
        <hr />
        <br />

        <p><b>At Camp</b></p>
        <ul>
            <li>
                Bring a first aid kit on group
                hikes
            </li>
        </ul>

        <br />
        <hr />
        <br />

        <p><b>Wildlife</b></p>
        <ul>
            <li>Raft up around whales</li>
            <li>Give hauled out seals space</li>
        </ul>
    </div>
    <div v-if="id == 'Edge-Cases'">
        <h1>{{ id }}</h1>

        <p>
            This section is to provide examples of
            situations you may find yourself in
            while guiding and what you can do to
            maximize safety.
        </p>

        <hr />

        <p>
            If you find yourself ( as a solo guide
            ) leading a group around a corner
            through tough currents, its important
            to keep an eye on guests at all times.
            Position yourself at where the
            shoreline curves and tread water there
            while guests make their way between
            you and the shore.
        </p>

        <hr />

        <p>
            You are never going to be in this
            'Gully' situation in the San Juan
            Islands so don't worry, but I thought
            this video was super interesting.
        </p>

        <div class="iframe">
            <iframe
                src="https://www.youtube.com/embed/tYZKLZeVkGE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
            ></iframe>
        </div>
    </div>
    <div v-if="id == 'Radio Calls'">
        <h1>{{ id }} (channel 16)</h1>

        <p>
            Your radio is a lifeline. It has the
            ability to connect you with the Coast
            Guard if you are in a situation that
            demands it, and even to local boats
            that are about.
        </p>

        <p>
            There's protocal for both
            life-threatening(<code
                >"mayday mayday"</code
            >) and non-life-threatening (<code
                >"pan pan"</code
            >) scenerios to practice, and calling
            for help is another reason to know the
            name's of various locations and
            waterways.
        </p>

        <p>
            We will practice the motions of these
            examples:
        </p>
        <ul>
            <li>
                <a
                    href="https://www.youtube.com/watch?v=y9RaU-2c8m4&feature=emb_title"
                    >Calling for Emergency
                    Assitance</a
                >
                -- Video Link
            </li>
            <li>
                <a
                    href="https://www.paddlinglight.com/articles/how-to-use-vhf-radio/"
                    >More Examples</a
                >
            </li>
        </ul>

        <p>
            The stats suggest the Coast Guard
            rescues an average of 114 people a day
            from along the United States
            coastline. -- See
            <a href="#!"> risk management</a> to
            know what you can do to decrease your
            chances of being in bad situation.
        </p>

        <p>
            If an emergency happens on land - at
            camp - the protocol may look
            different. My understanding is the
            coast gaurd is specifically for
            rescues on the water.
        </p>
    </div>

    <div v-if="id == 'Tide Book'">
        <h1>{{ id }}</h1>
        <p>
            Here are pictures of the main sections
            of your tide book and the information
            they relay.
        </p>
    </div>
    <div v-if="id == 'Back Eddies'">
        <h1>{{ id }}</h1>

        <p>
            Back eddies are counter currents that
            travel the opposite direction of the
            main current, and when they exist they
            can be extremely useful for your trip.
        </p>
        <p>
            In the Haro Strait they can take up
            the inshore space anywhere from 1 to
            300 meters ( depending on the
            location, among other conditions )
        </p>

        <p>
            They only exist if the conditions are
            right and but harder to predict by
            simply looking up the currents.
            <b
                >So you definelty don't plan your
                trip depending on back eddies.</b
            >
        </p>

        <p>
            Aside from location and main currents
            speed, back eddies are also effected
            by the angle of moon, Earth, and Sun.
            Meaning that familiar back eddies can
            be non-existant while the current
            rages in a singular direction.
        </p>

        <p>
            They only become slightly easier to
            predict by observation once you get
            out there day to day basis.
        </p>
    </div>
</template>

<script>
export default {
    props: ["id"],
};
</script>

<style>
p.box {
    padding: 10px 7px;
}
.tideResources {
    margin-top: 100px;
}
.tideResources img {
    width: 100%;
    max-width: 700px;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
}
.img {
    display: flex;
    justify-content: center;
}
input[type="checkbox"] {
    cursor: pointer;
    width: 20px;
    height: 20px;
}
.field {
    display: flex;
    align-items: center;
}
label {
    padding-left: 5px;
}
</style>
