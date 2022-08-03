<script lang="ts">
  import type { WorItemType } from '../../types/work.type'
  import { workOverlayPoint } from '../../stores/work.store';
  import {createEventDispatcher} from 'svelte'
  import { fade, fly } from 'svelte/transition';
  export let work: WorItemType;

  let isShow = false;
  const  dispatch  = createEventDispatcher()

  const onShowWorkImage = (e: any) => {
    isShow = true;
    workOverlayPoint.setpoint({x: e.clientX, y: e.clientY})
  }

</script>

<a data-work-item href="{work.link}" target="_blank" class="work-item relative border-b border-main px-2 py-[4rem] cursor-pointer flex flex-col gap-1 md:items-center md:flex-row">
  <div class="order-2 mb-[3rem] md:mb-0 md:order-1 text-second opacity-80">
    {work.type}
  </div>
  <div class="order-3 md:order-2 md:ml-[12rem] flex flex-col flex-1">
    <span class="text-[3rem] leading-[2rem] text-main mb-2">{work.name}</span>
    <span class="text-[1.4rem]">{work.description}</span>
  </div>
  <div class=" order-1 md:ml-auto md:order-3 text-main-light text-3xl">
    {work.year}
  </div>
</a>

<!-- <a href="{work.link}" target="_blank" in:fly out:fade class="work-overlay" style="display: {isShow? 'block': 'none'};  left: {$workOverlayPoint.x - 400 }px; top: {$workOverlayPoint.y - 400}px;" >
  <img class="w-full h-full" src="{work.image}" alt="{work.name}">
</a> -->

<style>
  .work-overlay {
    width: 400px;
    height: 400px;
    z-index: 90;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    position: absolute;
  }


</style>