<script>
    import Flag from "./icons/Flag.svelte";
    import Clock from "./icons/Clock.svelte";
    import Compass from "./icons/Compass.svelte";
</script>

<div class="rounded-lg border-white h-max-content mx-auto flex lg:flex-row flex-col vertical-middle">
    <div class="w-32 h-32 my-auto">
        <p class="text-white py-2 px-5 bg-primary my-0 -spacing-1 font-800 rounded-t-lg">May</p>
        <p class="text-4xl mt-0 font-800 backdrop-blur-xl bg-[#fff2] py-5 rounded-b-lg">20</p>
    </div>
    <div class="vertical-middle text-start my-auto pt-5 md:pt-0 md:pl-10">
        <p class="my-0"><Flag _class="vertical-middle pr-2" width="40px"/>8829 Greenbelt Rd, Greenbelt, MD 20770</p>
        <p class="my-0"><Compass _class="vertical-middle pr-2" width="40px"/>Zion Church Greenbelt</p>
        <p class="my-0"><Clock _class="vertical-middle pr-2" width="40px"/>8am-8pm</p>
    </div>
</div>