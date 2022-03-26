import React from 'react';
import Image from 'next/image';

// Components
import { WhyUs } from "../styles/styled/WhyUs"
import Button from '../constants/Button';

// data 
import { WhyKolopayData } from "../data/why"

// styled-components
import {
    Section, Constraints, SectionInner, Divider,
    Paragraph, HeadingOne
} from "../styles/constants/Constants"

const WhyKolopay = () => {
    return (
        <>
            <Section>
                <Constraints Max="80%">
                    <h1 style={{ textAlign: "center", fontweight: "bold" }} >Why Kolopay ?</h1>
                    <br />
                    <SectionInner>
                        {WhyKolopayData.map((data) => {
                            return (
                                <WhyUs key={data.id}>
                                    <Image src={data.icon} alt={data.title} />
                                    <br />
                                    <HeadingOne>{data.title}</HeadingOne>
                                    <br />
                                    <Paragraph style={{ textAlign: "center", fontweight: "bold" }}>{data.description}</Paragraph>
                                </WhyUs>
                            )
                        })}
                    </SectionInner>
                    <br />
                    <div className="center" style={{ textAlign: 'center', display: "flex", justifyContent: 'center' }}>
                        <Button Bg="#412272" BgT="transparent" Text="white" TexTH="#412272" title="Get Started For Free" bg="red" />
                    </div>
                </Constraints>
            </Section>
        </>
    )
}

export default WhyKolopay;