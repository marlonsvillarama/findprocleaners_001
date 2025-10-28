<script>
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import FeaturedProducts from "$lib/components/root/featured-products.svelte";
    import Featured from "$lib/components/root/featured.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import LatestArticles from "$lib/components/root/latest-articles.svelte";
</script>

<div class="grid gap-16 sm:gap-24">
    <Hero />

    <Featured />

    <LatestArticles />

    <FeaturedProducts />

    <CitiesList />

    <Footer />
</div>
