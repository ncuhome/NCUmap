import { useFrame } from "@react-three/fiber";
import JoyStick from "./joyStick.js" ;

export default function index({ target }: any) {
  // 轮盘控制器
  var setup = { forward: 0, turn: 0 };
  new JoyStick({
    onMove: (forward: number, turn: number) => {
      setup.forward = -forward;
      setup.turn = -turn;
    },
  });

  const updateDrive = (forward = setup.forward, turn = setup.turn) => {
    let maxSteerVal = 0.05;
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
