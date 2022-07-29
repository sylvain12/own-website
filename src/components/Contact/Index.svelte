<script>
  import {owner} from '../../stores/social.store'
  import { Direction } from '../../shared/model/Position.model';
  import Title from '../ui/Title.svelte';
  import { Color } from '../../enums/Color.enum';

  let title = "Contact"
  let icon = {position: Direction.Right, color: Color.Second}
</script>

<div class="container section" id="contact">
  <Title {title} icon="{icon}" />

  <a href="mailto://{$owner.identification.email}" class="uppercase flex items-center text-[10rem] mb-[1em]">
    <span class="flex-1 link link-orange">{$owner.identification.email}</span>
    <svg class="w-[12rem] text-second" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </a>

  <footer class="flex items-baseline">
    <div class=" flex items-baseline gap-8">
      <div class="w-[50px] object-cover">
        <img class="w-full h-full" src="/logo.png" alt="">
      </div>
      <a class="underline text-main transition hover:no-underline text-4xl" href="{$owner.social.github}">Github</a>
      <a class="underline text-main transition hover:no-underlinen text-4xl" href="{$owner.social.linkedin}">Linked'in</a>
    </div>

    <p class="ml-auto">Build with ❤️ by @sylvain12 from 🇨🇮</p>
  </footer>
</div>

