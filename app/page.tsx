import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Perpetual AI',
  description: 'AI powered chatbot connected to UNSW resource database',
};

const Home = () => {
  return (
    <div>
      <Suspense>
        <ChatWindow />
      </Suspense>
    </div>
  );
};

export default Home;
