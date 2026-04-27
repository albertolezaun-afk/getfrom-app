# From — Complete Product Documentation

> Living document. Updated automatically with each development session.
> Last update: 2026-04-27 (session 2)

---

## What is From

**From** is a native macOS app that works as a personal second brain. It combines Markdown notes, task management, calendar views, autonomous AI agents, and iCloud sync — all in a local-first app where data is owned by the user and never leaves their device.

**Tagline:** Your second brain. On your Mac. Yours alone.

**Value proposition:**
- **Local-first, radical privacy:** No mandatory servers, no telemetry, no lock-in. Notes are standard `.md` files that work with Obsidian, iA Writer, VS Code, or any text editor.
- **Native macOS:** Built in Swift and SwiftUI. Native performance with deep system integration (Calendar, Reminders, iCloud Drive, Spotlight).
- **Integrated AI:** Conversational assistant with full vault context. Autonomous agents that work on their own.
- **Natural organization:** Flexible parent-child hierarchy without rigid folders. Areas with colors, customizable types, configurable views.

**Target audience:**
- People tired of cloud-dependent note apps
- Users who prioritize privacy
- Mac users who want native performance
- Knowledge workers (projects, tasks, interconnected notes)
- AI enthusiasts who want local RAG on their own data

---

## Technology stack

| Component | Technology |
|---|---|
| macOS App | Swift 5 + SwiftUI |
| Platform | macOS 14+ (Sonoma) |
| Storage | `.md` files in iCloud Drive |
| Search | SQLite FTS5 (full-text search + RAG) |
| Optional backend | TypeScript + Bun + Hono + PostgreSQL |
| Sync | CloudKit (iCloud) |
| Calendar | EventKit (Apple Calendar + Reminders) |
| AI | Multi-provider: Anthropic, OpenAI, Google |
| Payments | LemonSqueezy |
| Landing | Static HTML (getfrom.app, GitHub Pages) |

---

## Vault structure

From works on a folder in iCloud Drive (the "vault") with this structure:

```
Centro/                         (vault root)
├── Notes/                      (all user notes)
├── Journal/                    (daily notes: YYYYMMDD.md)
├── Raices/                      (areas/roots: main categories)
├── Agents/                     (autonomous AI agents)
├── Templates/                  (note templates)
├── Files/                      (attachments)
├── Collections/                (note collections)
└── .from/                      (internal metadata)
    ├── versions/               (version history)
    ├── ai_instructions/        (permanent AI instructions per note)
    └── activity.jsonl          (activity log)
```

Each note is a `.md` file with YAML frontmatter that defines its properties.

---

## First use — Onboarding

### Step 1: Welcome screen
When opening From for the first time, **VaultPickerView** appears — a 2-step wizard:
1. **Philosophy:** Explains what From is and how it works (local-first, .md files)
2. **Choose folder:** The user selects a folder in their Mac/iCloud Drive as the vault

### Step 2: Create first Root
After selecting the vault, From shows the Roots view (SpacesView) with an empty state that invites creating the first area:
- Each Root has its own color
- Notes belong to a Root
- Roots give context to the AI

### Step 3: Configure AI (optional)
In Settings > AI, the user can:
- Enable AI
- Choose automatic mode (From subscription) or manual (own API key)
- Connect with Claude, OpenAI, or Google

### Step 4: Create profile (optional)
In Settings > Profile or through **ProfileWizardView**, the user can create a profile that the AI will use as context to personalize responses.

---

## Main navigation

The From interface has 3 main zones:

### Left sidebar

Fixed navigation sections:
- **Day** — Current day timeline view
- **Week** — Weekly view with 7 columns
- **Month** — Monthly view with grid
- **Year** — Annual view with weekly rows
- **Tasks** — Dedicated task manager
- **Notes** — Explorer for all notes
- **Explore** — Cross-hierarchy collections and types
- **Links** — URL organizer extracted from notes and manual links
- **Files** — Attachment manager
- **AI** — Chat with the AI assistant
- **Agents** — Autonomous agent manager
- **Settings** — App configuration

Dynamic sections:
- **Saved views** — User-created views (kanban, calendar, etc.)
- **Favorites** — Notes marked as favorites, grouped by area with colors
- **Recent** — Last 3 accessed notes

### Central area (content)

Changes based on the selected sidebar section. Can show:
- A timeline view (day/week/month/year)
- The task list
- The note tree
- An individual note editor
- The AI chat
- The agent panel
- Settings
- A saved view (kanban, calendar, etc.)

### Status bar (footer)

Always visible at the bottom:
- **Agent indicator:** Shows how many agents are active/paused and when the next run is
- **AI indicator:** Connection status, current model, token balance
- **Model selector:** Change the active AI model
- **Refresh button:** Manual reload of notes from disk

### Header bar

Above the central content:
- **Title** of the current section or note
- **Breadcrumb** navigation when editing a note (Area > Parent > Note)
- **Quick action buttons:** New note, New task, Quick task, New event
- **Manual agents dropdown:** Run agents without going to the agents section
- **Global search**
- **History buttons:** Back/Forward

### Focus mode

`Cmd+F` hides the sidebar and side panels for distraction-free editing. Toggles with smooth animation.

---

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| Cmd+N | New note |
| Cmd+T | New task |
| Cmd+E | New event |
| Cmd+R | Quick task |
| Cmd+O | Spotlight search |
| Cmd+F | Focus mode (hide/show panels) |
| Cmd+Shift+M | Maintenance/Settings |

Shortcuts are customizable by the user.

---

## Notes

### Creating a note

Ways to create a note:
1. **Cmd+N** from anywhere
2. **"+" button** in the header
3. **"+" button** when hovering over a note in the tree (creates child note)
4. **From the editor** of another note (+ button in breadcrumb, creates child note)
5. **From a template** (template menu in the editor)

### Note editor (NoteEditorView)

The editor is the core of From. It consists of:

#### Breadcrumb (top)
- Shows the path: Area > Parent > ... > Current note
- Each level is clickable for navigation
- Editable title inline (click to rename)
- + button to create child note
- Controls (right): date, parent pill, task (circle), favorite (circle), publish (globe circle), Google Docs (circle)
- Context menu (three dots): Export as Markdown, Export as PDF, Open in Finder, Delete note

#### Type and collection bar
- **Type:** Multi-select pills to assign types to the note (e.g. project, idea, resource, future). New types can be created on the fly.
- **Collection (Col):** Assign the note to one or more collections. Option to create a filtered view from the collection.

#### Task properties panel
Appears when the note has type "active":
- **Status:** Dropdown with configurable states (pending, in_progress, done, cancelled)
- **Due date:** Date picker with or without time
- **End date:** For notes with a time block
- **Priority:** High, medium, low
- **Quick task:** Toggle
- **Recurrence:** Daily, weekly, monthly

#### Markdown editor
- Rich text editing in Markdown with CodeMirror 6
- Formatting toolbar
- Wikilinks: `[[Note name]]` to link notes
- Task checkboxes: `- [ ] text`
- Agent mentions
- Template insertion
- Autosave with 800ms debounce

---

### Project workspace (`type: project`)

When a note has `type: project`, it opens in a special 3-column layout:

#### Left column — Tasks / Notes / Refs

**Tasks block (`ProjectTaskPanel`):**
- Tasks stored in the `tasks:` frontmatter block
- Create inline tasks (Enter confirms, Esc cancels)
- Toggle completed with a click
- Date pill with time if assigned
- Progress bar in header

**Unified Context block (`ProjectContextPanel`):**
- First row: the project/area note itself (always visible, selectable, `folder.fill` icon)
- Child notes below (parent = project title), with relative creation date
- Frontmatter refs: linked notes, collections, URLs, files, Google Docs
- Selection highlight: clicking any row changes the active note in the central editor
- Create child note inline with + → automatically opened in central editor
- Vault search searches all file types (`doc.on.doc` icon, placeholder "Vincular elemento…")
- Delete note via context menu

#### Central column — Editor (master-detail)
- Shows the note selected in `ProjectContextPanel` (project/area or child note)
- When a child note is selected: `NoteEditorView(embedded: true, suppressRightPanel: true)` — editor without its own right panel
- When the project/area is selected: classic editor with `projectStatusBar`/`areaStatusBar`
- Header (breadcrumb, type, collection) is hidden for the project/area when a child note is active — always shows the header of the note currently in the editor
- Project/area status bar only visible when editing the project itself

#### Right column — AI Chat
- Left and right columns have equal width (25% each); center editor takes the remaining 50%. All panels are resizable via draggable dividers.
- Chat with automatic context from the project/area
- Context always includes: body, tasks, child notes, refs, fetched URLs
- Notes created by the AI → automatically become children of the project/area
- **Areas have full chat parity with projects** (same behavior in `ChatPanel.swift`)

---

## Tasks

### What is a task in From

In From, a task is a note with task properties enabled. Everything is a note. Assigning a type with `defaultActive: true` or manually marking `active: true` gives the note task properties.

### Task properties

| Property | Values | Description |
|---|---|---|
| Status | pending, in_progress, done, cancelled | Current task status |
| Due date | Date with or without time | When it must be completed |
| End date | Date with time | For time blocks |
| Priority | high, medium, low | Urgency level |
| Recurrence | daily, weekly, monthly, yearly | Automatic repetition |
| Quick task | true/false | Whether it's a lightweight task |

### Apple Calendar and Reminders sync

- Notes with `event: true` and `due: DATE` sync bidirectionally with Apple Calendar
- Tasks with `quick: true` sync with Apple Reminders
- Recurrence is supported (daily, weekly, monthly, yearly)

---

## Timeline / Calendar

From offers 4 time views that combine dated notes with Apple Calendar events:

- **Day** — Hourly slots, tasks and events positioned at their time, side journal column
- **Week** — 7 columns (Mon–Sun), undated task sidebar; multi-day notes (with `due` + `due_end` on different days) span across all covered columns in the all-day row
- **Month** — Classic monthly grid, click day for detail; multi-day notes appear in every day row within their range
- **Year** — 12 monthly blocks, heatmap-style activity indicators

---

## Areas / Roots

An Area (or Root) is the top-level category in From's hierarchy. Each area:
- Has its own customizable color
- Contains notes organized in a tree
- Has a markdown context field that the AI uses to understand the scope
- Stored as a `.md` file in the `Raices/` folder

---

## Configurable views

From allows creating custom views on notes:

- **Kanban** — Configurable columns, drag cards between columns
- **List** — Note list with custom filters and sorting
- **Calendar** — Notes positioned by date
- **Cards** — Pinterest/Trello-style card view
- **Focus** — One note at a time, distraction-free

Views can also be embedded inline inside the note editor (inline kanban, list, tabs, calendar).

---

## Search

- **Spotlight search (Cmd+O)** — Centered modal, instant search in title and content, area pills for filtering
- **Global search** — Bar integrated into the header, real-time results grouped by type
- **Engine** — SQLite FTS5 for full-text search, also used for RAG (AI searches for relevant context)

---

## AI Chat

### Main chat view

3-column interface:
- **Left:** Conversation sidebar with search, linked note selector, + new conversation
- **Center:** Chat with streaming, Markdown support, @mention support (`@agent`, `@/prompt`, `@note`)
- **Right:** Linked note panel — editor synced live with chat context, AI can edit it directly

### AI modes

| Mode | Description | Requirements |
|---|---|---|
| Automatic | Uses From's server, managed tokens | Active subscription |
| Manual | Uses user's own API key | Valid API key |
| Claude OAuth | Uses user's Claude Pro/Max subscription | OAuth login |

### Supported providers and models

| Provider | Models | Tier |
|---|---|---|
| Google | Gemini 2.5 Flash | Fast |
| OpenAI | GPT-4o Mini | Fast |
| Anthropic | Claude Haiku 4.5 | Balanced |
| OpenAI | GPT-4o | Powerful |
| Anthropic | Claude Sonnet 4.6 | Powerful |
| Google | Gemini 1.5 Pro | Balanced |

---

## AI Editor

A special mode where the AI can directly edit the content of a note. The **AISessionBanner** provides controls to undo/redo AI changes, confirm, discard, or toggle the original view. Each note can also have permanent AI instructions stored in `.from/ai_instructions/`.

---

## Autonomous agents

An agent is an automated task that the AI executes autonomously. Each agent has:
- Instructions (with @mention support for notes, areas, journal, profile)
- A schedule (manual, daily, weekly, monthly, on-open)
- Allowed actions (read/create/update notes, fetch URLs, web search, read/update profile)
- Pre-loaded context sources (profile, journal, all notes, specific area, specific note)

Agents run up to 8 turns and log results in their own memory section. From includes 10 predefined templates.

---

## Links tab

- Automatic URL extraction from all notes (markdown links + bare URLs)
- Manual link management, persisted in `links.json` in the vault root
- Per-link overrides: custom title, collections, hide — without modifying the note
- Collapsible sidebar: All | Manual | Collections | By note
- Links appear in Cmd+O and global search with a blue "Link" badge
- `LinkService` with FTS5 SQLite table for description search

---

## Canvas

An infinite visual canvas for diagrams and mind maps. Stored as a note with `canvas: true`. Supports text nodes, arrows, color palette, undo/redo, and export as image.

---

## Profile

The profile is information about the user that the AI uses as context:
- **profile.md** — Name, role, interests, etc.
- **context.md** — Additional context and AI memory
- **ProfileWizardView** — Guided wizard to create the profile step by step

---

## Sync and data

- **iCloud Drive** — Notes are plain `.md` files, synced automatically across devices
- **CloudKit** — Active change sync with push notifications and conflict resolution
- **Backups** — Automatic daily backups in Application Support (max 10, configurable)
- **Conflict resolution** — Most recent timestamp wins; conflicts shown in a banner for manual review

---

## Backend (from-server)

Optional backend built with TypeScript, Bun, and Hono. Manages authentication, AI tokens, cloud agent execution, payments, and note publishing.

**Main endpoints:** `/auth`, `/agents`, `/tokens`, `/webhooks/lemonsqueezy`, `/p/:slug`

**Database:** PostgreSQL with Drizzle ORM. Tables: users, token_ledger, agent_runs, admin_api_keys, refresh_tokens, public_notes.

**Security:** JWT (HS256), bcryptjs passwords, AES-encrypted API keys, CORS restricted to getfrom.app.

---

## Business model and pricing

| Plan | Price | Includes |
|---|---|---|
| Free | $0 | All app features without AI |
| License | $59 (one-time) | Full app + AI with own API key (Anthropic/OpenAI/Google) or Claude OAuth |
| Subscription | $7/month | Full app + managed AI (10M tokens/month, no API key needed) |

**Important:** License and subscription are exclusive AI modes. Subscription = managed AI only (From handles API keys). License = bring your own API key or Claude OAuth. Modes cannot be mixed.

Payments processed by LemonSqueezy (subscriptions, licenses, license validation, automatic user creation on purchase).

---

## Integrations

- **Apple Calendar** — Read/create events, bidirectional sync
- **Apple Reminders** — Read/create reminders, mark as completed
- **Google Drive / Google Docs** — Multi-account, two-way note ↔ Doc sync, AI context
- **Claude OAuth** — Login with Claude Pro/Max subscription via PKCE

---

## Glossary

| Term | Meaning |
|---|---|
| Vault | Root folder containing all user content |
| Root / Area | Top-level category (e.g. work, personal, projects) |
| Note | .md file with frontmatter — basic unit of content |
| Task | Note with task properties (status, date, priority) |
| Quick task | Lightweight task without extensive content |
| Agent | Automated task that AI executes autonomously |
| Type | Customizable label to classify notes |
| Collection | Cross-hierarchy grouping of notes |
| Wikilink | Link between notes: `[[Note name]]` |
| Canvas | Visual canvas for diagrams |
| Frontmatter | YAML block at the start of each note with properties |
| Parent | Parent note or area in the hierarchy |
| View | Display configuration (kanban, calendar, list, etc.) |
| Workshop | Sandbox for debugging agents and prompts |
| RAG | Retrieval-Augmented Generation — AI searches for relevant context |
| Token | Unit of measure for AI usage |
| Slug | Short identifier for public notes |

---

## Changelog

### 2026-04-24 — Editor bug fixes: pasted content, note sync, project child navigation

- **Fix pasted content disappearing:** Race condition in `WebMarkdownEditor.swift` when the WebContent process crashed during paste. The async callback in the ready handler compared editor content against a stale captured value instead of the current `self.parent.text`. Fix: always compare against the live value to decide whether to restore content.
- **Fix syncNoteFromService reverting user edits:** In `NoteEditorView.swift`, `syncNoteFromService()` reverted the user's `bodyText` because `lastSaveAt = .distantPast` at startup made the time-based guard always pass, and `saveTask == nil` made the pending-save guard also pass. Fix: added `hasLocalBodyChanges` guard — if the local body differs from the last saved content on disk, never revert regardless of timing.
- **Fix child notes in project missing full UI:** The PROJECT case used a plain `WebMarkdownEditorWithToolbar` with a corrupt binding that destroyed frontmatter. Fix: use `NoteEditorView(embedded: true)` identical to the AREA case, with `.id(note.id)` to force re-creation when switching notes.
- **Fix navigation between sibling notes in project:** SwiftUI was reusing the embedded `NoteEditorView` when `selectedProjectNote` changed without reinitializing `@State`. Fix 1: `.id(selectedNote.id)` on embedded editors. Fix 2: in `projectWorkspacePanel`, when navigating from an embedded editor use `onNavigate?(target)` instead of `navigatedNote = target` to delegate navigation to the parent.

### 2026-04-22
- Global drag & drop of files from Finder: `BulkImportSheet` popup appears on any window area
- `BulkImportSheet`: file list, root selector, collection field, note type selector (NoteType)
- Multi-drop: multiple files at once, same properties applied to all
- `GlobalDropReceiver` (NSViewRepresentable + AppKit) to bypass SwiftUI `.onDrop` limitations with `NavigationSplitView`
- `VaultFile` extended with `col` and `noteTipo` fields; sidecar .md writes `col:` and `note_tipo:`
- `FileService.importFile` accepts new optional params `col` and `noteTipo`

### 2026-04-23 — Right panel redesign + context block (fixes)
- Fix: creating a note from the context block now opens it immediately in the central editor (`@MainActor` on Task)
- Fix: clicking any row in the context block opens the item — notes in central editor, files with system app, URLs/GDocs in browser
- `refRow` fully rewritten: main row is clickable, xmark and secondary actions only on hover

### 2026-04-23 — Right panel redesign + context block

**Unified right panel (NoteEditorView)**
- Default tab for regular notes changed from Chat to Index
- Added `workspace` tab for projects and areas (checklist icon) — shows tasks + context + log stacked
- `workspace` is the default tab when opening a project or area
- `projectEditorRow` and `areaEditorRow` rewritten: removed dedicated left panel (tasks/context/log); now use collapsible `RaizTreePanel` like regular notes
- `projectWorkspacePanel` extracted as shared component used by both project and area

**Simplified compact chat (ChatPanel)**
- Removed `ContextElementsView` from compact mode — "Session context" bar no longer appears in any note's side panel
- Permanent instructions moved to `note.text` icon in toolbar (compact popover, highlights purple when instructions are active)

**Redesigned context block (ProjectContextPanel)**
- Removed mode-switching system (`addMode`) with 6-option menu
- Single unified field always visible at the bottom: searches notes and auto-detects URLs
- Pasted URLs (`http...`) added directly on Enter; Google Docs detected by URL pattern
- No matches: offers inline "Create note" with one click
- Collections moved to `folder` icon with clickable pills popover (multi-select)
- `paperclip` icon for file attachment in the same bar
- `note.text.badge.plus` button in header for direct child note creation

### 2026-04-21 (session 6)
- Area chat now has full parity with project chat in `ChatPanel.swift`
- Context pills hidden in areas (same as projects)
- Google Drive button hidden in areas (managed via RefsPicker)
- Session context hidden in areas
- Automatic area context: body, ancestors, tasks, child notes, refs, URLs, files, collections
- Dynamic labels "project"/"area" throughout the built context

### 2026-04-20 (web session)
- Website getfrom.app: full i18n system with 9 languages (ES, EN, FR, DE, ZH, JA, PT, IT, KO)
- Automatic browser language detection, localStorage persistence
- Language `<select>` dropdown in nav on all pages (replaces EN/ES toggle)
- Pricing content fixes: plans are exclusive modes (subscription = managed AI, license = own API key)
- App is free without AI; FAQ and comparison table updated to reflect this accurately
- Contrast fix: comparison table text now has explicit color in dark mode
- All changes pushed to GitHub (albertolezaun-afk/getfrom-app)

### 2026-04-19 (session 4) — Links tab
- New **Links** tab between Explore and Files in the sidebar
- Automatic URL extraction from all notes with cache by `modifiedAt`
- Manual links addable from the tab; persisted in `links.json` at vault root
- Per-link overrides: custom title, collections, hide
- `LinkService` with FTS5 `links` table in SQLite

### 2026-04-19 (session 4)
- CodeMirror 6 editor — fix iteration: rendered tables, files as chips, images with persistent resize/align, clickable wikilinks, drag & drop, inline naming for tasks and child notes

### 2026-04-19 (session 3)
- Collections as workflow: dedicated tab with chat+editor, clickable Resources panel
- Filters and grouping by collection in Notes tab
- Vault files (PDFs, etc.) selectable in Session context

### 2026-04-19 (session 2)
- Strategic redesign: separation of projects / quick tasks / notes
- Complete project workspace: task column, child notes, refs
- `ProjectTaskPanel`, `ProjectNotesPanel`, `RefsPicker`
- Project chat with automatic full context

### 2026-04-27 (session 2) — Web: bilingual docs, dark mode contrast fix

**Help page getfrom.app/docs/:**
- `landing/docs/index.html`: renders `DOCUMENTACION.md` (ES) or `DOCUMENTACION_EN.md` (EN) via `marked.js`
- ES/EN language toggle in nav — pill buttons, persists in localStorage, auto-detects browser language
- Navigable sidebar index with active section highlight on scroll

**App (v1.5 pending release):**
- "Check for updates…" menu item in From menu (calls Sparkle `checkForUpdates`)
- "From Help" menu item → opens `https://getfrom.app/docs/` in browser (Cmd+?)
- `sharedUpdaterController` as global to avoid `mutating getter` error in SwiftUI struct

**Dark mode contrast fix (styles.css):**
- `--text-secondary-dark` raised from `#8b8b8b` to `#a0a0a0` (~7:1 contrast ratio on dark background)
- Global `h1, h2, h3, h4 { color: var(--text-dark) }` rule in dark mode — fixes invisible headings
- 4 scattered `@media (prefers-color-scheme: dark)` blocks → consolidated into one
- `nav-links.open` on mobile: invalid nested media query → fixed
- `comparison-table`, `footer-bottom`, `legal-updated`, `privacy-card` → explicit dark colors

### 2026-04-27 — Redesigned timelines, inline tasks, window fix, system improvements

**Redesigned Timeline views:**
- `DayTimelineView`: left panel with 3 sections — Agenda (all-day events), Tasks (notes + inline tasks grouped by parent), Today's notes (created today). Clicking a task opens its note dashboard, never a popover.
- `ProjectsUnscheduledSidebar` rewritten with `periodStart: Date` parameter. Sections: Overdue (`due < periodStart`) + No date (`due == nil && isActiva`). Used in Week, Month and Year views.

**Inline tasks in all timelines:**
- Inline project tasks (`ProjectTask`, parsed from `tasks:` frontmatter block) now appear in Day, Week, Month and Year views.
- Render: `InlineTaskChipView` with `.draggable("projecttask||{parentNoteUUID}||{task.text}")`. Tap opens parent note.
- `ForEach` uses `task.id` (UUID) as identifier, not `task.text`, to avoid collisions with duplicate text.
- Fix drag to week/month/year: `alwaysAllDay: Bool = false` parameter on `NoteDropTarget`. With `alwaysAllDay: true` the drop doesn't calculate hour from Y position and saves date only.
- Fix notes with hour before grid start: `isAllDayNote()` in `WeekTimelineView` treats `h < startHour` as all-day.

**System improvements:**
- Window launches maximized: `WindowScreenConstraint.constrain` calls `window.setFrame(visible, display: true, animate: false)` on every launch. Fixes small startup window and bottom cutoff.
- "Check for updates…" menu item added to the From menu (after "About"). Calls `sharedUpdaterController.checkForUpdates(nil)`.
- "From Help" menu item replaced to open `https://getfrom.app/docs/` in the browser (Cmd+?).
- Documentation page at `getfrom.app/docs/`: renders `DOCUMENTACION.md` with `marked.js`, navigable sidebar index, dark design consistent with the rest of the site.

**Releases:** v1.4 (build 5) shipped with timeline changes. v1.5 (build 6) pending with menu and window fixes.

### 2026-04-18
- Complete getfrom.app website deployed on GitHub Pages
- Note editor migrated to WKWebView + CodeMirror 6 with Live Preview
- Google Drive / Google Docs integration with multi-account support
- Collections (`col:`) and configurable views implemented
- Note publishing end-to-end with auto-sync
- Document created
