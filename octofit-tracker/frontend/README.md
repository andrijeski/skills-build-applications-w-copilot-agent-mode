# OctoFit Tracker Frontend

React 19 + Vite presentation tier for the OctoFit Tracker multi-tier application.

## Environment

Define `VITE_CODESPACE_NAME` in `.env.local` when running in GitHub Codespaces:

```text
VITE_CODESPACE_NAME=your-codespace-name
```

The frontend uses Vite environment variables through `import.meta.env`. When `VITE_CODESPACE_NAME` is set, API calls use:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is unset, the app falls back to `http://localhost:8000` to avoid `https://undefined-8000.app.github.dev` URLs.
