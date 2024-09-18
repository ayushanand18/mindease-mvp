import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, ThumbsUp, ThumbsDown } from 'lucide-react'
import Header from './header'

export default function ChatbotInterface() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! How can I assist you today?' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
      // Here you would typically send the message to your AI backend
      // and then add the AI's response to the messages
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground w-full">
      <Header />
      
      <div className="flex-1 flex flex-col p-4 space-y-4 w-full lg:max-w-4xl self-center">
        <div className="text-lg font-semibold">Welcome, User</div>
        
        <div className="flex-1 border rounded-lg overflow-hidden flex flex-col max-h-96">
          <div className="bg-muted p-2 font-medium">Conversation Window</div>
          <ScrollArea className="flex-1 p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`max-w-[70%] p-3 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {message.content}
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        
        <div className="flex items-center space-x-2">
          <Input 
            placeholder="Type your message here..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}><Send className="h-4 w-4" /></Button>
        </div>
      </div>
      
      <footer className="flex justify-between items-center p-4 border-t">
        <Button variant="default">Contact</Button>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className='p-2' size="icon"><ThumbsUp className="h-4 w-4" /></Button>
          <Button variant="outline" className='p-2' size="icon"><ThumbsDown className="h-4 w-4" /></Button>
        </div>
      </footer>
    </div>
  )
}