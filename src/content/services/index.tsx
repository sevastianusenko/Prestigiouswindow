import type { ComponentType } from "react";
import WindowsReplacementAluminum from "./windows-replacement/aluminum";
import WindowsReplacementBayAndBow from "./windows-replacement/bay-and-bow";
import WindowsReplacementCasement from "./windows-replacement/casement";
import WindowsReplacementDoubleHung from "./windows-replacement/double-hung";
import WindowsReplacementEgress from "./windows-replacement/egress";
import WindowsReplacementFiberglass from "./windows-replacement/fiberglass";
import WindowsReplacementVinyl from "./windows-replacement/vinyl";
import WindowsReplacementWoodClad from "./windows-replacement/wood-clad";
import WindowsRepairCrackedGlass from "./windows-repair/cracked-glass";
import WindowsRepairFoggedGlass from "./windows-repair/fogged-glass";
import WindowsRepairGasFill from "./windows-repair/gas-fill";
import WindowsRepairRollersAndTracks from "./windows-repair/rollers-and-tracks";
import WindowsRepairSashBalance from "./windows-repair/sash-balance";
import WindowsRepairScreens from "./windows-repair/screens";
import WindowsRepairStormWindows from "./windows-repair/storm-windows";
import WindowsRepairWeatherstripping from "./windows-repair/weatherstripping";
import DoorsReplacementEntryDoors from "./doors-replacement/entry-doors";
import DoorsReplacementFiberglassDoors from "./doors-replacement/fiberglass-doors";
import DoorsReplacementFrenchDoors from "./doors-replacement/french-doors";
import DoorsReplacementPatioDoors from "./doors-replacement/patio-doors";
import DoorsReplacementSteelDoors from "./doors-replacement/steel-doors";
import DoorsReplacementStormDoors from "./doors-replacement/storm-doors";
import DoorsReplacementVinylSlidingDoors from "./doors-replacement/vinyl-sliding-doors";
import DoorsReplacementWoodDoors from "./doors-replacement/wood-doors";
import DoorsRepairDoorGlass from "./doors-repair/door-glass";
import DoorsRepairDoorWeatherstripping from "./doors-repair/door-weatherstripping";
import DoorsRepairFrenchDoorAlignment from "./doors-repair/french-door-alignment";
import DoorsRepairJambRot from "./doors-repair/jamb-rot";
import DoorsRepairLockAlignment from "./doors-repair/lock-alignment";
import DoorsRepairSlidingDoorRollers from "./doors-repair/sliding-door-rollers";
import DoorsRepairStickingDoors from "./doors-repair/sticking-doors";
import DoorsRepairStormDoorHardware from "./doors-repair/storm-door-hardware";

// Keyed by "<parent>/<slug>", e.g. "windows/replacement/double-hung".
// Every entry in src/lib/services.ts must have a key here.
export const serviceContentMap: Record<string, ComponentType> = {
  "windows/replacement/aluminum": WindowsReplacementAluminum,
  "windows/replacement/bay-and-bow": WindowsReplacementBayAndBow,
  "windows/replacement/casement": WindowsReplacementCasement,
  "windows/replacement/double-hung": WindowsReplacementDoubleHung,
  "windows/replacement/egress": WindowsReplacementEgress,
  "windows/replacement/fiberglass": WindowsReplacementFiberglass,
  "windows/replacement/vinyl": WindowsReplacementVinyl,
  "windows/replacement/wood-clad": WindowsReplacementWoodClad,
  "windows/repair/cracked-glass": WindowsRepairCrackedGlass,
  "windows/repair/fogged-glass": WindowsRepairFoggedGlass,
  "windows/repair/gas-fill": WindowsRepairGasFill,
  "windows/repair/rollers-and-tracks": WindowsRepairRollersAndTracks,
  "windows/repair/sash-balance": WindowsRepairSashBalance,
  "windows/repair/screens": WindowsRepairScreens,
  "windows/repair/storm-windows": WindowsRepairStormWindows,
  "windows/repair/weatherstripping": WindowsRepairWeatherstripping,
  "doors/replacement/entry-doors": DoorsReplacementEntryDoors,
  "doors/replacement/fiberglass-doors": DoorsReplacementFiberglassDoors,
  "doors/replacement/french-doors": DoorsReplacementFrenchDoors,
  "doors/replacement/patio-doors": DoorsReplacementPatioDoors,
  "doors/replacement/steel-doors": DoorsReplacementSteelDoors,
  "doors/replacement/storm-doors": DoorsReplacementStormDoors,
  "doors/replacement/vinyl-sliding-doors": DoorsReplacementVinylSlidingDoors,
  "doors/replacement/wood-doors": DoorsReplacementWoodDoors,
  "doors/repair/door-glass": DoorsRepairDoorGlass,
  "doors/repair/door-weatherstripping": DoorsRepairDoorWeatherstripping,
  "doors/repair/french-door-alignment": DoorsRepairFrenchDoorAlignment,
  "doors/repair/jamb-rot": DoorsRepairJambRot,
  "doors/repair/lock-alignment": DoorsRepairLockAlignment,
  "doors/repair/sliding-door-rollers": DoorsRepairSlidingDoorRollers,
  "doors/repair/sticking-doors": DoorsRepairStickingDoors,
  "doors/repair/storm-door-hardware": DoorsRepairStormDoorHardware,
};
