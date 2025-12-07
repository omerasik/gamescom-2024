const navigationItems = [
{ name: "Events", link: "#events", type: "internal" },
{ name: "Official website", link: "https://www.gamescom.global/en", type: "external" },
{ name: "Graduaat Programmeren", link: "https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren", type: "external" }
];

const events = [
{
id: "1",
stage: "Innovation Stage",
from: 1755680400000,
to: 1755687600000,
event: {
name: "Next-Gen Game Engines",
description: "Join Tim Sweeney, CEO of Epic Games, as he explores the cutting-edge advancements in game engine technology. This session will cover the latest innovations in Unity’s development tools and their potential impact on the gaming industry. Attendees will gain insights into how these new technologies can enhance game development, improve performance, and enable more immersive and interactive experiences for players. Sweeney will also discuss upcoming features and tools designed to empower developers in creating next-generation games.",
socials: {
instagram: "https://www.instagram.com/epicgames/",
twitter: "https://x.com/EpicGames",
website: "https://www.epicgames.com/site/en-US/home",
youtube: "https://www.youtube.com/@EpicGamesStore"
},
image: "./images/next-gen.png"
}
},
{

id: "2",
stage: "Main Showcase Stage",
from: 1755684000000,
to: 1755689400000,
event: {
name: "Final Fantasy XVI",
description: "Step into the world of Final Fantasy XVI as Square Enix reveals the next wave of content for this epic fantasy RPG. In this presentation, fans will get an exclusive look at upcoming DLCs, gameplay expansions, and storylines that continue the journey of Clive Rosfield and the land of Valisthea. With stunning visuals, rich lore, and an immersive combat system, Final Fantasy XVI has redefined the series. The team at Square Enix will delve into new features, challenges, and fan-requested updates, offering a glimpse into how they are shaping the future of this beloved game. Don't miss this chance to witness the evolution of a modern classic.",
socials: {
instagram: "https://www.instagram.com/ffxiv/",
twitter: "https://x.com/FF_XIV_EN",
website: "https://eu.finalfantasyxiv.com/",
youtube: "https://www.youtube.com/@ffxiv"
},
image: "./images/ff-xiv.png"
}
},
{


id: "3",
stage: "Visionary Stage",
from: 1755694800000,
to: 1755702000000,
event: {
name: "Future of Open-World",
description: "Join renowned game director Hidetaka Miyazaki, the creative force behind Elden Ring and Dark Souls, for a deep dive into the evolving world of open-world game design. As technology advances and player expectations shift, the boundaries of what open-world games can achieve are being pushed further than ever. In this session, Miyazaki will explore emerging trends, innovations in game mechanics, and the future of player-driven exploration. He will also discuss how FromSoftware has redefined open-world storytelling, blending intricate world-building with player freedom. Discover how future titles will enhance immersion, AI-driven interactivity, and narrative depth, setting the stage for the next era of gaming.",
socials: {
instagram: "https://www.instagram.com/hidetaka.miyazaki_/",
twitter: "https://x.com/MiyazakiTweets",
website: "https://en.wikipedia.org/wiki/Hidetaka_Miyazaki"
},
image: "./images/future-gaming.jpg"
}
},
{


id: "4",
stage: "Main Showcase Stage",
from: 1755691200000,
to: 1755698400000,
event: {
name: "Starfield",
description: "Dive into the vast universe of Starfield with Bethesda Game Studios as they unveil the next phase of their groundbreaking space RPG. In this special presentation, fans will get an inside look at new content, expansions, and gameplay mechanics that take exploration to uncharted territories. Discover how Bethesda is pushing the boundaries of open-world design, blending cutting-edge technology with the freedom to explore the stars. The developers will also share behind-the-scenes insights into upcoming storylines, new planets, and enhancements to ship-building, crafting, and combat systems. Whether you're a seasoned space traveler or new to the journey, this event promises to show why Starfield is shaping the future of RPGs in the cosmos.",
socials: {
instagram: "https://www.instagram.com/starfieldgame/",
twitter: "https://x.com/StarfieldGame",
website: "https://bethesda.net/en/game/starfield",
youtube: "https://www.youtube.com/@bethesda"
},
image: "./images/starfield.jpg"
}
},
{

id: "5",
stage: "Innovation Stage",
from: 1755763200000,
to: 1755770400000,
event: {
name: "AI and Machine Learning in Gaming",
description: "Explore the transformative impact of AI and machine learning on the gaming industry with Epic Games' CEO Tim Sweeney. In this insightful session, Sweeney will discuss how cutting-edge AI technology is revolutionizing game development, from creating more responsive and adaptive NPCs to procedural content generation and enhanced player experiences. Learn how machine learning is being harnessed to build smarter, more immersive worlds that evolve based on player choices and behavior. Sweeney will also provide a look at future possibilities, where AI-driven innovations could redefine the boundaries of creativity and interaction in gaming. Whether you're a developer or a gamer, this talk will offer a glimpse into the future of AI-powered gameplay.",
socials: {
instagram: "https://www.instagram.com/epicgames/",
website: "https://www.epicgames.com/site/en-US/home",
youtube: "https://www.youtube.com/@EpicGamesStore"
},
image: "./images/ai-machine.jpg"
}
},
{

id: "6",
stage: "Main Showcase Stage",
from: 1755779400000,
to: 1755784800000,
event:
{name: "Cyberpunk 2077: Phantom Liberty",
description: "CD Projekt Red returns to the dystopian streets of Night City with Phantom Liberty,the latest expansion for Cyberpunk 2077. In this exclusive showcase, the developers will unveil new storylines, gameplay mechanics, and major updates designed to elevate the Cyberpunk experience to new heights. Featuring fresh insights into the highly anticipated expansion, fans will get a closer look at the evolving world, including new characters, quests, and locations that expand the game's narrative universe. The team will also share key improvements based on player feedback, enhancing combat, AI, and world interaction. If you're a Cyberpunk fan or curious about the future of this genre-defining game, this session is a must-see.",
socials: {
instagram: "https://www.instagram.com/cyberpunkgame/",
twitter: "https://x.com/CyberpunkGame",
website: "https://www.cyberpunk.net/us/en/",
youtube: "https://www.youtube.com/@CyberpunkGame"
},
image: "./images/cyberpunk.jpg"
}
},
{

id: "7",
stage: "Visionary Stage",
from: 1755792000000,
to: 1755795600000,
event: {
name: "Storytelling in the Digital Age",
description: "Legendary game writer and director Amy Hennig, known for her work on Uncharted and Legacy of Kain, delves into the evolving art of storytelling in modern video games. As the digital landscape expands, new technologies are transforming how narratives are built and experienced. In this insightful session, Hennig will explore the challenges and opportunities of crafting emotionally resonant, interactive stories that respond to player choices. She will share her experience creating character-driven narratives that go beyond traditional media, offering a glimpse into the future of storytelling where players are both audience and co-authors. Whether you're a developer, writer, or gamer, this talk provides a masterclass on shaping the future of interactive narrative design.",
socials: {
instagram: "https://www.instagram.com/amy_hennig/",
twitter: "https://x.com/amy_hennig",
website: "https://en.wikipedia.org/wiki/Amy_Hennig"
},
image: "./images/storytelling.jpg"
}
},
{

id: "8",
stage: "Virtual Stage",
from: 1755860400000,
to: 1755867600000,
event: {
name: "The Impact of VR",
description: "Visionary entrepreneur Palmer Luckey, the founder of Oculus, takes the stage to explore the transformative impact of Virtual Reality (VR) on the gaming industry. In this engaging session, Luckey will discuss how VR technology has evolved from niche experimentation to mainstream gaming, unlocking new levels of immersion and interactivity. Attendees will get an inside look at the innovations that have shaped VR gaming so far and the next generation of hardware and software that will push the boundaries of player experiences. From haptic feedback to full-body tracking, Luckey will also explore how VR is setting the stage for entirely new genres of gameplay, revolutionizing how we interact with virtual worlds. Don't miss this opportunity to see the future of gaming through the eyes of a VR pioneer.",
socials: {
twitter: "https://x.com/PalmerLuckey",
website: "https://www.palmerluckey.com/",
youtube: "https://www.youtube.com/@PalmerLuckey"
},
image: "./images/future-vr.jpeg"
}
},
{

id: "9",
stage: "Main Showcase Stage",
from: 1755867600000,
to: 1755871200000,
event: {
name: "Assassin's Creed Mirage",
description: "Ubisoft invites you to step into the richly detailed world of Assassin's Creed Mirage, the newest chapter in the iconic franchise. In this presentation, the development team will showcase how Mirage takes the series back to its roots with a focus on stealth, parkour, and immersive storytelling. Set in the bustling streets of 9th-century Baghdad, players will get a sneak peek into the historically rich environment, new characters, and intricate missions that harken back to the early Assassin's Creed games. The session will cover the redefined combat and exploration systems, along with fresh gameplay mechanics that will keep players engaged in the city’s vibrant open world. Join Ubisoft as they discuss their vision for the future of Assassin's Creed while honoring its past.",
socials: {
instagram: "https://www.instagram.com/assassins_uk/",
twitter: "https://x.com/assassinscreed",
website: "https://www.ubisoft.com/en-gb/game/assassins-creed/mirage",
youtube: "https://www.youtube.com/watch?v=x55lAlFtXmw"
},image: "./images/mirage.jpg"
}
},
{

id: "10",
stage: "Visionary Stage",
from: 1755853200000,
to: 1755858600000,
event: {
name: "Inclusion in Gaming",
description: "Join Anita Sarkeesian, renowned feminist media critic and founder of Feminist Frequency, as she leads an important discussion on diversity and inclusion in the gaming industry. This thought-provoking session will explore the critical role of representation and inclusivity in game design, development, and storytelling. Sarkeesian will address the challenges and opportunities faced by the industry in creating more inclusive content and environments for both players and creators. The talk will include case studies of successful diverse representations, strategies for fostering inclusive game design, and the impact of these practices on player communities. Attendees will gain valuable insights into how the industry can evolve to better reflect and engage a global audience.",
socials: {
instagram: "https://www.instagram.com/anitasarkeesian/",
twitter: "https://x.com/anitasarkeesian",
website: "https://anitasarkeesian.com/"
},
image: "./images/inclusion.jpg"
}
},
{

id: "11",
stage: "Main Showcase Stage",
from: 1755937800000,
to: 1755943200000,
event: {
name: "Horizon Forbidden West",
description: "Dive deeper into the post-apocalyptic world of Horizon Forbidden West with Guerrilla Games as they reveal the latest developments and future plans for their acclaimed action RPG. In this exclusive presentation, fans will be treated to a preview of upcoming expansions, new environments, and expanded lore that will enrich the game's already expansive universe. Discover how Guerrilla Games is enhancing the gameplay experience with innovative features, upgraded graphics, and more intricate storylines. The session will also cover how player feedback has influenced the latest updates and what lies ahead for the protagonist, Aloy. Whether you're a seasoned explorer or new to the world of Horizon, this event promises to provide exciting insights and updates.",
socials: {
instagram: "https://www.instagram.com/horizonforbiddenwest_official/",
twitter: "https://x.com/HorizonFWgame",
website: "https://www.guerrilla-games.com/games",
youtube: "https://www.youtube.com/watch?v=Lq594XmpPBg"
},
image: "./images/horizon.jpg"
}
}
];

