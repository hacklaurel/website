<script>
    import Button from "../components/Button.svelte";
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

<div class="h-102vh w-screen flex -mx-2 -my-2 p-0 bg-cover bg-filter-brightness-50 bg-no-repeat" style="background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.775), rgba(0, 0, 0, 1)), url(./hero.webp); background-position: center; background-size: cover">
    <div class="m-auto w-max-content h-max-content max-w-1/2 text-white text-center">
        <h1 class="text-7xl font-800 mb-0">Unleash your creativity.</h1>
        <p class="text-2xl font-500">Unleash your creativity and problem-solving skills at Hack Laurel, where PGCPS students come together to design and build innovative solutions to real-world challenges.</p>
        <div class="backdrop-blur p-5 b-2 mb-10 b-white rounded-xl" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">Coming Soon.</h1>
            <p class="text-2xl font-500"><span class="font-800">Hack Laurel</span> will be held on <span class="font-800">May 20th, 2023</span>.</p>
        </div>
        <Button href="https://hacklaurel.com">Register</Button>
    </div>
</div>
<div class="w-screen h-full flex -mx-2 -my-5.5 bg-black" style="background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.775), rgba(0, 0, 0, 0.75)), url(./rundown-epoch.webp); background-position: center; background-size: cover">
    <div class="m-auto w-max-content h-max-content max-w-1/2 text-white text-center">
        <h1 class="text-7xl font-800">The Rundown.</h1>
        <p class="text-2xl">Hack Laurel is a high school hackathon where students from PG come together to turn their ideas into reality. Join us for a weekend of coding, creating, and problem-solving as we work together to build innovative solutions to real-world challenges involving students.<br/><br/>

        During this event, you'll have the opportunity to learn new skills, connect with like-minded individuals, and expand your network. Whether you're a beginner or an experienced programmer, Hack Laurel welcomes participants of all levels to collaborate and innovate in a supportive and inclusive environment.<br/>
        </p>
    </div>
    <div class="grid mr-35 max-w-1/3 text-neutral ">
        <div class="backdrop-blur p-5 px-10 b-2 mb-10 b-white rounded-xl hover:text-white transition duration-500" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">HACKING?!?!?</h1>
            <p class="text-2xl font-500">Woah! We aren't hacking <em>servers</em>, we're <em>creating</em>-- think apps and websites. It's completely supervised and educational.</p>
        </div>
        <div class="backdrop-blur p-5 px-10 b-2 mb-10 b-white rounded-xl hover:text-white transition duration-500" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">I don't know how to code!</h1>
            <p class="text-2xl font-500">Don't worry, you're not alone! There'll be plenty of time to learn at the event while you're making or in one of our workshops!</p>
        </div>
        <div class="backdrop-blur p-5 px-10 b-2 mb-10 b-white rounded-xl hover:text-white transition duration-500" style="background: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))">
            <h1 class="text-4xl font-800 mb-0 -spacing-2">Who can join?</h1>
            <p class="text-2xl font-500"><span class="font-800">Any student 18 & under is able to register for the hackathon! We hope to see you there! 👋🏽</p>
        </div>
    </div> 
</div>
