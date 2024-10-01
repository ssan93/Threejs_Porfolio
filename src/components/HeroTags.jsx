export const HeroTags = ({ title, image, link }) => {
  return (
    <div
      className="bg-tertiary rounded-xl shadow-md shadow-primary border-2 border-transparent
        hover:shadow-lg  hover:-translate-y-1 hover:border-tertiary-lighter 
        transform transition duration-300 ease-in-out"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <button className="py-2 px-3 flex items-center gap-2">
          <img src={image} alt="github" className="w-98 h-8 object-contain" />
          {title}
        </button>
      </a>
    </div>
  );
};
