import { describe, it, expect } from 'vitest';
import { POST } from '../app/api/chat/route';

// Mock request helper
function makeRequest(body) {
  return POST({ json: () => Promise.resolve(body) });
}

describe('API Security Tests', () => {
  it('blocks admin tool calls without auth', async () => {
    const response = await makeRequest({ action: 'admin', adminAction: 'deleteUser', userId: '123' });
    expect(response.ok).toBe(false);
  });
  it('blocks refund calls without auth', async () => {
    const response = await makeRequest({ action: 'refund', customerId: '123', amount: 100 });
    expect(response.ok).toBe(false);
  });
  it('blocks fetch_url calls to internal IPs', async () => {
    const response = await makeRequest({ action: 'fetch_url', url: 'http://localhost' });
    expect(response.ok).toBe(false);
  });
});