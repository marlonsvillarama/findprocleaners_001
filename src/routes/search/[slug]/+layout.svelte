<script>
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Header from "$lib/components/root/header.svelte";

    let { data, children } = $props();
</script>

<div class="h-full grid grid-rows-[auto_1fr_auto]">
    <div>
        <Header />
        <Separator class="shadow-md" />
    </div>

    <div class="pt-4 md:pt-8 bg-accent pb-12 md:pb-16 flex flex-1">
        {@render children?.()}
    </div>

    <Footer />
</div>
