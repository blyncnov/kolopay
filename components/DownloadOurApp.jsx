import React from 'react'
import Image from 'next/image';

// Components
import Button from '../constants/Button';

import { OurApps1, OurApps2, OurApps3 } from "../data/OurApps"

// styled-components
import { DownloadOurAppContainer, FlexBoxCenter } from "../styles/styled/DownloadOurApp";

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    Circle
} from "../styles/constants/Constants"



const DownloadOurApp = () => {
    return (
        <Section>
            <DownloadOurAppContainer>
                <Constraints>
                    <SectionInner>

                        <Divider>
                            <Image src={OurApps1.image} layout="responsive" alt={OurApps1.id} />
                        </Divider>

                        <SectionInner>

                            <Divider>
                                <HeadingOne style={{ textAlign: 'center' }} size="1.8em">{OurApps2.title}. </HeadingOne>
                                <br />
                                <Paragraph style={{ textAlign: 'center' }}>{OurApps2.description} </Paragraph>
                                <br />
                                <FlexBoxCenter>
                                    <Button Bg="#412272" Text="white" title={OurApps2.button} />
                                </FlexBoxCenter>
                            </Divider>

                            <Divider>
                                <HeadingOne style={{ textAlign: 'center' }} size="1.8em">{OurApps3.title}.</HeadingOne>
                                <br />
                                <Paragraph style={{ textAlign: 'center' }}>{OurApps3.description} </Paragraph>
                                <br />
                                <FlexBoxCenter>
                                    <Button Bg="#412272" Text="white" title={OurApps3.button} />
                                </FlexBoxCenter>
                            </Divider>

                        </SectionInner>

                        {/* <Divider>
                            <HeadingOne style={{ textAlign: 'center' }} size="1.8em">{OurApps2.title} & {OurApps3.title}</HeadingOne>
                            <br />
                            <Paragraph style={{ textAlign: 'center' }}>{OurApps2.description} </Paragraph>
                            <br />
                            <FlexBoxCenter>
                                <Button Bg="#412272" Text="white" title={OurApps2.button} />
                            </FlexBoxCenter>
                        </Divider> */}

                        {/* <Divider>
                            <HeadingOne size="1.8em" style={{ textAlign: 'center' }}>{OurApps3.title}</HeadingOne>
                            <br />
                            <Paragraph style={{ textAlign: 'center' }}></Paragraph>
                            <br />
                            <FlexBoxCenter>
                                <Button Bg="#412272" Text="white" title={OurApps3.button} />
                            </FlexBoxCenter>
                        </Divider> */}

                    </SectionInner>
                </Constraints>
            </DownloadOurAppContainer>
        </Section >
    )
}

export default DownloadOurApp