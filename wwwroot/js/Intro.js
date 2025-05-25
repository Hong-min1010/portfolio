document.addEventListener('DOMContentLoaded', function () {
  const plane = document.getElementById('plane');
  const path = document.getElementById('arcPath');
  if (!plane || !path) return;
  const pathLength = path.getTotalLength();

  let progress = 0;
  const speed = 0.002; // 속도 조절

  function animatePlane() {
    const point = path.getPointAtLength(progress * pathLength);
    const delta = 1;
    const nextPoint = path.getPointAtLength(Math.min(progress * pathLength + delta, pathLength));
    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI;

    plane.setAttribute('x', point.x - 16);
    plane.setAttribute('y', point.y - 16);
    plane.setAttribute('transform', `rotate(${angle} ${point.x} ${point.y})`);

    progress += speed;
    if (progress > 1) progress = 0;

    requestAnimationFrame(animatePlane);
  }

  animatePlane();
});
