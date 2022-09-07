import React from 'react'
import {
    VyrobaContainer,
    VyrobaH1,
    VyrobaWrapper,
    VyrobaCard,
    VyrobaIcon,
    VyrobaH2,
    VyrobaP
} from './VyrobaElemets';
import { Button } from '../ButtonElement';

import Icon1 from '../../images/kovovyroba.jpg';
import Icon2 from '../../images/schodiko.jpg';
import Icon3 from '../../images/brana.jpg';

const Vyroba = () => {

    return (
        <VyrobaContainer id='vyroba'>
            <VyrobaH1>Zámočnícka práca</VyrobaH1>

            <VyrobaWrapper>
                <VyrobaCard>
                    <VyrobaIcon src={Icon1} />
                    <VyrobaH2>Kovovýroba</VyrobaH2>
                    <VyrobaP>Jednoduchý popis ku kovovýrobe ako takej....</VyrobaP>
                </VyrobaCard>
                <VyrobaCard>
                    <VyrobaIcon src={Icon2} />
                    <VyrobaH2>Schodiská</VyrobaH2>
                    <VyrobaP>Stručný popis ku galerii so schodiskami</VyrobaP>
                </VyrobaCard>
                <VyrobaCard>
                    <VyrobaIcon src={Icon3} />
                    <VyrobaH2>Okrasné brány</VyrobaH2>
                    <VyrobaP>Opis práce pre okrásné kované polia plotov a brán.</VyrobaP>
                </VyrobaCard>
            </VyrobaWrapper>
            <Button
                to='gallery'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary="true"
                dark="true"
                align-center="center"
            // dark2={dark2 ? 1 : 0}

            > Galéria</Button>

        </VyrobaContainer>
    )
}

export default Vyroba
