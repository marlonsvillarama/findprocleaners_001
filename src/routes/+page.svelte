<script>
    import FeaturedProducts from "$lib/components/global/featured-products.svelte";
    import Featured from "$lib/components/global/featured.svelte";
    import Footer from "$lib/components/global/footer.svelte";
    import Hero from "$lib/components/global/hero.svelte";
    import LatestArticles from "$lib/components/global/latest-articles.svelte";
</script>

<div class="grid gap-4 sm:gap-12">
    <Hero />

    <Featured />

    <LatestArticles />

    <FeaturedProducts />

    <Footer />
</div>
