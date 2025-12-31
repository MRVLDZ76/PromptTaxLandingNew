import type { MemberType } from "@/pages/about/V3/types"
import { Card, CardBody } from "react-bootstrap"
import { Link } from "react-router-dom"

const TeamMemberCard = ({ member }: { member: MemberType }) => {
  const { firstName, lastName, image, role } = member
  return (
    <Card className="card-img-scale bg-transparent overflow-hidden">
      <div className="card-img-scale-wrapper rounded-3">
        <img src={image} className="img-scale" alt="card image" />
      </div>
      <CardBody className="text-center px-0 pb-0">
        <h6 className="mb-0"><Link to="" className="stretched-link">{firstName} {lastName}</Link></h6>
        <small>{role}</small>
      </CardBody>
    </Card>
  )
}

export default TeamMemberCard