import { PromotionCard as PromotionCardType } from "@/lib/types";
import Image from "next/image";

interface PromotionCardProps {
  promotion: PromotionCardType;
}

export default function PromotionCard({ promotion }: PromotionCardProps) {
  const { promotion_card } = promotion;
  
  return (
    <article className="group relative flex-shrink-0 w-[280px] aspect-square rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] bg-white">
      {promotion_card.image?.url ? (
        <Image
          src={`${promotion_card.image.url}?environment=${process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT}`}
          alt={promotion_card.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
          <span className="text-white text-xl font-bold text-center px-4">{promotion_card.title}</span>
        </div>
      )}
      
      {/* Hover overlay with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <h3 className="text-white font-semibold text-lg drop-shadow-lg">{promotion_card.title}</h3>
        </div>
      </div>
    </article>
  );
}
