import { AuthProvider } from "./Auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const HerosApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
