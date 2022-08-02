<script lang="ts">
  import Navbar from './Navbar.svelte'
  import Social from './Social.svelte'
  import Hero from './Hero.svelte'
  import {tweened} from 'svelte/motion';
  import {cubicOut} from 'svelte/easing';
  import {onMount} from 'svelte';


  const rotate = tweened('180deg', {
    delay: Infinity,
    easing: cubicOut,
  })

  function scale() {
    return {
      css: (t: any) => {
        console.log("Scale =>", t)
        return `
          transform: scale(${t})
          `
      }
    }
  }

</script>

<div class="container relative section pt-4">
  <Navbar />
  <Social />
  <Hero />
  <img class="bg-img absolute left-1/2 top-1/2 -translate-x-1/2 h-auto w-auto z-[-1] sm:left-1/2 sm:top-1/2" src="/images/bg-circle-full.svg" alt="">
  <img class="bg-img absolute h-auto w-auto z-[-1] left-1/2 top-1/2 -translate-x-1/2 sm:left-1/2 sm:top-1/2" src="/images/bg-wave.svg" alt="">
</div>