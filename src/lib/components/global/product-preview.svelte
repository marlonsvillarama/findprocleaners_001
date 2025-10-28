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

<div class="grid gap-1 w-[275px] h-max-[300px] border">
    <img src="/images/products/{img}" class="w-[250px] h-auto" border="0" alt={name} />
    <h1 class="font-semibold text-green-800 truncate text-ellipses">{name}</h1>
    <p class="border text-ellipses max-h-[100px]">{text}</p>
</div>