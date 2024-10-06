import Image from "next/image";

interface StackItem {
  name: string;
  imageUrl: string;
}

interface StackCardProps {
  stacks: StackItem[];
}

const StackCard: React.FC<StackCardProps> = ({ stacks }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="bg-white shadow-[4px_4px_0px_rgba(32,32,34,1)] p-4 flex flex-col items-center w-32 h-40"
        >
          <div className="flex-grow flex items-center justify-center">
            <Image
              src={stack.imageUrl}
              alt={stack.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h3 className="text-sm font-medium text-center mt-2">{stack.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default StackCard;
