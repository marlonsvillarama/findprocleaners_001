<script>
    import { Phone, Star } from '@lucide/svelte/icons';

    let { data } = $props();
</script>

<a href={data.website} target="_blank" class="rounded-md shadow-sm hover:shadow-lg duration-150">
    <div class="featured-card border rounded-md sm:w-[290px] bg-white from-white to-green-100/50">
        <div class="content bg-white rounded-md">
            <div class="card-img w-full h-[200px] align-center overflow-hidden object-none flex items-center rounded-t-md bg-gray-100/70">
                <img src={data.image_url} class="w-full align-center" alt={data.name} />
            </div>
            <div class="grid grid-rows-2 company pt-2 pb-3 px-4 min-h-[140px] rounded-b-sm
                ">
                <div class="font-semibold text-gray-700 text-md border-none">{data.name}</div>
                
                <div class="details grid gap-[0px] justify-start border-0 border-red-500">
                    <div class="flex flex-row gap-2 items-center text-sm border-none">
                        <div class="flex flex-row gap-1 items-center">
                            <span class="font-extrabold text-lg text-green-800">{(data.rating_ave || 0).toFixed(1)}</span>
                            <Star size={16} class="fill-yellow-500" />
                            <span class="text-sm">of {data.review_count || 0} reviews</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[4px] text-sm justify-end border-none">
                        <div class="flex flex-row gap-3 items-center">
                            <Phone size={16} />
                            {#if data.phone_1} <span class="text-sm">0{data.phone_1}</span>
                            {:else} <span class="text-sm italic text-gray-400 font-light">No phone information</span>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</a>
