import kt1 from "./assests/kyro-tools/kt1.png";
import kt2 from "./assests/kyro-tools/kt2.png";
import kt3 from "./assests/kyro-tools/kt3.png";
import kt5 from "./assests/kyro-tools/kt5.png";
import kt6 from "./assests/kyro-tools/kt6.png";
import jt1 from "./assests/jupiter-toolbox/jt1.png";
import jt2 from "./assests/jupiter-toolbox/jt2.png";
import jt3 from "./assests/jupiter-toolbox/jt3.png";
import jt4 from "./assests/jupiter-toolbox/jt4.png";
import jt5 from "./assests/jupiter-toolbox/jt5.png";
import jt6 from "./assests/jupiter-toolbox/jt6.png";
import divine1 from "./assests/divine/divine1.png";
import divine2 from "./assests/divine/divine2.png";
import divine3 from "./assests/divine/divine3.png";
import divine4 from "./assests/divine/divine4.png";
import divine5 from "./assests/divine/divine5.png";
import divine6 from "./assests/divine/divine6.png";
import genesis1 from "./assests/genesis/genesis1.png";
import genesis2 from "./assests/genesis/genesis2.png";
import genesis3 from "./assests/genesis/genesis3.png";
import genesis4 from "./assests/genesis/genesis4.png";
import genesis5 from "./assests/genesis/genesis5.png";
import genesis6 from "./assests/genesis/genesis6.png";
import spacebot1 from "./assests/spacebot/spacebot1.png";
import spacebot2 from "./assests/spacebot/spacebot2.png";
import spacebot3 from "./assests/spacebot/spacebot3.png";
import spacebot4 from "./assests/spacebot/spacebot4.png";
import pluto1 from "./assests/pluto/pluto1.png";
import pluto2 from "./assests/pluto/pluto2.png";
import pluto3 from "./assests/pluto/pluto3.png";
import pluto4 from "./assests/pluto/pluto4.png";
import hawa1 from "./assests/hawa/hawa1.jpg";
import hawa2 from "./assests/hawa/hawa2.jpg";
import hawa3 from "./assests/hawa/hawa3.jpg";
import hawa4 from "./assests/hawa/hawa4.jpg";
import hawa5 from "./assests/hawa/hawa5.jpg";
import hawa6 from "./assests/hawa/hawa6.jpg";
import uc1 from "./assests/uc-toolbot/uc1.jpg";
import uc2 from "./assests/uc-toolbot/uc2.jpg";
import uc3 from "./assests/uc-toolbot/uc3.jpg";
import uc4 from "./assests/uc-toolbot/uc4.jpg";
import uc5 from "./assests/uc-toolbot/uc5.jpg";
import uc6 from "./assests/uc-toolbot/uc6.jpg";
import uc7 from "./assests/uc-toolbot/uc7.jpg";
import uc8 from "./assests/uc-toolbot/uc8.jpg";
import squared1 from "./assests/squared/squared1.jpg";
import squared2 from "./assests/squared/squared2.jpg";
import squared3 from "./assests/squared/squared3.jpg";
import arc1 from "./assests/arc/arc1.png";
import arc2 from "./assests/arc/arc2.png";
import arc3 from "./assests/arc/arc3.png";
import arc4 from "./assests/arc/arc4.png";
import aio1 from "./assests/aio-world/aio1.jpg";
import aio2 from "./assests/aio-world/aio2.jpg";
import aio3 from "./assests/aio-world/aio3.jpg";
import aio4 from "./assests/aio-world/aio4.jpg";
import aio5 from "./assests/aio-world/aio5.jpg";
import argon1 from "./assests/argon/argon1.png";
import argon2 from "./assests/argon/argon2.png";
import argon3 from "./assests/argon/argon3.png";
import argon4 from "./assests/argon/argon4.png";
import epon1 from "./assests/epon/epon1.png";
import epon2 from "./assests/epon/epon2.png";
import epon3 from "./assests/epon/epon3.png";
import epon4 from "./assests/epon/epon4.png";
import popbot1 from "./assests/popbot/popbot1.png";
import popbot2 from "./assests/popbot/popbot2.png";

export const arr = [
  {
    imgSrc: [kt1, kt2, kt3, kt5, kt6],
    hidden: false,
    delay: "200",
    classTitle: "kyro-tools",
    position: "left",
    title: "Kyro Tools",
    techStack: ["ReactJS", "ElectronJS", "Docker", "Python", "NodeJS"],
    // techStack: "ReactJS, ElectronJS, Docker, Python, NodeJS"
  },
  {
    imgSrc: [divine3, divine2, divine1, divine4, divine5, divine6],
    hidden: false,
    delay: "300",
    classTitle: "divine",
    position: "right",
    title: "Divine",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [hawa1, hawa2, hawa3, hawa4, hawa5, hawa6],
    hidden: false,
    delay: "200",
    classTitle: "hawa",
    position: "left",
    title: "Hawa",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [spacebot4, spacebot1, spacebot2, spacebot3],
    hidden: false,
    delay: "300",
    classTitle: "spacebot",
    position: "right",
    title: "Spacebot",
    techStack: ["ReactJS"],
  },

  {
    imgSrc: [genesis1, genesis2, genesis3, genesis4, genesis5, genesis6],
    hidden: false,
    delay: "200",
    classTitle: "genesis",
    position: "left",
    title: "Genesis",
    techStack: ["Typescript", "ElectronJS"],
  },
  {
    imgSrc: [jt1, jt2, jt3, jt4, jt5, jt6],
    hidden: false,
    delay: "300",
    classTitle: "jupiter-toolbot",
    position: "right",
    title: "Jupiter Toolbot",
    techStack: ["ReactJS", "ElectronJS", "NodeJS"],
  },
  {
    imgSrc: [pluto3, pluto1, pluto2, pluto4],
    hidden: true,
    delay: "200",
    classTitle: "pluto",
    position: "left",
    title: "Pluto",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [uc1, uc2, uc3, uc4, uc5, uc6, uc7, uc8],
    hidden: true,
    delay: "300",
    classTitle: "uc-toolbot",
    position: "right",
    title: "UC Toolbot",
    techStack: ["ReactJS", "ElectronJS", "NodeJS"],
  },
  {
    imgSrc: [squared3, squared1, squared2],
    hidden: true,
    delay: "200",
    classTitle: "squared",
    position: "left",
    title: "Squared",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [arc1, arc2, arc3, arc4],
    hidden: true,
    delay: "300",
    classTitle: "arc",
    position: "right",
    title: "Arc AIO",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [aio1, aio2, aio3, aio4, aio5],
    hidden: true,
    delay: "200",
    classTitle: "aio-world",
    position: "left",
    title: "AIO World",
    techStack: ["ReactJS"],
  },
  {
    imgSrc: [argon1, argon2, argon3, argon4],
    hidden: true,
    delay: "300",
    classTitle: "argon",
    position: "right",
    title: "Argon",
    techStack: ["ReactJS", "ElectronJS"],
  },
  {
    imgSrc: [epon1, epon2, epon3, epon4],
    hidden: true,
    delay: "200",
    classTitle: "epon",
    position: "left",
    title: "Epon NFT",
    techStack: ["ReactJS", "ElectronJS", "Python", "Docker"],
  },
  {
    imgSrc: [popbot1, popbot2],
    hidden: true,
    delay: "300",
    classTitle: "popbot",
    position: "right",
    title: "Popbot",
    techStack: ["HTML", "CSS"],
  },
];
