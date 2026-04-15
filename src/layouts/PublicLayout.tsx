import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdminGuard from '../components/AdminGuard';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Learning path pages
const Proposal = lazy(() => import('../pages/proposal/Proposal'));
const Literature = lazy(() => import('../pages/literature/Literature'));
const Methods = lazy(() => import('../pages/methods/Methods'));
const DataCollection = lazy(() => import('../pages/data-collection/DataCollection'));
const Analysis = lazy(() => import('../pages/analysis/Analysis'));
const Interpretation = lazy(() => import('../pages/interpretation/Interpretation'));
const Writing = lazy(() => import('../pages/writing/Writing'));
const IrbEthics = lazy(() => import('../pages/irb-ethics/IrbEthics'));
const QuantitativeMethods = lazy(() => import('../pages/quantitative-methods/QuantitativeMethods'));
const QualitativeMethodsPage = lazy(() => import('../pages/qualitative-methods/QualitativeMethods'));
const Ahp = lazy(() => import('../pages/ahp/Ahp'));

const NotFound = lazy(() => import('../pages/NotFound'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<MyPage />} />

            {/* Learning Paths */}
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/data-collection" element={<DataCollection />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/interpretation" element={<Interpretation />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/irb-ethics" element={<IrbEthics />} />
            <Route path="/quantitative-methods" element={<QuantitativeMethods />} />
            <Route path="/qualitative-methods" element={<QualitativeMethodsPage />} />
            <Route path="/ahp" element={<Ahp />} />

            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
