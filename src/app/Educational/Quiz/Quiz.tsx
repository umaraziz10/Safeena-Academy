'use client'
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { questions } from "./Question";
import { useTimer } from "./useTimer";
import { useToast } from "./use-toast";

function App() {
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<string, string>>({
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
  });

  const { formattedTime } = useTimer({
    initialMinutes: 30, // You can change this to set different durations
    onTimeEnd: () => {
      toast({
        title: "Time's up!",
        description: "Please submit your answers now.",
        variant: "destructive",
      });
    },
  });

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        position: "absolute",
        top: "0px",
        background:
          "linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 72.78%, #337BBF 96.96%)",
      }}
    >
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-[#337bbf]/20 gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <Button
            variant="ghost"
            className="flex items-center gap-1 text-[#337bbf] bg-[#ffee5a] hover:bg-[#ffee5a]/90 rounded-full px-4 py-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="font-medium">Back</span>
          </Button>

          <div className="mt-2 sm:mt-0 sm:ml-2">
            <h1 className="text-[#337bbf] text-xl font-medium">Week 1 Quiz</h1>
            <p className="text-[#337bbf] text-sm">Graded Assessment • 30 min</p>
          </div>
        </div>

        <div className="bg-white/80 border border-[#337bbf]/30 rounded-md px-4 py-2 self-end sm:self-auto">
          <p className="text-[#337bbf] text-center">
            <span className="text-xs">Time Left</span>
            <br />
            <span className="font-medium">{formattedTime}</span>
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="space-y-3 sm:space-y-4">
            <h2 className="text-[#000000] font-medium text-base sm:text-lg">
              {question.id}. {question.text}
            </h2>

            <RadioGroup
              value={answers[question.id]}
              onValueChange={(value) => handleAnswerChange(question.id, value)}
              className="space-y-2 sm:space-y-3 pl-1"
            >
              {question.options.map((option) => (
                <div
                  key={`${question.id}-${option.id}`}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <RadioGroupItem
                    value={option.id}
                    id={`q${question.id}-option${option.id}`}
                    className="border-[#337bbf] text-[#337bbf] mt-1"
                  />
                  <Label
                    htmlFor={`q${question.id}-option${option.id}`}
                    className="text-[#000000] text-sm sm:text-base font-normal leading-tight"
                  >
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}

        <div className="pt-4 sm:pt-6 pb-8">
          <Button className="bg-[#ffee5a] hover:bg-[#ffee5a]/90 text-[#337bbf] font-medium px-8 sm:px-10 py-2 rounded-md border-none">
            Submit
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;