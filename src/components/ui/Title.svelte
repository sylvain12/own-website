<script lang="ts">
import { Direction } from '../../shared/model/Position.model';


  export let title = ''
  export let icon: boolean = false;
  export let iconPosition: Direction = Direction.Left;
</script>



{#if icon && iconPosition === Direction.Left}
  <p class="title title-icon-left">
    {title}
     <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18L6 6m2 12h10V8"/></svg>
  </p>
{:else if  icon && iconPosition === Direction.Right}
  <p class="title title-icon-right">
     <svg xmlns="http://www.w3.org/2000/svg" class="text-main" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"/></svg>
    {title}
  </p>
{:else}
  <p class="title">
    {title}
  </p>
{/if}

<style lang="postcss">
  .title {
    @apply text-[9rem] font-sans text-main flex items-center mb-8
  }

  .title-icon-left {
    @apply ml-auto justify-start
  }


  .title-icon-right {
    @apply mr-auto justify-end
  }
</style>