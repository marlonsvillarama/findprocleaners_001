<script>
    import Separator from "../ui/separator/separator.svelte";

    import ArticlePreview from "./article-preview.svelte";

    let articles = [
        {
            title: 'How to Clean Your Bathroom',
            date: '20250612',
            text: 'Nobody looks forward to cleaning a dirty bathroom. It can be a daunting task. Fortunately, our cleaning pros are here to share the wisdom we’ve gleaned from years of experience providing bathroom cleaning services. Now you don’t have to tackle this unpleasant task alone.'
        },
        {
            title: 'I Think There’s a Dead Mouse in My Wall',
            date: '20250707',
            text: 'The dead mouse smell is barely noticeable at first, then impossible to ignore – and it’s coming from a source you cannot find or figure out. At first, you’re in a state of denial. The thought of animals decomposing behind your drywall is upsetting.'
        },
    ];
</script>

<div class="mx-4 sm:w-7xl sm:mx-auto grid gap-2">
    <h1 class="text-xl text-green-800 font-semibold mb-1">Latest Articles</h1>
    <Separator />
    <div class="grid grid-cols-2 gap-12 items-start">
        {#each articles as article}
            <ArticlePreview {...article} />
        {/each}
    </div>
</div>