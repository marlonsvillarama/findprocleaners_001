<script>
    import ImageIcon from '@lucide/svelte/icons/image';
    import MailIcon from '@lucide/svelte/icons/mail';
    import PhoneIcon from '@lucide/svelte/icons/phone';
	import StarIcon from '@lucide/svelte/icons/star';

    import { SquareCheckBig } from '@lucide/svelte';
    import Separator from '../ui/separator/separator.svelte';

    let { city, data } = $props();
    console.log('*** featured data', data);
</script>

<a href={data.website} target="_blank" class="rounded-md">
    <div class="featured-card rounded-md w-full border shadow-md">
        <div class="grid gap-1 sm:gap-0 pt-2 pb-2 px-3 rounded-t-md border-0 border-red-500 bg-gray-100 sm:bg-white">
            <div class="font-semibold text-gray-700 border-none truncate">{data.name}</div>
            <div class="flex items-center justify-between">
                <span class="rounded-t-md font-normal text-sm">{data.multiple_cities === true ? (city.name || 'Multiple Cities') : 'Multiple Cities'}</span>

                <div class="flex flex-row gap-1 items-center">
                    <span class="font-bold text-lg sm:text-lg text-green-800">{(data.rating_ave || 0).toFixed(1)}</span>
                    <StarIcon size={16} class="fill-yellow-500" />
                    <span class="text-sm"> ({data.review_count || 0} review{data.review_count === 1 ? '' : 's'})</span>
                </div>
            </div>
        </div>
        <!-- <Separator class="block sm:hidden" /> -->
        <div class="content bg-white rounded-b-md pb-3 px-3 border-0 border-blue-500">
            <img src="/images/listings/{data.image_path}" class="w-full h-[160px] md:h-[200px] align-center overflow-hidden object-none flex items-center border hidden sm:block" alt={data.name} />

            <!-- <div class="company pt-3 pb-3 border-0 rounded-b-sm grid gap-2 md:gap-3"> -->
                <!-- <div class="font-semibold text-gray-700 border-none truncate">{data.name}</div> -->
                
                <div class="mt-3 grid gap-4 md:gap-4 rounded-b-sm border-0 border-red-500">
                    <div class="flex gap-3 items-center w-full">
                        <PhoneIcon size={16} />
                        {#if data.phone_1} <span class="text-lg font-semibold">0{data.phone_1}</span>
                        {:else} <span class="text-sm italic text-gray-400 font-light">No phone information</span>
                        {/if}
                    </div>

                    <div class="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] justify-between gap-x-6 gap-y-2 border-0 border-green-500">
                        {#each data.services as service}
                        <span class="w-full text-sm sm:text-xs pl-2 py-1 bg-gray-50 border-l-2 border-green-700">
                            {service.service_type.name}
                        </span>
                        {/each}
                    </div>
                </div>
            <!-- </div> -->
        </div>
    </div>
</a>

<!-- <style>
    .services {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
</style> -->