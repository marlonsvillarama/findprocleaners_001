<script>
    let { data } = $props();
    // console.log('product preview data', data);
</script>

<div class="grid gap-3 w-full max-w-[300px] sm:max-w-none h-max-[300px] text-center">
    <img src={data.image_path} class="w-auto h-[250px] m-auto shadow-md" border="0" alt={data.name} />
    <!-- <div class="grid text-center"> -->
        <h1 class="text-sm sm:text-md font-medium text-gray-700 truncate text-ellipses">{data.name}</h1>
        <!-- <h2 class="text-green-800 truncate text-ellipses">{data.name}</h2> -->
    <!-- </div> -->
    <a href={data.link} target="_blank" class="px-3 py-2 bg-green-700 rounded-lg text-sm text-white font-medium hover:bg-green-800">Buy this item</a>
    <div class="grid text-left">
        <p class="text-xs leading-[1.25rem] text-gray-800 font-extralight max-h-[100px] overflow-hidden text-ellipses">{data.description}</p>
        <span>...</span>
    </div>
</div>