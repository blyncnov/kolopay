import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa'
import { RiBarChartHorizontalLine } from "react-icons/ri"

// Components
import Button from "../constants/Button"

// Data
import { Logo, NavigationLists } from "../data/Navigation"

// styled-components
import {
    NavigationContainerWrapper,
    NavigationContainer,
    NavigationWrapper,
    NavigationItem,
    NavigationButtonWrapper,
    MobileIcon,
    NavigationShadow
} from "../styles/styled/Navigation"

import { Constraints } from "../styles/constants/Constants"


const Navigation = () => {
    const [isclicked, setIsClicked] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const isClickedHandler = () => {
        setIsClicked(!isclicked)
    }

    useEffect(() => {

        const isScrolledHandler = () => {
            if (window.scrollY >= 50) {
                setIsScroll(true)
                console.log(window.scrollY);
            }
            else {
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll", isScrolledHandler);

        return () => window.removeEventListener("scroll", isScrolledHandler);

    }, [])


    return (
        <>
            <NavigationContainerWrapper>
                <NavigationContainer >
                    {/*   <== You can pass a Max props e.g <Constraints  Max="90% /> 
                to  Add a constraint , the default Value is 90% ==>  */}
                    <Constraints Max="90%">
                        <NavigationWrapper>
                            <div className="Logo">
                                <Image src={Logo} alt="Logo" />
                            </div>

                            <NavigationShadow clicked={isclicked} onClick={isClickedHandler} >
                                <NavigationItem>
                                    {NavigationLists.map((list) => {
                                        return (
                                            <Link onClick={isClickedHandler} key={list.id} passHref={true} style={{ color: "#333" }} href={`/${list.navigate}`} >
                                                <li>
                                                    {list.name}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </NavigationItem>
                            </NavigationShadow>


                            <NavigationButtonWrapper >
                                <Button title="Login" />
                                <Button title="Get Started" />
                            </NavigationButtonWrapper>

                            <MobileIcon onClick={isClickedHandler} >
                                {isclicked ? <FaTimes style={{ fontSize: "2em", fontweight: "bold" }} /> : <RiBarChartHorizontalLine style={{ fontSize: "2em", fontweight: "bold" }} />}
                            </MobileIcon>

                        </NavigationWrapper>
                    </Constraints>
                </NavigationContainer>
            </NavigationContainerWrapper>
        </>
    )
}

export default Navigation