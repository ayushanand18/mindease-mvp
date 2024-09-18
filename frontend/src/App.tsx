// import ChatbotInterface from './components/chatbot-interface'

// function App() {
//   return (
//     <div className="w-screen mx-auto px-20">
//       <ChatbotInterface />
//     </div>
//   )
// }

// export default App

import { Provider } from 'react-redux';
import { AuthProvider } from '@/context/auth-context';
import ChatbotInterface from '@/components/chatbot-interface';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="w-screen mx-auto px-20">
          <ChatbotInterface />
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;