<script>
  let firstName = "Sylvain";
  let lastName = "Kajo";
  $: fullname = firstName + " " + lastName;

</script>

<svelte:head>
  <title>Hi 👋 I'm {firstName}!</title>
</svelte:head>

<h1>Hi 👋 I'm {fullname}</h1>
<p>Solftware engineer</p>
