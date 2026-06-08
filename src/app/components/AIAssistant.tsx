import { useState } from 'react';
import { Sparkles, X, Send, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; isRecommendation?: boolean }[]>([
    {
      text: 'Analyze the current faculty load and recommend an instructor for the Advanced Networking lecture slot.',
      isUser: false,
      isRecommendation: true
    },
    {
      text: 'Based on certification alignment and availability, Alejandro Burgos Jr. is the primary recommendation.',
      isUser: false
    }
  ]);

  const contextInsights = [
    { icon: '⏰', text: 'Cisco Certified Network Associate (CCNA) renewal pending for 2 faculty members.' },
    { icon: '😊', text: 'Alejandro Burgos Jr. has a 94% student satisfaction rating in Advanced Systems.' },
    { icon: '⚠️', text: 'Conflict detected in Room 204 during the proposed Tuesday slot.' }
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages([...messages, { text: message, isUser: true }]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'I can help you with scheduling optimization, faculty load analysis, and conflict resolution. What would you like to explore?',
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[420px] h-[600px] flex flex-col shadow-2xl border z-50" style={{ borderColor: '#E5E7EB', borderRadius: '12px' }}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white" style={{ borderRadius: '12px 12px 0 0' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <Sparkles size={16} style={{ color: 'white' }} />
              </div>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: '#002B7F' }}>AI Recommender: Your Scheduling</h3>
                <p className="text-xs" style={{ color: '#666666' }}>Companion</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-gray-100 p-1.5 rounded">
              <X size={18} style={{ color: '#666666' }} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index}>
                {msg.isRecommendation ? (
                  <div className="p-3 rounded-lg mb-2" style={{ backgroundColor: '#1e3a5f', color: 'white' }}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <div className="mt-2 flex justify-end">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Admin</span>
                    </div>
                  </div>
                ) : msg.isUser ? (
                  <div className="flex justify-end">
                    <div className="max-w-[85%] p-3 rounded-lg" style={{ backgroundColor: '#f3f4f6', color: '#333333' }}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e5e7eb' }}>
                      <Sparkles size={12} style={{ color: '#666666' }} />
                    </div>
                    <div className="max-w-[85%] p-3 rounded-lg" style={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
                      <p className="text-xs mb-1" style={{ color: '#666666', fontWeight: 600 }}>AI Assistant</p>
                      <p className="text-sm" style={{ color: '#333333' }}>{msg.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Contextual Insights */}
            <div className="mt-4 p-3 rounded-lg border" style={{ backgroundColor: 'white', borderColor: '#e5e7eb' }}>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs" style={{ color: '#b45309', fontWeight: 700 }}>⚡ CONTEXTUAL INSIGHTS</span>
              </div>
              <div className="space-y-2">
                {contextInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-sm">{insight.icon}</span>
                    <p className="text-xs leading-relaxed" style={{ color: '#666666' }}>{insight.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white" style={{ borderRadius: '0 0 12px 12px' }}>
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask AI Recommender..."
                className="flex-1 text-sm"
                style={{ borderColor: '#e5e7eb' }}
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#002B7F' }}
              >
                <Send size={18} style={{ color: 'white' }} />
              </button>
            </div>
            <p className="text-xs text-center mt-2" style={{ color: '#999999' }}>
              Powered by STI Academic Intelligence Engine
            </p>
          </div>
        </Card>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-50"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        {isOpen ? (
          <X size={24} style={{ color: 'white' }} />
        ) : (
          <Sparkles size={24} style={{ color: 'white' }} />
        )}
      </button>
    </>
  );
}
