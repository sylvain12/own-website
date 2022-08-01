<script>
  import { owner } from '../../stores/social.store'
  $: fullname = $owner.identification.firstName + " " + $owner.identification.lastName;
</script>

<nav class="flex items-center pb-8 mb-[16rem]">
  <div class="nav__logo">
    <a href="/">
    <img class="w-full h-full" src="/logo.png" alt="Sylvain kadjo logo">
    </a>
  </div>
  <ul class="nav__menu">
    <li class="nav__item">
      <a class="text-main text-[1.8rem]" href="#works">
        Works
      </a>
    </li>
    <li class="nav__item">
      <a class="text-main text-[1.8rem]" href="#contact">
        Contact
      </a>
    </li>
  </ul>
  <!-- <div class="ml-auto text-4xl">
    <p>
      Hi 👋, I'm 
      <a class="underline text-main font-bold" href="{$owner.social.github}">{fullname}</a>
    </p>
  </div> -->
</nav>