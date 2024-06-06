import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Perpetual AI',
  description: 'AI powered chatbot connected to UNSW resource database',
};

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_WS_URL);
  return (
    <div>
      <Suspense>
        <ChatWindow />
      </Suspense>
    </div>
  );
};

export default Home;
