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

<div class="container relative section">
  <Navbar />
  <Social />
  <Hero />
  <!-- <img class="absolute -top-4 -right-[15rem]" src="/images/bg-circle-top.svg" alt=""> -->
  <!-- <img class="absolute -left-[50rem] top-8 h-auto w-auto z-[-1]" src="/images/bg-circle-full.svg" alt=""> -->
  <img class="bg-img absolute left-1/2 top-1/2 h-auto w-auto z-[-1]" src="/images/bg-circle-full.svg" alt="">
  <img class="bg-img absolute left-1/2 top-1/2 h-auto w-auto z-[-1]" src="/images/bg-wave.svg" alt="">
</div>