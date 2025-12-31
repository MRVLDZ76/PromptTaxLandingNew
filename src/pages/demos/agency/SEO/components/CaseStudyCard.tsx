import {CaseStudyType} from "@/pages/demos/agency/SEO/types";
import {Link} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";
import {Card} from "react-bootstrap";

type CaseStudyCardPropsType = {
    item: CaseStudyType
}

const CaseStudyCard = ({item}: CaseStudyCardPropsType) => {
    return (
        <Card className="card-img-scale card-element-hover overflow-hidden">

            <div className="card-img-scale-wrapper">

                <div
                    className="card-img-overlay hover-element d-flex align-items-center justify-content-center">

                    <img src={item.company.image}
                         className="h-40px z-index-2"
                         alt="client logo"/>

                    <div className="bg-overlay bg-dark opacity-7"></div>
                </div>

                <img src={item.image}
                     className="img-scale card-img-top"
                     alt="portfolio-img"/>
            </div>

            <Card.Body>
                <Card.Title as={'h6'} className="mb-2">{item.title}</Card.Title>
                <Card.Text as={'p'} className="mb-3">{item.description}</Card.Text>

                <div className="hstack flex-wrap gap-2 mb-4">
                    {
                        item.tags && item.tags.map((tag, idx) => (
                            <div className="badge border heading-color bg-light" key={idx}>{tag}</div>
                        ))
                    }
                </div>

                <Link to={item.url}
                      className="text-primary-hover stretched-link heading-color mb-0">
                    View case study
                    <FaArrowRightLong className="fa-fw ms-2"/>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CaseStudyCard