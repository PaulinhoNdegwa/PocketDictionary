import landingImage from '../../assets/images/landing-image.jpg'

const Landing = () => {
    return (
        <div className="max-w-5xl mx-auto text-center font-bold">
            <img className="shadow-lg rounded-sm sm:h-96 sm:w-full" src={landingImage} alt="Landing View" />
            <p className="mt-4 text-lg sm:text-3xl top-16 sm:top-64 mx-2 text-black bg-gray-100 rounded-md py-3 hover:text-white hover:bg-gray-600 center">
                Enjoy this hands-on dictionary for your day to day operations. Enrich your catalog of vocabularies
            </p>
            <hr className="mt-2" />
        </div>
    );
}

export default Landing;