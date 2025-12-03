<script>
    import Paragraph from "$lib/components/root/paragraph.svelte";
    import Section from "$lib/components/root/section.svelte";
    import UnorderedList from "$lib/components/root/unordered-list.svelte";
</script>

<div class="grid gap-12 md:gap-12 bg-background-light">
    <Section>
        {#snippet content()}
            <div class="flex justify-center border rounded-sm shadow-sm">
                <img src="/images/not_found.jpg" class="w-full rounded-sm" alt="Page Not Found" />
            </div>
        {/snippet}
    </Section>

    <Section>
        {#snippet content()}
            <h1 class="text-3xl sm:text-5xl font-semibold text-green-700">Oops! Something went wrong...</h1>
        {/snippet}
    </Section>

    <Section class="mb-36">
        {#snippet content()}
            <Paragraph>
                {#snippet text()}
                    <div class="mb-4">Please start again by clicking through any of the following links:</div>
                    <ul class="list-disc text-sm ml-8">
                        <li class="mb-4">
                            <a href="https://findprocleaners.co.nz" target="_self" class="text-blue-500 border-b-1 border-blue-500">Home Page</a>
                        </li>
                        <li class="mb-4">
                            <a href="https://findprocleaners.co.nz/search-professional-cleaners-by-region" target="_self" class="text-blue-500 border-b-1 border-blue-500">Find Professional Cleaners By Region</a>
                        </li>
                        <li>
                            <a href="https://findprocleaners.co.nz/contact" target="_self" class="text-blue-500 border-b-1 border-blue-500">Contact Us</a>
                        </li>
                    </ul>
                {/snippet}
            </Paragraph>
        {/snippet}
    </Section>
</div>

<style>
    h1 {
        font-family: 'Noto Serif', serif;
    }
</style>