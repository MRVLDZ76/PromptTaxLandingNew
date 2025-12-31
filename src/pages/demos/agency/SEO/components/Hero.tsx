import heroSeoImage from '@/assets/images/elements/hero-seo.svg'
import trustpilotImg from '@/assets/images/elements/trustpilot.svg'
import trustpilotLightImg from '@/assets/images/elements/trustpilot-light.svg'
import googleImage from '@/assets/images/elements/google.svg'
import {Button, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { FaStarHalfAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="pt-xl-8 pb-0 position-relative">
            <Container className="py-5 position-relative">

                <div className="inner-container mx-auto text-center">

                    <h1 className="mb-4">Dominate Search&nbsp;
                        <span>
					<svg width="76" height="51" viewBox="0 0 76 51" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="path-1-inside-1_3060_294" fill="white">
						<path
                            d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 -1.88135e-07 32.263 0 25.5C1.88135e-07 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 -8.06482e-08 25.5 0L25.5 25.5L25.5 51Z"/>
						</mask>
						<path
                            d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 -1.88135e-07 32.263 0 25.5C1.88135e-07 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 -8.06482e-08 25.5 0L25.5 25.5L25.5 51Z"
                            fill="white" stroke="#202124" strokeWidth="4" mask="url(#path-1-inside-1_3060_294)"/>
						<path
                            d="M50.5 51C43.737 51 37.251 48.3134 32.4688 43.5312C27.6866 38.749 25 32.263 25 25.5C25 18.737 27.6866 12.251 32.4688 7.46878C37.251 2.6866 43.737 -8.06482e-08 50.5 0L50.5 25.5L50.5 51Z"
                            fill="#202124"/>
						<path
                            d="M75.5 51C68.737 51 62.251 48.3134 57.4688 43.5312C52.6866 38.749 50 32.263 50 25.5C50 18.737 52.6866 12.251 57.4688 7.46878C62.251 2.6866 68.737 -8.06482e-08 75.5 0V25.5L75.5 51Z"
                            fill="#09B850"/>
					</svg>&nbsp;
				</span>
                        Engines With Proven SEO Strategies
                    </h1>
                    <p className="mb-5">Our comprehensive SEO solutions are designed to put your website in front of the
                        right audience at the right time. Let us take your online presence to the next level.</p>


                    <div className="d-flex gap-1 gap-sm-3 flex-wrap justify-content-center mb-6">
                        <Button variant='dark' size='lg' type="button">Request a free consultation</Button>
                        <Link className="btn btn-lg btn-white border" to="">Learn more</Link>
                    </div>

                    <div className="inner-container-small d-sm-flex justify-content-center">

                        <div>
                            <img src={trustpilotImg} className="light-mode-item h-40px mb-3"
                                 alt="Client-img"/>
                            <img src={trustpilotLightImg}
                                 className="dark-mode-item h-40px mb-2" alt="Client-img"/><br/>
                            <ul className="list-inline mb-3 icons-center">
                              {Array(4).fill(0).map((_star,idx)=>(
                                <li className="list-inline-item me-1"  key={idx}><FaStar size={19} className="text-warning"></FaStar></li>
                              ))}
                                <li className="list-inline-item me-1"><FaStarHalfAlt size={17}
                                    className="text-warning"/></li>
                                <li className="list-inline-item"><Link to=""
                                                                         className="heading-color text-primary-hover fw-semibold">114
                                    Reviews</Link></li>
                            </ul>
                        </div>

                        <div className="vr bg-primary mx-6"></div>

                        <div>
                            <img src={googleImage} className="h-40px mb-3" alt="Client-img"/>
                            <ul className="list-inline mb-3">
                            {Array(4).fill(0).map((_star,idx)=>(
                                <li className="list-inline-item me-1"  key={idx}><FaStar size={19} className="text-warning"></FaStar></li>
                              ))}
                                 <li className="list-inline-item me-1"><FaStarHalfAlt size={17}
                                    className="text-warning"/></li>
                                <li className="list-inline-item me-0"><Link to=""
                                                                         className="heading-color text-primary-hover fw-semibold">215
                                    Reviews</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Row className="mt-7">
                    <Col md={10} className="mx-auto">
                        <img src={heroSeoImage} alt=""/>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Hero