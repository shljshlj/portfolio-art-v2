const slider = tns({
    container: '.tns-slider',
    items: 1,
    // slideBy: 'page',
    mode: 'gallery',
    // center: true,
    nav: false,
    // controlsText: ['PREV', 'NEXT'],
    arrowKeys: true,
    speed: 400,
    controlsContainer: '.controls'
  });

const info = slider.getInfo();
console.log(info)