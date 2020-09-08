import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'

const Container = styled.canvas`
   position: absolute;
   width: 100vw;
   height: 100vh;
   z-index: -1;
   background-color: #000;
`;
const Background = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
    let mobileVersion;
    let width = window.innerWidth;
    let height = window.innerHeight;
    if(window.innerWidth < 620){
        mobileVersion = true;
        width = window.screen.width;
        height = window.screen.height;
        canvas.width = width;
        canvas.height = height;

    }
    else{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    let c = canvas.getContext('2d');
    class Circle {
        constructor(x=1,y=1,dx=1,dy=1) {
            this.x =  x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
        }
        draw(){
            c.beginPath();
            c.arc(this.x,this.y,0.5,0,2*Math.PI,false);
            c.fill();
            c.fillStyle = '#ffffff';
        }
        update(){
            if(this.x+0.5>width || this.x-0.5< 0){
                this.dx = -this.dx;
            }
            if(this.y+0.5>height || this.y-0.5 < 0){
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    let circleArr = [];
    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0,0,width,height);
        circleArr.forEach(circle => {
            circle.update();
        })
    };
    const init = () => {
        let howMuch;
        if(mobileVersion){
            howMuch = 50;
        }
        else{
            howMuch = 300;
        }
        for(let i=0; i<howMuch; i++){
            let x = Math.random() * width;
            let y = Math.random() * height;
            let dx = (Math.random() - 0.5);
            let dy = (Math.random() - 0.5);
            circleArr.push(new Circle(x,y,dx,dy));
        }
    };
    init();
    animate();
    window.addEventListener("resize",() => {
        if(!mobileVersion) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            circleArr = [];
            init();
        }
    });
    },[])
    return (
        <Container ref={canvasRef}></Container>
    );
};

export default Background;