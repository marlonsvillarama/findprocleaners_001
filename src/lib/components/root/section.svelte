<script>
    import { cn } from "$lib/utils";

    let {
        class: className,
        title = '',
        content,
        actions
    } = $props();
</script>

<div class={cn(
    "mx-6 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500 grid gap-2 md:gap-4",
    className
)}>
    {#if title || actions}
        <div class="flex items-center justify-between">
            {#if title}
                <h2 class="text-md sm:text-3xl font-semibold text-gray-700">{title}</h2>
            {/if}
            {#if actions}
                {@render actions()}
            {/if}
        </div>
    {/if}
    <div class="grid gap-4">
        {@render content()}
    </div>
</div>

<style>
    /* h2 {
        font-family: 'Noto Serif', serif;
    } */
</style>