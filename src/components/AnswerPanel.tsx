import React from 'react';
import { CheckCircle, BookOpen, Scale } from 'lucide-react';
import CitationCard from './CitationCard';

interface Citation {
  text: string;
  source: string;
  link: string;
  paragraph?: string;
}

interface AnswerPanelProps {
  answer: string;
  citations: Citation[];
  query: string;
}

const AnswerPanel: React.FC<AnswerPanelProps> = ({ answer, citations, query }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Query Display */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <Scale className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-600">Your Question</span>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed">{query}</p>
      </div>

      {/* Answer Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Legal Analysis</h2>
          </div>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>

      {/* Citations Section */}
      {citations.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Legal Citations ({citations.length})
              </h2>
            </div>
            
            <div className="space-y-4">
              {citations.map((citation, index) => (
                <CitationCard
                  key={index}
                  citation={citation}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerPanel;