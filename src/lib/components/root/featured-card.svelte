<script>
    // import * as StarRating from "$lib/components/ui/star-rating/index";

    import ImageIcon from '@lucide/svelte/icons/image';
    import MailIcon from '@lucide/svelte/icons/mail';
    import PhoneIcon from '@lucide/svelte/icons/phone';
	import StarIcon from '@lucide/svelte/icons/star';

    let {
        city = 'City',
        img = '',
        name = 'Cleaning Co.',
        description = 'This is the default description',
        phone = '020 4185 7160',
        email = 'contact@cleaningco.com',
        website = 'https://queenstowncleaningservices.co.nz/'
    } = $props();
</script>

<div class="featured-card border-none rounded-sm h-72 sm:w-[280px]">
    <h2 class="rounded-t-sm bg-green-800 py-1 px-3 text-white font-semibold text-md">{city}</h2>
    <div class="content">
        <div class="img border-x-1 border-green-800 bg-green-100 items-center justify-center">
            <ImageIcon size={32} />
        </div>
        <div class="grid company py-2 px-3 overflow-hidden text-ellipsis gap-1 border-1 border-green-800 rounded-b-sm">
            <h3 class="">
                {#if website}
                    <a class="underline font-semibold text-green-700" href={website} target="_blank">{name}</a>
                {:else}
                    <span class="underline font-semibold text-green-700">{name}</span>
                {/if}
            </h3>
            
            <div class="details">
                <div class="flex flex-row gap-2 items-center text-sm">
                    <span class="">Google rating:</span>
                    <div class="flex flex-row gap-1 items-center">
                        <span class="font-semibold">4.2</span>
                        <StarIcon size={16} class="fill-yellow-500" />
                    </div>
                </div>
                <div class="flex flex-col gap-[4px] text-sm justify-end">
                    <div class="flex flex-row gap-3 items-center">
                        <PhoneIcon size={16} />
                        <span class="font-semibold">{phone}</span>
                    </div>
                    <div class="flex flex-row gap-3 items-center">
                        <MailIcon size={16} />
                        <span class="font-semibold">{email}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .featured-card {
        display: grid;
        grid-template-rows: auto 1fr;
    }
    .content {
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
    .company {
        grid-template-rows: auto 1fr;
    }
    .details {
        display: grid;
        grid-template-rows: auto 1fr;
    }
</style>