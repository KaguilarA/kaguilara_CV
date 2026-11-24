# Kevin Aguilar — Senior Full Stack Developer & Software Architect CV Web App

High-performance, futuristic portfolio & interactive CV application built with React 19, TypeScript, Tailwind CSS, HTML5 Canvas 2D engine, and native Web Audio API.

---

## CV content

All content previously defined in `src/data/resumeData.ts` lives in
`src/data/resumeData.json`: personal information, experience, architecture,
skills, certifications, games, and open-source libraries. Edit this JSON to
update those sections or copy it into a database or another service.

`src/types/resume.ts` defines the `ResumeData` contract, and
`src/data/resumeData.ts` keeps the existing typed exports for the components.
The JSON is currently bundled with the application, so publishing changes still
requires a build. Backend loading, authentication, and editing are future work.
Spanish translations remain in `src/i18n.tsx`; update them when changing
translated content.

### Full stack project evidence

Taurus, Megaphone Messenger, and Folio (Lawyer-up) appear as project work in the
experience timeline and as architectural case studies. The printable CV separates
project work from employment. English and Spanish use the same project records.
Project dates and performance metrics are omitted where not verified.

Content was checked against the local companion repositories on November 23, 2026:

| Project | Implementation and documentation sources | Scope reflected in the CV |
| --- | --- | --- |
| Taurus | `../taurus-api/README.md`, controllers and Socket.IO services; `../taurus-ng-fe/docs/architecture.md` and package manifest | Per-business database deployments, transactions, idempotent checkout, authorized real-time updates, ONVO, Angular Signals |
| Megaphone Messenger | `../megaphone-msgr-api/README.md`, message controller and webhook route; `../megaphone-msgr-ngFE/README.md` and package manifest | Owner/permission-scoped messaging, WAHA and email integrations, media processing, public SSR and private dashboard |
| Folio | `../lawyer-up-BE/README.md`, `docs/architecture.md`, document/case services and package manifest; `../lawyer-up-FE/README.md` and package manifest | Case sharing, document snapshots and versioned templates, PDF/DOCX drafts, revocable sessions, Node SSR release artifacts |

Folio documents are working drafts requiring professional review. Release artifact
generation does not establish that Folio is deployed publicly. Taurus uses separate
business deployments/databases; its description does not imply a shared-database
multi-tenant design. Messaging history records send outcomes without promising
WhatsApp delivery or read confirmation.

---

## 🚀 Automated Deployment with GitHub Actions

This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and deploys the site to **GitHub Pages** on every push to `main`.

### Steps to Publish:

1. **Create a new repository on GitHub**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name it `cv` or `portfolio` (or `kaguilara.github.io` for a user-root domain).

2. **Connect remote & push**:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages in GitHub settings**:
   - In your GitHub repository, navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

The workflow will trigger immediately, build the bundle with Node 22, and publish your CV live!

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build & verify TypeScript
npm run build
```
