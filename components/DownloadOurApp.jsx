import React from 'react'
import Image from 'next/image';

// Components
import Button from '../constants/Button';

import { OurApps1, OurApps2, OurApps3 } from "../data/OurApps"

// styled-components
import { DownloadOurAppContainer } from "../styles/styled/DownloadOurApp";

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
                        <Divider>
                            <HeadingOne size="1.5em">{OurApps2.title}</HeadingOne>
                            <br />
                            <Paragraph >{OurApps2.description}</Paragraph>
                            <br />
                            <Button Bg="#412272" Text="white" title={OurApps2.button} />
                        </Divider>

                        <Divider>
                            <HeadingOne size="1.5em">{OurApps3.title}</HeadingOne>
                            <br />
                            <Paragraph>{OurApps3.description}</Paragraph>
                            <br />
                            <Button Bg="#412272" Text="white" title={OurApps3.button} />
                        </Divider>
                    </SectionInner>
                </Constraints>
            </DownloadOurAppContainer>
        </Section >
    )
}

export default DownloadOurApp