function SwipeDou(id,max,auto,autoTime,clas,width,callback) {
    this.conId = id || 'line';
    this.max = max || 3;
    this.conNode = document.getElementById(this.conId);
    this.clas = clas || 'srow';
    this.index = 1;
    this.width = width || 400;
    this.isAni = false;
    this.startY = 0;
    this.endX = 0;
    this.X = 0;
    this.autoTime = autoTime || 3000;
    this.auto     = auto || false;
    this.callback = callback || null;
};
SwipeDou.prototype = {
    init: function() {
        this.width = parseInt(window.innerWidth/2);
        var note = document.getElementsByClassName(this.clas)
        var ilen = note.length;                    
        for(let i=0;i<ilen;i++) { 
            note[i].style.width = this.width + 'px'
        }    

        if (this.auto){
            autoAbc =setInterval(this.transRight.bind(this),this.autoTime); 
        }    
        this.conNode.style.marginLeft = '-'+ parseInt(this.width/2) +'px'
        this.conNode.addEventListener('touchstart',this.touchStart.bind(this),false)
        this.conNode.addEventListener('touchmove',this.touchMove.bind(this),false)
        this.conNode.addEventListener('touchend',this.touchEnd.bind(this),false)
    },
    touchStart:function(e){
        if (this.auto){
            clearInterval(autoAbc);
        }
        this.startX = e.changedTouches[0].pageX
        this.desX = this.startX - this.basicX;      
    },
    touchMove:function(e){
        e.preventDefault();
        this.endX = e.changedTouches[0].pageX;
        this.X = this.endX - this.startX;

        if (this.isAni == true){
            return false;
        }
        this.isAni = true;
        var newNum = 0;
        if ( Math.abs(this.X) > 0 && this.X > 0 ) {
            this.transLeft();
        }else if ( Math.abs(this.X) > 0 && this.X < 0 ) {
            this.transRight();
        }
    },
    touchEnd:function(e){
        this.isAni = false;
        if (this.auto){
            autoAbc =setInterval(this.transRight.bind(this),this.autoTime); 
        }    
    },
    transLeft:function(){
        this.index --;
        if(this.index == 0){
            var that = this;
            setTimeout(function () {                  
                that.conNode.style.transition = ''
                that.index  = that.max;
                newNum =  -(that.index*that.width -that.width/2);
                that.conNode.style.marginLeft = newNum +'px'                                
            },400)

        }
        newNum =  -(this.index*this.width -this.width/2);
        this.conNode.style.marginLeft = newNum +'px';            
        this.conNode.style.transition = 'margin-left 400ms linear';
        if (this.callback) {
            this.callback.call(null,this.index);
        }
    },
    transRight:function(){        
        this.index ++;
        if((this.index-1) == this.max){
            var that = this;
            setTimeout(function () {
                that.index =1;
                newNum =  -(that.index*that.width -that.width/2);
                that.conNode.style.transition = '';
                that.conNode.style.marginLeft = newNum +'px';                                     
            },400)
        }
        newNum =  -(this.index*this.width -this.width/2);
        this.conNode.style.transition = 'margin-left 400ms linear';
        this.conNode.style.marginLeft = newNum +'px';
        if (this.callback) {
            this.callback.call(null,this.index-2);
        }        
    }
}

