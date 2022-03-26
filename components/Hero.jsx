import React from 'react';
import Image from 'next/image';

// Images
import Banner from "../public/Images/assests/banner.svg"
import PlayStore from "../public/Images/assests/google-play.svg"
import AppleStore from "../public/Images/assests/iphone-store.svg"

// Components
import Button from "../constants/Button"
import FlexToRow from "../constants/Button"

// styled-components
import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
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

                            <br />
                            <ButtonFlexBox>
                                <Button title="Sign Up" />
                                <Button title="Login" />
                            </ButtonFlexBox>
                            <br />
                            <FlexBoxToRow>
                                <Image eager="true" src={PlayStore} alt="Playstore" />
                                <Image eager="true" src={AppleStore} alt="AppleStore" />
                            </FlexBoxToRow>
                        </Divider>

                        <Divider>
                            <Image src={Banner} placeholder="blur" blurDataURL={Banner} alt="banner" layout="responsive" />
                        </Divider>

                    </SectionInner>
                </Section>
            </Constraints>
        </>
    )
}

export default Hero