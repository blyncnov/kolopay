import React from 'react';
import Image from 'next/image';

// components 

import { HowItWork } from "../data/HowItWorks"


// styled-components
import { How } from "../styles/styled/How"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow, Circle
} from "../styles/constants/Constants"
import Button from '../constants/Button';



const HowItWorks = () => {
    return (
        <>
            <Constraints>
                <How>
                    <h1 style={{ textAlign: "center", fontweight: "bold" }}  >How it works</h1>
                </How>
                <Section>
                    {HowItWork.map((hows) => {
                        return (
                            <div key={hows.id}>
                                <SectionInner align="center">
                                    <Divider>
                                        <Image src={hows.image} alt={hows.title} layout="responsive" />
                                    </Divider>

                                    <Divider>
                                        <HeadingOne size="1rem">
                                            <Circle >
                                                {hows.id}
                                            </Circle>
                                            <br />
                                            <h1>{hows.title}</h1>
                                            <br />
                                        </HeadingOne>
                                        <Paragraph size="13px">{hows.description}</Paragraph>
                                    </Divider>
                                </SectionInner>
                                <br />
                                <br />
                            </div>
                        )
                    })}
                    <br />
                    <div className="center" style={{ textAlign: 'center', display: "flex", justifyContent: 'center' }}>
                        <Button Bg="#412272" BgT="transparent" Text="white" TexTH="#412272" title="Get Started For Free" bg="red" />
                    </div>
                </Section>
            </Constraints>
        </>
    )
}

export default HowItWorks 