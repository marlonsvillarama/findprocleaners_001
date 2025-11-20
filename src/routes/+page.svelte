<script>
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import FeaturedProducts from "$lib/components/root/featured-products.svelte";
    import Featured from "$lib/components/root/featured.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Header from "$lib/components/root/header.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import LatestArticles from "$lib/components/root/latest-articles.svelte";
    import Seo from "$lib/components/root/seo.svelte";

    let { data } = $props();
</script>

<!-- <svelte:head>
    <title>FindProCleaners - Find the best cleaners near you</title>
    <meta name="description" content="Find the best professional cleaners within your area.">
</svelte:head> -->

<Seo />

<Header { data } />

<div class="grid gap-12 md:gap-24 bg-background-light">
    <Hero { data } />

    {#if data.featured.length > 0}
        <Featured { data } />
    {/if}

    <!-- <LatestArticles /> -->

    <FeaturedProducts { data } />

    <CitiesList { data } />

    <Footer />
</div>
