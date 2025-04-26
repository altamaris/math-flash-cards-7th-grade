
import React, { useState } from 'react';
import { Circle, Square, Triangle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlashCardProps {
  id: number;
  question: string;
  answer: string;
  hint: string;
  type: 'algebra' | 'geometry';
  total: number;
}

const FlashCard = ({ id, question, answer, hint, type, total }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Define decorative shapes based on card type
  const Shapes = () => type === 'algebra' ? (
    <>
      <Circle className="absolute -right-6 top-1/4 w-3 h-3 text-pink-300/30" />
      <Circle className="absolute -right-10 top-1/3 w-4 h-4 text-pink-200/20" />
      <Circle className="absolute -right-8 top-1/2 w-5 h-5 text-pink-100/10" />
    </>
  ) : (
    <>
      <Triangle className="absolute -right-6 top-1/4 w-3 h-3 text-green-300/30" />
      <Square className="absolute -right-10 top-1/3 w-4 h-4 text-green-200/20" />
      <Triangle className="absolute -right-8 top-1/2 w-5 h-5 text-green-100/10" />
    </>
  );

  return (
    <div className="relative w-full max-w-[600px] h-[400px] perspective-1000">
      <div
        className={cn(
          "w-full h-full relative transition-transform duration-700 transform-style-3d cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden rounded-xl p-8 shadow-lg",
            type === 'algebra' 
              ? "bg-gradient-to-br from-[#D946EF] to-[#FFDEE2]" 
              : "bg-gradient-to-br from-[#22C55E] to-[#F2FCE2]"
          )}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowHint(!showHint);
            }}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <Lightbulb className="w-5 h-5 text-white" />
          </button>

          {/* Card number */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 transform -rotate-90 text-white/80 font-medium">
            Card {String(id).padStart(2, '0')} / {total}
          </div>

          {/* Decorative shapes */}
          <Shapes />

          <div className="flex items-center justify-center h-full">
            <p className="text-2xl text-white text-center font-medium">{question}</p>
          </div>

          {showHint && (
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/20 rounded-lg">
              <p className="text-sm text-white">{hint}</p>
            </div>
          )}
        </div>

        {/* Back of card */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden rounded-xl p-8 shadow-lg rotate-y-180",
            type === 'algebra' 
              ? "bg-gradient-to-br from-[#FFDEE2] to-[#D946EF]" 
              : "bg-gradient-to-br from-[#F2FCE2] to-[#22C55E]"
          )}
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl text-white text-center font-medium">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
