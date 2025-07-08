import React from 'react';
import { ExternalLink, FileText, Quote } from 'lucide-react';

interface Citation {
  text: string;
  source: string;
  link: string;
  paragraph?: string;
}

interface CitationCardProps {
  citation: Citation;
  index: number;
}

const CitationCard: React.FC<CitationCardProps> = ({ citation, index }) => {
  const handleCitationClick = () => {
    window.open(citation.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Quote className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                Citation {index + 1}
              </span>
              {citation.paragraph && (
                <span className="text-xs text-gray-500">
                  {citation.paragraph}
                </span>
              )}
            </div>
            
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-3 italic">
              "{citation.text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="w-4 h-4" />
                <span className="font-medium">{citation.source}</span>
              </div>
              
              <button
                onClick={handleCitationClick}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
              >
                <ExternalLink className="w-3 h-3" />
                View Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitationCard;