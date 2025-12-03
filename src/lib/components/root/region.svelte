<script>
    let {
        data
    } = $props();
    // console.log('region', data);
</script>

<a href="/professional-cleaners-in-{data.slug}"
    class="grid rounded-md shadow-md bg-gray-200/70 hover:bg-gray-200 duration-[100ms]"
    alt="Professional Cleaners in {data.name}"
    target="_self"
>
    <div class="h-[150px] sm:h-[200px] border-0 border-red-500 home-cleaning rounded-t-md"
        style="background-image: url(/images/regions/{data.image_path}); background-size: cover;"></div>
    <div class="flex region-name justify-center py-1 rounded-b-md text-sm">{data.name}</div>
</a>

<style>
    /* .region-name {
        font-family: 'Noto Serif', serif;
    } */
</style>