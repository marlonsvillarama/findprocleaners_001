<script>
    import ScrollArea from "../ui/scroll-area/scroll-area.svelte";
    
    import FeaturedCard from "./featured-card.svelte";

    let featuredList = [
        {
            city: 'Queenstown',
            img: '',
            name: 'Queenstown Cleaning Services',
            description: 'Servicing New Zealand homes and businesses for more than 20 years, request a free quote today.  Fully insured, police checked and backed by Queenstown\'s cleaning work guarantee!',
            phone: '020 4185 7160',
            email: '',
            website: 'https://queenstowncleaningservices.co.nz/'
        },
        {
            city: 'Palmerston North',
            img: '',
            name: '7 Ames Cleaning Services',
            description: 'Servicing New Zealand homes and businesses for more than 20 years, request a free quote today.  Fully insured, police checked and backed by Queenstown\'s cleaning work guarantee!',
            phone: '020 4185 7160',
            email: '',
            website: 'https://queenstowncleaningservices.co.nz/'
        },
        {
            city: 'Auckland',
            img: '',
            name: 'Queenstown Cleaning Services',
            description: 'Servicing New Zealand homes and businesses for more than 20 years, request a free quote today.  Fully insured, police checked and backed by Queenstown\'s cleaning work guarantee!',
            phone: '020 4185 7160',
            email: '',
            website: 'https://queenstowncleaningservices.co.nz/'
        },
        {
            city: 'Nelson',
            img: '',
            name: 'Queenstown Cleaning Services',
            description: 'Servicing New Zealand homes and businesses for more than 20 years, request a free quote today.  Fully insured, police checked and backed by Queenstown\'s cleaning work guarantee!',
            phone: '020 4185 7160',
            email: '',
            website: 'https://queenstowncleaningservices.co.nz/'
        },
        {
            city: 'Invercargill',
            img: '',
            name: 'Queenstown Cleaning Services',
            description: 'Servicing New Zealand homes and businesses for more than 20 years, request a free quote today.  Fully insured, police checked and backed by Queenstown\'s cleaning work guarantee!',
            phone: '020 4185 7160',
            email: '',
            website: 'https://queenstowncleaningservices.co.nz/'
        },
        {
            city: 'Queenstown',
            img: '',
            name: 'Queenstown Cleaning Services',
            description: 'Servicing New Zealand homes and businesses for more than 20 years, request a free quote today.  Fully insured, police checked and backed by Queenstown\'s cleaning work guarantee!',
            phone: '020 4185 7160',
            email: '',
            website: 'https://queenstowncleaningservices.co.nz/'
        },
    ];
</script>

<main class="m-auto max-w-7xl">
    <h1 class="text-lg text-green-700 font-semibold mb-1">Featured Cleaners</h1>
    <ScrollArea orientation="horizontal" class="w-full whitespace-nowrap rounded-none">
        <div class="flex w-max space-x-4 pb-4">
            {#each featuredList as featured}
                <FeaturedCard {...featured} />
            {/each}
        </div>
    </ScrollArea>
</main>