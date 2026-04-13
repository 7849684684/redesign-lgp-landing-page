'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Section from '@/components/Section';

function InternalLoginContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const returnTo = searchParams.get('from') || '/internal/pipeline';

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, type: 'internal' }),
      });

      if (res.ok) {
        router.push(returnTo);
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid password. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section className="pt-24 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-10">
          <Image
            src="/logos/lgp-icon-teal-solid.svg"
            alt="The Long Game Project"
            width={48}
            height={48}
            className="mx-auto mb-6"
          />
          <p className="label text-text-tertiary mb-3">LGP Internal</p>
          <h1 className="font-editorial text-2xl md:text-3xl text-text-primary mb-2">
            Internal Dashboard
          </h1>
          <p className="text-text-secondary text-sm">
            Consultant access to all engagements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="password"
              className="label block mb-2 text-text-secondary"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoFocus
              className="w-full px-4 py-3 rounded-sm border border-surface-2 bg-surface-0 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors"
            />
          </div>

          {error && (
            <div className="text-sm text-error bg-error/5 border border-error/20 rounded-sm px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-all duration-150 bg-brand-teal text-white hover:bg-brand-teal-light disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          LGP consultants only. Contact{' '}
          <a
            href="mailto:hello@longgameproject.org"
            className="text-brand-teal hover:underline"
          >
            hello@longgameproject.org
          </a>{' '}
          if you need access.
        </p>
      </div>
    </Section>
  );
}

export default function InternalLoginPage() {
  return (
    <Suspense
      fallback={
        <Section className="pt-24 pb-16 md:pt-36 md:pb-24">
          <div className="max-w-sm mx-auto text-center">
            <div className="animate-pulse h-8 bg-surface-1 rounded w-48 mx-auto" />
          </div>
        </Section>
      }
    >
      <InternalLoginContent />
    </Suspense>
  );
}
