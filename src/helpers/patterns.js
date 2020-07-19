const GLIDER = [
  [false, true, false],
  [false, false, true],
  [true, true, true],
];

const LWSS = [
  [true, false, false, true, false ],
  [false, false, false, false, true],
  [true, false, false, false, true],
  [false, true, true, true, true],
];

const MWSS = [
  [false, false, true , false, false, false],
  [true , false, false, false, true , false],
  [false, false, false, false, false, true ],
  [true , false, false, false, false, true ],
  [false, true , true , true , true , true ],
];

const HWSS = [
  [false, false, true , true , false, false, false],
  [true , false, false, false, false, true , false],
  [false, false, false, false, false, false, true ],
  [true , false, false, false, false, false, true ],
  [false, true , true , true , true , true , true ],
];

const COPPERHEAD = [
  [false, true, true, false, false, true, true, false],
  [false, false, false, true, true, false, false, false],
  [false, false, false, true, true, false, false, false],
  [true, false, true, false, false, true, false, true],
  [true, false, false, false, false, false, false, true],
  [false, false, false, false, false, false, false, false],
  [true, false, false, false, false, false, false, true],
  [false, true, true, false, false, true, true, false],
  [false, false, true, true, true, true, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, true, true, false, false, false],
  [false, false, false, true, true, false, false, false],
];

const PULSAR = [
  [false, false, true, true, true, false, false, false, true, true, true, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false],
  [true, false, false, false, false, true, false, true, false, false, false, false, true],
  [true, false, false, false, false, true, false, true, false, false, false, false, true],
  [true, false, false, false, false, true, false, true, false, false, false, false, true],
  [false, false, true, true, true, false, false, false, true, true, true, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, true, true, true, false, false, false, true, true, true, false, false],
  [true, false, false, false, false, true, false, true, false, false, false, false, true],
  [true, false, false, false, false, true, false, true, false, false, false, false, true],
  [true, false, false, false, false, true, false, true, false, false, false, false, true],
  [false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, true, true, true, false, false, false, true, true, true, false, false],
];

const PENTA_DECATHLON = [
  [false, true, false],
  [false, true, false],
  [true, false, true],
  [false, true, false],
  [false, true, false],
  [false, true, false],
  [false, true, false],
  [true, false, true],
  [false, true, false],
  [false, true, false],
];

const GOSPERS_GLIDER_GUN = [
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true],
  [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true],
  [true, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [true, true, false, false, false, false, false, false, false, false, true, false, false, false, true, false, true, true, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

export default {
  GLIDER,
  GOSPERS_GLIDER_GUN,
  PENTA_DECATHLON,
  PULSAR,
  COPPERHEAD,
  LWSS,
  MWSS,
  HWSS,
}
