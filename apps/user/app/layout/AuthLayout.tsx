import { Footer, Header } from "../components";

interface IProps {
  children: React.ReactNode;
}
export const AuthLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
