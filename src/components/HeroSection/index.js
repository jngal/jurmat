import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {
    HeroContainers,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroLogo
} from './HeroElements';

import LogoBig from '../../images/logo_big.png';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainers id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                {/* <HeroLogo src={LogoBig} /> */}
                <HeroH1>Jurmat s.r.o. </HeroH1>

                <HeroP>
                    ZÁMOČNÍCTVO & KOVOVÝROVA
                </HeroP>
                {/* <HeroP>
                    KOVOVÝROVA
                </HeroP> */}
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                        Niečo o nás {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainers>
    )
}

export default HeroSection
