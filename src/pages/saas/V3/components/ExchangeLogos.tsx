const ExchangeLogos = () => {
    const exchanges = [
        { name: 'Coinbase', logo: '/brands/63e2f3ae88285e1b2db54792_Coinbase Icon.svg' },
        { name: 'Binance', logo: '/brands/6177df9fedaa6b2504d1f3d2_Binance.avif' },
        { name: 'Kraken', logo: '/brands/6177e819ff4246e1e50138d9_Kraken.avif' },
        { name: 'MetaMask', logo: '/brands/6177e8e96f89317ea04c2158_MetaMask.avif' },
        { name: 'Uniswap', logo: '/brands/6177eb7f714a9193876f9e1c_Uniswap.avif' },
        { name: 'Gemini', logo: '/brands/gemini.avif' },
        { name: 'Ethereum', logo: '/brands/62066b81466028e1b9296a3d_Ethereum.avif' },
        { name: 'Crypto.com', logo: '/brands/crypto.com.png' },
    ]

    return (
        <div className="position-relative py-5" style={{ minHeight: '400px' }}>
            {/* Center logo - Coinbase */}
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="text-center p-4 bg-white rounded-circle shadow" style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={exchanges[0].logo} alt={exchanges[0].name} className="img-fluid" style={{ maxWidth: '80px', maxHeight: '80px' }} />
                </div>
            </div>

            {/* Orbital logos */}
            {exchanges.slice(1).map((exchange, idx) => {
                const angle = (idx * 360) / (exchanges.length - 1)
                const radius = 180
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                    <div
                        key={exchange.name}
                        className="position-absolute top-50 start-50"
                        style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                    >
                        <div className="bg-light rounded-3 p-3 shadow-sm" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={exchange.logo} alt={exchange.name} className="img-fluid" style={{ maxWidth: '50px', maxHeight: '50px', filter: 'grayscale(0.3)' }} />
                        </div>
                    </div>
                )
            })}

            {/* Connecting lines (optional) */}
            <svg className="position-absolute top-0 start-0 w-100 h-100" style={{ pointerEvents: 'none' }}>
                <circle
                    cx="50%"
                    cy="50%"
                    r="180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="text-primary"
                    opacity="0.2"
                />
            </svg>
        </div>
    )
}

export default ExchangeLogos
