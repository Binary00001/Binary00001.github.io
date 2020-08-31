<script>
	import router from 'page';
	import Navigation from './components/Navigation.svelte'
	import Home from './components/Home.svelte'
	import Bio from './components/Bio.svelte'
	import Projects from './components/Projects.svelte'


	let page;

	router('/', () => page = Home)
	router('/bio', () => page = Bio)
	router('/projects', () => page = Projects)

	router.start()
</script>
	<main>
		<Navigation />
		<svelte:component this={page} />
	</main>




<style lang="scss">
	$color: #ff3e00;

	@import "../node_modules/bootstrap/scss/bootstrap.scss";
	main {
		text-align: center;
		padding:0;
		margin: 0;
	}

	h1 {
		color: $color;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		background-color: lightgray;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>