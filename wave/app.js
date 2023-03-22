import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    //캔버스 생성
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    //리사이즈 이벤트
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    //requestAnimationFrame() 애니메이션 시작
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    //캔버스 사이즈 더블로 설정하여 레티나 디스플레이에서도 잘 보이도록 만들어 줌
    this.canvas.width = this.stageWidth * 2
    this.canvas.height = this.stageHeight * 2
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); //캔버스 클리어

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
}