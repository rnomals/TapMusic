window.addEventListener('load',()=>{
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60D394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2b3"
    ];

    //console.log(sound);

    // Playing sound when clicking
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sound[index].currentTime = 0;
            sound[index].play();

            createBubbles(index);
        });
    });

    // Creating visual effect of creating bubbles
    const createBubbles = (index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };

});