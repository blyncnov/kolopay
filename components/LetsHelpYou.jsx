import React from 'react'
import Image from 'next/image';

// Components
import Button from '../constants/Button';

// styled-components
import { LetsHelp } from "../data/LetsHelp"

import { LetsHelpContainer } from "../styles/styled/LetsHelpYou";

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"



const LetsHelpYou = () => {
    return (
        <Section>
            <LetsHelpContainer>
                <Constraints>
                    <SectionInner>
                        <Divider>
                            <HeadingOne>{LetsHelp.title}</HeadingOne>
                            <br />
                            <Divider>
                                <Button Bg="white" Text="#412272" title={LetsHelp.button} />
                            </Divider>
                        </Divider>

                        <Divider>
                            <FlexBoxToRow>
                                <Image eager="true" src={LetsHelp.image1} alt="Playstore" />
                                <Image eager="true" src={LetsHelp.image2} alt="AppleStore" />
                            </FlexBoxToRow>
                        </Divider>
                    </SectionInner>
                </Constraints>
            </LetsHelpContainer>
        </Section >
    )
}

export default LetsHelpYou