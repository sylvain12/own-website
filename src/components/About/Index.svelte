<script lang="ts">
  import gsap from 'gsap';
  import {onMount} from 'svelte'
  import Me from './Me.svelte'
  import Skills from './Skills.svelte'

  onMount(() => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to("[data-about-title]", {})
  })


</script>

<div class="container section mt-[24rem] md:mt-[20rem]" id="about">
  <Me />
  <Skills />
</div>