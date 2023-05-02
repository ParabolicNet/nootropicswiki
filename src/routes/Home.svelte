<script>
    import {compounds} from "../data.js";
    import {search} from "../search.js";
    let sorted_compounds = Object.keys(compounds).sort();

    let search_query = "";
    let results = [];

    const update_results = () => {
        results = search(search_query);
        results = results;
    }
</script>

<main>
    <div class="gentle-flex">
    <div style="max-width:1400px;padding-left:15px;padding-right:15px;">
        <h2>The Nootropics Wiki</h2>
  
        <p style="max-width:300px;">
        A crude first version of the Nootropics Wiki to get all relevant information into one place.<!-- Sponsored by <a href="https://neuroregen.org" target="_blank">neuroregen</a>.-->
        </p>
        <div style="width:292.4px;">
            <input type="text" id="search_query" bind:value={search_query} on:keyup={() => update_results()} placeholder="Search for nootropics ({Object.keys(compounds).length})"/>
            <div class="search-results" style="background-color: #141414;border-radius: 0px 0px 8px 8px;">
            {#if search_query == "" || results.length == sorted_compounds.length}
              {#each sorted_compounds as codename}
              <a href="details/{codename}"><div class="result-link">{compounds[codename].name} [{compounds[codename].moa}]</div></a>
              {/each}
            {:else}
              {#each results as codename, num}
                  <a href="details/{codename}"><div class="result-link">{compounds[codename].name}</div></a>
              {/each}
            {/if}
            </div>
            {#if results.length == 0 && search_query.length != 0} ... {/if}
          </div>
    </div>
    </div>
</main>