import { features } from "@/pages/other-pages/Pricing/data";
import { currency } from "@/states/constants";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

const Features = () => {
    const {showModal, openModal, closeModal} = useLaunchModal();

    return (
        <section className="pt-0">
            <Container>

                <div className="inner-container-small text-center mb-4 mb-sm-6">
                    <h2 className="mb-4">What's Included in Every Plan</h2>
                    <p className="mb-0">All plans include AI-powered document processing, IRS-compliant form generation, and secure bank-level encryption. Choose the level of CPA support that matches your tax complexity.</p>
                </div>

                <Row className="g-4 g-lg-5">
                    {
                        features.map((feature, idx) => {
                            const Icon = feature.icon
                            return (
                                <Col md={4} className="text-center" key={idx}>
                                    <Card className="card-body border bg-light">
                                        <div className="icon-lg text-primary mx-auto mb-3">
                                            <Icon className="fa-xl" size={28}/>
                                        </div>
                                        <h6>{feature.title}</h6>
                                        <p>{feature.description}</p>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

                <div className="table-responsive-xl mt-5">
                    <table className="table table-border align-middle">

                        <thead className="align-top">
                        <tr>
                            <th scope="col"></th>

                            <th scope="col">
                                <div className="text-center p-3">
                                    <span className="mb-3 heading-color">Standard Review</span>
                                    <p className="mb-3"><span className="h2 mb-0 plan-price">{currency}179</span> /return</p>
                                    <a href="#" onClick={openModal} className="btn btn-sm btn-dark mb-0">Get started</a>
                                </div>
                            </th>

                            <th scope="col">
                                <div className="text-center p-3">
                                    <span className="mb-3 heading-color">Premium + E-File</span>
                                    <p className="mb-3"><span className="h2 mb-0 plan-price">{currency}329</span> /return</p>
                                    <a href="#" onClick={openModal} className="btn btn-sm btn-dark mb-0">Get started</a>
                                </div>
                            </th>

                            <th scope="col">
                                <div className="text-center p-3">
                                    <span className="mb-3 heading-color">Complex + White Glove</span>
                                    <p className="mb-3"><span className="h2 mb-0 plan-price">{currency}549</span> /return</p>
                                    <a href="#" onClick={openModal} className="btn btn-sm btn-dark mb-0">Get started</a>
                                </div>
                            </th>
                        </tr>
                        </thead>

                        <tbody className="border-top-0">

                        <tr>
                            <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">K-1 Forms Review</span>
                            </th>
                            <td className="text-center"> Up to 2</td>
                            <td className="text-center"> Up to 5</td>
                            <td className="text-center"> Unlimited</td>
                        </tr>


                        <tr>
                            <th scope="row"><span
                                className="fw-normal heading-color ps-lg-4 mb-0">Turnaround Time</span></th>
                            <td className="text-center"> 48 hours</td>
                            <td className="text-center"> 24 hours</td>
                            <td className="text-center"> 12 hours</td>
                        </tr>

                        <tr>
                            <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Complete 1040 Review</span>
                            </th>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                        </tr>

                        <tr>
                            <th scope="row"><span
                                className="fw-normal heading-color ps-lg-4 mb-0">Crypto Transactions</span></th>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                        </tr>

                        <tr>
                            <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">E-Filing Service</span>
                            </th>
                            <td className="text-center text-danger"><BsXCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                        </tr>

                        <tr>
                            <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">State Returns</span></th>
                            <td className="text-center text-danger"><BsXCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                        </tr>

                        <tr>
                            <th scope="row"><span
                                className="fw-normal heading-color ps-lg-4 mb-0">CPA Consultation</span></th>
                            <td className="text-center text-danger"><BsXCircle size={20} className="fa-lg"/></td>
                            <td className="text-center"> 30 min</td>
                            <td className="text-center"> 60 min</td>
                        </tr>

                        <tr>
                            <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Multi-State Optimization</span></th>
                            <td className="text-center text-danger"><BsXCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-danger"><BsXCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                        </tr>

                        <tr>
                            <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Audit Protection</span>
                            </th>
                            <td className="text-center text-danger"><BsXCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-danger"><BsXCircle size={20} className="fa-lg"/></td>
                            <td className="text-center text-primary"><BsCheckCircle size={20} className="fa-lg"/></td>
                        </tr>

                        </tbody>

                    </table>
                </div>


            </Container>
            <LaunchCountdownModal show={showModal} onHide={closeModal} />
        </section>
    )
}

export default Features