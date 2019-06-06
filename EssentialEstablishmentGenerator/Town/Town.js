import { set } from '../../src/engine/story'
import { createTown } from './js/createTown'

export function Town () {
  set('$town', createTown())
}

/* <<set $lord to setup.createNPC($town, {background: "noble"})>> */
/* <<set $merchantGuild to setup.createFaction({type: "merchants"})>> */

/* <<set $town.scenery to either([
  "Children play in the street, calling after one another.",
  "An old woman waves from her chair on the porch at you.",
  "A young girl waves at you, before being shooed into her home by a doting mother.",
  "The stench of curing leathers fills your nose as you pass the local tannery.",
  "You see a kite flying overhead, and follow the string down to a young boy, clearly enjoying himself."
  ])>> */
