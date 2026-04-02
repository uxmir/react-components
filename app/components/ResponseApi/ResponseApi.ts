const ApiResponse = {
  post: async (api: string, data: string | number | null) => {
    await fetch(api, {
      method: "POST",
      headers: { "Content/Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  get: async (api: string) => {
    await fetch(api);
  },
  put: async (api: string, data: string | number | null) => {
    await fetch(api, {
      method: "POST",
      headers: { "Content/Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
  delete: async (api: string) => {
    await fetch(api);
  },
};

export default ApiResponse;
