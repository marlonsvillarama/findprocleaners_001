<script>
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";

    import {
        MousePointerClick
    } from "@lucide/svelte";

    let {
        title = '...',
        content
    } = $props();
</script>

<Collapsible.Root class="">
    <Collapsible.Trigger class="px-5 py-3 border-0 bg-gray-100 rounded-sm w-full text-left hover:bg-gray-200 hover:cursor-pointer duration-[100ms]">
        <div class="flex items-center justify-between">
            <div class="flex gap-3 items-center">
                <h3 class="faq text-lg font-normal leading-[0.25px]">{title}</h3>
            </div>
            <MousePointerClick size={20} />
        </div>
    </Collapsible.Trigger>
    <Collapsible.Content>
        <div class="grid gap-3 items-center mt-1 mb-6 font-light">
            {@render content()}
        </div>
    </Collapsible.Content>
</Collapsible.Root>

<style>
    h3 {
        font-family: 'Noto Serif', serif;
    }
</style>