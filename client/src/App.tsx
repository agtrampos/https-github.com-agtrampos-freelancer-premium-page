import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import Recursos from "./pages/Recursos";
import PlanoAcao from "./pages/PlanoAcao";
import Estrategias from "./pages/Estrategias";
import Depoimentos from "./pages/Depoimentos";
import FaqPage from "./pages/FaqPage";
import Informacoes from "./pages/Informacoes";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Reembolso from "./pages/Reembolso";
import Contato from "./pages/Contato";
import { Analytics } from "@vercel/analytics/react";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/recursos" component={Recursos} />
      <Route path="/plano-de-acao" component={PlanoAcao} />
      <Route path="/estrategias" component={Estrategias} />
      <Route path="/depoimentos" component={Depoimentos} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/informacoes" component={Informacoes} />
      <Route path="/privacidade" component={Privacidade} />
      <Route path="/termos" component={Termos} />
      <Route path="/reembolso" component={Reembolso} />
      <Route path="/contato" component={Contato} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment-success" component={PaymentSuccess} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <AppLayout />
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
