<script lang="ts">
  import {gsap} from 'gsap'

  let logoTl: any;

  function rotateLogo(): any {
    gsap.set("[data-navbar-logo]", {transformOrigin: "center"})
    logoTl = gsap.to("[data-navbar-logo]", { duration: .2, scale: 1.05});
    return logoTl
  }

  function resetLotoRotation(tl: any) {
    tl.reverse()
  }
</script>

<nav class="flex justify-center items-center  mb-[10rem] md:mb-[22rem] md:justify-start">
  <div class="nav__logo hidden md:block">
    <a href="/" on:mouseleave="{() => resetLotoRotation(logoTl)}" on:mouseenter="{rotateLogo}">
    <img data-navbar-logo class="w-full h-full" src="/logo.png" alt="Sylvain kadjo logo">
    </a>
  </div>
  <ul class="nav__menu">
    <li class="nav__item">
      <a class="text-main text-[1.4rem] sm:text-[2.5rem] md:text-[1.8rem]" href="#works">
        Works
      </a>
    </li>
    <li class="nav__item block ml-4 w-[50px] md:w-[100px] md:hidden">
      <a href="/">
    <img class="w-full h-full" src="/logo.png" alt="Sylvain kadjo logo">
    </a>
    </li>
    <li class="nav__item">
      <a class="text-main text-[1.4rem] sm:text-[2.5rem] md:text-[1.8rem]" href="#contact">
        Contact
      </a>
    </li>
  </ul>
</nav>