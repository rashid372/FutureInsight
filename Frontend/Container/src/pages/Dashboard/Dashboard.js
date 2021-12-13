import React,{lazy} from 'react';

export default function Dashboard() {
  const MarketingAppLazy=lazy(() => import('../../components/MarketingApp'));
  return (
    <div>
      <h3>Dashboard Page</h3>
      <MarketingAppLazy />
    </div>
  );
}
