<script>
	import '../app.css';
	// import favicon from '$lib/assets/findprocleaners.svg';
	import Header from '$lib/components/root/header.svelte';
	import Footer from '$lib/components/root/footer.svelte';

	// import { Toaster } from 'svelte-sonner';
	
	let { children } = $props();
	// console.log('+PAGE LAYOUT data', data);
</script>

<!-- <svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head> -->

	{@render children?.()}
