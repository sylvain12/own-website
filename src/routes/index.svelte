<script>
  import {owner} from '../stores/social.store'
  import Header from '../components/Header/Index.svelte'
  import About from '../components/About/Index.svelte'
  let curYear = new Date().getFullYear()
</script>

<svelte:head>
  <title>Hi 👋 I'm {$owner.identification.firstName}!</title>
</svelte:head>

<Header />
<About />