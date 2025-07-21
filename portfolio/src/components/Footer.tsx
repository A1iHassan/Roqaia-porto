import { LinkedIn, Instagram } from "./Icons";

const Footer = () => {
  const phoneNumber = "+256 702 179856";
  const emailUs = "phrimpacthub@gmail.com";
  const emailFounder = "rogyamo@gmail.com";
  return (
    <footer
      className="sm:h-[40rem] h-screen bg-blue-950 text-blue-100 font-light text-lg  p-8 tracking-wide flex flex-col gap-10 items-center"
      id="footer"
    >
      <div className="sm:mt-16 sm:flex sm:flex-col sm:items-center hidden">
        <p className="sm:text-8xl sm:[letter-spacing:1ch] sm:font-extralight sm:pl-3 sm:mb-5">
          P.H.R.I.H
        </p>
        <p className="flex flex-row gap-3 mt-5 mb-8">
          <span>Public</span>
          <span>Health</span>
          <span>Research</span>
          <span>&</span>
          <span>Impact</span>
          <span>Hub</span>
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-20 justify-around items-center w-full">
        <div>
          <p className="my-2">Based in Kampala, Uganda/Darfur, Sudan</p>
          <p className="my-2">From Data to Dignity: Research That Heals</p>
        </div>
        <div className="">
          <span className="ml-2 sm:ml-0 w-44 flex flex-row relative gap-3 mb-5 cursor-pointer after:content-[''] after:block after:w-0 after:h-[1px] after:bg-blue-100 after:absolute after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 after:delay-100">
            <a
              href="https://www.linkedin.com/company/public-health-research-impact-hub-phrih/"
              className="w-6 h-6"
            >
              {/* add links to the rerspective platform when provided by Roqaia */}
              <LinkedIn />
            </a>
            Follow us on Linkedin
          </span>
          <span className="flex flex-row relative gap-3 cursor-pointer after:content-[''] after:block after:w-0 after:h-[1px] after:bg-blue-100 after:absolute after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 after:delay-100">
            {/* add links to the rerspective platform when provided by Roqaia */}
            <a
              href="https://www.instagram.com/phrih.africa?igsh=MTB6Y3Q2NTd4cXAyNw=="
              className="sm:w-6 sm:h-6 w-10 h-10"
            >
              <Instagram />
            </a>
            Stay in tune with our new acivities Instagram
          </span>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <span className="mb-5 text-xl tracking-wider">Stay In Touch</span>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailUs}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer border-2 border-blue-100 p-2 hover:bg-blue-100 hover:text-blue-900 transition-all duration-300"
          >
            Email Us
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailFounder}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer border-2 border-blue-100 p-2 hover:bg-blue-100 hover:text-blue-900 transition-all duration-300"
          >
            Email the founder, Rogya
          </a>
          <a
            href={`https://wa.me/${phoneNumber.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer border-2 border-blue-100 p-2 hover:bg-blue-100 hover:text-blue-900 transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
