import { styles } from "../styles";
import { github, linkedin, twitter, mail, profilepic } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 bottom-[50px] items-center max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between`}
      >
        <div className="flex gap-5 ">
          <div className="flex flex-col items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Steven</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 mb-6 text-white-100`}>
              Full Stack Software Engineer
              <br />
              <span className={`${styles.heroSubSubText}`}>
                📍 Seoul, South Korea
              </span>
              {/* I develop user interfaces{" "}
            and web applications */}
            </p>
            <li
              className="
            flex 
            flex-wrap
            gap-4
            items-center
          "
            >
              <a
                href="https://github.com/ssan93"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-tertiary py-2 px-3 rounded-xl outline-none w-fit text-white shadow-md shadow-primary flex items-center gap-2">
                  <img
                    src={github}
                    alt="github"
                    className="w-98 h-8 object-contain"
                  />
                  Github
                </button>
              </a>
              <a
                href="https://linkedin.com/in/steven-san7"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-tertiary py-2 px-3 rounded-xl outline-none w-fit text-white shadow-md shadow-primary flex items-center gap-2">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-7 h-7 object-contain"
                  />
                  Linkedin
                </button>
              </a>

              <a
                href="https://x.com/crunchitaip"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-tertiary py-2 px-3 rounded-xl outline-none w-fit text-white shadow-md shadow-primary flex items-center gap-2">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="w-7 h-7 object-contain"
                  />
                  Twitter
                </button>
              </a>
              <a
                href="mailto:san.steven97@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-tertiary py-2 px-3 rounded-xl outline-none w-fit text-white shadow-md shadow-primary flex items-center gap-2">
                  <img
                    src={mail}
                    alt="mail"
                    className="w-7 h-7 object-contain"
                  />
                  Mail
                </button>
              </a>
            </li>
          </div>
        </div>
        <div className="w-[250px] h-[250px] sm:block hidden">
          <img
            src={profilepic}
            alt="profile-pic"
            className="object-cover rounded-full border-2"
          />
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
