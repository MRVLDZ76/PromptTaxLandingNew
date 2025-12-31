import {PricingPlanType} from "@/pages/saas/V1/types";
import {Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import {useLaunchModal} from '@/hooks/useLaunchModal';
import LaunchCountdownModal from '@/components/LaunchCountdownModal';

type PricingCardPropsType = {
    plan: PricingPlanType
}

const PricingCard = ({plan}: PricingCardPropsType) => {
    const {showModal, openModal, closeModal} = useLaunchModal();
    return (
        <Card className="card-body border rounded p-md-4"
              data-bs-theme={plan.isPopular && 'dark'}>
            <h6 className={plan.isPopular ? 'mb-2 text-primary' : 'mb-2'}>{plan.title}</h6>

            <div className="d-flex align-items-center">
                <span className="h1 mb-0">${plan.price}</span>
                <div className="ms-3"> 
                </div>
            </div> 

            <a href="#" onClick={openModal}
               className={plan.isPopular ? 'btn btn-primary mt-4' : 'btn btn-dark mt-4'}>Get
                started</a>
            <Link to="/contact/v2" className={`btn btn-outline-${plan.isPopular ? "white" : "light"}`}>Chat to sales</Link>

            <hr className="my-4"/>

            <h6 className="mb-0">Features</h6>
            <span>Everything in basic plan</span>

            <ul className="list-group list-group-borderless border-0 mb-0 mt-2">
                {
                    plan.features.map((feature, idx) => {
                        const Icon = feature.icon
                        return (
                            <li className="list-group-item d-flex mb-0 icons-center" key={idx}>
                                {
                                    Icon && <Icon className="text-primary me-2"/>
                                }
                                {feature.title}
                            </li>
                        )
                    })
                }
            </ul>
            <LaunchCountdownModal show={showModal} onHide={closeModal} />
        </Card>
    )
}

export default PricingCard