import { Footer, Header } from "../components";

interface IProps {
  children: React.ReactNode;
}
export const PageLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
