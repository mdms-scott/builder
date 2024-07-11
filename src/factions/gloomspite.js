const heroes = [
    {
        name: "Dankhold Troggboss",
        unit_size: 1,
        points: 220,
        regiment_options: "Any Troggoth",
        notes: "This Hero can join Trugg’s regiment",
        base_size: "60mm",
        type: "hero"
    },
    {
        name: "Fungoid Cave-Shaman",
        unit_size: 1,
        points: 100,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Kragnos, the End of Empires",
        unit_size: 1,
        points: 680,
        regiment_options: "Any Gloomspite Gitz",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Loonboss",
        unit_size: 1,
        points: 130,
        regiment_options: "Any Moonclan",
        notes: "This Hero can join an eligible regiment as a Moonclan Agitator",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Loonboss on Giant Cave Squig",
        unit_size: 1,
        points: 130,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Loonboss on Mangler Squigs",
        unit_size: 1,
        points: 260,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "80mm",
        type: "hero"
    },
    {
        name: "Rabble-Rowza",
        unit_size: 1,
        points: 120,
        regiment_options: "0-1 Monster, Any Moonclan Infantry",
        notes: "This Hero can join an eligible regiment as a Moonclan Agitator",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Skragrott, the Loonking",
        unit_size: 1,
        points: 220,
        regiment_options: "Any Moonclan Agitator, Any Gloomspite Gitz",
        base_size: "60 × 35mm",
        type: "hero"
    },
    {
        name: "Squigboss with Gnasha-squig",
        unit_size: 1,
        points: 110,
        regiment_options: "0-1 Moonclan Agitator, Any Moonclan",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Trugg, the Troggoth King",
        unit_size: 1,
        points: 360,
        regiment_options: "0-1 Dankhold Troggboss, Any Gloomspite Gitz",
        base_size: "100mm",
        type: "hero"
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
        type: "hero"
    }
];

const units = [
    {
        name: "Arachnarok Spider with Flinger",
        unit_size: 1,
        points: 290,
        relevant_keywords: "Spiderfang, Monster",
        base_size: "160mm",
        type: "unit"
    },
    {
        name: "Arachnarok Spider with Spiderfang Warparty",
        unit_size: 1,
        points: 280,
        relevant_keywords: "Spiderfang, Monster",
        base_size: "160mm",
        type: "unit"
    },
    {
        name: "Boingrot Bounderz",
        unit_size: 5,
        points: 120,
        relevant_keywords: "Moonclan, Cavalry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Dankhold Troggoth",
        unit_size: 1,
        points: 180,
        relevant_keywords: "Troggoth, Monster",
        base_size: "60mm",
        type: "unit"
    },
    {
        name: "Fellwater Troggoths",
        unit_size: 3,
        points: 180,
        relevant_keywords: "Troggoth, Infantry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Gobbapalooza",
        unit_size: 5,
        points: 150,
        relevant_keywords: "Moonclan, Infantry",
        notes: "This unit cannot be reinforced",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Loonsmasha Fanatics",
        unit_size: 5,
        points: 140,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Mangler Squigs",
        unit_size: 1,
        points: 220,
        relevant_keywords: "Moonclan, Monster",
        base_size: "80mm",
        type: "unit"
    },
    {
        name: "Moonclan Shootas",
        unit_size: 20,
        points: 160,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Moonclan Stabbas",
        unit_size: 20,
        points: 140,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Rockgut Troggoths",
        unit_size: 3,
        points: 170,
        relevant_keywords: "Troggoth, Infantry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Skitterstrand Arachnarok",
        unit_size: 1,
        points: 250,
        relevant_keywords: "Spiderfang, Monster",
        base_size: "160mm",
        type: "unit"
    },
    {
        name: "Snarlfang Riders",
        unit_size: 5,
        points: 130,
        relevant_keywords: "Gitmob, Cavalry",
        base_size: "60 × 35mm",
        type: "unit"
    },
    {
        name: "Sneaky Snufflers",
        unit_size: 6,
        points: 140,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Spider Riders",
        unit_size: 5,
        points: 110,
        relevant_keywords: "Spiderfang, Cavalry",
        base_size: "60 × 35mm",
        type: "unit"
    },
    {
        name: "Sporesplatta Fanatics",
        unit_size: 5,
        points: 120,
        relevant_keywords: "Moonclan, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Squig Herd",
        unit_size: 12,
        points: 100,
        relevant_keywords: "Moonclan, Beast",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Squig Hoppers",
        unit_size: 10,
        points: 170,
        relevant_keywords: "Moonclan, Cavalry",
        base_size: "32mm",
        type: "unit"
    }
];

export { heroes, units };
