import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { PageError } from '@/widgets/PageError';
import App from './app/App';
import '@/app/styles/index.scss';

import '@/shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary
        fallback={
          <Suspense fallback="">
            <PageError />
          </Suspense>
        }
      >
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
