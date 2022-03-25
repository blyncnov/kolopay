import React from 'react';
import Image from 'next/image';

// Images
import Banner from "../public/Images/assests/banner.svg"

// styled-components
import Button from "../constants/Button"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph
} from "../styles/constants/Constants"

import { ButtonFlexBox } from "../styles/styled/Hero"

const Hero = () => {
    return (
        <>
            <Constraints Max="90%">
                <Section>
                    <SectionInner>
                        <Divider>
                            <HeadingOne>THE BEST WAY TO SAVE TOWARD YOUR GOALS.</HeadingOne>
                            <br />
                            <Paragraph>Kolopay helps you easily save little by little towards your goals and you get up to 10% interest,all for free.
                                Setup savings towards many goals e.g Just Savings, Rent, School fees, Car, etc.
                            </Paragraph>
                            {/* <Paragraph></Paragraph> */}
                            <br />
                            <ButtonFlexBox>
                                <Button title="Sign Up" Bg="#412272" />
                                <Button title="Login" Bg="#412272" />
                            </ButtonFlexBox>
                        </Divider>

                        <Divider>
                            <Image src={Banner} alt="banner" layout="responsive" />
                        </Divider>
                    </SectionInner>
                </Section>
            </Constraints>
        </>
    )
}

export default Hero