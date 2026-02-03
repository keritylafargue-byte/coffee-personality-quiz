"use client";

import { useState } from "react";

// Personality types with their details
const personalities = {
  boldAdventurer: {
    name: "Bold Adventurer",
    emoji: "🏔️",
    tagline: "Life's too short for weak coffee",
    coffee: "Double Shot Espresso",
    description: "You crave intensity and new experiences. You're the first to try seasonal specials and aren't afraid of bold, complex flavors.",
  },
  cozyClassic: {
    name: "Cozy Classic",
    emoji: "📖",
    tagline: "Comfort in every cup",
    coffee: "House Blend Drip Coffee",
    description: "You appreciate the familiar and find joy in rituals. Your perfect morning includes a reliable cup and a moment of peace.",
  },
  zenMinimalist: {
    name: "Zen Minimalist",
    emoji: "🧘",
    tagline: "Simple. Pure. Perfect.",
    coffee: "Americano",
    description: "You value quality over quantity. Clean, simple, and intentional - that's your approach to coffee and life.",
  },
  indulgentTreat: {
    name: "Indulgent Treat",
    emoji: "🍫",
    tagline: "Every day deserves a little sweetness",
    coffee: "Caramel Mocha",
    description: "Coffee is your daily celebration. You believe in savoring the moment and treating yourself to life's sweet pleasures.",
  },
};

type PersonalityKey = keyof typeof personalities;

// Quiz questions with answer mappings
const questions = [
  {
    id: 1,
    question: "It's Saturday morning. What sounds perfect?",
    answers: [
      { text: "Exploring a new hiking trail", icon: "🏔️", personality: "boldAdventurer" as PersonalityKey },
      { text: "Curling up with a good book", icon: "📖", personality: "cozyClassic" as PersonalityKey },
      { text: "Morning yoga and meditation", icon: "🧘", personality: "zenMinimalist" as PersonalityKey },
      { text: "Brunch with all the extras", icon: "🥐", personality: "indulgentTreat" as PersonalityKey },
    ],
  },
  {
    id: 2,
    question: "You're at a new coffee shop. You order...",
    answers: [
      { text: "Whatever's most unique on the menu", icon: "✨", personality: "boldAdventurer" as PersonalityKey },
      { text: "My usual - why mess with perfection?", icon: "☕", personality: "cozyClassic" as PersonalityKey },
      { text: "Black coffee, nothing fancy", icon: "⬛", personality: "zenMinimalist" as PersonalityKey },
      { text: "The most decadent seasonal special", icon: "🍰", personality: "indulgentTreat" as PersonalityKey },
    ],
  },
  {
    id: 3,
    question: "Your ideal vacation involves...",
    answers: [
      { text: "Adventure and adrenaline", icon: "🎢", personality: "boldAdventurer" as PersonalityKey },
      { text: "Returning to a favorite spot", icon: "🏡", personality: "cozyClassic" as PersonalityKey },
      { text: "A quiet retreat with minimal plans", icon: "🌿", personality: "zenMinimalist" as PersonalityKey },
      { text: "Spa days and fine dining", icon: "🛁", personality: "indulgentTreat" as PersonalityKey },
    ],
  },
  {
    id: 4,
    question: "When cooking dinner, you prefer to...",
    answers: [
      { text: "Experiment with new recipes", icon: "🧪", personality: "boldAdventurer" as PersonalityKey },
      { text: "Make a family favorite", icon: "👨‍👩‍👧", personality: "cozyClassic" as PersonalityKey },
      { text: "Keep it simple and healthy", icon: "🥗", personality: "zenMinimalist" as PersonalityKey },
      { text: "Go all out on something special", icon: "🍝", personality: "indulgentTreat" as PersonalityKey },
    ],
  },
  {
    id: 5,
    question: "Your friends would describe you as...",
    answers: [
      { text: "The adventurous one", icon: "🚀", personality: "boldAdventurer" as PersonalityKey },
      { text: "The reliable one", icon: "🤝", personality: "cozyClassic" as PersonalityKey },
      { text: "The calm one", icon: "😌", personality: "zenMinimalist" as PersonalityKey },
      { text: "The fun one", icon: "🎉", personality: "indulgentTreat" as PersonalityKey },
    ],
  },
];

// Welcome Screen Component
function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center max-w-lg mx-auto">
      <div className="text-6xl mb-6">☕</div>
      <h1 className="text-4xl md:text-5xl font-bold text-dark-roast mb-4">
        What&apos;s Your Coffee Personality?
      </h1>
      <p className="text-lg text-espresso mb-8 leading-relaxed">
        Answer 5 quick questions to discover your unique coffee identity.
        Find out which drinks match your vibe and get personalized recommendations!
      </p>
      <button
        onClick={onStart}
        className="bg-coffee-brown hover:bg-espresso text-cream font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Start Quiz
      </button>
    </div>
  );
}

// Progress Bar Component
function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm text-espresso mb-2">
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-3 bg-cream rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-coffee-brown to-caramel rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Question Component
function QuestionCard({
  question,
  onAnswer
}: {
  question: typeof questions[0];
  onAnswer: (personality: PersonalityKey) => void;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-dark-roast text-center mb-8">
        {question.question}
      </h2>
      <div className="grid gap-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.personality)}
            className="bg-white/80 hover:bg-white border-2 border-warm-beige hover:border-coffee-brown rounded-2xl p-5 text-left transition-all duration-300 transform hover:scale-102 hover:shadow-lg flex items-center gap-4 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
              {answer.icon}
            </span>
            <span className="text-lg text-dark-roast font-medium">
              {answer.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Results Component
function Results({
  scores,
  onRestart
}: {
  scores: Record<PersonalityKey, number>;
  onRestart: () => void;
}) {
  // Calculate percentages
  const totalQuestions = questions.length;
  const results = Object.entries(scores)
    .map(([key, score]) => ({
      key: key as PersonalityKey,
      ...personalities[key as PersonalityKey],
      score,
      percentage: Math.round((score / totalQuestions) * 100),
    }))
    .sort((a, b) => b.score - a.score);

  const primary = results[0];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Primary Result */}
      <div className="bg-white/90 rounded-3xl p-8 mb-8 shadow-xl text-center">
        <div className="text-6xl mb-4">{primary.emoji}</div>
        <h2 className="text-3xl md:text-4xl font-bold text-dark-roast mb-2">
          You&apos;re a {primary.name}!
        </h2>
        <p className="text-caramel font-semibold text-lg mb-4">
          &ldquo;{primary.tagline}&rdquo;
        </p>
        <p className="text-espresso leading-relaxed mb-6">
          {primary.description}
        </p>
        <div className="bg-gradient-to-r from-warm-beige/50 to-caramel/30 rounded-2xl p-6">
          <p className="text-sm text-espresso uppercase tracking-wide mb-2">
            Your Perfect Drink
          </p>
          <p className="text-2xl font-bold text-coffee-brown">
            {primary.coffee}
          </p>
        </div>
      </div>

      {/* Full Breakdown */}
      <div className="bg-white/70 rounded-3xl p-6 mb-8">
        <h3 className="text-xl font-bold text-dark-roast mb-6 text-center">
          Your Full Coffee Profile
        </h3>
        <div className="space-y-4">
          {results.map((result) => (
            <div key={result.key} className="flex items-center gap-4">
              <span className="text-2xl w-10">{result.emoji}</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-dark-roast">
                    {result.name}
                  </span>
                  <span className="text-espresso font-semibold">
                    {result.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-cream rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-coffee-brown to-caramel rounded-full transition-all duration-1000"
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
                <p className="text-sm text-espresso/70 mt-1">
                  Try: {result.coffee}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restart Button */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className="bg-coffee-brown hover:bg-espresso text-cream font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}

// Main Quiz Component
export default function Home() {
  const [screen, setScreen] = useState<"welcome" | "quiz" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<PersonalityKey, number>>({
    boldAdventurer: 0,
    cozyClassic: 0,
    zenMinimalist: 0,
    indulgentTreat: 0,
  });

  const handleStart = () => {
    setScreen("quiz");
  };

  const handleAnswer = (personality: PersonalityKey) => {
    // Update scores
    const newScores = {
      ...scores,
      [personality]: scores[personality] + 1,
    };
    setScores(newScores);

    // Move to next question or results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen("results");
    }
  };

  const handleRestart = () => {
    setScreen("welcome");
    setCurrentQuestion(0);
    setScores({
      boldAdventurer: 0,
      cozyClassic: 0,
      zenMinimalist: 0,
      indulgentTreat: 0,
    });
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {screen === "welcome" && (
          <div className="flex items-center justify-center min-h-[80vh]">
            <WelcomeScreen onStart={handleStart} />
          </div>
        )}

        {screen === "quiz" && (
          <div className="pt-8">
            <ProgressBar current={currentQuestion + 1} total={questions.length} />
            <QuestionCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {screen === "results" && (
          <div className="pt-8">
            <Results scores={scores} onRestart={handleRestart} />
          </div>
        )}
      </div>
    </main>
  );
}
