<script>
    let links = [
        {
            text: 'Home',
            url: '/'
        },
        // {
        //     text: 'Listings',
        //     url: '/listings'
        // },
        // {
        //     text: 'Advertise',
        //     url: '/'
        // },
        {
            text: 'Contact Us',
            url: '/contact'
        },
    ];
</script>

<!-- <div class="bg-green-800 w-full py-12 text-white"> -->
<div class="bg-green-800 py-12 text-white">
    <div class="mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl flex items-center justify-between gap-8">
    <!-- <div class="grid grid-cols-2 items-center justify-between mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl"> -->
        <div class="grid gap-1">
            <h2 class="text-2xl">FindProCleaners.co.nz</h2>
            <h2>&copy; Copyright 2025</h2>
        </div>
        <div class="flex items-center gap-8">
            {#each links as link}
                <a href={link.url} title={link.text} class="text-md font-normal text-gray-200 pb-[2px] border-b-2 border-transparent
                    hover:text-white hover:border-white">{link.text}</a>
            {/each}
        </div>
    </div>
</div>