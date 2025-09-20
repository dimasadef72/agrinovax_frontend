const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const apiService = {
  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.error ||
          responseData.message ||
          `HTTP error! status: ${response.status}`
      );
    }

    return responseData;
  },

  async get(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || errorData.message || "Unknown error");
    }

    return response.json();
  },
};