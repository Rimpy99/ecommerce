import { useRef, useEffect } from 'react';
import { Box } from "@mui/material";

const carouselData = [
    {
        pictureName: 'cwomen',
        sliderText: 'See the collection for women',
        linkTo: 'women',
    },
    {
        pictureName: 'cmen',
        sliderText: 'See the collection for men',
        linkTo: 'men',
    },
    {
        pictureName: 'consale',
        sliderText: 'See the on sale collection',
        linkTo: 'onsale',
    },
]

const Carousel = () => {

    
    const carouselRef = useRef<HTMLDivElement>(document.createElement("div"));
    // const carouselRef = useRef(null);
    
    let isLeftDirection = false;

    const prevClicked = () => {
        const carousel = carouselRef.current;
        
        if(!isLeftDirection){
            carousel.firstElementChild && carousel.appendChild(carousel.firstElementChild);
            isLeftDirection = true;
        }

        carousel.style.justifyContent = 'flex-end';
        carousel.style.transform = 'translate(100%)';
    }

    const nextClicked = () => {
        const carousel = carouselRef.current;

        if(isLeftDirection){
            carousel.lastElementChild && carousel.prepend(carousel.lastElementChild);
            carousel.style.justifyContent = 'flex-start';
            isLeftDirection = false;
        }  

        carousel.style.justifyContent = 'flex-start';
        carousel.style.transform = 'translate(-100%)';
    }

    useEffect(() => {
        const carousel = carouselRef.current;

        carousel.addEventListener('transitionend', () => {
            if(isLeftDirection){
                carousel.lastElementChild && carousel.prepend(carousel.lastElementChild);
            }else{
                carousel.firstElementChild && carousel.appendChild(carousel.firstElementChild);
            }
            carousel.style.transition = 'none';
            carousel.style.transform = 'translate(0)';
            setTimeout(() => carousel.style.transition = 'all .3s');
        });

        return () => carousel.removeEventListener('transitionend', () => {});

    }, []);

    return(
        <>
            <button style={{ width: '50px' }} onClick={() => prevClicked()}>prev</button>
            <button style={{ width: '50px' }} onClick={() => nextClicked()}>next</button>
            <Box sx={{ border: '3px solid yellow', overflow: 'hidden', marginTop: '10px', width: '1280px', }}>
                <Box
                    ref={carouselRef}
                    sx={{
                        display: 'flex',
                        width: '1280px',
                        height: '730px',
                        transition: 'all .3s',
                    }}
                >
                    <Box sx={{ height: '730px', overflow: 'hidden', flexShrink: 0,}}>
                        <img src={`http://localhost:3005/images/${'cwomen'}.jpg`}/>
                    </Box>
                    <Box sx={{ height: '730px', overflow: 'hidden', flexShrink: 0,}}>
                        <img src={`http://localhost:3005/images/${'cmen'}.jpg`}/>
                    </Box>
                    <Box sx={{ height: '730px', overflow: 'hidden', flexShrink: 0,}}>
                        <img src={`http://localhost:3005/images/${'consale'}.jpg`}/>
                    </Box>
                </Box>
            </Box>
            
        </>
    );
};

export default Carousel;