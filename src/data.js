import md_bromantane from "./compounds/md/bromantane.md";
import md_tak_653 from "./compounds/md/tak-653.md";
import md_neboglamine from "./compounds/md/neboglamine.md";

import replaceme from "./compounds/md/_placeholder.md";

export const compounds = {
    "bromantane": {
        name: "Bromantane",
        iupac: "N-(4-bromophenyl)adamantan-2-amine",
        pubchem_id: "4660557",
        smiles: "C1C2CC3CC1CC(C2)C3NC4=CC=C(C=C4)Br",
        other_names: [
            "Bromantan",
            "Ladasten"
        ],
        moa: "Kir2.1 Channel Inhibitor?",
        class: [
            "Dopamine Upregulator",
            "Pro-Testerone"
        ],
        related: [],
        interactions: [],
        md: md_bromantane
    },
    "tak-653": {
        name: "TAK-653",
        iupac: "9-(4-cyclohexyloxyphenyl)-7-methyl-3,4-dihydropyrazino[2,1-c][1,2,4]thiadiazine 2,2-dioxide",
        pubchem_id: "56655833",
        smiles: "CC1=CN2CCS(=O)(=O)N=C2C(=N1)C3=CC=C(C=C3)OC4CCCCC4",
        other_names: [
            "9E3TOE5RIZ",
            "1358751-06-0",
            "UNII-9E3TOE5RIZ"
        ],
        moa: "AMPA PAM",
        class: [
            "Pro-Cognition",
            "Pro-AMPA"
        ],
        related: [],
        interactions: [],
        sources: {
            "1": {
                title: "Strictly regulated agonist-dependent activation of AMPA-R is the key characteristic of TAK-653 for robust synaptic responses and cognitive improvement.",
                extract: "",
                sci_ref: "",
                url: "https://www.nature.com/articles/s41598-021-93888-0"
            },
            "2": {
                title: "TAK-653, an AMPA receptor potentiator with minimal agonistic activity, produces an antidepressant-like effect with a favorable safety profile in rats.",
                extract: "",
                sci_ref: "",
                url: "https://academic.oup.com/ijnp/article/12/9/1275/667286?login=false"
            }
        },
        md: md_tak_653
    },
    "neboglamine": {
        name: "Neboglamine",
        iupac: "(4S)-4-amino-5-[(4,4-dimethylcyclohexyl)amino]-5-oxopentanoic acid",
        pubchem_id: "3074827",
        smiles: "CC1(CCC(CC1)NC(=O)C(CCC(=O)O)N)C",
        other_names: [
            "Nebostinel",
            "163000-63-3",
            "CR-2249",
            "XY-2401"
        ],
        moa: "NMDA Glycine PAM",
        class: [
            "Pro-Cognition"
        ],
        related: [],
        interactions: [],
        sources: {
            "1": {
                title: "Acute amino acid D-serine administration, similar to ketamine, produces antidepressant-like effects through the identical mechanisms.",
                extract: "",
                sci_ref: "10.1021/acs.jafc.7b04217",
                url: ""
            },
            "4": {
                title: "Behavioral and cognitive effects of the N-methyl-D-aspartate receptor co-agonist D-serine in healthy humans: initial findings",
                extract: "",
                sci_ref: "10.1016/j.jpsychires.2014.12.007",
                url: ""
            },
            "5": {
                title: "The effect of D-serine administration on cognition and mood in older adults",
                extract: "",
                sci_ref: "",
                url: "https://www.oncotarget.com/article/7691/text/"
            },
            "6": {
                title: "CR 2249 [Neboglamine]: a New Putative Memory Enhancer. Behavioural Studies on Learning and Memory in Rats and Mice",
                extract: "",
                sci_ref: "10.1111/j.2042-7158.1996.tb03938.x",
                url: ""
            },
            "7": {
                title: "Cognition Enhancing Profile of CR 2249 [Neboglamine], a  New NMDA-Glycine Site Modulator",
                extract: "",
                sci_ref: "",
                url: "https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1527-3458.1997.tb00326.x"
            },
            "9": {
                title: "Xytis XY2401 [Neboglamine] Product Pipeline",
                extract: "Neboglamine had an excellent safety profile, and was well tolerated. Preliminary clinical findings support the antidepressant effect predicted by non clinical studies.",
                sci_ref: "",
                url: "https://web.archive.org/web/20081006061116/http://www.xytis.com/Pipeline/xy2401.html"
            },
            "10": {
                title: "Pilot controlled trial of d-serine for the treatment of post-traumatic stress disorder",
                extract: "",
                sci_ref: "",
                url: "https://academic.oup.com/ijnp/article/12/9/1275/667286?login=false"
            },
            "17": {
                title: "Acute D-serine treatment produces antidepressant-like effects in rodents.",
                extract: "",
                sci_ref: "",
                url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3278496/"
            }
        },
        md: md_neboglamine
    }
}