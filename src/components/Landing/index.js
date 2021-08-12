import landingImage from '../../assets/images/landing-image.jpg'

const Landing = () => {
    return (
        <div className="relative max-w-5xl mx-auto text-center font-bold">
            <img className="shadow-lg rounded-md" src={landingImage} alt="Landing View" />
            <p className="absolute text-lg sm:text-3xl top-16 sm:top-64 mx-2 text-white bg-black rounded-sm py-3 hover:text-black hover:bg-gray-100 center">
                Enjoy this hands-on dictionary for your day to day operations. Enrich your catalog of vocabularies
            </p>
        </div>
    );
}

export default Landing;