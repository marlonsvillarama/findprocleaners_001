<script>
    let links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'Find Cleaners by Region',
            url: '/search-professional-cleaners-by-region'
        },
        // {
        //     text: 'Search by Category',
        //     url: '/search-professional-cleaners-by-category'
        // },
        {
            text: 'Contact Us',
            url: '/contact'
        }
    ];
</script>

<div class="bg-green-800 p-4 md:pt-10 pb-6 md:pb-12 text-white">
    <div class="flex flex-col my-2 md:my-4 mx-2 md:mx-auto md:w-[90%] md:max-w-6xl md:flex-row md:items-start justify-between gap-8">
        <div class="grid gap-1">
            <h2 class="text-md">FindProCleaners.co.nz</h2>
            <h2 class="text-sm font-light md:text-sm">&copy; Copyright 2025</h2>
        </div>
        <div class="grid md:flex-row items-left md:items-center gap-3 md:gap-3">
            {#each links as link}
                <a href={link.url} title={link.text} class="text-sm font-light text-gray-200 pb-[2px] border-b-2 border-transparent
                    hover:text-white hover:border-white">{link.text}</a>
            {/each}
        </div>
    </div>
</div>