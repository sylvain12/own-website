<script lang="ts">
  import Title from '../ui/Title.svelte';
  import {Direction} from '../../shared/model/Position.model'
  import { Color } from '../../enums/Color.enum';
  

  let title = "About"
  let icon = {position: Direction.Right, color: Color.Second}
</script>

  <Title {title} icon={icon} />

  <div class="relative">

  <p>
    Hi, I'm Sylvain Kadjo, software engineer, and sometimes I do <span class="text-main font-bold">UI/UX design</span> and <span class="text-main font-bold">data analysis</span> stuff. After my diploma in computer networks and telecommunications, I did some internships and then decided to become a developer.
  </p>

  <p>
    I started by training myself in programming, then I did a bachelor's in software engineering. Currently, I work as a front-end software engineer at <a class="link-orange" href="www.sejen.ci" target="_blank">SEJEN</a> in Ivory Coast, a data science and software engineering company.
  </p>

  <p>
    Outside of my job, I also give programming training in schools, I'm part of several developer communities like <a class="link-orange" href="www.sejen.ci" target="_blank">GDG Abidjan</a>, and <a class="link-orange" href="www.sejen.ci" target="_blank">Python Côte d'Ivoire</a>, and I like to have a good time with my family, enjoy with my friends, and discover new things. What characterizes me is my <span class="font-bold text-main">smile</span>, <span class="font-bold text-main">team spirit</span>, and <span class="font-bold text-main">motivation</span> to always seek to <span class="link span-orange">improve</span> and thus impact my environment.
  </p>

  <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] z-[-1]" src="/images/bg-double-circle.svg" alt="">
  </div>



<style lang="postcss">
  p {
    @apply text-2xl text-left md:text-justify sm:text-[2.3rem] leading-[1.5]
  }
  p:not(:last-child) {
    margin-bottom: 2.5rem;
  }
</style>