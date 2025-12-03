<script>
    import { Star } from "@lucide/svelte";

    let {
        count,
        link = '',
        rating
    } = $props();
</script>

<div class="grid grid-cols-2 gap-1 items-center justify-between w-full">
    <div class="flex items-center gap-1 font-extrabold text-lg text-green-800">
        {(rating || 0).toFixed(1)}
        <Star size={16} class="fill-yellow-500" />
    </div>
    <div class="text-sm text-right">
        {#if count > 0}
            <a href={link} target="_blank" title="Read reviews" class="text-blue-600 underline">Read {count || 0} review{count === 1 ? '' : 's'}</a>
        {:else}
            <span class="text-gray-400">No reviews yet</span>
        {/if}
    </div>
</div>
