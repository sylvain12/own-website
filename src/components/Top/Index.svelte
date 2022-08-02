<script lang="ts">
  import {onMount} from 'svelte'
  import {gsap} from 'gsap'
  import Navbar from './Navbar.svelte'
  import Social from './Social.svelte'
  import Hero from './Hero.svelte'

  onMount(() => {
    let tl = gsap.timeline({yoyo: true, smoothChildTiming: true})
    let lt2 =  gsap.timeline({yoyo: true, smoothChildTiming: true})
    tl.from("[data-hero-title]", {duration: 1.5, opacity: 0, x: 100, ease: 'back'},)
    .from("[data-hero-subtitle]", {duration: 1, opacity: 0, y: 10, ease: 'back',}, "-=1")
    .from("[data-social-icon]", {duration: 1.5, opacity: 0, y: 100, scale: .3, stagger: 0.25}, "-=1.5")
    .from("[data-hero-greeting]", {duration: 1, opacity: 0, x: 100}, "-=2")
    
    lt2.from("[data-top-bg-circle]", {duration:1.5, scale: .6, ease: "bounces",})
    .from("[data-top-bg-wave]", {duration: 1, y: -200}, "-=2")
  })


</script>

<div class="container relative section pt-4">
  <Navbar />
  <Social />
  <Hero />
  <img data-top-bg-circle class="bg-img absolute left-1/2 top-1/2 -translate-x-1/2 h-auto w-auto z-[-1] sm:left-1/2 sm:top-1/2" src="/images/bg-circle-full.svg" alt="">
  <img data-top-bg-wave class="bg-img absolute h-auto w-auto z-[-1] left-1/2 top-1/2 -translate-x-1/2 sm:left-1/2 sm:top-1/2" src="/images/bg-wave.svg" alt="">
</div>