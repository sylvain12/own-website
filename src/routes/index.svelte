<script>
  import {owner} from '../stores/social.store'
  import Top from '../components/Top/Index.svelte'
  import About from '../components/About/Index.svelte'
  import Contact from '../components/Contact/Index.svelte'
  import Work from '../components/Work/Index.svelte'

  let curYear = new Date().getFullYear()
</script>

<svelte:head>
  <title>Hi 👋 I'm {$owner.identification.firstName}!</title>
</svelte:head>

<Top />
<About />
<Work />
<Contact />