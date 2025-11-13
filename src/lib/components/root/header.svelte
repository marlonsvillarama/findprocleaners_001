<script>
    let links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'Listings',
            url: '/listings'
        },
        {
            text: 'Advertise',
            url: '/'
        },
        {
            text: 'Contact Us',
            url: '/contact'
        },
    ];
</script>

<div class="flex items-end justify-between my-4 mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl">
    <div class="flex items-end gap-4">
        <img src="/images/icons/findprocleaners.svg" alt="Find Pro Cleaners" class="w-[32px] h-auto">
        <div class="flex items-end">
            <span class="font-semibold text-2xl text-green-600/70">Find</span>
            <span class="font-semibold text-2xl text-gray-700">Pro</span>
            <span class="font-semibold text-2xl text-green-600/70">Cleaners</span>
            <span class="font-semibold text-xl text-gray-400">.nz</span>
        </div>
    </div>
    <div class="flex items-center gap-8">
        {#each links as link}
            <a href={link.url} title={link.text} class="text-md font-normal text-green-700 pb-[2px] border-b-2 border-transparent
                hover:text-green-900 hover:border-green-900">{link.text}</a>
        {/each}
    </div>
</div>