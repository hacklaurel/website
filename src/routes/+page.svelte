<script>
    import Button from "../components/Button.svelte";
    import Calendar from "../components/Calendar.svelte";
</script>
<svelte:head>
<title>Hack Laurel — Unleash Your Creativity</title>
<meta name="title" content="Hack Laurel — Unleash Your Creativity">
<meta name="description" content="Hack Laurel is a high school hackathon where students from PG come together to turn their ideas into reality. ">

<meta property="og:type" content="website">
<meta property="og:url" content="https://hacklaurel.net/">
<meta property="og:title" content="Hack Laurel — Unleash Your Creativity">
<meta property="og:description" content="Hack Laurel is a high school hackathon where students from PG come together to turn their ideas into reality. ">
<meta property="og:image" content="https://hacklaurel.net/hacklaurel_og.png">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://hacklaurel.net/">
<meta property="twitter:title" content="Hack Laurel — Unleash Your Creativity">
<meta property="twitter:description" content="Hack Laurel is a high school hackathon where students from PG come together to turn their ideas into reality. ">
<meta property="twitter:image" content="https://hacklaurel.net/hacklaurel_og.png">    
</svelte:head>

<div class="h-102vh w-screen flex p-0 bg-cover bg-filter-brightness-50 bg-no-repeat" style="background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.775), rgba(0, 0, 0, 1)), url(./hero.webp); background-position: center; background-size: cover">
    <div class="m-auto w-max-content h-max-content max-w-3/4 md:max-w-1/2 text-white text-center">
        <h1 class="text-5xl md:text-7xl font-800 mb-0">Unleash your creativity.</h1>
        <p class="text-xl md:text-2xl font-500">Unleash your creativity and problem-solving skills at Hack Laurel, where PGCPS students come together to design and build innovative solutions to real-world challenges.</p>
        <div class="lg:p-5 mb-5 rounded-xl w-full flex">
            <Calendar/>
        </div>
        <Button href="https://app.fillout.com/t/uDRyboUxWVus">Register</Button>
    </div>
</div>
<div class="w-screen h-full flex lg:flex-row flex-col bg-black" style="background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.775), rgba(0, 0, 0, 0.75)), url(./rundown-epoch.webp); background-position: center; background-size: cover">
    <div class="m-auto w-max-content h-max-content max-w-3/4 lg:max-w-1/2 text-white text-center">
        <h1 class="md:text-7xl text-5xl font-800">The Rundown.</h1>
        <p class="text-2xl">Hack Laurel is a high school hackathon where students from PG come together to turn their ideas into reality. Join us for a weekend of coding, creating, and problem-solving as we work together to build innovative solutions to real-world challenges involving students.<br/><br/>

        During this event, you'll have the opportunity to learn new skills, connect with like-minded individuals, and expand your network. Whether you're a beginner or an experienced programmer, Hack Laurel welcomes participants of all levels to collaborate and innovate in a supportive and inclusive environment.<br/>
        </p>
    </div>
    <div class="grid mx-auto lg:max-w-1/3 max-w-3/4 text-neutral lg:max-h-295 lg:overflow-none py-20" style="-webkit-mask-image: linear-gradient(to bottom,#0000 0%,#000 10%,#000 85%,#0000 100%);">
        <div class="backdrop-blur-xl p-5 px-10 b-2 mb-10 rounded-xl hover:text-white transition duration-500" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">HACKING?!?!?</h1>
            <p class="text-2xl font-500">Woah! We aren't hacking <em>servers</em>, we're <em>creating</em>— think apps and websites. It's completely supervised and educational.</p>
        </div>
        <div class="backdrop-blur-xl p-5 px-10 b-2 mb-10 rounded-xl hover:text-white transition duration-500" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">I don't know how to code!</h1>
            <p class="text-2xl font-500">Don't worry, you're not alone! There'll be plenty of time to learn at the event while you're making or in one of our workshops!</p>
        </div>
        <div class="backdrop-blur-xl p-5 px-10 b-2 mb-10 rounded-xl hover:text-white transition duration-500" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">Who can join?</h1>
            <p class="text-2xl font-500"><span class="font-800">Any student 18 & under is able to register for the hackathon! We hope to see you there!</p>
        </div>
        <div class="backdrop-blur-xl p-5 px-10 b-2 mb-10 rounded-xl hover:text-white transition duration-500" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">What will I need?</h1>
            <p class="text-2xl font-500"><span class="font-800">You'll need a laptop and charger at the event. Don't worry about internet or power strips— we have that covered.</p>
        </div>
    </div> 
</div>
<div class=" h-full flex md:flex-row flex-col bg-black p-10">
    <div class="m-auto w-max-content h-max-content md:max-w-1/2 text-white md:text-left text-center">
        <h1 class="text-5xl my-auto md:text-7xl font-800 -mb-2">Ready to get started?</h1>
    </div>
    <div class="mx-auto flex block md:w-1/3 text-neutral p-5 m-5 mt-0 md:my-auto">
        <Button classes="m-auto w-full md:w-3/4 text-center text-xl" hover={false} href="https://app.fillout.com/t/uDRyboUxWVus">Register</Button>
    </div>
</div>
