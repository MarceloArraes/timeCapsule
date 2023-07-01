import dayjs from "dayjs";
import enAu from "dayjs/locale/en-au";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

dayjs.locale(enAu);

interface Memory {
  id: string;
  coverUrl: string;
  excerpt: string;
  createdAt: string;
}

type MemoryOrNull = Memory[] | null;

const EmptyMemory = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        You didn&apos;t register any memory. {" \n"}
        <a href="" className="underline hover:text-gray-500">
          create it now
        </a>
      </p>
    </div>
  );
};

const MemoryDisplay = ({ memories = null }: { memories: MemoryOrNull }) => {
  if (!memories || memories.length === 0) {
    return <EmptyMemory />;
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time
              className="-ml-8 flex items-center gap-2 text-sm
 text-gray-100 before:h-px before:w-5 before:bg-gray-50"
            >
              {dayjs(memory.createdAt).format("D of MMM, YYYY")}
            </time>
            <Image
              className="aspect-video w-full rounded-lg object-cover"
              src={memory.coverUrl}
              alt=""
              width={592}
              height={200}
            />
            <p className="text-lg leading-relaxed text-gray-50">
              {memory?.excerpt}
            </p>

            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              See more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MemoryDisplay;
