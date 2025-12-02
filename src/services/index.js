import http, { baseURL } from './http';
export const signUp = async (payload) => {
  const { data } = await http.post(`/auth/sign-up`, payload);
  return data;
};
export const verifyOTP = async (payload) => {
  const { data } = await http.post(`/auth/verify-otp`, payload);
  return data;
};
export const resendOTP = async (payload) => {
  const { data } = await http.post(`/auth/resend-otp`, payload);
  return data;
};

export const signIn = async (payload) => {
  const { data } = await http.post(`/auth/sign-in`, payload);
  return data;
};

export const forgetPassword = async (payload) => {
  const { data } = await http.post('/auth/forget-password', payload);
  return data;
};

export const resetPassword = async ({ newPassword, token }) => {
  const { data } = await http.post('/auth/reset-password', {
    newPassword: newPassword,
    token: token,
  });
  return data;
};
export const offersFilter = async () => {
  try {
    const { data } = await http.get('/templates/filters')
    return data;
  } catch (error) {
    console.error('Failed to fetch filters:', error.message);
    return { filters: {} };
  }
};
export const getNewOffers = async (params) => {
  try {
    const url = new URL(`${baseURL}/api/live-search-template`);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        if (Array.isArray(value)) {
          value
            .filter((v) => v !== "")
            .forEach((v) => url.searchParams.append(key, v));
        } else {
          url.searchParams.append(key, value);
        }
      }
    });
    const { data } = await http.get(url.toString());
    return data;
  } catch (error) {
    console.error('Failed to fetch offers:', error.message);
    return { data: [], page: 1, pages: 1, total: 0 };
  }
};
