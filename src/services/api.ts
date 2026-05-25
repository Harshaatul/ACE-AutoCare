const BASE = import.meta.env.VITE_API_URL;

export const api = {
  post: (
    path: string,
    body: unknown,
    token?: string
  ) =>
    fetch(`${BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {}),
      },
      body: JSON.stringify(body),
    }),

  get: (path: string, token: string) =>
    fetch(`${BASE}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};