<script>
    import MarkdownIt from "markdown-it";
    export let markdown = "";

    let md = new MarkdownIt({html: true});
    const rendered = md.render(markdown);
</script>

<main>
    {@html rendered}
</main>

<style>
</style>