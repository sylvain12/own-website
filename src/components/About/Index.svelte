<script lang="ts">
  import Title from '../ui/Title.svelte';
  import {Direction} from '../../shared/model/Position.model'
  let title = "About"
  let iconPosition =  Direction.Right
</script>

<div class="container section ">
  <Title {title} icon="{true}" {iconPosition} />

  <div class="relative">

  <p>
    <span class="text-[9rem] font-thin">Hi</span>, <span class="text-[4rem] text-main font-bold">Sylvain Kadjo</span>, I am a software engineer with knowledge in <span class="link span-orange">ui/ux design</span> and <span class="link span-orange">data analysis</span>. After my diploma of higher technician in computer network and telecommunication, I made some internships and then decided to embrace the career of developer which fascinates me.
  </p>

  <p>
    I started by self-training in programming, then added a degree in software engineering. Currently I am working at <a class="link link-main" href="www.sejen.ci" target="_blank">SEJEN</a> in Cote d'Ivoire a data science engineering company as a frontend software engineer.
  </p>

  <p>
    Besides my work, I also give programming trainings in schools, I participate to meetups of several developer communities like <a class="link link-main" href="www.sejen.ci" target="_blank">GDG Abidjan</a>, <a class="link link-main" href="www.sejen.ci" target="_blank">Python Ivory Coast</a>.
    What characterizes me is my <span class="text-[5rem] text-main">smile</span>, my <span class="text-[7rem] text-main">team spirit</span>, and my <span class="text-[6rem] text-main">motivation</span> to always seek to <span class="text-[4rem] text-main">improve</span> and thus impact my environment.
  </p>

  <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px]" src="/images/bg-double-circle.svg" alt="">
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