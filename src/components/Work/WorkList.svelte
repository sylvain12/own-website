<script lang="ts">
  import WorkListItem from './WorkListItem.svelte'
  let data = [
    {
      name: 'elysis-http-status-code',
      description: 'Simple HTTP status codes plugin for ElysiaJS',
      type: 'packages',
      year: '2023',
      image: '',
      link: 'https://www.github.com/sylvain12'
    },
    {
      name: 'MandE',
      description: 'Monitoring  & Evaluation App',
      type: 'web app',
      year: '2020',
      image: '/images/image-mande.png',
      link: 'https://www.mande.ci/'
    },
    {
      name: 'Smart-LegalAfrica',
      description: 'Online business creation plateform',
      type: 'web app',
      year: '2018',
      image: '/images/image-smart-legal.png',
      link: 'https://smartlegal-africa.com/'
    },
    {
      name: 'ERSYS',
      description: 'Monitoring  & Evaluation App',
      type: 'web app',
      year: '2022',
      image: '/images/image-ersys.png',
      link: 'https://ersys-ci.net'
    },
    {
      name: 'Infocovid-19',
      description: 'Covid 19 info website',
      type: 'web app',
      year: '2021',
      image: '/images/image-info-covid.png',
      link: 'https://covid19-ci.vercel.app/'
    }
  ]
</script>


{#each data as work}
  <WorkListItem {work} />
{/each}