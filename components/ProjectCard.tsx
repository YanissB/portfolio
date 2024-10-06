import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="flex-col w-full h-160 max-w-sm rounded overflow-hidden bg-white border-2 shadow-[4px_4px_0px_rgba(32,32,34,1)] flex">
      <div className="relative w-full h-80">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
      </div>
      <div className="px-4 py-3 flex-grow flex flex-col justify-between">
        <h2 className="font-bold text-lg mb-1">{title}</h2>
        <p className="text-sm overflow-hidden ">{description}</p>
      </div>
      <div className="px-4 py-3 flex items-center justify-center">
        <a
          className="h-12 border-2 p-2.5 bg-white shadow-[2px_2px_0px_rgba(32,32,34,1)] rounded-full text-sm sm:text-base md:text-lg"
          href={link}
        >
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
