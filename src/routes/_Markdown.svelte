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
    .h2 {
        color: black;
        text-decoration: underline;
        text-decoration-color: #535bf2;
    }
</style>