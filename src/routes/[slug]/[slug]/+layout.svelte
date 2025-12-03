<script>
    // import regions from "$lib/data/regions";
    // import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import Header from "$lib/components/root/header.svelte";
    // import Section from "$lib/components/root/section.svelte";

    // import {
        // BrushCleaning,
    //     ChevronDown,
    //     ChevronRight
    // } from "@lucide/svelte";
	
	let { children } = $props();
</script>

<!-- <Header /> -->

<!-- <div class="bg-gray-50"> -->
{@render children()}
<!-- </div> -->
