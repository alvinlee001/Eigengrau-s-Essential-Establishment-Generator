import { contentsFetcher } from "../Tools/contentsFetcher"
import { misc } from "./miscData"

export const locations = {
  'a cavern behind a waterfall': (town, biome) => {
    const cavern = misc.cavern.create({ entrance: `somewhat hidden behind a roaring waterfall` })
    const contents = contentsFetcher(town, biome, misc[biome].cave, misc.encounters)
    return `a cavern. ${cavern.readout} <blockquote>The cavern is now home to ${contents}.</blockquote>`
  },
  'a small cave in the bank of a creek': (town, biome) => {
    const cavern = misc.cavern.create({ entrance: `in the bank of a creek` })
    const contents = contentsFetcher(town, biome, misc[biome].cave, misc.encounters)
    return `a small cave. ${cavern.readout} <blockquote>The cave is home to ${contents}.</blockquote>`
  },
  'an entrance to a rocky cave': (town, biome) => {
    const cavern = misc.cavern.create()
    const contents = contentsFetcher(town, biome, misc[biome].cave, misc.encounters)
    return `a rocky cave. ${cavern.readout} <blockquote>The cave is home to ${contents}.</blockquote>`
  },
  'a hole under a large tree': (town, biome) => {
    let contents = misc[biome].hole.seededrandom()
    // this is lazy. Will change hole from an array to an object once I make more creators.
    if (contents === `a spider`) {
      const spider = misc.spider.create()
      contents = `a ${spider.tippyWord}.`
    }
    const tree = misc.tree.create(town, biome)
    // let contents = contentsFetcher(town, biome, misc[biome].hole, misc[biome].hole)
    return `a hole under a large ${tree.tippyWord}. <blockquote>Inside is ${contents}.</blockquote>`
  },
  'a hole under a sheer cliff': (town, biome) => {
    const contents = misc[biome].hole.seededrandom()
    return `a hole under a sheer cliff. <blockquote> Inside is ${contents}.</blockquote>`
  },
  'a hole under a sheer cliff face': (town, biome) => {
    const contents = misc[biome].hole.seededrandom()
    return `a hole under a sheer cliff face. <blockquote> Inside is ${contents}.</blockquote>`
  },
  'a large burrow': (town, biome) => {
    const contents = misc[biome].hole.seededrandom()
    // let contents = contentsFetcher(town, biome, misc[biome].hole, misc[biome].hole)
    return `a large burrow <blockquote>Inside is ${contents}.</blockquote>`
  },
  'a peculiar cottage': (town, biome) => {
    const contents = contentsFetcher(town, biome, misc[biome].cottageLives, misc.encounters)
    const cabin = misc.cabin.create(town, biome, {
      wordNoun: `cottage`
    })
    return `a peculiar ${cabin.tippyWord}. <blockquote>${contents} lives here.</blockquote>`
  },
  "a woodsman's cabin": (town, biome) => {
    const contents = contentsFetcher(town, biome, misc[biome].cabinLives, misc.encounters)
    const cabin = misc.cabin.create(town, biome)
    return `a woodsman's ${cabin.tippyWord}. <blockquote>${misc[biome].cabinLived.seededrandom()} once lived here. Now, ${contents} lives here.</blockquote>`
  },
  'a cozy little cabin': (town, biome) => {
    const contents = contentsFetcher(town, biome, misc[biome].cabinLives, misc.encounters)
    const cabin = misc.cabin.create(town, biome, {
      wordNoun: `cabin`,
      size: `little`
    })
    return `a cozy little ${cabin.tippyWord}. <blockquote>${misc[biome].cabinLived.seededrandom()} once lived here. Now, ${contents} lives here.</blockquote>`
  },
  'an abandoned cabin': (town, biome) => {
    const contents = contentsFetcher(town, biome, misc[biome].cabinLives, misc.encounters)
    const cabin = misc.cabin.create(town, biome)
    return `an abandoned ${cabin.tippyWord}. <blockquote>${misc[biome].cabinLived.seededrandom()} once lived here. Now, ${contents} lives here.</blockquote>`
  },
  'an abandoned campsite': (town, biome) => {
    const contents = contentsFetcher(town, biome, misc[biome].camped, misc.encounters)
    return `an abandoned campsite, which looks to have been occupied previously by ${contents}`
  },
  'a sacred grove': () => `a sacred grove.`,
  'a shrine': (town, biome) => {
    const shrine = misc.religion.shrine.create(town)
    return `a shrine dedicated to ${shrine.god}. The shrine is ${shrine.material} ${shrine.senses}`
  },
  'a grave with an illegible headstone': () => `a grave with an illegible headstone.`,
  'ancient ruins': (town, biome) => {
    const contents = contentsFetcher(town, biome, misc[biome].ruinsLives, misc.encounters)
    return `ancient ruins. <blockquote>The ruins were built by ${misc[biome].ruinsLived.seededrandom()}. Now, ${contents} lives here.</blockquote>`
  },
  'a cavern in a canyon wall': (town, biome) => {
    const cavern = misc.cavern.create({ entrance: `in a canyon wall` })
    const encounter = contentsFetcher(town, biome, misc[biome].encounter, misc.encounters)
    return `a cavern. ${cavern.readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
  },
  'a cave entrance, hidden by a boulder': (town, biome) => {
    const cavern = misc.cavern.create({ entrance: `hidden by a boulder` })
    const encounter = contentsFetcher(town, biome, misc[biome].encounter, misc.encounters)
    return `a cavern. ${cavern.readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
  },
  'a small cave in the crook of a rock wall': (town, biome) => {
    const cavern = misc.cavern.create({ entrance: `in the crook of a rock wall` })
    const contents = contentsFetcher(town, biome, misc[biome].cave, misc.encounters)
    return `a small cave. ${cavern.readout} <blockquote>The cave is home to ${contents}.</blockquote>`
  },
  'a small cave next to a dry river bed': (town, biome) => {
    const cavern = misc.cavern.create()
    const encounter = contentsFetcher(town, biome, misc[biome].encounter, misc.encounters)
    return `a cavern. ${cavern.readout} <blockquote>The cavern is home to ${encounter}.</blockquote>`
  },
  // mining is intentionally using the mountain biome
  'an old mine in a canyon': (town, biome) => `an old mine in a canyon <blockquote>The mine was built by by ${misc.mountain.miners.seededrandom()}, looking for ${misc.mountain.minersGoal.seededrandom()}.</blockquote>`,
  'an active mining camp': (town, biome) => `an active mining camp, manned by ${misc.mountain.miners.seededrandom()}, looking for ${misc.mountain.minersGoal.seededrandom()}`,
  'a hole under a large boulder': (town, biome) => `a hole under a large boulder <blockquote> Inside is ${misc.desert.hole.seededrandom()}</blockquote>`,
  'an abandoned stone house': (town, biome) => {
    const lived = misc[biome].houseLived.seededrandom()
    const encounter = contentsFetcher(town, biome, misc[biome].houseLives, misc.encounters)
    const cabin = misc.cabin.create(town, biome, {
      material: `stone`,
      wordNoun: `house`
    })
    return `an abandoned ${cabin.tippy}<b>stone house</b></span>. <blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
  },
  'a stone house': (town, biome) => {
    const lived = misc[biome].houseLived.seededrandom()
    const encounter = contentsFetcher(town, biome, misc[biome].houseLives, misc.encounters)
    const cabin = misc.cabin.create(town, biome, {
      material: `stone`,
      wordNoun: `house`
    })
    return `a ${cabin.tippy}<b>stone house</b></span> sheltered by a ${[`canyon`, `gorge`, `bluff`].seededrandom()} <blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
  },
  "a merchant caravan's camp": (town, biome) => {
    const caravan = misc.caravan.create(town)
    return `a merchant caravan's camp. ${caravan.readout}`
  },
  'a peculiar tent': (town, biome) => {
    const lived = misc[biome].camped.seededrandom()
    return `an peculiar tent, which looks to have been occupied previously by ${lived}`
  },
  'an old watchtower': (town, biome) => {
    // intentionally uses the mountain biome
    const encounter = contentsFetcher(town, biome, misc.mountain.watchtowerLives, misc.encounters)
    return `an old, weathered watchtower. <blockquote>The watchtower was built by ${misc.mountain.watchtowerBuilt.seededrandom()}. Now, it is controlled by ${encounter} .</blockquote>`
  },
  'an abandoned watchtower': (town, biome) => {
    // intentionally uses the mountain biome
    const encounter = contentsFetcher(town, biome, misc.mountain.watchtowerLives, misc.encounters)
    return `a run down, abandoned watchtower. <blockquote>The watchtower was built by ${misc.mountain.watchtowerBuilt.seededrandom()}. Now, it is inhabited by ${encounter} .</blockquote>`
  },
  'a strategically located watchtower': (town, biome) => {
    // intentionally uses the mountain biome
    const encounter = contentsFetcher(town, biome, misc.mountain.watchtowerLives, misc.encounters)
    return `a strategically located watchtower. <blockquote>The watchtower was built by ${misc.mountain.watchtowerBuilt.seededrandom()}. Now, it is controlled by ${encounter} .</blockquote>`
  },
  'ruins of an ancient city': (town, biome) => {
    const encounter = contentsFetcher(town, biome, misc[biome].ruinsLives, misc.encounters)
    return `ruins of an ancient city. <blockquote>The city was built by ${misc[biome].ruinsLived.seededrandom()} Now, ${encounter} lives here.</blockquote>`
  },
  'a temple ruin': (town, biome) => {
    const encounter = contentsFetcher(town, biome, misc[biome].ruinsLives, misc.encounters)
    return `a temple ruin. <blockquote>The city was built by ${misc[biome].ruinsLived.seededrandom()} Now, ${encounter} lives here.</blockquote>`
  },
  'an isolated monastery': (town, biome) => {
    const lives = misc[biome].religionLives.seededrandom()
    return `an isolated monastery. <blockquote>Living inside lives ${lives}, hiding from the outside world.</blockquote>`
  },
  'a remote temple': (town, biome) => {
    const lives = misc[biome].religionLives.seededrandom()
    return `a remote temple. <blockquote>Far from any civilization, this temple is home to ${lives} who have gone to great measures to hide their existence.</blockquote>`
  },
  'an ancient temple': (town, biome) => {
    const lives = misc[biome].religionLives.seededrandom()
    return `an incredibly ancient temple. <blockquote>This ancient place has housed many things, but it is currently home to ${lives}.</blockquote>`
  },
  'a ruined monastery': (town, biome) => {
    const encounter = contentsFetcher(town, biome, misc[biome].ruinsLives, misc.encounters)
    return `a ruined monastery. <blockquote>These ruins are currently occupied by ${encounter}.</blockquote>`
  },
  'a village of primitive canyon dwellers': (town, biome) => { return `a village of primitive canyon dwellers` },
  "some nomad's camp": (town, biome) => { return `some nomad's camp` },
  'an ancient tomb': (town, biome) => { return `an ancient tomb` },
  'a dark tunnel leading under the mountain': (town, biome) => { return `a dark tunnel leading under the mountain` },
  'a tunnel in a cliff face': (town, biome) => { return `a tunnel in a cliff face` },
  'a tunnel leading into an abandoned mine': (town, biome) => { return `a tunnel leading into an abandoned mine` },
  'an enormous bird’s nest': (town, biome) => { return `the nest of an enormous bird` },
  'a poorly marked grave or tomb': (town, biome) => { return `a crudely marked grave of someone long gone` }
}
