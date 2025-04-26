
import { useState } from 'react';
import FlashCard from '@/components/FlashCard';
import Navigation from '@/components/Navigation';
import { flashcards } from '@/data/flashcards';
import { Lightbulb } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cards, setCards] = useState(flashcards);
  const { toast } = useToast();
  
  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(curr => curr + 1);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(curr => curr - 1);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentCardIndex(0);
    toast({
      title: "Карточки перемешаны!",
      description: "Начните изучение заново",
    });
  };

  const showGlobalHint = () => {
    toast({
      title: "Подсказка",
      description: "Нажмите на карточку, чтобы увидеть ответ. Используйте кнопку с лампочкой для дополнительной подсказки.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      {/* Global hint button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4"
        onClick={showGlobalHint}
      >
        <Lightbulb className="w-6 h-6" />
      </Button>

      {/* Main content */}
      <div className="max-w-4xl mx-auto pt-16">
        <div className="flex justify-center items-center min-h-[500px] animate-fade-in">
          <FlashCard
            {...cards[currentCardIndex]}
            total={cards.length}
          />
        </div>
      </div>

      {/* Navigation */}
      <Navigation
        currentCard={currentCardIndex + 1}
        totalCards={cards.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onShuffle={handleShuffle}
        showGlobalHint={showGlobalHint}
      />
    </div>
  );
};

export default Index;
