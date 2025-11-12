<script>
    let { data } = $props();
    // console.log('product preview data', data);
</script>

<div class="grid gap-3 w-[275px] h-max-[300px] text-center">
    <img src={data.image_path} class="w-auto h-[250px] m-auto" border="0" alt={data.name} />
    <!-- <div class="grid text-center"> -->
        <h1 class="font-semibold text-green-800 truncate text-ellipses">{data.name}</h1>
        <!-- <h2 class="text-green-800 truncate text-ellipses">{data.name}</h2> -->
    <!-- </div> -->
    <a href={data.image_path} target="_blank" class="px-3 py-2 bg-green-700 rounded-lg text-white font-semibold hover:bg-green-800">Buy this item</a>
    <div class="grid text-left">
        <p class="max-h-[100px] overflow-hidden text-ellipses">{data.description}</p>
        <span>...</span>
    </div>
</div>