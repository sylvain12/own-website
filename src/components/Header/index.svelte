<script>
  import Navbar from './Navbar.svelte'
  import Social from './Social.svelte'
  import Hero from './Hero.svelte'
</script>

<div class="container relative section">
  <Navbar />
  <Social />
  <Hero />
  <!-- <img class="absolute -top-4 -right-[15rem]" src="/images/bg-circle-top.svg" alt=""> -->
  <!-- <img class="absolute -left-[50rem] top-8 h-auto w-auto z-[-1]" src="/images/bg-circle-full.svg" alt=""> -->
  <img class="absolute left-1/2 top-1/2 h-auto w-auto z-[-1]" src="/images/bg-circle-full.svg" alt="">
  <img class="absolute left-1/2 top-1/2 h-auto w-auto z-[-1]" src="/images/bg-wave.svg" alt="">
</div>