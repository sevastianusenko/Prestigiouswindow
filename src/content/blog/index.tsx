import type { ComponentType } from "react";
import HouseWindowRepairGuide from "./house-window-repair-guide";
import FoggyWindowSealRepair from "./foggy-window-seal-repair";
import WindowWontStayUpBalanceRepair from "./window-wont-stay-up-balance-repair";
import CrackedWindowGlassRepairCost from "./cracked-window-glass-repair-cost";
import WindowCostGuide from "./window-cost-guide";
import SinglePaneWindowsRepairOrReplace from "./single-pane-windows-repair-or-replace";
import ReplacingWindowsInAnOldHouse from "./replacing-windows-in-an-old-house";
import BasementWindowInstallationRepair from "./basement-window-installation-repair";
import WindowScreensCasingsSmallJobs from "./window-screens-casings-small-jobs";
import PatioSlidingDoorRepair from "./patio-sliding-door-repair";
import GasFilledWindowPanesExplained from "./gas-filled-window-panes-explained";
import AtticWindowReplacement from "./attic-window-replacement";

export const contentMap: Record<string, ComponentType> = {
  "house-window-repair-guide": HouseWindowRepairGuide,
  "foggy-window-seal-repair": FoggyWindowSealRepair,
  "window-wont-stay-up-balance-repair": WindowWontStayUpBalanceRepair,
  "cracked-window-glass-repair-cost": CrackedWindowGlassRepairCost,
  "window-cost-guide": WindowCostGuide,
  "single-pane-windows-repair-or-replace": SinglePaneWindowsRepairOrReplace,
  "replacing-windows-in-an-old-house": ReplacingWindowsInAnOldHouse,
  "basement-window-installation-repair": BasementWindowInstallationRepair,
  "window-screens-casings-small-jobs": WindowScreensCasingsSmallJobs,
  "patio-sliding-door-repair": PatioSlidingDoorRepair,
  "gas-filled-window-panes-explained": GasFilledWindowPanesExplained,
  "attic-window-replacement": AtticWindowReplacement,
};
