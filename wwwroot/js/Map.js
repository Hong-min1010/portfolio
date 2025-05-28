document.addEventListener('DOMContentLoaded', function() {
  // 각 구름의 개별 속도와 시작 위치 설정
  const clouds = [
    { selector: '.cloud1', speed: 0.68, start: -350 },
    { selector: '.cloud2', speed: 0.65, start: -100 },
    { selector: '.cloud3', speed: 0.7, start: 300 },
    { selector: '.cloud4', speed: 0.8, start: 800 },
    { selector: '.cloud5', speed: 0.85, start: 1000 },
    { selector: '.cloud6', speed: 0.95, start: 700 }
  ];

  const screenW = window.innerWidth;

  clouds.forEach(function(cloud, idx) {
    const el = document.querySelector(cloud.selector);
    if (!el) return;

    // 시작 위치 기억
    cloud.el = el;
    cloud.x = cloud.start;
    cloud.width = el.offsetWidth || 350;
    cloud.top = el.style.top || el.style.bottom || '0px';
    // 랜덤 딜레이 효과를 위해 약간의 오프셋 추가
    cloud.offset = Math.random() * 500;
  });

  function animateClouds() {
    clouds.forEach(function(cloud) {
      if (!cloud.el) return;
      cloud.x += cloud.speed;
      // 화면을 완전히 벗어나면 다시 왼쪽으로 리셋
      if (cloud.x > screenW + cloud.width) {
        cloud.x = -cloud.width + cloud.offset;
      }
      cloud.el.style.left = cloud.x + 'px';
    });
    requestAnimationFrame(animateClouds);
  }

  animateClouds();
});