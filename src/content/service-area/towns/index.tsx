import type { ComponentType } from "react";
import EastEarl from "./east-earl";
import BlueBall from "./blue-ball";
import NewHolland from "./new-holland";
import TerreHill from "./terre-hill";
import Goodville from "./goodville";
import Bowmansville from "./bowmansville";
import Morgantown from "./morgantown";
import NewMorgan from "./new-morgan";
import Geigertown from "./geigertown";
import Birdsboro from "./birdsboro";
import Douglassville from "./douglassville";
import HoneyBrook from "./honey-brook";
import Elverson from "./elverson";
import Parkesburg from "./parkesburg";
import Atglen from "./atglen";
import Coatesville from "./coatesville";
import Lebanon from "./lebanon";
import Annville from "./annville";
import Myerstown from "./myerstown";
import Cornwall from "./cornwall";
import Jonestown from "./jonestown";
import Harrisburg from "./harrisburg";
import Hershey from "./hershey";
import Hummelstown from "./hummelstown";
import Middletown from "./middletown";
import Steelton from "./steelton";
import York from "./york";
import Wrightsville from "./wrightsville";
import Hallam from "./hallam";
import RedLion from "./red-lion";
import Windsor from "./windsor";

// Every slug in src/lib/towns.ts must have an entry here.
export const townContentMap: Record<string, ComponentType> = {
  "east-earl": EastEarl,
  "blue-ball": BlueBall,
  "new-holland": NewHolland,
  "terre-hill": TerreHill,
  goodville: Goodville,
  bowmansville: Bowmansville,
  morgantown: Morgantown,
  "new-morgan": NewMorgan,
  geigertown: Geigertown,
  birdsboro: Birdsboro,
  douglassville: Douglassville,
  "honey-brook": HoneyBrook,
  elverson: Elverson,
  parkesburg: Parkesburg,
  atglen: Atglen,
  coatesville: Coatesville,
  lebanon: Lebanon,
  annville: Annville,
  myerstown: Myerstown,
  cornwall: Cornwall,
  jonestown: Jonestown,
};
