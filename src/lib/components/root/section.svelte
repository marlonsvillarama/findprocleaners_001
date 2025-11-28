<script>
    let {
        title = 'Title here...',
        content
    } = $props();
</script>

<div class="md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500 grid gap-6">
    <h2 class="text-4xl text-green-800">{title}</h2>
    <div class="grid gap-4">
        {@render content()}
    </div>
</div>

<style>
    h2 {
        font-family: 'Noto Serif', serif;
    }
</style>