(function () {

    //fields
    var body = document.getElementsByTagName("body")[0];
    var positions = []
    const MINPETAL = 5
    const MAXPETAL = 13
    var pistilC, petalC, pistilC2, petalC2
    
//------------------Back-ground------------------------//
    const rand = function(min, max) {
      return Math.random() * ( max - min ) + min;
    }
    
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx = canvas.getContext('2d');
      ctx.globalCompositeOperation = 'lighter';
    });
    let backgroundColors = [ '#000', '#000' ];
    let colors = [
      [ '#002aff', "#009ff2" ],
      [ '#0054ff', '#27e49b' ], 
      [ '#202bc5' ,'#873dcc' ]
    ];
    let count = 70;
    let blur = [ 12, 70 ];
    let radius = [ 1, 120 ];
    
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ctx.globalCompositeOperation = 'lighter';
    
    let grd = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
    grd.addColorStop(0, backgroundColors[0]);
    grd.addColorStop(1, backgroundColors[1]);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    let items = [];
    
    while(count--) {
        let thisRadius = rand( radius[0], radius[1] );
        let thisBlur = rand( blur[0], blur[1] );
        let x = rand( -100, canvas.width + 100 );
        let y = rand( -100, canvas.height + 100 );
        let colorIndex = Math.floor(rand(0, 299) / 100);
        let colorOne = colors[colorIndex][0];
        let colorTwo = colors[colorIndex][1];
        
        ctx.beginPath();
        ctx.filter = `blur(${thisBlur}px)`;
        let grd = ctx.createLinearGradient(x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius);
      
        grd.addColorStop(0, colorOne);
        grd.addColorStop(1, colorTwo);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.arc( x, y, thisRadius, 0, Math.PI * 2 );
        ctx.closePath();
        
        let directionX = Math.round(rand(-99, 99) / 100);
        let directionY = Math.round(rand(-99, 99) / 100);
      
        items.push({
          x: x,
          y: y,
          blur: thisBlur,
          radius: thisRadius,
          initialXDirection: directionX,
          initialYDirection: directionY,
          initialBlurDirection: directionX,
          colorOne: colorOne,
          colorTwo: colorTwo,
          gradient: [ x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius ],
        });
    }
    
    
    function changeCanvas(timestamp) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let adjX = 2;
      let adjY = 2;
      let adjBlur = 1;
      items.forEach(function(item) {
        
          if(item.x + (item.initialXDirection * adjX) >= canvas.width && item.initialXDirection !== 0 || item.x + (item.initialXDirection * adjX) <= 0 && item.initialXDirection !== 0) {
            item.initialXDirection = item.initialXDirection * -1;
          }
          if(item.y + (item.initialYDirection * adjY) >= canvas.height && item.initialYDirection !== 0 || item.y + (item.initialYDirection * adjY) <= 0 && item.initialYDirection !== 0) {
            item.initialYDirection = item.initialYDirection * -1;
          }
          
          if(item.blur + (item.initialBlurDirection * adjBlur) >= radius[1] && item.initialBlurDirection !== 0 || item.blur + (item.initialBlurDirection * adjBlur) <= radius[0] && item.initialBlurDirection !== 0) {
            item.initialBlurDirection *= -1;
          }
        
          item.x += (item.initialXDirection * adjX);
          item.y += (item.initialYDirection * adjY);
          item.blur += (item.initialBlurDirection * adjBlur);
          ctx.beginPath();
          ctx.filter = `blur(${item.blur}px)`;
          let grd = ctx.createLinearGradient(item.gradient[0], item.gradient[1], item.gradient[2], item.gradient[3]);
          grd.addColorStop(0, item.colorOne);
          grd.addColorStop(1, item.colorTwo);
          ctx.fillStyle = grd;
          ctx.arc( item.x, item.y, item.radius, 0, Math.PI * 2 );
          ctx.fill();
          ctx.closePath();
        
      });
      window.requestAnimationFrame(changeCanvas);
      
    }
    
    window.requestAnimationFrame(changeCanvas);
  
// -----------end Background -----------------//    
  
    
    
  
  /*utility*/
  function scaleCanvas(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight);
    console.log(`width:${w},height:${h}`)
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    var scale = 1;//window.devicePixelRatio;
    
    canvas.width = Math.floor(w * scale);
    canvas.height = Math.floor(h * scale);
    ctx.scale(scale, scale);
  }
  function distance(p1, p2) {
    return Math.floor(Math.sqrt(Math.pow(p1.x-p2.x,2) + Math.pow(p1.y - p2.y,2)))      
  }
  function randomColor(minSat = 0, maxSat=100, minBright=0, maxBright=100){
    this.h = getRandomInt(0,360)
    this.s = getRandomInt(minSat,maxSat)
    this.l = getRandomInt(minBright,maxBright)
    this.hsl = ()=>{return`hsl(${this.h},${this.s}%,${this.l}%)`};
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function chance(limit = 0.5) {
    return Math.random() < limit;
  }
  function Point(x,y) {
    this.x = x
    this.y = y
  }
  })("sweaverD.com");
  

  
var to = 'Friend!';
var gift_url = 'https://www.youtube.com/watch?v=H2tnyATFJ-U';
var gift_image_url = 'img/hpbd.jpg';



var nametag = document.getElementById("nametag");
var gift = document.getElementById("gift");
var giftImage = document.getElementById("gift-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    giftImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      giftImage.appendChild(_giftImg);
    }
  }
    
  gift.addEventListener("click", function(e){
    gift.classList.toggle("open");
    // document.getElementById("birthdayCard").classList.add("birthdayCard-show");
    document.getElementsByClassName("cake2")[0].classList.add("cake-show");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

