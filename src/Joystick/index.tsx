import { extend, useFrame } from "@react-three/fiber";
import nipplejs from "nipplejs";

export default function index({ target }: any) {
  let setup = { forward: 0, turn: 0 };
  
  // 轮盘控制器
  const options: nipplejs.JoystickManagerOptions = {
    zone:document.getElementById('joystickContainer')!,
    mode: "static",
    position: { left: "50%", bottom: "10%" },
  };
  const manager = nipplejs.create(options);
  manager.on("move", (e, data) => {
    setup.forward = -data.vector.y;
    setup.turn = -data.vector.x;
  });
  manager.on("end", () => (setup = { forward: 0, turn: 0 }));


  const updateDrive = (forward = setup.forward, turn = setup.turn) => {
    let maxSteerVal = 0.02;
    let maxForce = 0.01;
    let force = maxForce * forward;
    let steer = maxSteerVal * turn;
    if (forward !== 0) {
      target.translateZ(force);
      // clip2 && clip2.play();
      // clip1 && clip1.stop();
    } else {
      // clip2 && clip2.stop();
      // clip1 && clip1.play();
    }
    target.rotateY(steer);

    // 显示成功结果
    // if (
    //   target.position.x > 90 &&
    //   target.position.x < 96 &&
    //   target.position.y > -2.5 &&
    //   target.position.y < 2.5 &&
    //   target.position.z > 20 &&
    //   target.position.z < 28
    // ) {
    // !this.state.freeDiscover && this.setState({
    //   resultText: '成功',
    //   showResult: true
    // });
    // }
  };
  useFrame(() => {
    updateDrive();
    // console.log(target.position)
  });
  return <></>;
}
