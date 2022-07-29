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

<div class="relative border-b border-main flex items-center px-2 py-[4rem] cursor-pointer" on:mouseover="{onShowWorkImage}" on:focus="{onShowWorkImage}" on:mouseleave="{() => isShow = false}">
  <div class="text-main-light">
    {work.type}
  </div>
  <div class="flex flex-col ml-[12rem] flex-1">
    <span class="text-[3rem] leading-[2rem] text-main mb-2">{work.name}</span>
    <span class="text-[1.4rem]">{work.description}</span>
  </div>
  <div class="ml-auto text-main-light text-3xl">
    {work.year}
  </div>
</div>

<div in:fly out:fade class="work-overlay" style="display: {isShow? 'block': 'none'};  left: {$workOverlayPoint.x - 400 }px; top: {$workOverlayPoint.y - 400}px;" >
  <img class="w-full h-full" src="{work.image}" alt="{work.name}">
</div>

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