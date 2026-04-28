# From — Complete Product Documentation

> Living document. Updated automatically with each development session.
> Last update: 2026-04-28

---

## What is From

**From** is a native macOS app that works as a personal second brain. It combines Markdown notes, task management, calendar views, autonomous AI agents, and iCloud sync — all in a local-first app where data is owned by the user and never leaves their device.

**Tagline:** Your second brain. On your Mac. Yours alone.

**Value proposition:**
- **Local-first, radical privacy:** No mandatory servers, no telemetry, no lock-in. Notes are standard `.md` files that work with Obsidian, iA Writer, VS Code, or any text editor.
- **Native macOS:** Built in Swift and SwiftUI. Native performance with deep system integration (Calendar, Reminders, iCloud Drive, Spotlight).
- **Integrated AI:** Conversational assistant with full vault context. Autonomous agents that work on their own.
- **Natural organization:** Flexible parent-child hierarchy without rigid folders. Roots with colors, customizable types, configurable views.

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
├── Notas/                      (all user notes)
├── Diario/                     (daily notes: YYYYMMDD.md)
├── Raices/                     (roots: top-level categories)
├── Agentes/                    (AI autonomous agents)
├── Plantillas/                 (note templates)
├── Archivos/                   (attachments)
├── Colecciones/                (note collections)
└── .from/                      (internal metadata)
    ├── versions/               (version history)
    ├── ai_instructions/        (permanent AI instructions per note)
    └── activity.jsonl          (activity log)
```

Each note is a `.md` file with YAML frontmatter defining its properties.

---

## First use — Onboarding

### Step 1: Welcome screen
On first launch, **VaultPickerView** shows a 2-step wizard:
1. **Philosophy:** Explains what From is and how it works (local-first, .md files)
2. **Choose folder:** The user selects a folder in their Mac/iCloud Drive as vault

### Step 2: Create first Root
After selecting the vault, From shows an empty state that invites the user to create their first root from Settings > Roots.

### Step 3: Configure AI (optional)
In Settings > Account, the user can:
- Enable AI
- Choose automatic mode (From subscription) or manual (own API key)
- Connect with Claude, OpenAI, or Google

### Step 4: Create profile (optional)
In Settings > AI Profile or through **ProfileWizardView**, the user can create a profile that the AI will use as context to personalize responses.

---

## Main navigation

The From interface has 3 main zones:

### Left sidebar

Fixed navigation sections (in order):
- **Day** — Timeline view of the current day
- **Week** — Weekly view with 7 columns
- **Month** — Monthly view with grid
- **Year** — Annual view with weekly rows
- **Explore** — Roots, collections and types
- **Links** — URL organizer extracted from notes and added manually
- **Files** — Attachment manager
- **AI** — Chat with the AI assistant
- **Settings** — Full configuration (including Agents)

Dynamic sections (shown when they exist):
- **Views** — User-created custom views (kanban, list, calendar, etc.)
- **Filters** — Saved filters (legacy)
- **Favorites** — Notes marked as favorites

> **Agents** are managed from Settings > Agents. The status bar indicator at the bottom also provides quick access to them.

### Central zone (content)

Changes based on the selected sidebar section. Can show:
- A timeline view (day/week/month/year)
- The Explore view (roots, collections, types)
- The links manager
- The files manager
- The AI chat
- Full settings
- A custom view (kanban, calendar, list)
- An individual note editor

### Status bar (footer)

Always visible at the bottom:
- **Agent indicator (left):** Shows how many agents are active/paused, next execution, and a button to review pending agents. Click navigates to Settings > Agents.
- **AI indicator (right):** Connection status, current model, token balance
- **Model selector:** Change active AI model
- **Refresh button:** Manual reload of notes from disk

### Header bar

Above the central content:
- **History buttons (left):** Back/Forward
- **Global search (center):** Real-time search across the entire app
- **Quick action buttons (right):**
  - New note (`note.text.badge.plus`)
  - New project (`Cmd+Shift+P`)
  - New area
  - New event
  - New task (`Cmd+R`)
  - New custom view
  - Manual agents dropdown

### Focus mode

`Cmd+F` hides the sidebar and side panels for distraction-free editing. Toggle with smooth animation.

---

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| Cmd+N | New note |
| Cmd+R | New task |
| Cmd+E | New event |
| Cmd+Shift+P | New project |
| Cmd+O | Spotlight search |
| Cmd+F | Focus mode (show/hide panels) |
| Cmd+Shift+M | Maintenance/Settings |
| Cmd+? | Open documentation in browser |

Shortcuts are customizable in Settings > Shortcuts.

---

## Notes

### Creating a note

Ways to create a note:
1. **Cmd+N** from anywhere
2. **"+" button** in the header
3. **"+" button** when hovering over a note in the tree (creates a child note)
4. **From the editor** of another note (+ button in breadcrumb, creates child note)
5. **From a template** (template menu in the editor)

### Note editor (NoteEditorView)

The editor is the central piece of From. It consists of:

#### Breadcrumb (top)
- Shows the path: Root > Parent > ... > Current note
- Each level is clickable to navigate
- Inline editable title (click to rename)
- + button to create child note
- Controls (right): date, parent, task (circle), favorite (star), publish (globe), Google Docs
  - All icons: 22x22 circles with subtle background, active/inactive color
- Context menu (three dots):
  - Export as Markdown
  - Export as PDF
  - Open in Finder
  - Delete note

#### Type and collection bar
- **Type:** Multi-select pills for assigning types to the note (e.g. project, idea, resource, future). New types can be created on the fly. Integrated search.
- **Collection (Col):** Assign the note to one or more collections.

#### Task properties panel
Appears when the note has `activa: true`:
- **Status:** Dropdown with configurable statuses (pending, in_progress, done, cancelled)
- **Due date:** Date picker with or without time
- **End date:** For notes spanning a time block
- **Priority:** High, medium, low
- **Recurrence:** Daily, weekly, monthly

#### Markdown editor
- Rich Markdown editing (CodeMirror 6 with WKWebView)
- Formatting toolbar
- Wikilinks: `[[Note name]]` to link notes
- Inline task checkboxes: `- [ ] Free text` — these tasks appear in the timeline
- Template insertion
- Autosave with 800ms debounce

#### Left panel — RaizTreePanel (collapsible)
- Hierarchical view of notes under the current root
- Expandable/collapsible nodes with root color
- Status indicators (green = active, orange = future)
- Click to navigate between notes

#### Right panel (3 tabs, adjustable width)

**Chat tab:**
- AI conversation linked to the current note
- Note context is injected automatically
- Permanent instructions accessible via `note.text` icon in the toolbar
- AI modifications are applied live to the editor

**Index tab (default for regular notes):**
- Note headings — click to jump to section
- **Connections:**
  - Editable frontmatter (key-value fields)
  - Outgoing links (wikilinks)
  - Incoming links (notes that link to this one)
  - Tasks grouped by heading
  - External links (URLs in the content)
  - AI history
  - Child notes (max 6)

**History tab:**
- List of saved versions (reverse chronological)
- Preview of selected version
- Restore button (creates safety backup before restoring)

---

### Project and area workspace (`tipo: proyecto` / `tipo: area`)

When a note has `tipo: proyecto` or `tipo: area`, it opens in a 3-column workspace layout. The behavior is identical for projects and areas.

#### Left column — RaizTreePanel (same as regular note)

#### Center column — Master-detail editor
- When a child note is selected: embedded Markdown editor (`embedded: true`) for that note
- When no child note is selected: editor for the project/area itself
- The header (breadcrumb, type, collection) always belongs to the note being edited

#### Right panel — 4 tabs

**Workspace tab (default):**

`ProjectTaskPanel` — Project task block:
- Tasks stored in the `tasks:` block of the frontmatter (not in the body)
- Create task inline (Enter confirms, Esc cancels)
- Toggle completion with one click
- Date+time assignable via DateTimePickerPopover
- Progress bar in the header

`ProjectContextPanel` — Unified context block:
- First row: always the project/area note itself (icon `folder.fill`)
- Child notes below (parent = project/area title)
- Frontmatter refs: linked notes, collections, URLs, files, Google Docs
- Highlight selection: click any row → changes active note in center editor
- Always-visible search field: searches notes and detects URLs automatically
  - Pasted URLs (`http...`) are added directly
  - No matches: offers "Create note" inline
- Collections icon (`folder`) with clickable pills popover
- Attachments icon (`paperclip`) to add files
- `note.text.badge.plus` button to create a child note directly
- Delete note with context menu

`ProjectLogPanel` — Project activity log.

**Chat tab:** Same functionality as in regular notes, with automatic context from the project:
- Body of the project/area
- Ancestors (root, parents)
- Tasks from the `tasks:` block
- Child notes
- Refs, URLs, files, collections

**Index tab:** Headings + connections of the project.

**History tab:** Saved versions.

#### Project vs area identity
- `isProject` = `tipos.contains("proyecto")`
- `isArea` = `tipos.contains("area")`
- Both open the same workspace layout — behavior is identical

---

### Frontmatter

Each note has a YAML block at the beginning of the file:

```yaml
---
parent: parent-name
tipo: proyecto, idea
col: collection1, collection2
refs: linked-note, url:https://..., file:filename, gdoc:ID
fav: true
activa: true
status: pending
due: 2026-05-01
due_end: 2026-05-01 18:00
priority: high
created: 2026-01-15
recurrence: weekly
evento: true
apple_id: EVENTKIT_ID
public_slug: abc12345
archivado: true
vista: kanban
vista_col: status
vista_group: tipo
pizarra: true
gdoc_id: GOOGLE_DOC_ID
gdoc_account: email@gmail.com
gdoc_url: https://docs.google.com/...
---
```

Special fields:
- `archivado: true` — hides the note from main lists without deleting it
- `tasks:` — special YAML block for project tasks (not a simple field)
- `chat: true` — indicates the note is an AI conversation

### Project tasks (`tasks:`)

Project-type notes store their tasks in a `tasks:` block in the frontmatter (type `ProjectTask`), separate from the note body:

```yaml
tasks:
  - id: abc123
    text: Write proposal
    done: false
    due: 2026-05-10T10:00
  - id: def456
    text: Review with team
    done: true
```

These tasks are rendered in the `ProjectTaskPanel` of the workspace and appear in all timeline views (Day, Week, Month, Year) as `InlineTaskChipView`.

### Inline body tasks

Notes can have checkboxes in the Markdown body (`- [ ] text`). These are parsed as `InlineTask` and also appear in timeline views. They are independent from the `ProjectTask` block in the frontmatter.

### Parent-child hierarchy

The system uses a single `parent:` field to define hierarchy. There is no `raiz:` field.

- `parent:` is always the direct immediate parent
- The root is resolved by traversing the parent chain until reaching a file in `Raices/`
- A note can be at any depth

Example:
```
Raices/coding.md                         (root, no parent)
  └─ Notas/From — Main note.md          (parent: coding)
      └─ Notas/From — Plugin.md         (parent: From — Main note)
          └─ Notas/From — Plugin API.md  (parent: From — Plugin)
```

### Note types

Types are customizable tags with color. Examples:
- `proyecto`, `area` — open the 3-column workspace
- `idea`, `resource`, `future` — regular notes
- The user can create new types on the fly from the editor or Settings > Types
- Each type has a `defaultActiva` property that automatically marks notes of that type as active

### Collections

Collections group notes transversally (no hierarchical relationship). A note can belong to multiple collections. From the Explore section you can filter notes by collection.

### Publishing notes

Any note can be published as a public web page:
1. Globe button in the breadcrumb — click to publish
2. A short 8-character slug is generated
3. The note is accessible at `https://from-server-production.up.railway.app/p/SLUG`
4. URL is copied to clipboard and an alert shows with an option to open in browser
5. Button turns green when the note is published
6. **Auto-sync:** changes sync to the server every 30s (debounce, only if content changed)
7. Click the green button → unpublishes and destroys the URL

### Version history

- From automatically saves a version before each major change
- Versions are stored in `.from/versions/`
- Any previous version can be restored
- On restore, a safety backup of the current state is created
- Versions are local (not synced via iCloud)

---

## Timeline / Calendar

From offers 4 temporal views that combine dated notes, Apple Calendar events, and project tasks.

### Day view (DayTimelineView)

The day view has two zones:

**Left column — Horizontal hourly timeline:**
- Configurable time slots (start and end hours)
- Notes with `due` at a specific time positioned in their slot
- Apple Calendar events at their time
- Drag to move notes to another hour
- Resize right edge to adjust duration
- Current time red line
- Create task/event inline by clicking an empty slot

**Left column — 3 vertical sections:**
- **Agenda:** All-day events and notes (no time or multi-day)
- **Tasks:** Note-tasks and inline project tasks (`InlineTaskChipView`), grouped by parent note. Includes overdue tasks. Click on a task opens its parent note (never a popover).
- **Today's notes:** Notes created or modified today

**Right panel:** Daily note (`YYYYMMDD.md`) with Markdown editor.

Visibility toggles: Notes / Calendar events / "Go to today" button.

### Week view (WeekTimelineView)
- 7 columns (Monday to Sunday)
- Each column shows events and tasks for the day
- `ProjectsUnscheduledSidebar` on the left with two sections: Overdue (`due < week start`) + No date (`due == nil && isActiva`)
- Differentiated colors: notes (accent) vs calendar (purple)
- **Multi-day support:** notes with `due` (start) and `due_end` (end on another day) appear in the "all day" slot of each column they span
- Inline project tasks (`InlineTaskChipView`) with drag to assign date

### Month view (MonthTimelineView)
- Classic monthly grid
- `ProjectsUnscheduledSidebar` sidebar with Overdue + No date
- Each cell shows events/tasks for the day
- **Multi-day support** by date range
- Inline project tasks (`InlineTaskChipView`) with drag `alwaysAllDay: true`

### Year view (YearTimelineView)
- 12 monthly blocks with weekly rows
- Heatmap-style activity indicators
- `ProjectsUnscheduledSidebar` sidebar with Overdue + No date
- Inline project tasks (`InlineTaskChipView`) with drag

---

## Roots

### What is a Root

A Root is the top-level category in From's hierarchy. Each root:
- Has its own customizable color
- Contains notes organized in a tree
- Has a Markdown context field that the AI uses to understand the scope
- Is stored as a `.md` file in the `Raices/` folder

### Managing Roots

Roots are managed from **Settings > Roots**:
- Create new root (name + color)
- Rename (automatically updates `parent:` field of all child notes)
- Change color
- Delete (child notes become orphaned — they are not deleted)

### Explore view (ColeccionesView)

The **Explore** section in the sidebar is the entry point to all organized content:

**Explore left sidebar:**
- List of expandable roots, each with:
  - Note count
  - Collections of the root
  - Note types used in the root
- Click on root → center panel with root dashboard
- Click on collection → list of notes in that collection
- Click on type → list of notes of that type

**Root center panel:**
- Header: name (double-click to rename), note/collection/type count, "Open note" button
- Collections section: collection cards with counts
- Types section: color pills with counts

**Collection/type center panel:**
- Filtered note list with batch actions (change col/type)
- Click on note → editor in right panel with collapsed sidebar

---

## Custom views

From allows creating custom views over notes. Accessible from the "Views" section in the sidebar.

### Kanban (KanbanView)
- Configurable columns (by status, type, priority, etc.)
- Drag cards between columns
- Create notes directly in columns

### Configurable list (NoteListViewConfig)
- Note list with custom filters and sorting
- Configurable visible columns

### Calendar (NoteCalendarView)
- Calendar view with notes positioned by date

### Cards (NoteCardsView)
- Card view with content previews

### Focus (NoteFocusView)
- One note at a time with sequential navigation

### Inline views

Views can be embedded inside a note editor:
- **Inline Kanban, List, Calendar, Tabs** — filter child notes of the current note

Created from the editor.

---

## Search

### Spotlight search (Cmd+O)
- Centered modal in macOS Spotlight style (480x520px)
- Instant search in title and content
- Root pills for quick filtering
- Clickable results to navigate directly

### Global search (header)
- Bar integrated in the header, always visible
- Real-time search while typing
- Results: notes, tasks, files, links

### Search engine
- SQLite FTS5 for full-text search
- Automatic indexing when loading notes
- Also used internally for RAG (the AI searches relevant context in the vault)

---

## AI Chat

### Main chat view (ChatView)

3-column interface:

**Left column (280px) — Conversation sidebar:**
- Search field (filters by title and content)
- Linked note button: links a note to the conversation
- Google Drive button (if connected): import documents as context
- + button for new conversation
- List of conversations with title, date and associated note

**Center column — Chat (ChatPanel):**
- User and assistant messages with streaming
- Markdown support in responses
- Multi-line input with auto-resize
- @mention support:
  - `@agent_name` — Run agent
  - `@/prompt_name` — Use saved prompt
  - `@note_name` — Inject note as context
- Mention popup with keyboard navigation

**Right column (360px) — Linked note panel (collapsible):**
- Linked note editor
- Toolbar: Undo, Redo, Open in main editor, Unlink
- Live sync with the chat context

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

### Contextual chat in the editor

When the Chat tab is opened in the editor's right panel, the chat has automatic context from:
- Full content of the current note
- Ancestor chain (root > parent > note)
- RAG search for relevant context from the vault

In projects and areas, the chat additionally includes: `tasks:` block tasks, child notes, refs, URLs, files, and collections.

---

## AI Editor (AIEditorService)

### What is AI editor mode

A special mode where the AI can directly edit the content of a note. The AI reads the note, receives instructions from the user, and returns the modified note.

### How it works

1. The user activates AI mode in the editor
2. The **AISessionBanner** appears with controls:
   - Undo / Redo AI changes
   - Confirm changes
   - Discard changes
   - Toggle to see original version
3. The user writes instructions
4. The AI modifies the note and shows the result
5. The user confirms or discards

### Permanent instructions

Each note can have permanent AI instructions (stored in `.from/ai_instructions/`). These instructions are applied every time the AI edits that specific note. Configured via the `note.text` icon in the chat toolbar.

---

## Autonomous agents

### What is an agent

An agent is an automated task that the AI executes autonomously. Each agent has instructions, an execution schedule, permitted actions and context sources.

### Accessing Agents

Agents are in **Settings > Agents**. You can also:
- Click the agent indicator in the bottom status bar
- Use the manual agents dropdown in the header to launch them directly

### Agents view (AgentListView)

**Left column (340px):**
- Search field
- Creation menu (three dots):
  - "From description" (sparkles): Describe in natural language and the AI generates the agent
  - "Manual": Create blank agent
  - "From template": Clone a predefined template
- Agent list with schedule, next execution and actions (Play, Stop, Delete)

**Right column:** Selected agent detail (AgentDetailView)

### Agent configuration (AgentDetailView)

**Schedule:**
| Type | Description |
|---|---|
| Manual | Only runs when the user launches it |
| Daily | Runs every day at the configured time |
| Weekly | A specific day of the week at a time |
| Monthly | A specific day of the month at a time |
| On open | When From opens (maximum once per hour) |

**Instructions:** Text editor with @mentions:
- `@today`, `@profile`, `@diary`, `@Root`, `@Note`

**Permitted actions:**

| Action | Description |
|---|---|
| read notes | Read note content |
| update note | Modify or create sections in notes |
| create note | Create new notes |
| fetch_url | Download and parse web content |
| search web | Search the internet |
| read root | Read content of a root |
| read profile | Read user profile and context |
| update profile | Modify the profile |

**Context sources (pre-loaded):**

| Source | Description |
|---|---|
| Profile | Content of profile.md and contexto.md |
| Today | Today's diary note |
| Diary (N) | Last N diary entries |
| All notes | Index of all notes |
| Root X | All notes of a root |
| Note X | A specific note |
| Note X + children | A note and all its descendants |

**Manual execution:** Button that executes the agent immediately with optional input.

**Agent memory:** `## Agent memory` section in the .md file where execution logs are saved.

### Agent execution

The execution process:
1. Context sources are loaded
2. System prompt is built with instructions and context
3. Sent to the selected AI model
4. The AI responds with text and optionally action blocks
5. Action blocks are parsed and executed
6. The result is returned to the AI for the next iteration
7. Repeated up to a maximum of 8 turns
8. Result is logged in the agent memory

Action block format:
````
```from-action
action: update_note
title: Note name
content: New content
heading: ## Specific section
```
````

### Run panel (AgentRunPanel)

Modal dialog when running an agent manually:
- Multi-line input (required or optional depending on the agent)
- Voice recording to dictate input
- Buttons: Cancel (Esc) / Run (Enter)

### Predefined templates

From includes agent templates ready to use for common productivity scenarios.

---

## Workshop (TallerChatView)

A workspace in Settings > Workshop for debugging and improving agents and prompts. It's a sandbox where the AI helps refine instructions.

Usage:
1. Write in the chat with `@agent_name` to load an agent, `@/prompt_name` for a prompt, `@note_name` for a note
2. The AI analyzes the agent/prompt and suggests improvements
3. Suggestions include "Apply" and "Discard" buttons
4. Apply directly updates the agent or prompt

---

## Files (ArchivosView)

Attachments stored in the `Archivos/` folder of the vault. Each file has a `.md` sidecar with metadata.

### Features
- **Import:** Drag & drop or import button
- **Search:** By name, description, tags or parent note
- **Group:** By date, type or parent note
- **Types:** PDF, image, video, audio, document, other
- **Link:** Each file can be linked to multiple notes

### Metadata sidecar

```yaml
---
tipo: pdf
descripcion: User manual
tags: documentation, reference
parents: Main note, Project X
---
```

---

## Canvas / Whiteboard (PizarraView)

Infinite canvas visual space for creating diagrams and mind maps. Stored as a note with `pizarra: true`.

### Features
- Free drawing surface with zoom/pan
- Text nodes
- Arrows/connections between nodes
- Color palette
- Configurable line width
- Undo/Redo
- Export as image

---

## Profile

### What is the Profile

The profile is information about the user that the AI uses as context to personalize responses and help agents understand who the user is.

### Components
- **profile.md** — User data: name, role, interests, etc.
- **contexto.md** — Additional context and AI memory
- **ProfileWizardView** — Guided assistant to create the profile step by step

Managed from Settings > AI Profile.

---

## Settings (FromSettingsView)

Settings have a left sidebar with groups and tab selection. Maximum content area width: 760px.

### Group (untitled) — Account
- **Account** — Login/registration, complete AI configuration:
  - AI on/off toggle
  - Mode: Automatic (€7/month subscription) / Manual (license or Claude Pro)
  - Token balance and top-up (Automatic mode)
  - Claude OAuth login (Manual mode)
  - Claude model selector (Manual mode)
  - License: activate/deactivate license key
  - Multi-API providers: Anthropic, OpenAI, Google with validation
  - Web search (Brave Search API key)
  - AI privacy
  - Plan management, change password, cancel subscription, delete account
- **Google** — Google Drive and Google Docs integration:
  - List of connected Google accounts (multi-account)
  - Connect/remove account
  - Target folder for new Google Docs

### Content group
- **Space** — Vault path, configured folders
- **Roots** — Create, rename, change color and delete roots
- **Types** — Create, edit and delete note types (color, name, defaultActiva)
- **Statuses** — Configure custom task statuses with color and icon
- **Templates** — Manage note templates from the vault
- **Calendar** — Visible calendars, reminder lists, sync configuration

### Appearance group
- **View** — Timeline view configuration (start/end hour, etc.)
- **Appearance** — Theme: System, Light, Dark
- **Voice** — Voice recording and transcription configuration

### Artificial Intelligence group
- **Prompts** — Saved prompt library. Invoked from chat with `@/name`
- **AI Profile** — profile.md and contexto.md editor; ProfileWizardView
- **Agents** — Full autonomous agents manager (AgentListView)
- **Workshop** — Sandbox for debugging agents and prompts (TallerChatView)
- **Assistant** — Prompt assistant for creating/improving prompts (PromptAssistantTab)

### Productivity group
- **Shortcuts** — Customizable keyboard shortcuts (ShortcutsSettingsTab)

### Data group
- **Backup** — Manual/automatic daily backup, maximum backups, restore from backup
- **Export** — Export notes to ZIP
- **Import** — Import notes from ZIP or Obsidian vault
- **Maintenance** — Vault audit:
  - Tasks without date, old events without content, empty roots
  - Unused types, notes without content, orphaned notes
  - Orphaned tasks, files without parent note, duplicate titles
  - Broken parent note

---

## Sync and data

### iCloud Drive
- Notes are `.md` files in iCloud Drive
- Cross-device sync is automatic via iCloud
- From doesn't depend on its own server for sync

### CloudKit (CloudSyncService)
- Active change sync (push notifications)
- Conflict resolution (most recent timestamp wins, 1-second tolerance)
- Upload with 2-second debounce
- Record types: "Note" (content) and "File" (assets)
- On conflict: visible banner with button to go to ConflictsView and resolve

### Automatic backups
- Run 10 minutes after opening the app
- Frequency: daily (if more than 24h since last backup)
- Location: Application Support (not in the vault)
- Include: Notes, Roots, Diary, Templates, Agents, Files
- Retention: maximum 10 backups (configurable in Settings > Backup)

---

## Backend (from-server)

### Description

Optional backend built with TypeScript, Bun, and Hono. Manages authentication, AI tokens, note publishing, and payments.

### Main endpoints

**Authentication (/auth)**
- POST /auth/register — Register with email + password
- POST /auth/login — Login
- POST /auth/refresh — Token rotation
- POST /auth/logout — Sign out
- POST /auth/google — Google OAuth login
- GET /auth/me — Current user profile

**Agents (/agents)**
- POST /agents/run — Run agent with context
- GET /agents/runs — Execution history
- GET /agents/runs/:id — Execution detail

**Tokens (/tokens)**
- GET /tokens/balance — User token balance
- GET /tokens/ledger — Transaction history

**Admin (/admin)**
- GET /admin/providers — AI provider status
- PUT /admin/providers/key — Configure API keys
- PATCH /admin/providers/:provider/toggle — Enable/disable provider
- GET /admin/users — User list
- POST /admin/tokens/add — Manual token adjustment
- POST /admin/users/:id/make-admin — Make admin
- GET /admin/stats — Usage statistics

**Webhooks (/webhooks)**
- POST /webhooks/lemonsqueezy — Payment processor
- POST /webhooks/license-verify — License validation
- POST /webhooks/checkout-url — Generate payment link

**Public notes (/notes, /p)**
- POST /notes/publish — Publish note with slug
- POST /notes/unpublish/:slug — Unpublish
- GET /p/:slug — Render public note (no auth)

### Database

PostgreSQL with Drizzle ORM. Tables:

| Table | Description |
|---|---|
| users | Accounts, subscription, license, token balance |
| token_ledger | Immutable transaction log |
| agent_runs | Agent execution history |
| admin_api_keys | AI provider API keys (AES encrypted) |
| refresh_tokens | Refresh tokens with 30-day TTL |
| public_notes | Published notes with slugs |

### Security
- JWT (HS256) with 15-min access token + 30-day refresh token
- Passwords hashed with bcryptjs (cost 12)
- API keys encrypted with AES in the database
- CORS restricted to getfrom.app and localhost
- Parameterized queries via Drizzle ORM

---

## Business model and pricing

### Plans

| Plan | Price | Includes |
|---|---|---|
| Free | $0 | All app features without AI |
| License | $59 USD (one-time) | Full app + AI with own API key (Anthropic/OpenAI/Google) or Claude OAuth |
| Subscription | €7/month | Full app + managed AI (10M tokens/month, no API key needed) |

**Important:** Subscription and license are mutually exclusive modes. With subscription, only managed AI is used (From manages API keys). With license, only the user's own API key or Claude OAuth is used. Modes cannot be mixed.

### Payment processor

LemonSqueezy manages:
- Subscription lifecycle (creation, renewal, cancellation)
- Orders (licenses, top-ups)
- License validation
- Automatic user creation on purchase

---

## Integrations

### Apple Calendar
- Reading calendar events
- Creating events from From
- Bidirectional event sync (`evento: true` + `due: DATE`)

### Apple Reminders
- Reading pending reminders
- Creating reminders from tasks
- Mark as complete from From
- Recurrence support

### Google Drive and Google Docs
- **Multi-account:** Multiple simultaneous Google accounts
- **Navigation:** Drive browser from chat (select as AI context)
- **Per-note sync icon:** In each note's toolbar, icon to link/manage a Google Doc
  - Unlinked (gray): click to create Doc. If >1 account, popup to choose
  - Linked (green): dropdown with Open Doc / Copy link / Move to folder / Unlink
- **Target folder:** Configurable in Settings > Google
- **Bidirectional note ↔ Google Doc sync:**
  - **Push:** When saving a note with `gdoc_id`, the Doc is updated automatically (3s debounce)
  - **Pull:** When opening a note with `gdoc_id`, content is downloaded if the Doc changed
  - Frontmatter: `gdoc_id` (doc ID) + `gdoc_account` (email) + `gdoc_url` (link)
- **AI context:** Any Google Doc can be added as chat context
- **OAuth:** ASWebAuthenticationSession with `drive.file` + `documents` + profile scopes
- **Conversion:** Google Docs JSON → Markdown (headings, bold, italic, links, lists, strikethrough)

### Google OAuth
- Login with Google account (no password)
- Managed in Settings > Account

### Claude OAuth
- Login with Claude Pro/Max subscription
- Uses tokens from the user's subscription
- PKCE flow for security

---

## Glossary

| Term | Meaning |
|---|---|
| Vault | Root folder containing all user content |
| Root | Top-level category (e.g. work, personal, projects) |
| Note | .md file with frontmatter — basic content unit |
| Task | Note with `activa: true` and task properties (status, date, priority) |
| Project | Note with `tipo: proyecto` — opens 3-column workspace |
| Area | Note with `tipo: area` — opens the same 3-column workspace |
| ProjectTask | Project task stored in the `tasks:` frontmatter block |
| InlineTask | Checkbox in the note body (`- [ ] text`) |
| Agent | Automated task that the AI executes autonomously |
| Type | Customizable tag to classify notes |
| Collection | Transversal grouping of notes (`col:` field) |
| Wikilink | Link between notes: `[[Note name]]` |
| Whiteboard | Visual canvas for diagrams (note with `pizarra: true`) |
| Frontmatter | YAML block at the beginning of each note with properties |
| Parent | Parent note or root in the hierarchy |
| View | Display configuration (kanban, calendar, list, etc.) |
| Workshop | Sandbox for debugging agents and prompts |
| RAG | Retrieval-Augmented Generation — AI searches relevant context |
| Token | Unit of measure for AI usage |
| Slug | Short identifier for public notes |
| Archived | Note hidden from main lists (`archivado: true`) |

---

## Internal services (technical reference)

| Service | Responsibility |
|---|---|
| VaultService | Access to .md files on disk (async actor) |
| NoteService | Note CRUD, hierarchy tree, Calendar integration |
| CalendarService | EventKit: events + reminders |
| SearchService | SQLite FTS5 + RAG |
| AIService | Multi-provider AI + SSE streaming |
| AIEditorService | AI editing sessions with history |
| ClaudeAuthService | PKCE OAuth for Claude |
| ProfileService | User profile + context + automatic summary |
| AgentService | Agent loading, scheduling and execution |
| RaizService | Roots with colors + context |
| ViewService | Configurable views (kanban, etc.) |
| FileService | Attachments with metadata sidecar |
| BackupService | Vault snapshots |
| CloudSyncService | CloudKit sync |
| VersionService | Version history (local) |
| ActivityLogService | JSONL activity log |
| NavigationHistoryService | Back/forward history |
| StatusBarService | Status bar notifications |
| TranscriptionService | Voice to text |
| GoogleDriveService | Google Drive integration |
| VaultImporterService | Import external vaults |
| LicenseService | License validation |
| LinkService | Link management (SQLite FTS5 `links` table) |
| FromServerService | Backend API client |

---

## Changelog

### 2026-04-28 — Performance optimization pass
- VaultService: `read()` is now `async` — eliminates up to 2s freezes waiting for iCloud downloads
- NoteService: `parseFrontmatter` in a single pass (20x fewer iterations per note), parallel `loadAll()` with `withTaskGroup`
- NoteEditorView: 3 `onChange` merged into 1 — prevents triple `syncNoteFromService()` per reload
- ColeccionesView: `NoteType.loadAll()` cached in `@State` — no longer reads disk on every sidebar render
- NoteListView: `filteredNotes` and `availableTipos` cached in `@State`
- DayTimelineView: `tasksByRaiz` and `notesCreatedGrouped` cached — no longer recomputed on every render
- ChatPanel: duplicate `onChange(of: activePrompt?.id)` removed

### 2026-04-28 — Root dashboard: tasks, drag&drop, UI improvements
- "Edit Root" button, sidebar auto-collapse, right column 420px
- Upcoming Tasks section: note tasks + inline tasks by parent note, overdue in red, context menu
- DashNoteRow: hover collection icon, drag to cards/tipos, full context menu (open, props, collection, delete)
- Collections and tipos accept note drops

### 2026-04-28 — Absorb task into note
- "Add to project" renamed to "Add to note" with search across all notes
- On select: inserts `- [ ] Title` checkbox into the target note's body
- Deletes the task note (including Apple Reminders cleanup) — fixes reappearance bug

### 2026-04-28 — Editor visual upgrade + fixes
- Editor: 16px font, 1.75 line-height, 740px max-width centered, heading spacing, Notion-style blockquote, dimmed syntax markers (opacity 0.3), bordered inline code, gradient HR, improved dark mode
- Fix inverted drag cursor when dragging files onto note (wrong coordinate conversion in WKWebView inside SwiftUI)
- Fix PDF paste: checks file URL before raw image (PDF icon TIFF no longer pasted instead of the actual file)
- Fix card clicks (links/files/YouTube): ignoreEvent corrected to separate left-click (opens) from right-click (edit mode)
- Inline URLs also shown as cards (removed isStandalone condition)

### 2026-04-28 — Release v1.7 (build 8)
- Release including all improvements from previous session: timeline drag&drop, rich editor previews, explorer, tasks grouped by root

### 2026-04-28 — Timeline drag&drop, rich editor previews, explorer improvements
- **Timeline:** horizontal drag for events and reminders, right-edge resize for editable events, vertical drag → all-day with visual hint, correct snap rounding, timed tasks excluded from task list
- **Reminders:** tasks without time saved without time component (previously appeared at 00:00 in Reminders)
- **Editor:** bare URLs clickable, YouTube thumbnail preview, link preview cards (favicon+domain) for standalone URLs, Apple Notes-style file cards with type icon
- **PDF bug fix:** `importAndInsert` inserted `[[file.pdf]]` (wikilink) instead of `![[file.pdf]]` (file embed) — fixed
- **Context URL field:** replaced SwiftUI `TextField` with `NSViewRepresentable` that forces `makeFirstResponder` — paste no longer goes to WKWebView
- **Explorer:** `← root` back button in FilteredNotesView; dashboard has native ColorPicker, rename button and delete button with confirmation
- **Today tasks:** grouping by root → parent (previously only parent); overdue mixed in their natural group with red date

### 2026-04-28 — Release v1.6 (build 7)
- Explore completely redesigned: expandable roots, per-root dashboard, FilteredNotesView with integrated chat, batch select col/type/parent
- Keychain fix: eliminated password prompts when installing new app builds
- Context cleaner agent with `runOnStartup` + `startupDelay`
- `NoteService.tipos(inRaiz:)` — unique types of a root
- `ChatPanel`: Explore mode with priority collection/type context, 60K chars limit

### 2026-04-28 — Dead code cleanup
- Deleted never-used files: `AreasView.swift`, `TaskListView.swift`, `NewTaskNoteSheet.swift`, `NoteTreeView.swift`, `NoteContextBar.swift`
- Documentation completely revised and updated to reflect actual code state

### 2026-04-27 — Sparkle diagnostics
- Identified issue with v1.2 missing `SUPublicEDKey`, blocking automatic updates
- Solution: install v1.5 manually; from v1.5 automatic updates work correctly

### 2026-04-27 — Redesigned timelines, inline tasks, window fixes

**Redesigned Timeline views:**
- `DayTimelineView`: left panel with 3 sections — Agenda (all-day events), Tasks (notes + inline tasks grouped by parent), Today's notes (created today). Click on task opens its parent note dashboard, never a popover.
- `ProjectsUnscheduledSidebar` rewritten with `periodStart: Date` parameter. Sections: Overdue (`due < periodStart`) + No date (`due == nil && isActiva`). Used in Week, Month and Year.

**Inline tasks in all timelines:**
- Project inline tasks (`ProjectTask`, parsed from `tasks:` in frontmatter) now appear in Day, Week, Month and Year.
- Render: `InlineTaskChipView` with `.draggable("projecttask||{parentNoteUUID}||{task.text}")`. Tap opens parent note.
- `ForEach` uses `task.id` (UUID) as identifier, not `task.text`, to avoid collisions with duplicate text.
- Fix drag to week/month/year: `alwaysAllDay: Bool = false` parameter in `NoteDropTarget`. With `alwaysAllDay: true` the drop doesn't calculate time from Y position and saves only the date.

**System improvements:**
- Window starts maximized: `WindowScreenConstraint.constrain` always calls `window.setFrame(visible, display: true, animate: false)` on startup.
- "Check for updates…" menu added to the From menu (after "About").
- "From Help" menu opens `https://getfrom.app/docs/` in browser (Cmd+?).

**Release:** v1.4 (build 5) published. v1.5 (build 6) pending.

### 2026-04-24 — Editor and child note navigation fixes

**Bug 1: Pasted content disappears**
- Race condition in WebMarkdownEditor when WebContent process crashes on paste
- Fix: compare `editorDoc` with `self.parent.text` (current value) instead of captured `content`

**Bug 2: syncNoteFromService reverted user's bodyText**
- `lastSaveAt = .distantPast` on startup + missing guard for local edits
- Fix: new guard `hasLocalBodyChanges = bodyText != Self.extractBody(from: lastSavedContent)`

**Bug 3: Child notes in project without full UI**
- PROJECT case used simple `WebMarkdownEditorWithToolbar` with corrupt binding
- Fix: replace with `NoteEditorView(note: selectedNote, embedded: true, suppressRightPanel: true)`

**Bug 4: Navigation between sibling notes in project didn't work**
- SwiftUI reused same embedded `NoteEditorView` without reinitializing `@State`
- Fix: `.id(selectedNote.id)` on embedded NoteEditorView; `if embedded { onNavigate?(target) }`

### 2026-04-23 — Project/area context panel fixes
- `ProjectContextPanel.swift`: implemented use of `onNavigate` parameter (previously ignored)
- `NoteEditorView.swift`: more explicit `selectedNote` binding in `ProjectContextPanel`

### 2026-04-23 — Right panel redesign + context block
- Default tab in regular notes changed to Index
- Added `workspace` tab for projects and areas — shows tasks + context + log stacked
- `workspace` tab is the default when opening a project or area
- `ProjectContextPanel`: removed `addMode` system, unified always-visible field

### 2026-04-28 — Server administration dashboard

- New admin panel at `/admin/dashboard` served from the Hono server on Railway
- In-page login with JWT, auto-refresh every 60s
- KPIs: total users, active subscriptions, estimated MRR, agent runs, tokens consumed
- Chart.js charts: new users and agent runs per day (last 30 days)
- Server health: DB status, API latency, version
- AI provider management: configure encrypted API keys (Anthropic/OpenAI/Google), activate/pause
- User table with search and pagination (20/page)
- Per-user actions: add tokens, edit subscription/license/role, reset password, delete with confirmation
- New endpoints: `GET /admin/stats/detailed`, `GET /admin/agents/recent`, `GET /admin/ledger/recent`, `PATCH /admin/users/:id`, `POST /admin/users/:id/reset-password`, `DELETE /admin/users/:id`
- Recent agent runs table with user email (JOIN)
- Recent token ledger table with user email (JOIN)

### 2026-04-21 — Area/project chat parity
- Area chat with full parity with project chat in `ChatPanel.swift`
- Automatic area context: body, ancestors, tasks, child notes, refs, URLs, files, collections

### 2026-04-20 (web session) — Web i18n 9 languages
- `getfrom.app`: i18n system with 9 languages (ES, EN, FR, DE, ZH, JA, PT, IT, KO)
- Automatic detection by browser language, persisted in localStorage

### 2026-04-19 (session 4) — Links tab
- New `Links` tab (`enlaces.json` in vault root)
- Automatic URL extraction from notes with `modifiedAt` cache
- `LinkService` with FTS5 `links` table in SQLite

### 2026-04-19 (sessions 1-3) — Project workspace, CodeMirror 6 editor
- Project workspace: tasks column (frontmatter `tasks:`), child notes, refs
- `ProjectTaskPanel`, `ProjectContextPanel` (formerly `RefsPicker`)
- Project chat with automatic context (body + tasks + child notes + refs + URLs)
- CodeMirror 6 editor: tables, files as chips, images with resize/align, clickable wikilinks, drag & drop

### 2026-04-18 — App foundation
- Editor migrated from NSTextView to WKWebView + CodeMirror 6
- Collections (`col:`) and Vista notes (`vista:`)
- Full Google Drive and Google Docs integration with multi-account support
- Full `getfrom.app` website on GitHub Pages
- End-to-end note publishing
- Toolbar icon redesign: 22x22 circles with subtle background
