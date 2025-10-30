<script>
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import FeaturedProducts from "$lib/components/root/featured-products.svelte";
    import Featured from "$lib/components/root/featured.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import LatestArticles from "$lib/components/root/latest-articles.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>FindProCleaners - Find the best cleaners near you</title>
    <meta name="description" content="Find the best professional cleaners within your area.">
</svelte:head>

<div class="grid gap-16 sm:gap-16">
    <Hero { data } />

    {#if data.featured.length > 0}
        <Featured { data } />
    {/if}

    <LatestArticles />

    <FeaturedProducts { data } />

    <CitiesList { data } />

    <Footer />
</div>
