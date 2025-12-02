<script>
    let {
        title = '',
        content
    } = $props();
</script>

<div class="mx-6 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500 grid gap-4 md:gap-6">
    {#if title}
        <h2 class="text-2xl md:text-3xl text-green-800">{title}</h2>
    {/if}
    <div class="grid gap-4 text-sm md:text-md">
        {@render content()}
    </div>
</div>

<style>
    h2 {
        font-family: 'Noto Serif', serif;
    }
</style>