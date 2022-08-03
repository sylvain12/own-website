<script lang="ts">
  import {onMount} from 'svelte'
  import {gsap} from 'gsap'
  import Navbar from './Navbar.svelte'
  import Social from './Social.svelte'
  import Hero from './Hero.svelte'

  onMount(() => {
    let tl = gsap.timeline({yoyo: true, smoothChildTiming: true})
    let lt2 =  gsap.timeline({yoyo: true, smoothChildTiming: true})
    let tl3 = gsap.timeline({yoyo: true, repeat: -1})
    tl.from("[data-hero-title]", {duration: 1.5, opacity: 0, x: 100, ease: 'back'},)
    .from("[data-hero-subtitle]", {duration: 1, opacity: 0, y: 10, ease: 'back',}, "-=1")
    .from("[data-social-icon]", {duration: 1.5, opacity: 0, y: 100, scale: .3, stagger: 0.25}, "-=1.5")
    .from("[data-hero-greeting]", {duration: 1, opacity: 0, x: 100}, "-=2")
    
    lt2.from("[data-top-bg-circle]", {duration:1.5, scale: .6, ease: "bounces",})
    .from("[data-top-bg-wave]", {duration: 1, y: -200}, "-=2")

    tl3.from("[data-top-scroll]", {duration: .85, y: -30, ease: "elastics"})
        // .to("[data-top-scroll]", {y: 0}, "-=1")
        // .to("[data-top-scroll]", {y: 25, ease: "bounce"})
  })


</script>

<div class="container relative section pt-4 h-full">
  <Navbar />
  <Social />
  <Hero />
  <img data-top-bg-circle class="bg-img absolute left-1/2 top-1/2 -translate-x-1/2 h-auto w-auto z-[-1] sm:left-1/2 sm:top-1/2" src="/images/bg-circle-full.svg" alt="">
  <img data-top-bg-wave class="bg-img absolute h-auto w-auto z-[-1] left-1/2 top-1/2 -translate-x-1/2 sm:left-1/2 sm:top-1/2" src="/images/bg-wave.svg" alt="">

  <a href="#about" class="absolute left-1/2 -translate-x-1/2 bottom-[-23rem] md:bottom-[-20rem]">
    <svg data-top-scroll class="text-main text-[3rem] md:text-[6rem]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="m252.482 345.034l-109.02-109.021L64 315.475l109.087 109.088l-.041.041l68.082 68.082l11.354 11.273l.041.041l68.15-68.148l11.206-11.289l109.087-109.088l-79.466-79.462Zm45.523 68.149l-11.17 11.252l-34.353 34.351l-.039-.038l-34.276-34.277l.041-.042l-108.954-108.954l34.208-34.207l109.02 109.021L361.5 281.268l34.208 34.207Z"/><path fill="currentColor" d="m173.046 203.4l68.082 68.082l11.354 11.272l.041.042l68.15-68.149l11.206-11.289L440.966 94.267L361.5 14.8L252.482 123.825L143.462 14.8L64 94.267l109.087 109.087ZM109.254 94.267l34.208-34.208l109.02 109.021L361.5 60.059l34.208 34.208l-97.707 97.707l-11.182 11.264l-34.341 34.34l-.039-.039l-34.276-34.277l.041-.041Z"/></svg>
  </a>
</div>