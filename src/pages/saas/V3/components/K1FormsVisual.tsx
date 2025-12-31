import { BsFileEarmarkText, BsCheckCircleFill, BsClockHistory } from 'react-icons/bs'

const K1FormsVisual = () => {
    const formFields = [
        { label: 'Capital Gains', value: '$18,450', status: 'complete' },
        { label: 'Staking Income', value: '$3,280', status: 'complete' },
        { label: 'DeFi Rewards', value: '$1,920', status: 'processing' },
    ]

    return (
        <div className="bg-light py-4 px-3">
            {/* Form Preview Card */}
            <div className="bg-white rounded-3 p-3 shadow-sm mb-3">
                <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-2 p-2 me-2">
                        <BsFileEarmarkText className="text-primary" size={20} />
                    </div>
                    <div className="flex-grow-1">
                        <div className="fw-semibold small">Form 8949</div>
                        <div className="text-muted" style={{ fontSize: '0.7rem' }}>Schedule D</div>
                    </div>
                    <div className="badge bg-success bg-opacity-10 text-success border-0 px-2 py-1">
                        <small>Auto-generated</small>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="vstack gap-2">
                    {formFields.map((field, idx) => (
                        <div key={idx} className="d-flex align-items-center justify-content-between border-bottom border-light pb-2">
                            <div className="d-flex align-items-center gap-2">
                                {field.status === 'complete' ? (
                                    <BsCheckCircleFill className="text-primary" size={14} />
                                ) : (
                                    <BsClockHistory className="text-warning" size={14} />
                                )}
                                <span className="small text-muted">{field.label}</span>
                            </div>
                            <span className="small fw-semibold">{field.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Processing Time */}
            <div className="text-center">
                <div className="badge bg-white text-dark border border-primary border-opacity-25 d-inline-flex align-items-center gap-2 py-2 px-3 rounded-pill shadow-sm">
                    <BsClockHistory className="text-primary" size={14} />
                    <span className="small fw-semibold">Calculated in 30 sec</span>
                </div>
            </div>
        </div>
    )
}

export default K1FormsVisual
