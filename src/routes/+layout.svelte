<script>
	import '../app.css';
	import favicon from '$lib/assets/findprocleaners.svg';

	// import { Toaster } from 'svelte-sonner';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <Toaster position="top-center" /> -->

{@render children?.()}
