import React from 'react';

export default function DashboardLayout({
  children,
  users,
  revenues,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenues: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenues}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
