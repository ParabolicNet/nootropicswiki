<script>
    import MarkdownIt from "markdown-it";
    export let markdown = "";

    let md = new MarkdownIt();
    const rendered = md.render(markdown);
</script>

<main>
    {@html rendered}
</main>