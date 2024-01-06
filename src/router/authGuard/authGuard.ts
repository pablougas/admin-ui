import { getInstance } from "@/plugins/auth";
/* eslint-disable */
export const authGuard = (
  to: { fullPath: any },
  from: { fullPath: any },
  next: () => any
) => {
  const authService = getInstance() as Record<string, any>;

  const fn = () => {
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      return next();
    }
    console.log('here')
    // Otherwise, log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn();
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch("loading", (loading: boolean): void => {
    if (loading === false) {
      return fn();
    }
  });
};
