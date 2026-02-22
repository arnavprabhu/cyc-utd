# CYC UTD Website – Architecture Decisions

## Contact form: API vs mailto

**Decision:** Use the existing FastAPI contact endpoint (`POST /api/py/contact`) instead of mailto.

**Rationale:** The backend already sends confirmation and team notification via SendGrid. Using the API enables tracking form submissions, avoids dependency on the user's email client, and provides a consistent experience. The frontend contact form will POST to the API and show success/error toasts.

## Team data: Notion API vs static

**Decision:** Keep team roster in static data ([app/team/members.tsx](app/team/members.tsx)) for the current revision.

**Rationale:** The Notion roster API exists and can be adopted later for build-time data. Static data avoids build-time API keys and failures during export; future students can switch to Notion-driven team page by fetching at build time with a fallback to the static list.
