import {Card} from "react-bootstrap";
import {MemberType} from "@/pages/demos/agency/SEO/types";
import { Link } from "react-router-dom";

type MemberCardPropsType = {
    member: MemberType
}
const MemberCard = ({member}: MemberCardPropsType) => {
    return (
        <Card className="card-body bg-transparent text-center p-4">

            <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                <img className="avatar-img rounded-circle" src={member.avatar}
                     alt="avatar"/>
            </div>

            <h6 className="mb-1"><Link to="">{member.firstName} {member.lastName}</Link></h6>
            <small>{member.role}</small>

            <ul className="list-inline mb-0 mt-3">
                {
                    member.socialLinks.map((link, idx) => {
                        const Icon = link.icon
                        return (<li className="list-inline-item" key={idx}>
                            <Link className="btn btn-xs btn-icon btn-light" to="">
                                <Icon className="fa-fw lh-base"/>
                            </Link>
                        </li>)
                    })
                }
            </ul>
        </Card>
    )
}

export default MemberCard