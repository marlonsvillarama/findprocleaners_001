<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as InputGroup from '$lib/components/ui/input-group/index';
    import * as Select from '$lib/components/ui/select/index';
    import Input from '../ui/input/input.svelte';

    import { Building2 } from '@lucide/svelte';
    import { Search } from '@lucide/svelte';
    
    let {
        data,
        image = 'cleaners_banner_4.png',
        title = 'Find Professional Cleaners Near You',
        search = false,
        subtitle = ''
    } = $props();

    let bannerClasses = $state('');
    if (image.indexOf('/') > 0) {
        bannerClasses = `background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(/images/${image}); background-position: 0% 50%;`
    }
</script>

<div class="banner relative md:pt-24 md:pb-42" style="background-image: url('/images/{image}'); {bannerClasses}">
    <div class="pb-26 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
        <div class="grid gap-6 lg:max-w-[60%] border-0 border-green-500">
            <h1 class="text-5xl text-white leading-[4rem]">{title}</h1>
            {#if subtitle}
                <p class="text-white text-xl font-light tracking-[0.25px]">Discover the best professional cleaning services in your city.</p>
            {/if}
            {#if search === true}
                <div class="relative">
                    <Search size={16} class="absolute top-[14px] left-[12px] stroke-(text-foreground) stroke-2" />
                    <input type="text" class="w-[300px] text-sm font-light bg-white pl-9 pr-4 py-3 border-0 rounded-sm text-foreground outline-none" placeholder="Enter your city or zip code">
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .banner {
        /* background-image: url('/images/cleaners_banner_4.png'); */
        background-position: 0% 0%;
        background-size: cover;
    }
    .banner h1 {
        font-family: "Noto Serif", serif;
    }
</style>