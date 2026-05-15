# From — User Manual

> Version 3.7 · macOS 14+ · iOS 17+

---

## 1. What is From?

From is a native app for Mac and iPhone that acts as your second brain. All your information — notes, tasks, projects, diary, files — lives in a bullet tree that syncs in real time across devices. No folders to organize, no .md files to manage: everything is in one system, always accessible, with built-in AI.

---

## 2. Today's diary

When you open From for the first time, you land on **today's diary entry**. This is your daily starting point.

**The three sections of the day:**

| Section | What it contains |
|---|---|
| Tasks | Overdue tasks, due today, and upcoming |
| Events | Today's events synced from Apple Calendar |
| 24h Timeline | Visual hour-by-hour view of events and day blocks |

**How to use it:**
- Type directly in the diary: any line becomes a bullet.
- Use `-t` at the end of a line to mark it as a task, or press ⌘T from any bullet.
- Today's diary is always accessible from the left sidebar.
- Each day creates its own entry. Navigate to previous days from the temporal tree (Year → Month → Week → Day).

---

## 3. Notes and nodes

In From, everything is a **node**: a line of text with a title, body (free markdown), and children. There is no distinction between a note and a task — a node can be both at the same time.

**Create a node:**
- Press `Enter` on any bullet to create a new one at the same level.
- Press `Tab` to make that node a child of the one above.
- Press `Backspace` at the start of an empty bullet to move it up one level.

**Open node detail:**
- Click the bullet's title to open it in the right panel.
- There you can edit the markdown body, view properties (status, date, priority, types), and manage children.

**Organizing with hierarchy:**
- Nest nodes to any depth. For example: `Project X → Phase 1 → Pending task`.
- Click the dot (●) of a bullet to zoom in and see only that node as the root.
- Drag bullets to reorganize them within the tree.

**Diary nodes:**
- Nodes marked as diary entries (`isDiaryEntry`) form the temporal hierarchy.
- From creates them automatically on startup — you don't have to.

---

## 4. Essential keyboard shortcuts

| Shortcut | Action |
|---|---|
| `⌘K` | Global quick search (nodes, files, agents) |
| `⌘T` | Mark/unmark bullet as task |
| `⌘E` | Open/close node properties panel |
| `⌘N` | New node at current level |
| `⌘F` | Inline search in the current tree |
| `Tab` | Indent (make child of the node above) |
| `Shift+Tab` | De-indent (move up one level) |
| `Enter` | Create new bullet at the same level |
| `/` | Open command menu on the current bullet |

Shortcuts are configurable in **Settings → Keyboard Shortcuts**.

---

## 5. Tags (#objects)

**Supertags** let you label any node with a semantic type. Type `#` anywhere in the text to open the type selector.

**Predefined types:**

| Tag | Use |
|---|---|
| `#task` | Action item with status and date |
| `#project` | Container for tasks and resources |
| `#event` | Appointment or commitment with a time |
| `#agent` | AI automation with a schedule |
| `#prompt` | Reusable instruction for the chat |

**Custom types:**
- Type `#client`, `#meeting`, `#idea` or any word: From creates the type instantly.
- Each type gets an automatic color. Change it by right-clicking the chip in the tree.
- Tags are visible in the bullet, the panel title, and the sidebar tree.

**Delete a tag:** `Backspace` on the chip removes it as a whole unit.

---

## 6. Tasks

**Create a task:**
- Type the bullet text and press `⌘T`, or use the inline shortcut `-t` at the end of the line.
- You can also type `#task` to turn any node into a task.

**Mark as done:**
- Click the checkbox on the bullet, or press `⌘T` again.
- On iOS: swipe the bullet to the right.

**Assign a date with natural language:**
- In the properties panel, type in the date field: `today`, `tomorrow`, `monday`, `may 15`.
- Or use the inline shortcut: type `-d:today` or `-d:2026-05-20` directly in the bullet.

**Priority:**
- Three levels: high, medium, low. Set from the properties panel or with `-p:high`.

**Open loops:**
- In the global dashboard (grid icon), the **Tasks** tab shows all overdue and unresolved tasks grouped by status.
- Use `status:pending` in the inline search bar to filter only open items.

---

## 7. Events and calendar

**Create an event:**
- Create a node and tag it with `#event`, or use the "New event" button in the right panel when inside a diary node.
- Assign start and end time from the properties panel.

**Apple Calendar sync:**
- From automatically imports events from your Apple calendars.
- The sync is bidirectional: events appear in the day timeline and in the calendar view.
- Enable it in **Settings → Calendar** and choose which calendars to include.

**24h timeline:**
- Visible in the right column when a diary node is open.
- Shows hour-by-hour blocks with the day's events.
- Day-planner style: see what's booked at a glance.

---

## 8. Views

From offers four display modes for nodes at any level. Switch views from the buttons in the top bar.

| View | When to use it |
|---|---|
| **List** | General tree navigation, writing, hierarchy |
| **Kanban** | Project management with statuses (pending, in progress, done) |
| **Table** | Compare properties of multiple nodes at once |
| **Gallery** | Review visual content or resource cards |

- **Kanban** groups child nodes by their `status` field. Drag cards between columns to change status.
- **Table** shows fields like date, priority, and types in editable columns.
- The last selected view is remembered per node.

---

## 9. Search

**Inline search (`⌘F`):**
Filters the tree you're viewing without leaving it. Supports commands:

| Command | Example | Result |
|---|---|---|
| `status:` | `status:pending` | Only pending tasks |
| `date:` | `date:today` | Nodes due today |
| `type:` | `type:project` | Only project nodes |
| `priority:` | `priority:high` | Only high-priority nodes |
| Free text | `client meeting` | Search by title and body |

**Global search (`⌘K`):**
- Searches across all nodes, files, and agents at once.
- Instant, no server needed. Results update in real time as you type.

**Saved search panels:**
- Pin frequent searches as panels in the sidebar.
- Useful for "my tasks today", "active projects", "notes with #client".

---

## 10. Integrated AI

**Opening the chat:**
- Open any node and go to the **Chat** tab in the right panel.
- The assistant has full context of the node: title, body, and children.

**How to use it:**
- Ask questions or give instructions in natural language. Examples:
  - "Summarize the open points in this project."
  - "Create 5 subtasks for this phase."
  - "Draft an email with the content of this note."
- The assistant can read and write to the node directly.

**Adding results to the note:**
- Chat responses include action buttons to insert the generated content into the node's body with one click.

**History:**
- Chat history is specific to each note. Switching nodes resets the chat.

**Autonomous agents:**
- An agent is a node tagged with `#agent`. It has a fixed instruction, context sources, and a schedule.
- Runs automatically (daily, weekly...) or manually on demand.
- Can read nodes, create them, update content, and perform web searches.
- Great for automatic summaries, recurring reports, or capturing external information.

---

## 11. Areas

An **area** is a label that groups related nodes under a shared context: work, personal, health, a specific client.

**Create an area:**
- In any node's properties panel, find the **Area** field and type the name.
- From creates the area instantly if it doesn't exist.

**Area AI context:**
- Each area can have a special context node (`_areaCtx`).
- That node's body is automatically included in the chat system prompt when working with nodes in that area.
- To edit it: open the chat in any node of the area and use the area tag button.
- Example: in the "Clients" area, write "We work with B2B companies in healthcare, formal tone."

---

## 12. Sync and account

**Without an account (free mode):**
- Unlimited bullets, nodes, and files stored locally.
- No sync across devices, no AI.

**With an account:**
- Changes sync automatically between Mac and iPhone every few minutes.
- Delta sync: only changes travel, not the whole database.

**Plans:**

| Plan | Price | Includes |
|---|---|---|
| Free | €0 | Local nodes and files, no sync |
| Subscription | €7/month | Sync + managed AI tokens |
| License | €59 one-time | Sync + AI with your own API key |

**AI tokens (subscription plan):**
- Chat usage consumes prepaid tokens included in your subscription.
- Buy additional top-ups from **Settings → Account**.

**Local backup:**
- From automatically exports all your nodes to Markdown every 2 hours to:
  `~/Library/Application Support/From/Backups/`

---

## 13. Useful settings

Access from the **From → Settings** menu or with `⌘,`.

| Section | What you configure |
|---|---|
| **Account** | Login, subscription, AI tokens, own API key |
| **Appearance** | Light/dark theme, font size |
| **Keyboard Shortcuts** | Reassign any shortcut in the app |
| **Calendar** | Enable Apple Calendar sync, select calendars |
| **Types & Statuses** | Create, edit, or delete custom node types and statuses |
| **AI** | Agents, saved prompts, assistant configuration |
| **Backup** | Local backup status, export path |
| **Space** | Local directory for files and agents |

**Voice transcription (iOS):**
- In the iPhone app, the microphone button in quick capture transcribes your voice to text.
- The transcribed text is inserted as a bullet ready to edit.

---

*getfrom.app*
