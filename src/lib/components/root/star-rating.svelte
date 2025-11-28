<script>
    import { Star } from "@lucide/svelte";

    let { rating, count } = $props();
</script>

<div class="flex flex-row gap-1 items-center justify-between w-[200px]">
    <div class="flex items-center gap-1 font-extrabold text-lg text-green-800 w-[80px]">
        {(rating || 0).toFixed(1)}
    <Star size={16} class="fill-yellow-500" />
    </div>
    <div class="">{count || 0} review{count === 1 ? '' : 's'}</div>
</div>
