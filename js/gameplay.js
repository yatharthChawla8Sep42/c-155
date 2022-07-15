AFRAME.registerComponent("game-play", {
    schema:{
        elementId: {type:'string', default:null}
    },
    update: function(){
        this.isCollided(this.data.elementId);
    },
    isCollided: function(elementId){
        const diverEl = document.querySelector(elementId);
        diverEl.addEventListener("collide", (e)=>{
            if (elementId.includes("#coin")){
                diverEl.setAttribute("visible", false)
                console.log(elementId+" collision");
            }
            else if (elementId.includes("#fish")){
                console.log(elementId+" collision");
            }
        })
    }
})