const ExchangeIntegrationsVisual = () => {
    const exchanges = [
        { name: 'Coinbase', logo: '/brands/63e2f3ae88285e1b2db54792_Coinbase Icon.svg', size: 'sm' },
        { name: 'Binance', logo: '/brands/6177df9fedaa6b2504d1f3d2_Binance.avif', size: 'sm' },
        { name: 'Kraken', logo: '/brands/6177e819ff4246e1e50138d9_Kraken.avif', size: 'sm' },
        { name: 'MetaMask', logo: '/brands/6177e8e96f89317ea04c2158_MetaMask.avif', size: 'sm' },
        { name: 'Uniswap', logo: '/brands/6177eb7f714a9193876f9e1c_Uniswap.avif', size: 'sm' },
        { name: 'Gemini', logo: '/brands/gemini.avif', size: 'sm' },
    ]

    return (
        <div className="bg-light py-4 px-3">
            <div className="row g-3 align-items-center justify-content-center">
                {exchanges.map((exchange) => (
                    <div key={exchange.name} className="col-4">
                        <div 
                            className="bg-white rounded-3 p-2 d-flex align-items-center justify-content-center shadow-sm"
                            style={{ 
                                height: '60px',
                                transition: 'all 0.3s ease',
                                opacity: 0.9
                            }}
                        >
                            <img 
                                src={exchange.logo} 
                                alt={exchange.name} 
                                className="img-fluid"
                                style={{ 
                                    maxWidth: '40px', 
                                    maxHeight: '40px',
                                    filter: 'grayscale(0.2)'
                                }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <small className="text-muted fw-semibold">+15 More Exchanges</small>
            </div>
        </div>
    )
}

export default ExchangeIntegrationsVisual
