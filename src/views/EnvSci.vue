<template>
    <div class="local">
        <h1>Local Knowledge</h1>

        <p>
            I want to give you ideas about what
            you could study in preparation for
            local knowledge and make it easy to
            find a variety of material. We should
            all know a handful of local natural
            facts to share with guests.
        </p>

        <p>
            I don't describe any topics in detail
            here, but lists them out and link them
            to google searches (unless otherwise
            noted). Don't expect it to cover
            everything. I hope it help fuel your
            motivation as a guide.
        </p>

        <br />

        <p style="text-align: center">
            I'll add to this periodically. I break
            it down between these two categories:
        </p>

        <div class="breakdown">
            <p>
                The
                <router-link to="/env-sci/geology"
                    >Geography</router-link
                >
                of the area
            </p>
            <p>&</p>
            <p>
                <router-link to="/env-sci/ecology"
                    >Ecology</router-link
                >
                -- Plants & Animals
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.local h1 {
    display: inline-block;
}
.local .breakdown {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
