<script>
    import { CircleUser } from "@lucide/svelte";

    let {
        icon,
        value = ''
    } = $props();
</script>

<div class="flex items-center gap-3">
    {@render icon()}
    <span>{value}</span>
</div>