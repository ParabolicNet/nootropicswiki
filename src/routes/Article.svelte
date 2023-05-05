<script>
    import {articles} from "../articles/data.js";
    import Markdown from "./_Markdown.svelte";

    export let article_code;
    let article = articles[article_code];
    console.log(article)

</script>

<main style="padding-left: 15px;padding-right: 15px;">
    <div class="gentle-flex">
        <div class="content" style="width:100%;">
            <div class="article-attributes">
                <a href="/">Back to Main Page</a><br><br>
                <h1 style="margin:0;">{article.title}</h1>

                <h2>Contributors</h2>
                {#if article.author}
                    {#if article.editor}
                    <p>Author: @{article.author} / Editor: @{article.editor}</p>
                    {:else}
                    <p>Author/Editor @{article.author}</p>
                    {/if}
                {/if}
            </div>
            <hr>
            <Markdown markdown={article.md} />
        </div>
    </div>
</main>

<style>
</style>