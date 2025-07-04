import { LinkedIn, Instagram } from "./Icons";

const Footer = () => {
  const phoneNumber = "+256 702 179856";
  const emailUs = "info@phrimpacthub.org";
  const emailFounder = "rogya@phrimpacthub.org";
  return (
    <footer
      className=" h-[40rem] bg-blue-950 text-blue-100 font-light text-lg  p-8 tracking-wide flex flex-col gap-10 items-center"
      id="footer"
    >
      <div className="mt-16 flex flex-col items-center">
        <p className="text-8xl [letter-spacing:1ch] font-extralight pl-3 mb-5">
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
      <div className="flex flex-row justify-around items-center w-full">
        <div>
          <p className="my-2">Based in Kampala, Uganda/Darfur, Sudan</p>
          <p className="my-2">From Data to Dignity: Research That Heals</p>
        </div>
        <div className="">
          <span className="w-44 flex flex-row relative gap-3 mb-5 cursor-pointer after:content-[''] after:block after:w-0 after:h-[1px] after:bg-blue-100 after:absolute after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 after:delay-100">
            <a className="w-6 h-6">
              {/* add links to the rerspective platform when provided by Roqaia */}
              <LinkedIn />
            </a>
            Follow us on Linkedin
          </span>
          <span className="flex flex-row relative gap-3 cursor-pointer after:content-[''] after:block after:w-0 after:h-[1px] after:bg-blue-100 after:absolute after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 after:delay-100">
            {/* add links to the rerspective platform when provided by Roqaia */}
            <a className="w-6 h-6">
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
            Email the founder, Roqaia
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
