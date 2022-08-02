<script lang="ts">
  import { Direction } from '../../shared/model/Position.model';
  import { Color } from '../../shared/enums/Color.enum'
  import type { TitleIcon } from '../../types/titleicon.type';

  export let title = ''
  export let icon: TitleIcon = {
    position: Direction.Left,
    color: Color.Main
  }
</script>



{#if icon?.position === Direction.Left}
  <p class="title title-icon-left">
    {title}
     <svg class="text-{icon.color == 1 ? 'main': 'second'}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18L6 6m2 12h10V8"/></svg>
  </p>
{:else if icon?.position === Direction.Right}
  <p class="title title-icon-right">
    <svg class="text-{icon.color == 1 ? 'main': 'second'}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 8v10h10"/></svg>
    {title}
  </p>

{:else if icon?.position === Direction.Down}
  <p class="title title-icon-center">
    <svg class="text-{icon.color == 1 ? 'main': 'second'}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V4m-7 9l7 7l7-7"/></svg>
    {title}
  </p>
{:else}
  <p class="title">
    {title}
  </p>
{/if}

<style lang="postcss">
  .title {
    @apply text-[3.5rem] sm:text-[7rem] font-sans text-main flex items-center mb-8 md:text-[9rem] leading-[.85]
  }

  .title-icon-left {
    @apply ml-auto justify-start
  }

  .title-icon-center {
    @apply justify-start
  }


  .title-icon-right {
    @apply mr-auto justify-end
  }
</style>