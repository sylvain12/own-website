<script lang="ts">
  import WorkListItem from './WorkListItem.svelte'
  let data = [
    {
      name: 'MandE',
      description: 'Monitoring  & Evaluation App',
      type: 'web app',
      year: '2020',
      image: '',
      link: 'https://mande.ci'
    },
    {
      name: 'Smart-LegalAfrica',
      description: 'Online business creation plateform',
      type: 'web app',
      year: '2018',
      image: '',
      link: 'https://smartlegal-africa.com/'
    },
    {
      name: 'ERSYS',
      description: 'Monitoring  & Evaluation App',
      type: 'web app',
      year: '2022',
      image: 'https://ersys-ci.net',
      link: ''
    },
    {
      name: 'Infocovid-19',
      description: 'Covid 19 info website',
      type: 'web app',
      year: '2021',
      image: '',
      link: ''
    }
  ]
</script>


{#each data as work}
  <WorkListItem {work} />
{/each}