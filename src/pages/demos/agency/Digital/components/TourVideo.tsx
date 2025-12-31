import Jarallax from "@/components/Jarallax";

const TourVideo = () => {

    return (
        <Jarallax className='bg-parallax position-relative h-400px h-xl-750px' options={{
            videoLoop: true,
            videoSrc: 'https://www.youtube.com/watch?v=O41Nm6l0sbY',
        }}>
            <div className="bg-overlay bg-dark opacity-3"></div>
        </Jarallax>
    )
}

export default TourVideo