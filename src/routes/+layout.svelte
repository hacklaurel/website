<script>
    import "uno.css"
    import "../app.css"
    import Button from "../components/Button.svelte"
</script>
<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <script async defer data-website-id="1a85b4c7-bc0d-4457-a016-0c0cd79ddb0b" src="https://magic.thrzl.xyz/umami.js"></script>
</svelte:head>

<header class="display-none z-100 text-neutral-600 body-font md:block md:fixed w-screen pt-2 md:bg-[rgba(0,0,0,0.15)] bg-black md:backdrop-blur-xl text-white">
  <div class="container mx-auto flex flex-wrap md:p-5 p-3 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center hover:scale-105 transition ease-out duration-350 text-neutral-900 mb-4 md:mb-0" href="/">
      <img src="/hacklaurel_wm.webp" class="h-10 md:h-15 w-full" alt="Hack Laurel Wordmark" height={15}>
      <h1 class="sr-only">Hack Laurel</h1>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    </nav>
    <Button classes="py-2 display-none md:block" hover={false} href="https://app.fillout.com/t/uDRyboUxWVus">Register</Button>
  </div>
</header>
<slot/>
<footer class="text-neutral-400 bg-black -mx-2 -my-5.5 w-screen">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col md:text-left text-center">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white" href="/">
      <img src="/hacklaurel_wm.webp" class="h-10" alt="Hack Laurel Wordmark">
    </a>
    <p class="text-sm text-neutral-400 sm:ml-4 sm:pl-4 sm:border-l-2 my-auto sm:border-neutral-800 sm:py-2 ">© 2023 Hack Laurel —
      Created by<a href="https://thrzl.xyz" class="text-neutral-400 ml-1" target="_blank" rel="noopener noreferrer">thrzl</a>
    </p>
    <span class="sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-sm md:font-lg">
      Fiscally sponsored by <span class="text-primary font-bold">The Hack Foundation</span>.<br>Nonprofit EIN: <span class="text-primary font-bold">81-2908499</span>.
    </span>
  </div>
</footer>