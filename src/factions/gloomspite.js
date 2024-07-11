const heroes = [
    {
        name: "Dankhold Troggboss",
        unit_size: 1,
        points: 220,
        regiment_options: "Any Troggoth",
        notes: "This Hero can join Trugg’s regiment",
        base_size: "60mm",
        type: "hero",
        image: "/factions/gloomspite/dankholdTrogboss.jpg"
    },
    {
        name: "Fungoid Cave-Shaman",
        unit_size: 1,
        points: 100,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "32mm",
        type: "hero",
        image: "/factions/gloomspite/fungoidCaveShaman.jpg"
    },
    {
        name: "Kragnos, the End of Empires",
        unit_size: 1,
        points: 680,
        regiment_options: "Any Gloomspite Gitz",
        base_size: "130mm",
        type: "hero",
        image: "/factions/gloomspite/kragnosTheEndOfEmpires.jpg"
    },
    {
        name: "Loonboss",
        unit_size: 1,
        points: 130,
        regiment_options: "Any Moonclan",
        notes: "This Hero can join an eligible regiment as a Moonclan Agitator",
        base_size: "32mm",
        type: "hero",
        image: "/factions/gloomspite/loonboss.jpg"
    },
    {
        name: "Loonboss on Giant Cave Squig",
        unit_size: 1,
        points: 130,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "40mm",
        type: "hero",
        image: "/factions/gloomspite/loonbossOnGiantCaveSquig.jpg"
    },
    {
        name: "Loonboss on Mangler Squigs",
        unit_size: 1,
        points: 260,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "80mm",
        type: "hero",
        image: "/factions/gloomspite/loonbossOnManglerSquigs.jpg"
    },
    {
        name: "Rabble-Rowza",
        unit_size: 1,
        points: 120,
        regiment_options: "0-1 Monster, Any Moonclan Infantry",
        notes: "This Hero can join an eligible regiment as a Moonclan Agitator",
        base_size: "32mm",
        type: "hero",
        image: "/factions/gloomspite/rabbleRowza.jpg"
    },
    {
        name: "Skragrott, the Loonking",
        unit_size: 1,
        points: 220,
        regiment_options: "Any Moonclan Agitator, Any Gloomspite Gitz",
        base_size: "60 × 35mm",
        type: "hero",
        image: "/factions/gloomspite/skragrottTheLoonking.jpg"
    },
    {
        name: "Squigboss with Gnasha-squig",
        unit_size: 1,
        points: 110,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "32mm",
        type: "hero",
        image: "/factions/gloomspite/squigbossWithGhasha-squig.jpg"
    },
    {
        name: "Trugg, the Troggoth King",
        unit_size: 1,
        points: 360,
        regiment_options: "0-1 Dankhold Troggboss, Any Gloomspite Gitz",
        base_size: "100mm",
        type: "hero",
        image: "/factions/gloomspite/truggTheTroggothKing.jpg"
    },
    {
        name: "Webspinner Shaman",
        unit_size: 1,
        points: 140,
        regiment_options: "Any Spiderfang",
        base_size: "25mm",
        type: "hero"
    },
    {
        name: "Webspinner Shaman on Arachnarok Spider",
        unit_size: 1,
        points: 320,
        regiment_options: "Any Spiderfang",
        base_size: "160mm",
        type: "hero",
        image: "/factions/gloomspite/webspinnerShamanonArachnarokSpider.jpg"
    }
];

const units = [
    {
        name: "Arachnarok Spider with Flinger",
        unit_size: 1,
        points: 290,
        relevant_keywords: "Spiderfang, Monster",
        base_size: "160mm",
        type: "unit",
        image: "/factions/gloomspite/arachnarokSpiderWithFlinger.jpg"
    },
    {
        name: "Arachnarok Spider with Spiderfang Warparty",
        unit_size: 1,
        points: 280,
        relevant_keywords: "Spiderfang, Monster",
        base_size: "160mm",
        type: "unit",
        image: "/factions/gloomspite/arachnarokSpiderWithSpiderfangWarparty.jpg"
    },
    {
        name: "Boingrot Bounderz",
        unit_size: 5,
        points: 120,
        relevant_keywords: "Moonclan, Cavalry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/gloomspite/boingrotBounderz.jpg"
    },
    {
        name: "Dankhold Troggoth",
        unit_size: 1,
        points: 180,
        relevant_keywords: "Troggoth, Monster",
        base_size: "60mm",
        type: "unit",
        image: "/factions/gloomspite/dankholdTroggoth.jpg"
    },
    {
        name: "Fellwater Troggoths",
        unit_size: 3,
        points: 180,
        relevant_keywords: "Troggoth, Infantry",
        base_size: "50mm",
        type: "unit",
        image: "/factions/gloomspite/fellwaterTroggoths.jpg"
    },
    {
        name: "Gobbapalooza",
        unit_size: 5,
        points: 150,
        relevant_keywords: "Moonclan, Infantry",
        notes: "This unit cannot be reinforced",
        base_size: "32mm",
        type: "unit",
        image: "/factions/gloomspite/gobbapalooza.jpg"
    },
    {
        name: "Loonsmasha Fanatics",
        unit_size: 5,
        points: 140,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/gloomspite/loonsmashaFanatics.jpg"
    },
    {
        name: "Mangler Squigs",
        unit_size: 1,
        points: 220,
        relevant_keywords: "Moonclan, Monster",
        base_size: "80mm",
        type: "unit",
        image: "/factions/gloomspite/manglerSquigs.jpg"
    },
    {
        name: "Moonclan Shootas",
        unit_size: 20,
        points: 160,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "25mm",
        type: "unit",
        image: "/factions/gloomspite/shootas.jpg"
    },
    {
        name: "Moonclan Stabbas",
        unit_size: 20,
        points: 140,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "25mm",
        type: "unit",
        image: "/factions/gloomspite/stabbas.jpg"
    },
    {
        name: "Rockgut Troggoths",
        unit_size: 3,
        points: 170,
        relevant_keywords: "Troggoth, Infantry",
        base_size: "50mm",
        type: "unit",
        image: "/factions/gloomspite/rockgutTroggoths.jpg"
    },
    {
        name: "Skitterstrand Arachnarok",
        unit_size: 1,
        points: 250,
        relevant_keywords: "Spiderfang, Monster",
        base_size: "160mm",
        type: "unit",
        image: "/factions/gloomspite/skitterstrantArachnarok.jpg"
    },
    {
        name: "Snarlfang Riders",
        unit_size: 5,
        points: 130,
        relevant_keywords: "Gitmob, Cavalry",
        base_size: "60 × 35mm",
        type: "unit",
        image: "/factions/gloomspite/snarlfangRiders.jpg"
    },
    {
        name: "Sneaky Snufflers",
        unit_size: 6,
        points: 140,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/gloomspite/sneakySnufflers.jpg"
    },
    {
        name: "Spider Riders",
        unit_size: 5,
        points: 110,
        relevant_keywords: "Spiderfang, Cavalry",
        base_size: "60 × 35mm",
        type: "unit",
        image: "/factions/gloomspite/grotSpiderRiders.jpg"
    },
    {
        name: "Sporesplatta Fanatics",
        unit_size: 5,
        points: 120,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/gloomspite/sporesplattaFanatics.jpg"
    },
    {
        name: "Squig Herd",
        unit_size: 12,
        points: 100,
        relevant_keywords: "Moonclan, Beast",
        base_size: "25mm",
        type: "unit",
        image: "/factions/gloomspite/squigHerd.jpg"
    },
    {
        name: "Squig Hoppers",
        unit_size: 10,
        points: 170,
        relevant_keywords: "Moonclan, Cavalry",
        base_size: "32mm",
        type: "unit",
        image: "/factions/gloomspite/squigHoppers.jpg"
    }
];

export { heroes, units };
