// 각각의 간격을 가진 좌표를 하나씩 만들어서 그 좌표의 Y값을 아래위로 이동시키고 각각의 좌료를 하나의 선으로 연결
export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = index;
    this.max = Math.random() * 100 + 150; //얼만큼 움직일 것인가(max값)
  }

  update() { //업데이트함수를 콜 하면 아래위로 움직이게 된다
    this.cur += this.speed; //현재값을 스피드 만큼 증가
    this.y = this.fixedY + (Math.sin(this.cur) * this.max); //sine 함수를 사용하여 아래위로 움직이도록
  }
}