<script lang="ts">
  import type { WorItemType } from '../../types/work.type'
  export let work: WorItemType;
</script>

<div class="border-b border-main flex items-center px-2 py-[4rem] cursor-pointer">
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