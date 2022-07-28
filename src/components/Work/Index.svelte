<script>
  import {owner} from '../../stores/social.store'
  import { Direction } from '../../shared/model/Position.model';
  import WorkList from './WorkList.svelte';

  import Title from '../ui/Title.svelte';
  let title = "Latest works"
  let icon = true
  let iconPosition = Direction.Left
</script>

<div class="container section">
  <Title {title}  icon="{icon}" iconPosition="{iconPosition}"  />
  <p class="text-[2.6rem] max-w-[800px] mb-4">Here are some of my personal projects and those I have worked on as part of my job.</p>
  <a class="underline flex items-center text-main text-[2rem]" href="{$owner.social.github}">
    <span class="mr-2">More projects</span>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </a>

  <div class="mt-12 relative">
      <WorkList />
      <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] z-[-1]" src="/images/bg-double-circle.svg" alt="">
  </div>

</div>