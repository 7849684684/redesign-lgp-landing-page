'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton({ redirectTo = '/portal/login' }: { redirectTo?: string }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push(redirectTo);
  }

  return (
    <button
      onClick={handleLogout}
      className="text-xs text-text-tertiary hover:text-text-primary transition-colors"
    >
      Sign out
    </button>
  );
}
