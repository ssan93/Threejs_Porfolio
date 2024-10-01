import { styles } from "../styles";
import { github, linkedin, twitter, mail, profilepic } from "../assets";
import { HeroTags } from "./HeroTags";

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
            <div className="pb-6">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Steven</span>
              </h1>
              <div
                className={`${styles.heroSubText} flex flex-col gap-1 mt-2 mb-3 text-white-100`}
              >
                Full Stack Software Engineer
                <span className={`${styles.heroSubSubText}`}>
                  📍 Seoul, South Korea
                </span>
              </div>
              <div className={`${styles.heroDescription} max-w-[650px]`}>
                <p>
                  I'm a French software engineer with 4 years of experience in
                  web development, and expertise in frameworks like React,
                  Next.js and Node.js.
                </p>
              </div>
            </div>
            <li
              className="
            flex 
            flex-wrap
            gap-4
            items-center
          "
            >
              <HeroTags
                title="Github"
                image={github}
                link="https://github.com/ssan93"
              />
              <HeroTags
                title="Linkedin"
                image={linkedin}
                link="https://linkedin.com/in/steven-san7"
              />
              <HeroTags
                title="Twitter"
                image={twitter}
                link="https://x.com/crunchitaip"
              />
              <HeroTags
                title="Mail"
                image={mail}
                link="mailto:san.steven97@gmail.com"
              />
            </li>
          </div>
        </div>
        <div className="w-[260px] h-[260px] sm:block hidden mb-12">
          <img
            src={profilepic}
            alt="profile-pic"
            className="object-cover rounded-full border-2 border-[#915EFF]"
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
