window.onload = function () {
    
    var $width = document.body.offsetWidth,
        $height = window.screen.availHeight ,
        startX, moveEndX,  X,index = 1, 
        awrap = document.getElementById('pjhy'),
        aline = document.getElementById('line'),
        abj = document.getElementsByTagName('a'),
        aTotal = abj.length;
    window.isAni = false;

    $row = parseInt($width/2);

    aline.style.width = $width + 'px';
    awrap.style.height = $height + 'px';

    abj[index].style.opacity = 1; 

    for (var i =0,alen = abj.length; i < alen; i++) {
        abj[i].style.width = $row + 'px';           
    }

    aline.style.marginLeft = '-'+ parseInt($row/2) +'px'
    
    aline.addEventListener("touchstart", function(e) {

        startX = event.targetTouches[0].pageX;        

    });

    aline.addEventListener("touchmove", function(e) {
        e.preventDefault();
        moveEndX = e.targetTouches[0].pageX;       
        X = moveEndX - startX;
        
        if (window.isAni == true){
            return false;
        }
        window.isAni = true;
        var newNum = 0;
        if ( Math.abs(X) > 0 && X > 0 ) {

            index --;

            if(index == 0){
                setTimeout(function () {
                    
                    aline.style.transition = ''
                    index =parseInt(aTotal) -2;
                    newNum =  -(index*$row -$row/2);
                    aline.style.marginLeft =  newNum +'px';                                         
                },400)
            }

            newNum =  -(index*$row -$row/2);

        }else if ( Math.abs(X) > 0 && X < 0 ) {

            index ++;

            if(index == parseInt(aTotal) -1){ 
                setTimeout(function () {
                    aline.style.transition = ''
                    index =1;
                    newNum =  -(index*$row -$row/2);
                    aline.style.marginLeft = newNum +'px';                  
                },400)
            }
            newNum =  -(index*$row -$row/2);
        }
       
         for (var i =0,alen = abj.length; i < alen; i++) {
            if (index === i) {
                abj[i].style.opacity = 1; 
            }else{
                abj[i].style.opacity = 0.6; 
            }
            abj[i].style.width = $row + 'px';           
        }
        aline.style.transition = 'margin-left 400ms linear';
        aline.style.marginLeft =  newNum +'px';                
    });

    aline.addEventListener("touchend", function(e) {
        window.isAni = false;
    }); 
}