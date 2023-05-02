import {compounds} from "./data.js";

export const search = (query) => {
    // Wipe previous results
    let results = [];
    // Debug
    console.log(query);
    let query_to_lower = query.toLowerCase().trim();

    // First query algo (exact spelling)
    for(let i=0; i < Object.keys(compounds).length; i++) {
      let compound_to_lower = compounds[Object.keys(compounds)[i]].name.toLowerCase();
      let compound_no_dash = compound_to_lower.replace(/-/g, '')
      let noot_space_dash = compound_to_lower.replace(/-/g, ' ')
      console.log(compound_no_dash)

      if(query_to_lower == compound_to_lower || query_to_lower == compound_no_dash || query_to_lower == noot_space_dash) {
        results.push(Object.keys(compounds)[i]);

      } else {
        let temp_other_names = [];
        for(let x=0; x < compounds[Object.keys(compounds)[i]].other_names.length; x++) {
          temp_other_names.push(compounds[Object.keys(compounds)[i]].other_names[x].toLowerCase())
        }

        if (compounds[Object.keys(compounds)[i]].other_names.length != 0 && temp_other_names.includes(query.toLowerCase())) {
          results.push(Object.keys(compounds)[i])
        }
      }
    }

    // Second search algo (appended to bottom)
    for(let i=0; i < Object.keys(compounds).length; i++) {
        let noot_to_lower = compounds[Object.keys(compounds)[i]].name.toLowerCase();
  
        if (
          !results.includes(Object.keys(compounds)[i]) &&
          //search_to_lower.length > 2 &&
          //(compounds[Object.keys(compounds)[i]].name.length-query.length) < 3 &&
          (compounds[Object.keys(compounds)[i]].name.length-search.length) > -3 &&
          (noot_to_lower.startsWith(query_to_lower) || noot_to_lower.endsWith(query_to_lower))
        ) {
          results.push(Object.keys(compounds)[i])
        }
      }

    return results;
}