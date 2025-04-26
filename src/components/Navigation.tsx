
import { ArrowLeft, ArrowRight, Shuffle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface NavigationProps {
  currentCard: number;
  totalCards: number;
  onNext: () => void;
  onPrev: () => void;
  onShuffle: () => void;
  showGlobalHint: () => void;
}

const Navigation = ({
  currentCard,
  totalCards,
  onNext,
  onPrev,
  onShuffle,
  showGlobalHint
}: NavigationProps) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-6">
      <Button
        variant="outline"
        size="lg"
        className="bg-white/90 hover:bg-white"
        onClick={onPrev}
        disabled={currentCard === 1}
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>

      <div className="bg-white/90 px-6 py-2 rounded-lg font-medium">
        {currentCard} / {totalCards}
      </div>

      <Button
        variant="outline"
        size="lg"
        className="bg-white/90 hover:bg-white"
        onClick={onNext}
        disabled={currentCard === totalCards}
      >
        <ArrowRight className="w-5 h-5" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="bg-white/90 hover:bg-white"
        onClick={onShuffle}
      >
        <Shuffle className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Navigation;
