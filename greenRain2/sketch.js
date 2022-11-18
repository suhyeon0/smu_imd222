// 물리 시뮬레이션 및 렌더링을 위한 모듈들.
// 당연하지만 좌변 이름은 마음대로, 우변은 그대로.
let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// 물리 엔진 생성.
// let engine = Engine.create();
let engine;
let boxA = [];
let circleA = [];

let x = 0;
let y = 0;
let matterObjs = [];

function setup() {
  createCanvas(800, 900);
  engine = Engine.create();

  boxA = Bodies.rectangle(random(width), 0, 0, 80);

  // circleA = Bodies.circle(10, 10, 10, 10);
  Composite.add(engine.world, [boxA]);
}

// matterObjs.push(
//   new Rect(width * 0.5, height * 0.5, 100, 20, {
//     restitution: 1,
//     friction: 0,
//     frictionAir: 0,
//     frictionStatic: 0,
//     isStatic: true,
//   })
// );

function draw() {
  background("black");
  Engine.update(engine);
  //이후에 그림을 그릴때 중앙의 위치를 중앙으로 변화시킨당
  noStroke();

  fill(0, 255, random(20, 255), random(75, 100));
  push();
  translate(boxA.position.x, boxA.position.y);
  rotate(boxA.angle);
  //캔버스를 로이 하는 것
  y = y + 10;
  rect(random(width), 0, 4, y);
  pop();
  //push 해서 pod으로 나가면 이 안에서 설정된 모든게 무효화됨
}
