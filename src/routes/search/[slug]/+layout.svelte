<script>
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Header from "$lib/components/root/header.svelte";

    let { children } = $props();
</script>

<div class="">
    <Header />
    <Separator />

    <div class="relative isolate px-6 pt-8 lg:px-8">
        {@render children?.()}
    </div>
</div>
