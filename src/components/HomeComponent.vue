<template>
    <div id="home" class="bg-gray-300 flex flex-col justify-start flex-grow">
        <section id="carousel" class="relative py-24 px-4">
            <div class="z-20 relative container mx-auto h-full">
                <div class="flex flex-row w-full sm:w-1/2 flex-grow align-center h-full">
                    <div class="flex flex-col items-start text-left p-8 mx-4 flex-initial justify-between" style="background: #264a63">
                        <h1 class="text-6xl font-bold">Skill Market</h1>
                        <p class="text-xl font-bold">
                            The place to learn new skills and meet people with similar interests.
                        </p>
                        <div class="mt-10">
                            <router-link
                                    tag="button"
                                    to="/signup"
                                    class="rounded px-4 py-2">
                                Get Started
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute inset-0 h-auto z-10">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="h-full w-full object-fit-cover">
            </div>
        </section>

        <section id="how-it-works" class="bg-white">
            <div class="container mx-auto">
                <h1 class="text-4xl font-black uppercase mt-32 mb-12">How it works</h1>
                <div class="sm:flex mt-12 mb-32 items-stretch justify-center flex-grow">
                    <div class="how-it-works-step">
                        <h1>1</h1>
                        <p><span class="font-bold">Create</span> an account</p>
                    </div>
                    <div class="how-it-works-step">
                        <h1>2</h1>
                        <p>Customize your <span class="font-bold">profile</span>,
                            adding your location, interests and areas of expertise</p>
                    </div>
                    <div class="how-it-works-step">
                        <h1>3</h1>
                        <p><span class="font-bold">Match</span> with other people based on your location, similar interests, or complementary skills</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-blue-200">
            <div class="container mx-auto">
                <h1 class="text-4xl font-black uppercase mt-32 mb-12 mx-10">Match with people near you or all around the world!</h1>
                <div class="sm:flex mt-12 mb-32 items-stretch justify-center flex-grow">
                    <div class="sm:w-1/2 self-center flex justify-center m-8">
                        <img src="../assets/isologo-small.png" />
                    </div>
                    <div class="sm:w-1/2 self-center flex justify-center m-8">
                        <img src="../assets/sm-map.gif" />
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
    name: 'HomeComponent',
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    #carousel {
        color: #db9c6d;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    #carousel h1 {
        font-family: Morva, serif;
    }

    @font-face {
        font-family:"Morva";
        src: url("../assets/MORVA.ttf") format("truetype");
    }

    .how-it-works-step {
        margin: 4rem;
        max-width: 20rem;
        flex: 1 1 0%;
        border-style: solid;
        border-color: #2d3748;
    }

    .how-it-works-step h1 {
        margin-bottom: 12px;
        font-size: x-large;
        font-weight: bolder;
    }

    .how-it-works-step p {
        margin: 3px;
    }

    .object-fit-cover {
        object-fit: cover;
    }
</style>
