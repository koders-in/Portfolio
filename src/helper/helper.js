import kt1 from ".././assets/kyro-tools/kt1.png";
import kt2 from ".././assets/kyro-tools/kt2.png";
import kt3 from ".././assets/kyro-tools/kt3.png";
import kt5 from ".././assets/kyro-tools/kt5.png";
import kt6 from ".././assets/kyro-tools/kt6.png";

import jt1 from ".././assets/jupiter-toolbox/jt1.png";
import jt2 from ".././assets/jupiter-toolbox/jt2.png";
import jt3 from ".././assets/jupiter-toolbox/jt3.png";
import jt4 from ".././assets/jupiter-toolbox/jt4.png";
import jt5 from ".././assets/jupiter-toolbox/jt5.png";
import jt6 from ".././assets/jupiter-toolbox/jt6.png";

import divine1 from ".././assets/divine/divine1.png";
import divine2 from ".././assets/divine/divine2.png";
import divine3 from ".././assets/divine/divine3.png";
import divine4 from ".././assets/divine/divine4.png";
import divine5 from ".././assets/divine/divine5.png";
import divine6 from ".././assets/divine/divine6.png";

import genesis1 from ".././assets/genesis/genesis1.webp";
import genesis2 from ".././assets/genesis/genesis2.webp";
import genesis3 from ".././assets/genesis/genesis3.webp";
import genesis4 from ".././assets/genesis/genesis4.webp";
import genesis5 from ".././assets/genesis/genesis5.webp";
import genesis6 from ".././assets/genesis/genesis6.webp";

import spacebot1 from ".././assets/spacebot/spacebot1.webp";
import spacebot2 from ".././assets/spacebot/spacebot2.webp";
import spacebot3 from ".././assets/spacebot/spacebot3.webp";
import spacebot4 from ".././assets/spacebot/spacebot4.webp";

import pluto1 from ".././assets/pluto/pluto1.png";
import pluto2 from ".././assets/pluto/pluto2.png";
import pluto3 from ".././assets/pluto/pluto3.png";
import pluto4 from ".././assets/pluto/pluto4.png";

import hawa1 from ".././assets/hawa/hawa1.jpg";
import hawa2 from ".././assets/hawa/hawa2.jpg";
import hawa3 from ".././assets/hawa/hawa3.jpg";
import hawa4 from ".././assets/hawa/hawa4.jpg";
import hawa5 from ".././assets/hawa/hawa5.jpg";
import hawa6 from ".././assets/hawa/hawa6.jpg";

import uc1 from ".././assets/uc-toolbot/uc1.jpg";
import uc2 from ".././assets/uc-toolbot/uc2.jpg";
import uc3 from ".././assets/uc-toolbot/uc3.jpg";
import uc4 from ".././assets/uc-toolbot/uc4.jpg";
import uc5 from ".././assets/uc-toolbot/uc5.jpg";
import uc6 from ".././assets/uc-toolbot/uc6.jpg";
import uc7 from ".././assets/uc-toolbot/uc7.jpg";
import uc8 from ".././assets/uc-toolbot/uc8.jpg";

import squared1 from ".././assets/squared/squared1.jpg";
import squared2 from ".././assets/squared/squared2.jpg";
import squared3 from ".././assets/squared/squared3.jpg";

import arc1 from ".././assets/arc/arc1.png";
import arc2 from ".././assets/arc/arc2.png";
import arc3 from ".././assets/arc/arc3.png";
import arc4 from ".././assets/arc/arc4.png";

import aio1 from ".././assets/aio-world/aio1.jpg";
import aio2 from ".././assets/aio-world/aio2.jpg";
import aio3 from ".././assets/aio-world/aio3.jpg";
import aio4 from ".././assets/aio-world/aio4.jpg";
import aio5 from ".././assets/aio-world/aio5.jpg";

import argon1 from ".././assets/argon/argon1.png";
import argon2 from ".././assets/argon/argon2.png";
import argon3 from ".././assets/argon/argon3.png";
import argon4 from ".././assets/argon/argon4.png";

import epon1 from ".././assets/epon/epon1.png";
import epon2 from ".././assets/epon/epon2.png";
import epon3 from ".././assets/epon/epon3.png";
import epon4 from ".././assets/epon/epon4.png";

import instaride1 from ".././assets/instaride/instaride1.png";
import instaride2 from ".././assets/instaride/instaride2.png";
import instaride3 from ".././assets/instaride/instaride3.png";
import instaride4 from ".././assets/instaride/instaride4.png";

import wrencho1 from ".././assets/wrencho/wrencho1.webp";
import wrencho2 from ".././assets/wrencho/wrencho2.webp";
import wrencho3 from ".././assets/wrencho/wrencho3.webp";
import wrencho4 from ".././assets/wrencho/wrencho4.webp";

import metamint1 from ".././assets/metamint/metamint1.webp";
import metamint2 from ".././assets/metamint/metamint2.webp";
import metamint3 from ".././assets/metamint/metamint3.webp";
import metamint4 from ".././assets/metamint/metamint4.webp";

const resolveElementPosition = (imagesArray) => {
  imagesArray.forEach((element, i) => {
    element.position = i % 2 ? "right" : "left";
  });
  return imagesArray;
};

const desktopAppImagesData = [
  {
    imgSrc: [kt1, kt2, kt3, kt5, kt6],
    hidden: false,
    delay: "200",
    classTitle: "kyro-tools",
    title: "Kyro Tools",
    techStack: ["ReactJS", "ElectronJS", "Docker", "Python", "NodeJS"],
  },
  {
    imgSrc: [arc1, arc2, arc3, arc4],
    hidden: false,
    delay: "300",
    classTitle: "arc",
    title: "Arc AIO",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [epon1, epon2, epon3, epon4],
    hidden: false,
    delay: "200",
    classTitle: "epon",
    title: "Epon NFT",
    techStack: ["ReactJS", "ElectronJS", "Python", "Docker"],
  },
  {
    imgSrc: [metamint1, metamint2, metamint3, metamint4],
    hidden: false,
    delay: "300",
    classTitle: "metamint",
    title: "Metamint",
    techStack: ["ReactJS", "ElectronJS", "Python"],
  },
  {
    imgSrc: [jt1, jt2, jt3, jt4, jt5, jt6],
    hidden: false,
    delay: "300",
    classTitle: "jupiter-toolbot",
    title: "Jupiter Toolbot",
    techStack: ["ReactJS", "ElectronJS", "NodeJS"],
  },
  {
    imgSrc: [divine3, divine2, divine1, divine4, divine5, divine6],
    hidden: false,
    delay: "300",
    classTitle: "divine",
    title: "Divine",
    techStack: ["ReactJS", "ElectronJS", "NodeJs", "Socket.io"],
  },
  {
    imgSrc: [hawa1, hawa2, hawa3, hawa4, hawa5, hawa6],
    hidden: false,
    delay: "200",
    classTitle: "hawa",
    title: "Hawa",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [spacebot4, spacebot1, spacebot2, spacebot3],
    hidden: false,
    delay: "300",
    classTitle: "spacebot",
    title: "Spacebot",
    techStack: ["ReactJS"],
  },

  {
    imgSrc: [genesis1, genesis2, genesis3, genesis4, genesis5, genesis6],
    hidden: false,
    delay: "200",
    classTitle: "genesis",
    title: "Genesis",
    techStack: ["Typescript", "ElectronJS"],
  },
  {
    imgSrc: [pluto3, pluto1, pluto2, pluto4],
    hidden: false,
    delay: "200",
    classTitle: "pluto",
    title: "Pluto",
    techStack: ["ReactJS", "ElectronJS"],
  },
];
const desktopAppImagesData2 = [
  {
    imgSrc: [uc1, uc2, uc3, uc4, uc5, uc6, uc7, uc8],
    hidden: false,
    delay: "300",
    classTitle: "uc-toolbot",
    title: "UC Toolbot",
    techStack: ["ReactJS", "ElectronJS", "NodeJS"],
  },
  {
    imgSrc: [squared3, squared1, squared2],
    hidden: false,
    delay: "200",
    classTitle: "squared",
    title: "Squared",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [aio1, aio2, aio3, aio4, aio5],
    hidden: false,
    delay: "200",
    classTitle: "aio-world",
    title: "AIO World",
    techStack: ["ReactJS"],
  },
  {
    imgSrc: [argon1, argon2, argon3, argon4],
    hidden: false,
    delay: "300",
    classTitle: "argons",
    title: "Argon",
    techStack: ["ReactJS", "ElectronJS"],
  },
];

const mobileAppImagesData = [
  {
    imgSrc: [instaride1, instaride2, instaride3, instaride4],
    hidden: false,
    delay: "300",
    classTitle: "instaride",
    title: "Instaride",
    techStack: [
      "React Native",
      "Python",
      "PostgreSQL",
      "Docker",
      "Graphql",
      "Rust",
    ],
    isMobile: true,
  },
  {
    imgSrc: [wrencho1, wrencho2, wrencho3, wrencho4],
    hidden: false,
    delay: "300",
    classTitle: "wrencho",
    title: "Wrencho",
    techStack: ["Flutter", "Node", "SOLR", "PostgreSQL", "AWS S3"],
    isMobile: true,
  },
];
const mobileAppImagesData2 = [];

resolveElementPosition(desktopAppImagesData);
resolveElementPosition(desktopAppImagesData2);
resolveElementPosition(mobileAppImagesData);
resolveElementPosition(mobileAppImagesData2);

export {
  desktopAppImagesData,
  desktopAppImagesData2,
  mobileAppImagesData,
  mobileAppImagesData2,
};
