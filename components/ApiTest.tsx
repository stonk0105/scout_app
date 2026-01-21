'use client';

import { useState } from 'react';

export default function ApiTest() {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const testApi = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/hello');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message || '成功連接到 API！');
    } catch (err) {
      setError(err instanceof Error ? err.message : '無法連接到 API');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
        API 測試
      </h2>
      <button
        onClick={testApi}
        disabled={loading}
        className="w-full rounded-full bg-blue-600 px-5 py-3 text-white font-medium transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? '載入中...' : '測試 Flask API'}
      </button>
      {message && (
        <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4">
          <p className="text-green-800 dark:text-green-200">{message}</p>
        </div>
      )}
      {error && (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
          <p className="text-red-800 dark:text-red-200">
            錯誤: {error}
          </p>
        </div>
      )}
    </div>
  );
}
