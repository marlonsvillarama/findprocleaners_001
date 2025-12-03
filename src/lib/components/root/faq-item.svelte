<script>
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";

    import {
        MousePointerClick
    } from "@lucide/svelte";

    let {
        title = '...',
        content
    } = $props();

    let isOpen = $state(false);
</script>

<div class="grid gap-1">
    <button class="px-4 md:px-5 py-2 md:py-4 bg-green-700/10 rounded-sm text-left" onclick={() => isOpen = !isOpen}>
        <div class="md:flex gap-3 items-center justify-between">
            <h3 class="text-md sm:text-lg tracking-[0.25px] font-medium">{title}</h3>
            <MousePointerClick class="hidden md:inline-block" size={20} />
        </div>
    </button>
    <div class="text-md sm:text-sm mb-8 {isOpen ? 'block' : 'hidden'}">
        {@render content()}
    </div>
</div>
<!-- <div class="px-5 py-4 md:py-3 border-0 bg-gray-100 rounded-sm text-left hover:bg-gray-200 hover:cursor-pointer duration-[100ms]">
    <div class="md:flex gap-3 items-center justify-between">
        <h3 class="faq text-sm md:text-md font-normal md:font-medium leading-[0.25px]">{title}</h3>
        <MousePointerClick class="hidden md:inline-block" size={20} />
    </div>
</div> -->
<!-- <Collapsible.Root>
    <Collapsible.Trigger class="px-5 py-4 md:py-3 border-0 bg-gray-100 rounded-sm w-full text-left hover:bg-gray-200 hover:cursor-pointer duration-[100ms]">
        <div class="md:flex gap-3 items-center justify-between">
            <-- <div class="flex gap-3 items-center"> --
            <h3 class="faq text-sm md:text-md font-normal md:font-medium leading-[0.25px]">{title}</h3>
            <-- </div> --
            <MousePointerClick class="hidden md:inline-block" size={20} />
        </div>
    </Collapsible.Trigger>
    <Collapsible.Content>
        <div class="grid gap-3 text-sm items-center mt-1 mb-6 font-light">
            {@render content()}
        </div>
    </Collapsible.Content>
</Collapsible.Root> -->

<style>
    h3 {
        font-family: 'Noto Serif', serif;
    }
</style>