<script>
    let {
        id = '',
        img = '',
        name = 'Product',
        text = 'Product description goes here...',
        url = 'https://google.com'
    } = $props();
    console.log('img', img);
</script>

<div class="grid gap-3 w-[275px] h-max-[300px] text-center">
    <img src="/images/products/{img}" class="w-[250px] h-auto m-auto" border="0" alt={name} />
    <h1 class="font-semibold text-green-800 truncate text-ellipses">{name}</h1>
    <a href={url} target="_blank" class="px-3 py-2 bg-green-700 rounded-lg text-white font-semibold hover:bg-green-800">Buy from Amazon</a>
    <!-- <p class="border text-ellipses max-h-[100px]">{text}</p> -->
</div>