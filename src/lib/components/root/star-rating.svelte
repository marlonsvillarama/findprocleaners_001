<script>
    import { Star } from "@lucide/svelte";

    let {
        count,
        link = '',
        rating
    } = $props();
</script>

<div class="flex flex-row gap-1 items-center justify-between">
    <div class="flex items-center gap-1 font-extrabold text-lg text-green-800">
        {(rating || 0).toFixed(1)}
        <Star size={16} class="fill-yellow-500" />
    </div>
    <div class="text-sm w-[100px] text-right">
        <a href={link} target="_blank" title="Read reviews" class="text-blue-600 underline">{count || 0} review{count === 1 ? '' : 's'}</a>
    </div>
</div>
