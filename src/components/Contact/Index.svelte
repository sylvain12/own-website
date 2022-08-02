<script>
  import {owner} from '../../stores/social.store'
  import { Direction } from '../../shared/model/Position.model';
  import Title from '../ui/Title.svelte';
  import { Color } from '../../shared/enums/Color.enum';

  let title = "Contact"
  let icon = {position: Direction.Right, color: Color.Second}
  let iconCenter = {position: Direction.Down, color: Color.Second}
</script>

<div class="container section" id="contact">
  <div class="md:block hidden">
    <Title {title} icon="{icon}" />
  </div>
  <div class="md:hidden text-center mb-[4rem] flex justify-center w-full">
    <Title {title} icon="{iconCenter}" />
  </div>
  

  <a href="mailto://{$owner.identification.email}" class="uppercase mb-[5rem] text-center flex flex-wrap justify-center items-center md:mb-[1em] text-[2rem] sm:text-[4rem] md:text-[8rem] lg:text-[8rem] xl:text-[10rem]">
    <span class="link link-orange">{$owner.identification.email}</span>
    <!-- <svg class="text-second xl:w-[12rem] lg:w-[7rem]" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> 
</svg> -->

  </a>

  <footer class="flex flex-col justify-center items-center md:items-baseline md:flex-row">
      <div class="w-[50px] object-cover md:hidden mb-[5rem]">
      <a href="/">
        <img class="w-full h-full" src="/logo.png" alt="Sylvain Kadjo Logo">
      </a>
    </div>

    <div class=" flex items-baseline gap-10 mb-[6rem] md:mb-0">
      <div class="w-[50px] object-cover hidden md:inline-block">
        <a href="/">
          <img class="w-full h-full" src="/logo.png" alt="Sylvain Kadjo Logo">
        </a>
      </div>
      <a class="underline text-main transition hover:no-underline text-4xl" href="{$owner.social.github}" target="_blank">Github</a>
      <a class="underline text-main transition hover:no-underlinen text-4xl" href="{$owner.social.linkedin}" target="_blank">Linkedin</a>
    </div>

    <p class="md:ml-auto">Build with ❤️ by @sylvain12 from 🇨🇮</p>
  </footer>
</div>

