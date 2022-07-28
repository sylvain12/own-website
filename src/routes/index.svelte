<script>
  import {owner} from '../stores/social.store'
  import Header from '../components/Header/index.svelte'
  let curYear = new Date().getFullYear()
</script>

<svelte:head>
  <title>Hi 👋 I'm {$owner.identification.firstName}!</title>
</svelte:head>

<Header />