<script>
	import '../app.css';
	import favicon from '$lib/assets/findprocleaners.svg';
	import Header from '$lib/components/root/header.svelte';
	import Footer from '$lib/components/root/footer.svelte';

	// import { Toaster } from 'svelte-sonner';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<div class="mb-12 md:mb-24">
	{@render children?.()}
</div>

<Footer />