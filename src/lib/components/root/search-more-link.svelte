<script>
    let {
        link = '',
        label = 'Find more cleaners'
    } = $props();
</script>

<div class="flex items-center justify-center md:justify-between pt-2">
    <div class="hidden md:block w-1/3 border-t-1 border-gray-200"></div>
    <a href={link} title={label} class="text-sm sm:text-xs px-8 py-2 rounded-md shadow-sm bg-gray-100 hover:bg-gray-200" target="_self">{label}</a>
    <div class="hidden md:block w-1/3 border"></div>
</div>
