<script>
  import {onMount} from 'svelte'
  import { owner } from '../../stores/social.store'

  // onMount(() => {
  //   gsap.from('.social-icon', {duration: 1, opacity: 0, y: 100, scale: .3, stagger: 0.25, ease: 'back'})
  // })
</script>

<div class="social-wrapper">
  <a data-social-icon href={$owner.social.github} target="_blank">
  <svg class="w-4rem] h-[4rem]" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

<a data-social-icon href={$owner.social.linkedin} target="_blank">
<svg class="w-4rem] h-[4rem]" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17V13.5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7.01L7.01 6.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

<a data-social-icon href={$owner.social.dribbble} target="_blank">
<svg class="w-4rem] h-[4rem]" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

<a data-social-icon href={$owner.social.instagram} target="_blank">
<svg class="w-4rem] h-[4rem]" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

</div>