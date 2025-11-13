<script>
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Header from "$lib/components/root/header.svelte";

    let { data, children } = $props();
</script>

<div class="">
    <Header />
    <Separator class="shadow-md" />

    <div class="relative isolate px-6 pt-8 lg:px-8 bg-accent pb-16">
        {@render children?.()}
    </div>

    <Footer />
</div>
