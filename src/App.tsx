import React, { useState } from 'react';
import { Scale, Sparkles } from 'lucide-react';
import QueryInput from './components/QueryInput';
import AnswerPanel from './components/AnswerPanel';
import LoadingSpinner from './components/LoadingSpinner';

interface Citation {
  text: string;
  source: string;
  link: string;
  paragraph?: string;
}

interface ApiResponse {
  answer: string;
  citations: Citation[];
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [currentQuery, setCurrentQuery] = useState<string>('');

  const simulateApiCall = async (query: string): Promise<ApiResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
      citations: [
        {
          text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          paragraph: "Para 7"
        }
      ]
    };
  };

  const handleSubmit = async (query: string) => {
    setIsLoading(true);
    setCurrentQuery(query);
    setResponse(null);
    
    try {
      const result = await simulateApiCall(query);
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Legal Assistant</h1>
            <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-600 text-lg">
            Get instant legal analysis with accurate citations from case law
          </p>
        </div>

        {/* Query Input */}
        <div className="mb-8">
          <QueryInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {/* Results */}
        <div className="space-y-6">
          {isLoading && <LoadingSpinner />}
          
          {response && !isLoading && (
            <AnswerPanel
              answer={response.answer}
              citations={response.citations}
              query={currentQuery}
            />
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>
            This is a simulation interface. In production, this would connect to a real legal database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;