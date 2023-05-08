<script>
    import {compounds} from "../compounds/data.js";
    import Markdown from "./_Markdown.svelte";

    export let compound_code;
    let compound = compounds[compound_code];
    console.log(compound)

</script>

<main style="padding-left: 15px;padding-right: 15px;">
    <div class="gentle-flex">
        <div class="content" style="width:100%;">
            <a href="/">Back to Main Page</a><br><br>
            <div class="compound-header mobile-no-flex">
            <div class="compound-attributes" style="margin-right:10px;">
                <h1 style="margin:0;">{compound.name} <span style="font-size: 15px;"> {#if compound.pubchem_id} (<a title="Visit PubChem Compound {compound.pubchem_id}" target="_blank" href="https://pubchem.ncbi.nlm.nih.gov/compound/{compound.pubchem_id}">PubChem</a>){/if}</span></h1>

                {#if compound.moa}
                <h2>Primary MOA</h2>
                <p>{compound.moa}</p>
                {/if}

                <h2>Class</h2>
                <p>
                    <span>{#each compound.class as classs, i}{#if i != 0}, {/if}{classs}{/each}</span>
                </p>
            </div>
            <div class="attribute-labels">
                <div style="word-wrap: break-word;"><b>Smiles:</b> {#if compound.smiles}{compound.smiles}{:else}<b>UNKNOWN</b>{/if}</div>
                <div style="word-wrap: break-word;"><b>IUPAC:</b> {#if compound.iupac}{compound.iupac}{/if}</div>
                <div><b>Alternate Names:</b> {#if compound.other_names}{#each compound.other_names as name, i}{#if i != 0}, {/if}{name}{/each}{:else}None{/if}</div>
            </div>
            </div>
            <br><hr>
            <Markdown markdown={compound.md} />
            {#if compound.sources}
            <h2 id="sources">Sources <a href="#sources"><img alt="[link]" src="/images/link.svg" class="linkref"></a></h2>
            {#each Object.keys(compound.sources) as source, i}
                <div style="margin-bottom:15px;" class="ind-source" id="source{source}">
                {#if compound.sources[source].url != ""}<a title="Visit Source {source} ({compound.sources[source].url})" target="_blank" rel="noreferrer" href="{compound.sources[source].url}">[ {source} ]</a>{/if}
                {#if compound.sources[source].sci_ref != ""}<a title="Visit Source {source} ({compound.sources[source].sci_ref}) on Sci-Hub" target="_blank" rel="noreferrer" href="https://sci-hub.hkvisa.net/{compound.sources[source].sci_ref}">[ {#if compound.sources[source].url == ""}{source}{/if} - Sci-Hub ]</a>{/if}
                
                {#if compound.sources[source].extract}
                    "{compound.sources[source].extract}"
                {:else}
                    {compound.sources[source].title}
                {/if}
                <a href="#source{source}"><img alt="[link]" src="/images/link.svg" class="linkref"></a>
                </div>
            {/each}
            {/if}
        </div>
    </div>
</main>

<style>
    p {
        margin: 0px;
    }
</style>