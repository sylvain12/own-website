<script lang="ts">
  import Title from '../ui/Title.svelte';
  import {Direction} from '../../shared/model/Position.model'
  let title = "About"
  let iconPosition =  Direction.Right
</script>

<div class="container section mt-[20rem]" id="about">
  <Title {title} icon="{true}" {iconPosition} />

  <div class="relative">

  <p>
    <span class="text-[9rem] font-thin">Hi</span>, <span class="text-[4rem] text-main font-bold">Sylvain Kadjo</span>, I'm a software engineer, and sometimes I do <span class="link span-orange">UI/UX design</span> and <span class="link span-orange">data analysis</span> stuff. After my diploma in computer networks and telecommunications, I did some internships and then decided to become a developer.
  </p>

  <p>
    I started by training myself in programming, then I did a bachelor's in software engineering. Currently, I work as a front-end software engineer at <a class="link link-main" href="www.sejen.ci" target="_blank">SEJEN</a> in Ivory Coast, a data science and software engineering company.
  </p>

  <p>
    Outside of my job, I also give programming training in schools, I'm part of several developer communities like <a class="link link-main" href="www.sejen.ci" target="_blank">GDG Abidjan</a>, and <a class="link link-main" href="www.sejen.ci" target="_blank">Python Côte d'Ivoire</a>, and I like to have a good time with my family, enjoy with my friends, and discover new things. What characterizes me is my <span class="text-[5rem] text-main">smile</span>, <span class="text-[5rem] text-main">team spirit</span>, and <span class="text-[5rem] text-main">motivation</span> to always seek to <span class="link span-orange">improve</span> and thus impact my environment.
  </p>

  <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] z-[-1]" src="/images/bg-double-circle.svg" alt="">
  </div>

</div>


<style lang="postcss">
  p {
    font-size: 2.3rem;
    text-align: justify;
  }
  p:not(:last-child) {
    margin-bottom: 2rem;
  }
</style>