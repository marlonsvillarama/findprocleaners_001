<script>
    import FeaturedProducts from "$lib/components/root/featured-products.svelte";
    import Featured from "$lib/components/root/featured.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import LatestArticles from "$lib/components/root/latest-articles.svelte";
</script>

<div class="grid gap-4 sm:gap-12">
    <Hero />

    <Featured />

    <LatestArticles />

    <FeaturedProducts />

    <Footer />
</div>
