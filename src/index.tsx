import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError';
import { Suspense } from 'react';
import App from './app/App';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={(
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )}
      >
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
