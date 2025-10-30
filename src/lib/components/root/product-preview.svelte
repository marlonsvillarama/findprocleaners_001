<script>
    let { data } = $props();
    console.log('product preview data', data);
</script>

<div class="grid gap-3 w-[275px] h-max-[300px] text-center">
    <img src="/images/products/{data.image_path}" class="w-[250px] h-auto m-auto" border="0" alt={data.name} />
    <h1 class="font-semibold text-green-800 truncate text-ellipses">{data.name}</h1>
    <a href="/images/products/{data.image_path}" target="_blank" class="px-3 py-2 bg-green-700 rounded-lg text-white font-semibold hover:bg-green-800">Buy this item</a>
    <p class="border text-ellipses max-h-[100px]">{data.description}</p>
</div>