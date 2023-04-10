import { Collapse, Stack, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/PersonOutline";
import ncuhomeSvg from "../assets/ncuhome.svg";

export default function Recruit() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Stack
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        m: 2,
        zIndex: 100000000,
      }}
    >
      <Stack
        sx={{
          background: "rgba(255, 255, 255, 0.75)",
          boxShadow: `
            0px 30px 30px rgba(0, 0, 0, 0.15)
          `,
          borderRadius: 2,
          backdropFilter: "blur(32px) saturate(150%)",
          p: 2,
          maxHeight: "80vh",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => setShowDetails(!showDetails)}
          spacing={1}
        >
          <PersonIcon
            sx={{
              mr: 1,
            }}
          />

          <Stack
            sx={{
              flex: 1,
            }}
          >
            <Typography variant="h6">招聘公告</Typography>
            <Collapse in={!showDetails}>
              <Typography variant="body2">
                加入我们，一起打造多维交互的校园宇宙！
              </Typography>
            </Collapse>
          </Stack>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: 32,
              transform: !showDetails ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          />
        </Stack>

        <Collapse
          in={showDetails}
          sx={{
            overflowY: "auto",
          }}
        >
          <Stack
            spacing={1}
            sx={{
              mt: 1,
            }}
          >
            <Typography>
              我们正在开发一个名为<b>“校园宇宙”</b>
              的项目，旨在为学生们打造一个全新的虚拟交互环境，通过 3D
              的数字化校园地图，实现现实与虚拟、人与环境、人与人之间的多维度交互。
            </Typography>
            <Typography>
              我们正在寻找有才华的 <b>3D 建模和 Unity 开发人才</b>
              加入我们的团队，共同创造这个充满创意和活力的项目。如果你掌握
              Blender 等 3D 建模软件或者 Unity
              的相关技能，并且热爱数字化艺术和虚拟世界的开发，你就是我们所需要的人！
            </Typography>
            <Typography>
              作为我们团队的一员，你将参与设计和开发这个富有创意和交互性的数字校园宇宙，为同学们打造更便利、更丰富和更有趣的校园环境。如果你有相关技能和经验，并且对该项目感兴趣，请不要犹豫，立即加入我们的团队！
            </Typography>
            <Typography>
              加入方式：请投递你的简历至 <b>hr@ncuhome.club</b>{" "}
              邮箱，简历命名格式为：年级+姓名+职位
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <img src={ncuhomeSvg} alt="ncuhome" width={100} />
            </Stack>
          </Stack>
        </Collapse>
      </Stack>
    </Stack>
  );
}
