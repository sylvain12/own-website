<script lang="ts">
	import { WorkModel } from './work.model';
  import WorkListItem from './WorkListItem.svelte'

  let works: WorkModel[] = [
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
      year: '2020',
      type: "WEB APP",
      image: '/images/image-mande.png',
      link: 'https://www.mande.ci/'
    },
    {
      name: 'Smart-LegalAfrica',
      description: 'Online business creation plateform',
      year: '2018',
      type: "WEB APP",
      image: '/images/image-smart-legal.png',
      link: 'https://smartlegal-africa.com/'
    },
    {
      name: 'ERSYS',
      description: 'Monitoring  & Evaluation App',
      year: '2022',
      type: "WEB APP",
      image: '/images/image-ersys.png',
      link: 'https://ersys-ci.net'
    },
    {
      name: 'Infocovid-19',
      description: 'Covid 19 info website',
      year: '2021',
      type: "WEB APP",
      image: '/images/image-info-covid.png',
      link: 'https://covid19-ci.vercel.app/'
    }
  ].sort((a: WorkModel, b: WorkModel) => Number(b.year) - Number(a.year))

</script>


{#each works as work}
  <WorkListItem {work} />
{/each}