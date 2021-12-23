import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components/macro';
import { Button } from "./Button";

const Footerc = styled.div`
    background-color: #242424;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
`;

const Footers = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: white;
    .letter { font-family: "Architects Daughter"; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; } h3 { font-family: "Architects Daughter"; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 15.4px; } p { font-family: "Architects Daughter"; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; } blockquote { font-family: "Architects Daughter"; font-size: 21px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 30px; } pre { font-family: "Architects Daughter"; font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 18.5714px; }
    .letter2 {font-family: 'Caveat', sans-serif; font-size: 24px; } 
    .letterB { font-family: "Architects Daughter"; font-size: 14px;  }
    `;

    const Inputareas = styled.div``;

    const FooterI = styled.div`
    padding: 8px 20px;    
    margin-right: 10px;    
    outline: none;
    border: none;
    color: red;
    font-size: 18px;
    margin-bottom:16px;
    .cardb {border: 1px solid #fff;}
    .card { border-radius: 12px; text-align: center;}
    .buttons { border-radius: 12px;
               margin-top: 6px;
               padding: 5px 2px 5px 1px;
               border: 1px;
               color: black;
               font-family: "Architects Daughter";
               font-size: 14px;
               background-color: green;
               transition: 0.3s ease-out;

               &:hover {
                color: #e9e9e9; 
                background-color: red;
               }
    }`;

    const FooterL = styled.div`
        width: 100%;
        max-width: 1000%;
        display: flex;
        justify-content: center;
    `;

    const FooterLW = styled.div`
        display: flex;
    `;

    const FooterLI = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: gray;
    margin-bottom: 16px;
    .letter { font-family: "Architects Daughter"; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; } h3 { font-family: "Architects Daughter"; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 15.4px; } p { font-family: "Architects Daughter"; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; } blockquote { font-family: "Architects Daughter"; font-size: 21px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 30px; } pre { font-family: "Architects Daughter"; font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 18.5714px; }
    .letter2 {font-family: 'Caveat', sans-serif; font-size: 24px; } 
    .letterB { font-family: "Architects Daughter"; font-size: 14px;  }   
    .footera {
        color: red;
        text-decoration: none;
        margin-bottom: 8px;
        transition: 0.3s ease-out;

        &:hover {
            color: white;             
           }
    }`;

    const SocialM = styled.section`
        max-width: 1000px;
        width: 100%;        
    `;

    const SocialMW = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        max-width: 1000px;
        margin: 40px auto 0 auto;
        .social-logo {
            color: gray;
            justify-self: start;
            margin-left: 32rem;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
            font-size: 2rem;
            display: flex;
            align-self: center;
            margin-bottom: 16px;
        }
    `;

    const SocialI = styled.div`
    display: flex;
    justify-content: space-between;    
    align-items: justify;
    margin-left: 32rem;
    align-self: center;
    font-size: 20px;
    width: 50%;   
    .faceb { color: blue;}
    .instb { color: red;}
    .twittb { color: cyan;}
    .linkb { color: blue;}
    `;

const Footer = () => {

    return (
        <Footerc>
            <Footers>
        <h1 className="letter">Test footer</h1><br/><br/>
        <p className="letter2">Join the Adventure newsletter to receive our best vacation deals</p>
        <p className="letter2">You can unsubscribe at any time</p><br/>
            <Inputareas>
                <form>
                    <FooterI>
                <input type="email" name="email" placeholder="Your Email" className="card cardb"/>
                <Button className='buttons'>Subscribe</Button>
                    </FooterI>
                </form>
            </Inputareas>
            </Footers>
                <FooterL>
                    <FooterLW>
                        <FooterLI>
                            <h2 className="footer-link-items letter">About Us</h2><br/>
                            <Link className="footera letter2" to="/">How work it</Link>
                            <Link className="footera letter2" to='/'>Testimonials</Link>
                            <Link className="footera letter2" to='/'>Careers</Link>
                            <Link className="footera letter2" to='/'>Investor</Link>
                            <Link className="footera letter2" to='/'>Terms of service</Link>
                        </FooterLI>
                        <FooterLI>
                            <h2 className="footer-link-items">Contact Us</h2><br/>
                            <Link className="footera letter2" to="/">Contact</Link>
                            <Link className="footera letter2" to='/'>Support</Link>
                            <Link className="footera letter2" to='/'>Destinations</Link>
                            <Link className="footera letter2" to='/'>Sponsorships</Link>
                        </FooterLI>
                        <FooterLI>
                            <h2 className="footer-link-items">Videos</h2><br/>
                            <Link className="footera letter2" to="/">Submit Videos</Link>
                            <Link className="footera letter2" to='/'>Ambassadors</Link>
                            <Link className="footera letter2" to='/'>Agency</Link>
                            <Link className="footera letter2" to='/'>Influencer</Link>
                        </FooterLI>
                        <FooterLI>
                            <h2 className="footer-link-items">Social Media</h2><br/>
                            <Link className="footera letter2" to="/">Instagram</Link>
                            <Link className="footera letter2" to='/'>Facebook</Link>
                            <Link className="footera letter2" to='/'>Youtube</Link>
                            <Link className="footera letter2" to='/'>Twitter</Link>
                        </FooterLI>
                    </FooterLW>
                </FooterL>
                <SocialM>
                    <SocialMW>                        
                         <Link className="social-logo">
                            Social Networks&nbsp; <i className="fab fa-typo3"/>                    
                         </Link>
                    </SocialMW>
                    <small className="website-rights"></small>
                    <SocialI>
                        <Link className="social-icon-link faceb" to="/" target='_blank' aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link " 
                        to="/" target='_blank' aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link instb" 
                        to="/" target='_blank' aria-label='Youtube'>
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twittb" 
                        to="/" target='_blank' aria-label='Twitter'>
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkb" 
                        to="/" target='_blank' aria-label='Linkedin'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </SocialI>
                </SocialM>
       </Footerc>
    );
};

export default Footer;