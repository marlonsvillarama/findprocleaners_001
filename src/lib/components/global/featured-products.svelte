<script>
    import Separator from "../ui/separator/separator.svelte";

    import ProductPreview from "./product-preview.svelte";

    let products = [
        {
            id: '1',
            img: 'pink_stuff_miracle_paste.jpg',
            name: 'The Pink Stuff Miracle Cleaning Paste 850g',
            text: 'The Pink Stuff Cleaning Paste is gentle on surfaces but tough on stains. Ideal for cleaning saucepans, barbecues, ceramic tiles, glass, rust, sinks, uPVC, garden furniture, paintwork, boats, cooker tops, copper and much more. The Pink Stuff is a great all round cream cleaner.',
            url: 'https://www.amazon.com.au/Pink-Stuff-Multi-Purpose-Cleaner/dp/B09T9DVDD5/ref=lp_5016785051_1_2?pf_rd_p=4aaaa2f2-7799-4671-9df9-d07f28e2d12e&pf_rd_r=Q04RSVNXH2X95EE77B4K&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D',
        },
        {
            id: '2',
            img: 'pink_stuff_miracle_paste.jpg',
            name: 'The Pink Stuff Miracle Cleaning Paste 850g',
            text: '',
            url: 'https://www.amazon.com.au/Pink-Stuff-Multi-Purpose-Cleaner/dp/B09T9DVDD5/ref=lp_5016785051_1_2?pf_rd_p=4aaaa2f2-7799-4671-9df9-d07f28e2d12e&pf_rd_r=Q04RSVNXH2X95EE77B4K&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D',
        },
        {
            id: '3',
            img: 'pink_stuff_miracle_paste.jpg',
            name: 'The Pink Stuff Miracle Cleaning Paste 850g',
            text: '',
            url: 'https://www.amazon.com.au/Pink-Stuff-Multi-Purpose-Cleaner/dp/B09T9DVDD5/ref=lp_5016785051_1_2?pf_rd_p=4aaaa2f2-7799-4671-9df9-d07f28e2d12e&pf_rd_r=Q04RSVNXH2X95EE77B4K&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D',
        },
    ];
</script>

<div class="mx-4 sm:w-7xl sm:mx-auto grid gap-2">
    <h1 class="text-xl text-green-800 font-semibold mb-1">Featured Products</h1>
    <Separator />
    <!-- <div class="border grid sm:grid-cols-3 gap-4 sm:gap-12 items-start"> -->
    <div class="flex sm:flex-cols gap-4 sm:gap-12 items-start justify-between">
        {#each products as product}
            <ProductPreview {...product} />
        {/each}
    </div>
</div>