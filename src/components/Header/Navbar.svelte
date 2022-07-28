<script>
  import { owner } from '../../stores/social.store'
  $: fullname = $owner.identification.firstName + " " + $owner.identification.lastName;
</script>

<nav class="flex items-center py-8">
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
  <div class="ml-auto text-4xl">
    Hi 👋, I'm <a class="link-main" href="">{fullname}</a>
  </div>
</nav>