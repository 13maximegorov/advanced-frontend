import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError';
import { Suspense } from 'react';
import App from './app/App';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));
root.render(
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
  </BrowserRouter>,
);
