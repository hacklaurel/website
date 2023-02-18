<script>
    import "uno.css"
    import "../app.css"
    import Button from "../components/Button.svelte"
</script>

<header class="z-100 text-neutral-600 body-font fixed w-screen pt-2 backdrop-blur-xl text-white" style="background-color: rgba(0, 0, 0, 0.15);">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center hover:scale-105 transition ease-out duration-350 text-neutral-900 mb-4 md:mb-0" href="/">
      <img src="/hacklaurel_wm.webp" class="h-15" alt="Hack Laurel Wordmark" height={15}>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    </nav>
    <Button classes="py-2" hover={false}>Register</Button>
  </div>
</header>
<slot/>
<footer class="text-neutral-400 bg-black -mx-2 -my-5.5">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white" href="/">
      <img src="/hacklaurel_wm.webp" class="h-10" alt="Hack Laurel Wordmark">
    </a>
    <p class="text-4 text-neutral-400 sm:ml-4 sm:pl-4 sm:border-l-2 my-auto sm:border-neutral-800 sm:py-2 ">© 2023 Hack Laurel —
      Created by<a href="https://thrzl.xyz" class="text-neutral-400 ml-1" target="_blank" rel="noopener noreferrer">thrzl</a>
    </p>
    <span class="sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      Fiscally sponsored by <span class="text-primary font-bold">The Hack Foundation</span>.<br>Nonprofit EIN: <span class="text-primary font-bold">81-2908499</span>.
    </span>
  </div>
</footer>