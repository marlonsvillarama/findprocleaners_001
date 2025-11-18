<script>
    // import * as StarRating from "$lib/components/ui/star-rating/index";

    import ImageIcon from '@lucide/svelte/icons/image';
    import MailIcon from '@lucide/svelte/icons/mail';
    import PhoneIcon from '@lucide/svelte/icons/phone';
	import StarIcon from '@lucide/svelte/icons/star';

    /*
        city = 'City',
        img = '',
        name = 'Cleaning Co.',
        description = 'This is the default description',
        phone = '020 4185 7160',
        email = 'contact@cleaningco.com',
        website = 'https://queenstowncleaningservices.co.nz/'
    */
    let { data } = $props();
    console.log('featured card data', data);
</script>

<a href={data.website} target="_blank">
<div class="featured-card rounded-md w-full bg-white from-white to-green-100/50 shadow-md">
    <h2 class="rounded-t-md bg-green-800 py-2 px-3 text-white font-normal text-sm">{data.area_service === true ? (data.city || 'All Regions') : 'All Regions'}</h2>
    <div class="content bg-white rounded-b-md">
        <div class="hidden md:block card-img w-full h-[160px] sm:h-[200px] align-center overflow-hidden object-none flex items-center">
            <img src={data.image_url} class="w-full align-center" alt={data.name} />
        </div>
        <!-- <div class="img border-x-1 border-green-800/50 bg-green-100 items-center justify-center">
            <ImageIcon size={32} />
        </div> -->
        <div class="grid grid-rows-2 company pt-2 pb-3 px-3 md:min-h-[140px] rounded-b-sm
            bg-linear-to-b from-white to-green-100/70">
            <!-- "bg-linear-to-b from-white to-green-100/40"> -->
            <!-- <h3> -->
                <!-- {#if data.website} -->
                    <div class="font-semibold text-gray-700 text-sm border-none">{data.name}</div>
                <!-- {:else} -->
                    <!-- <div class="font-semibold text-gray-700 text-md">{data.name}</div> -->
                <!-- {/if} -->
            <!-- </h3> -->
            
            <div class="details grid gap-1 md:gap-[0px] justify-start border-0 border-red-500">
                <div class="flex flex-row gap-2 items-center text-sm border-none">
                    <!-- <span class="">Google rating:</span> -->
                    <!-- <div class="flex flex-row gap-1 items-center">
                        <span class="font-semibold">{(data.reviews_ave || 0).toFixed(1)}</span>
                    </div> -->
                    <div class="flex flex-row gap-1 items-center">
                        <span class="font-extrabold text-md sm:text-lg text-green-800">{(data.rating_ave || 0).toFixed(1)}</span>
                        <StarIcon size={16} class="fill-yellow-500" />
                        <span class="text-sm">of {data.review_count || 0} reviews</span>
                    </div>
                </div>
                <div class="flex flex-col gap-[4px] text-sm justify-end border-none">
                    <div class="flex flex-row gap-3 items-center">
                        <PhoneIcon size={16} />
                        {#if data.phone_1} <span class="text-sm">0{data.phone_1}</span>
                        {:else} <span class="text-sm italic text-gray-400 font-light">No phone information</span>
                        {/if}
                    </div>
                    <!-- <div class="flex flex-row gap-3 items-center">
                        <MailIcon size={16} />
                        {#if data.email_1} <span class="text-sm">{data.email_1}</span>
                        {:else} <span class="text-sm italic text-gray-400 font-light">No email information</span>
                        {/if}
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>
</a>

<style>
    /* .featured-card {
        display: grid;
        grid-template-rows: auto 1fr;
        height: 100%;
    } */
    /* .content {
        display: grid;
        grid-template-rows: 1fr 1fr;
    } */
    /* .company {
        grid-template-rows: auto 1fr;
    } */
    /* .details {
        display: grid;
        grid-template-rows: auto 1fr;
    } */
    .card-img {
        position: relative;
    }
    .card-img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(255, 255, 255, 1) 100%);
        z-index: 1;
    }
</style>