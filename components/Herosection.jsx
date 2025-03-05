function Herosection() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-2xl shadow-lg mt-10 mb-10" style={{border:"3px solid black"}}>
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center border-2 border-gray-200">
          <img 
            src="./Images/intro.jpg" 
            alt="Hero" 
            className="w-100 h-auto rounded-lg shadow-md"
          />
        </div>
  
        {/* Right Side - Content */}
        <div className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 ml-0 md:ml-8 border-2 border-black-200">
          <h1 className="text-3xl font-bold text-gray-800">
          Know GITAM
          </h1>
          <p className="text-lg text-gray-600 mt-4">
          
Founded in 1980, GITAM Deemed to be University stands at the intersection of multidisciplinary applied education and translational research. With 12 schools across Bengaluru, Hyderabad, and Visakhapatnam, GITAM empowers students to discover their ikigai through global perspectives, industry collaborations, and holistic development. Guided by integrity and the pursuit of knowledge and moral values, GITAM shapes future-ready citizens who drive entrepreneurship, innovation, and create meaningful societal impact.

Committed to excellence, GITAM fosters diligence, innovation, entrepreneurship, collaboration, and community service.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  
  export default Herosection;
  