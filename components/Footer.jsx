import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Logo from "../public/Images/icon/logo.svg"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"

import { FooterContainer, DevelopedBy } from "../styles/styled/Footer"

const Footer = () => {
    return (
        <Section padding="0">
            <FooterContainer>
                <Constraints>
                    <Divider>
                        <Image src={Logo} alt="Logo" />
                    </Divider>
                    <br />
                    <br />
                    <SectionInner>

                        <Divider>
                            <HeadingOne Text="#ffffff" size="1.3rem">Company</HeadingOne>
                            <br />
                            <ul>
                                <li>About Us</li>
                                <li>Press & Media</li>
                                <li>FAQS</li>
                                <li>Testimonials</li>
                                <li>Blog</li>
                                <li>Team</li>
                            </ul>
                        </Divider>

                        <Divider>
                            <HeadingOne Text="#ffffff" size="1.3rem">Product</HeadingOne>
                            <br />
                            <ul>
                                <li>Feature</li>
                                <li>Mobile App</li>

                            </ul>
                        </Divider>

                        <Divider>
                            <HeadingOne Text="#ffffff" size="1.3rem">Legal</HeadingOne>
                            <br />
                            <ul>
                                <li>Terms Of Service</li>
                                <li>Privacy Policy</li>

                            </ul>
                        </Divider>

                        <Divider>
                            <HeadingOne Text="#ffffff" size="1.3rem">Get In Touch</HeadingOne>
                            <br />
                            <ul>
                                <li>+2349018063503 , +2347085544250</li>
                                <li>info@kolopay.com</li>
                                <li>Facebook</li>

                            </ul>
                        </Divider>

                        <Divider>
                            <HeadingOne Text="#ffffff" size="1.3rem">Where We Are</HeadingOne>
                            <br />
                            <ul>
                                <address>3,Joel Ogunnaike street,
                                    GRA Ikeja Lagos,
                                    Nigeria.
                                </address>

                            </ul>
                        </Divider>
                    </SectionInner>
                </Constraints>
            </FooterContainer>
            <DevelopedBy >
                <h5 style={{ textAlign: 'center' }}>Redesign By {''}
                    <span >
                        <Link href="https://blyncnov.com">Blyncnov</Link>
                    </span>
                </h5>
            </DevelopedBy>
        </Section >
    )
}

export default Footer