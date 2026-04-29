# From — Documentacion completa

> Documento vivo. Se actualiza automaticamente en cada sesion de trabajo.
> Ultima actualizacion: 2026-04-29

---

## Que es From

**From** es una aplicacion nativa para macOS que funciona como un segundo cerebro personal. Combina notas en Markdown, gestion de tareas, vistas de calendario, agentes autonomos de IA y sincronizacion con iCloud, todo en una app local-first donde los datos son del usuario y nunca salen de su dispositivo.

**Tagline:** Tu segundo cerebro. En tu Mac. Solo tuyo.

**Propuesta de valor:**
- **Local-first, privacidad radical:** Sin servidores obligatorios, sin telemetria, sin lock-in. Las notas son archivos `.md` estandar que funcionan con Obsidian, iA Writer, VS Code o cualquier editor de texto.
- **Nativo macOS:** Construido en Swift y SwiftUI. Rendimiento nativo, integracion con el sistema (Calendar, Reminders, iCloud Drive, Spotlight).
- **IA integrada:** Asistente conversacional con contexto completo del vault. Agentes autonomos que trabajan solos.
- **Organizacion natural:** Jerarquia parent-child flexible sin carpetas rigidas. Raices con colores, tipos personalizables, vistas configurables.

**Publico objetivo:**
- Personas cansadas de apps de notas dependientes de la nube
- Usuarios que priorizan la privacidad
- Usuarios de Mac que quieren rendimiento nativo
- Knowledge workers (proyectos, tareas, notas interconectadas)
- Entusiastas de IA que quieren RAG local sobre sus propios datos

---

## Stack tecnologico

| Componente | Tecnologia |
|---|---|
| App macOS | Swift 5 + SwiftUI |
| Plataforma | macOS 14+ (Sonoma) |
| Almacenamiento | Archivos `.md` en iCloud Drive |
| Busqueda | SQLite FTS5 (full-text search + RAG) |
| Backend opcional | TypeScript + Bun + Hono + PostgreSQL |
| Sincronizacion | CloudKit (iCloud) |
| Calendario | EventKit (Apple Calendar + Reminders) |
| IA | Multi-proveedor: Anthropic, OpenAI, Google |
| Pagos | LemonSqueezy |
| Landing | HTML estatico (getfrom.app, GitHub Pages) |

---

## Estructura del vault

From trabaja sobre una carpeta en iCloud Drive (el "vault") con esta estructura:

```
Centro/                         (vault raiz)
├── Notas/                      (todas las notas del usuario)
├── Diario/                     (notas diarias: YYYYMMDD.md)
├── Raices/                     (raices: categorias principales)
├── Agentes/                    (agentes autonomos IA)
├── Plantillas/                 (plantillas de notas)
├── Archivos/                   (archivos adjuntos)
├── Colecciones/                (colecciones de notas)
└── .from/                      (metadatos internos)
    ├── versions/               (historial de versiones)
    ├── ai_instructions/        (instrucciones IA permanentes por nota)
    └── activity.jsonl          (log de actividad)
```

Cada nota es un archivo `.md` con frontmatter YAML que define sus propiedades.

---

## Primer uso — Onboarding

### Paso 1: Pantalla de bienvenida
Al abrir From por primera vez, aparece **VaultPickerView**, un wizard de 2 pasos:
1. **Filosofia:** Explica que es From y como funciona (local-first, archivos .md)
2. **Elegir carpeta:** El usuario selecciona una carpeta en su Mac/iCloud Drive como vault

### Paso 2: Crear primera Raiz
Tras seleccionar el vault, From muestra un estado vacio que invita a crear la primera raiz desde Ajustes > Raices.

### Paso 3: Configurar IA (opcional)
En Ajustes > Cuenta, el usuario puede:
- Activar la IA
- Elegir modo automatico (suscripcion From) o manual (propia API key)
- Conectar con Claude, OpenAI o Google

### Paso 4: Crear perfil (opcional)
En Ajustes > Perfil IA o a traves de **ProfileWizardView**, el usuario puede crear un perfil que la IA usara como contexto para personalizar respuestas.

---

## Navegacion principal

La interfaz de From tiene 3 zonas principales:

### Barra lateral izquierda (sidebar)

Secciones fijas de navegacion (en orden):
- **Dia** — Vista timeline del dia actual
- **Semana** — Vista semanal con 7 columnas
- **Mes** — Vista mensual con grid
- **Ano** — Vista anual con filas semanales
- **Explorar** — Raices, colecciones y tipos transversales
- **Enlaces** — Organizador de URLs extraidas de notas y manuales
- **Archivos** — Gestor de archivos adjuntos
- **IA** — Chat con el asistente de IA
- **Ajustes** — Configuracion completa (incluyendo Agentes)

Secciones dinamicas (se muestran cuando existen):
- **Vistas** — Vistas personalizadas del usuario (kanban, lista, calendario, etc.)
- **Filtros** — Filtros guardados (legacy)
- **Favoritos** — Notas marcadas como favoritas

> Los **Agentes** se gestionan desde Ajustes > Agentes. El indicador de la barra de estado inferior tambien da acceso rapido a ellos.

### Zona central (contenido)

Cambia segun la seccion seleccionada en la sidebar. Puede mostrar:
- Una vista de timeline (dia/semana/mes/ano)
- La vista Explorar (raices, colecciones, tipos)
- El gestor de enlaces
- El gestor de archivos
- El chat de IA
- Los ajustes completos
- Una vista personalizada (kanban, calendario, lista)
- El editor de una nota individual

### Barra de estado (footer)

Siempre visible en la parte inferior:
- **Indicador de agentes (izquierda):** Muestra cuantos agentes estan activos/pausados, proxima ejecucion y boton de revisar pendientes. Clic navega a Ajustes > Agentes.
- **Indicador de IA (derecha):** Estado de conexion, modelo actual, balance de tokens
- **Selector de modelo:** Cambiar modelo IA activo
- **Boton de refresco:** Recarga manual de notas desde disco

### Barra de cabecera (header)

Encima del contenido central:
- **Botones de historial (izquierda):** Atras/Adelante
- **Buscador global (centro):** Busqueda en tiempo real en toda la app
- **Botones de accion rapida (derecha):**
  - Nueva nota (`note.text.badge.plus`)
  - Nuevo proyecto (`Cmd+Shift+P`)
  - Nueva area
  - Nuevo evento
  - Nueva tarea (`Cmd+R`)
  - Nueva vista personalizada
  - Dropdown de agentes manuales

### Modo Focus

`Cmd+F` oculta la sidebar y paneles laterales para edicion sin distracciones. Se activa/desactiva con animacion suave.

---

## Atajos de teclado

| Atajo | Accion |
|---|---|
| Cmd+N | Nueva nota |
| Cmd+R | Nueva tarea |
| Cmd+E | Nuevo evento |
| Cmd+Shift+P | Nuevo proyecto |
| Cmd+O | Busqueda Spotlight |
| Cmd+F | Modo Focus (ocultar/mostrar paneles) |
| Cmd+Shift+M | Mantenimiento/Ajustes |
| Cmd+? | Abrir documentacion en el navegador |

Los atajos son personalizables en Ajustes > Atajos.

---

## Notas

### Crear una nota

Formas de crear una nota:
1. **Cmd+N** desde cualquier lugar
2. **Boton "+"** en la cabecera
3. **Boton "+"** al pasar el raton sobre una nota en el arbol (crea nota hija)
4. **Desde el editor** de otra nota (boton + en breadcrumb, crea nota hija)
5. **Desde una plantilla** (menu de plantillas en el editor)

### Editor de notas (NoteEditorView)

El editor es la pieza central de From. Se compone de:

#### Breadcrumb (parte superior)
- Muestra la ruta: Raiz > Padre > ... > Nota actual
- Cada nivel es clickable para navegar
- Titulo editable inline (click para renombrar)
- Boton + para crear nota hija
- Controles (derecha): fecha, parent, tarea (circulo), favorito (estrella), publicar (globo), Google Docs
  - Todos los iconos: circulos de 22x22 con fondo sutil, color activo/inactivo
- Menu contextual (tres puntos):
  - Exportar como Markdown
  - Exportar como PDF
  - Abrir en Finder
  - Eliminar nota

#### Barra de tipo y coleccion
- **Tipo:** Pills multiseleccion para asignar tipos a la nota (ej: proyecto, idea, recurso, futuro). Se pueden crear tipos nuevos sobre la marcha. Busqueda integrada.
- **Coleccion (Col):** Asignar la nota a una o mas colecciones.

#### Panel de propiedades de tarea
Aparece cuando la nota tiene `activa: true`:
- **Estado:** Dropdown con estados configurables (pending, in_progress, done, cancelled)
- **Fecha limite:** Date picker con o sin hora
- **Fecha fin:** Para tareas con bloque de tiempo
- **Prioridad:** Alta, media, baja
- **Recurrencia:** Diaria, semanal, mensual

#### Editor Markdown
- Edicion de texto enriquecido en Markdown (CodeMirror 6 con WKWebView)
- Barra de herramientas de formato
- Wikilinks: `[[Nombre de nota]]` para enlazar notas
- Checkboxes de tareas inline: `- [ ] Texto libre` — estas tareas aparecen en el timeline
- Insercion de plantillas
- Autoguardado con debounce de 800ms

#### Panel izquierdo — RaizTreePanel (colapsable)
- Vista jerarquica de notas bajo la raiz actual
- Nodos expandibles/colapsables con color de raiz
- Indicadores de estado (verde = activa, naranja = futuro)
- Click para navegar entre notas

#### Panel derecho (3 pestanas, ancho ajustable)

**Pestana Chat:**
- Conversacion de IA vinculada a la nota actual
- El contexto de la nota se inyecta automaticamente
- Instrucciones permanentes accesibles via icono `note.text` en el toolbar
- Las modificaciones de la IA se aplican en vivo al editor

**Pestana Indice (tab por defecto en notas normales):**
- Headings de la nota — click para saltar a la seccion
- **Conexiones:**
  - Frontmatter editable (campos clave-valor)
  - Enlaces salientes (wikilinks)
  - Enlaces entrantes (notas que enlazan a esta)
  - Tareas agrupadas por heading
  - Enlaces externos (URLs en el contenido)
  - Historial IA
  - Notas hijas (max 6)

**Pestana Historial:**
- Lista de versiones guardadas (cronologico inverso)
- Preview de la version seleccionada
- Boton de restaurar (crea backup de seguridad antes de restaurar)

---

### Workspace de proyecto y area (`tipo: proyecto` / `tipo: area`)

Cuando una nota tiene `tipo: proyecto` o `tipo: area`, se abre en un layout de 3 columnas (workspace). El comportamiento es identico en proyectos y areas.

#### Panel izquierdo — RaizTreePanel (igual que nota normal)

#### Columna central — Editor master-detail
- Cuando se selecciona una nota hija: editor Markdown embebido (`embedded: true`) para esa nota
- Cuando no hay nota hija seleccionada: editor del propio proyecto/area
- La cabecera (breadcrumb, tipo, coleccion) siempre pertenece a la nota que se esta editando

#### Panel derecho — 4 pestanas

**Pestana Workspace (tab por defecto):**

`ProjectTaskPanel` — Bloque de tareas del proyecto:
- Tareas almacenadas en el bloque `tasks:` del frontmatter (no en el body)
- Crear tarea inline (Enter confirma, Esc cancela)
- Toggle completado con un clic
- Fecha+hora asignable via DateTimePickerPopover
- Barra de progreso en el header

`ProjectContextPanel` — Bloque de contexto unificado:
- Primera fila: siempre la propia nota del proyecto/area (icono `folder.fill`)
- Notas hijas debajo (parent = titulo del proyecto)
- Refs del frontmatter: notas vinculadas, colecciones, URLs, archivos, Google Docs
- Seleccion con highlight: click en cualquier fila → cambia la nota activa en el editor central
- Campo de busqueda siempre visible: busca notas y detecta URLs automaticamente
  - URLs pegadas (`http...`) se anaden directamente
  - Sin coincidencias: ofrece "Crear nota" inline
- Icono de colecciones (`folder`) con popover de pills clicables
- Icono de adjuntos (`paperclip`) para anadir archivos
- Boton `note.text.badge.plus` para crear nota hija directamente
- Eliminar nota con context menu

`ProjectLogPanel` — Log de actividad del proyecto.

**Pestana Chat:** Misma funcionalidad que en notas normales, con contexto automatico del proyecto:
- Body del proyecto/area
- Ancestros (raiz, padres)
- Tareas del bloque `tasks:`
- Notas hijas
- Refs, URLs, archivos, colecciones

**Pestana Indice:** Headings + conexiones del proyecto.

**Pestana Historial:** Versiones guardadas.

#### Identidad de proyecto vs area
- `isProject` = `tipos.contains("proyecto")`
- `isArea` = `tipos.contains("area")`
- Ambos abren el mismo workspace layout — el comportamiento es identico

---

### Frontmatter

Cada nota tiene un bloque YAML al inicio del archivo:

```yaml
---
parent: nombre-del-padre
tipo: proyecto, idea
col: coleccion1, coleccion2
refs: nota-vinculada, url:https://..., file:nombre-archivo, gdoc:ID
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

Campos especiales:
- `archivado: true` — oculta la nota de listas principales pero no la elimina
- `tasks:` — bloque YAML especial para tareas de proyecto (no es un campo simple)
- `chat: true` — indica que la nota es una conversacion de IA

### Tareas de proyecto (`tasks:`)

Las notas de tipo proyecto almacenan sus tareas en un bloque `tasks:` del frontmatter (tipo `ProjectTask`), separadas del body de la nota:

```yaml
tasks:
  - id: abc123
    text: Redactar propuesta
    done: false
    due: 2026-05-10T10:00
  - id: def456
    text: Revisar con equipo
    done: true
```

Estas tareas se renderizan en el `ProjectTaskPanel` del workspace y aparecen en todas las vistas de timeline (Dia, Semana, Mes, Ano) como `InlineTaskChipView`.

### Tareas inline del body

Las notas pueden tener checkboxes en el body de Markdown (`- [ ] texto`). Estas se parsean como `InlineTask` y aparecen tambien en las vistas de timeline. Son independientes de las `ProjectTask` del frontmatter.

### Jerarquia parent-child

El sistema usa un unico campo `parent:` para definir la jerarquia. No hay campo `raiz:`.

- El `parent:` es siempre el padre directo inmediato
- El raiz se resuelve subiendo la cadena de padres hasta encontrar un archivo en `Raices/`
- Una nota puede estar a cualquier profundidad

Ejemplo:
```
Raices/coding.md                         (raiz, sin parent)
  └─ Notas/From — Nota principal.md     (parent: coding)
      └─ Notas/From — Plugin.md         (parent: From — Nota principal)
          └─ Notas/From — Plugin API.md  (parent: From — Plugin)
```

### Tipos de nota

Los tipos son etiquetas personalizables con color. Ejemplos:
- `proyecto`, `area` — abren el workspace de 3 columnas
- `idea`, `recurso`, `futuro` — notas normales
- El usuario puede crear tipos nuevos sobre la marcha desde el editor o desde Ajustes > Tipos
- Cada tipo tiene una propiedad `defaultActiva` que marca automaticamente las notas de ese tipo como activas

### Colecciones

Las colecciones agrupan notas transversalmente (sin relacion jerarquica). Una nota puede pertenecer a varias colecciones. Desde la seccion Explorar se pueden filtrar notas por coleccion.

### Publicar notas

Cualquier nota se puede publicar como pagina web publica:
1. Boton de globo en el breadcrumb — clic para publicar
2. Se genera un slug corto de 8 caracteres
3. La nota es accesible en `https://from-server-production.up.railway.app/p/SLUG`
4. La URL se copia al portapapeles y se muestra alert con opcion de abrir en navegador
5. El boton se pone verde cuando la nota esta publicada
6. **Auto-sync:** los cambios se sincronizan al servidor cada 30s (debounce, solo si cambio el contenido)
7. Clic en el boton verde → despublica y destruye la URL

### Historial de versiones

- From guarda automaticamente una version antes de cada cambio importante
- Las versiones se almacenan en `.from/versions/`
- Se puede restaurar cualquier version previa
- Al restaurar, se crea un backup de seguridad del estado actual
- Las versiones son locales (no se sincronizan via iCloud)

---

## Timeline / Calendario

From ofrece 4 vistas temporales que combinan notas con fecha, eventos de Apple Calendar y tareas de proyecto.

### Vista Dia (DayTimelineView)

La vista de dia tiene dos zonas:

**Columna izquierda — Timeline horizontal por horas:**
- Franjas horarias configurables (inicio y fin)
- Notas con `due` en hora especifica posicionadas en su franja
- Eventos de Apple Calendar en su hora
- Drag para mover notas a otra hora
- Resize del borde derecho para ajustar duracion
- Linea roja de hora actual
- Creacion de tarea/evento inline haciendo clic en una franja vacia

**Columna izquierda — 3 secciones verticales:**
- **Agenda:** Eventos y notas de todo el dia (sin hora o multi-dia)
- **Tareas:** Notas-tarea y tareas inline de proyectos (`InlineTaskChipView`), agrupadas por nota padre. Incluye tareas vencidas. Clic en una tarea abre su nota padre (nunca un popover).
- **Notas de hoy:** Notas creadas o modificadas hoy

**Panel lateral derecho:** Nota diaria (`YYYYMMDD.md`) con editor Markdown.

Toggles de visibilidad: Notas / Eventos de calendario / Boton "Ir a hoy".

### Vista Semana (WeekTimelineView)
- 7 columnas (lunes a domingo)
- Cada columna muestra eventos y tareas del dia
- `ProjectsUnscheduledSidebar` lateral izquierdo con dos secciones: Vencidas (`due < inicio semana`) + Sin fecha (`due == nil && isActiva`)
- Colores diferenciados: notas (acento) vs calendario (morado)
- **Soporte multi-dia:** notas con `due` (inicio) y `due_end` (fin en otro dia) aparecen en la franja "todo el dia" de cada columna que cubren
- Tareas inline de proyecto (`InlineTaskChipView`) con drag para asignar fecha

### Vista Mes (MonthTimelineView)
- Grid mensual clasico
- `ProjectsUnscheduledSidebar` lateral con Vencidas + Sin fecha
- Cada celda muestra eventos/tareas del dia
- **Soporte multi-dia** por rango de fechas
- Tareas inline de proyecto (`InlineTaskChipView`) con drag `alwaysAllDay: true`

### Vista Ano (YearTimelineView)
- 12 bloques mensuales con filas semanales
- Indicadores de actividad tipo heatmap
- `ProjectsUnscheduledSidebar` lateral con Vencidas + Sin fecha
- Tareas inline de proyecto (`InlineTaskChipView`) con drag

---

## Raices

### Que es un Raiz

Un Raiz es la categoria de nivel superior en la jerarquia de From. Cada raiz:
- Tiene su propio color personalizable
- Contiene notas organizadas en arbol
- Tiene un campo de contexto en markdown que la IA usa para entender el ambito
- Se almacena como archivo `.md` en la carpeta `Raices/`

### Gestion de Raices

Las raices se gestionan desde **Ajustes > Raices**:
- Crear nueva raiz (nombre + color)
- Renombrar (actualiza automaticamente el campo `parent:` de todas las notas hijas)
- Cambiar color
- Eliminar (las notas hijas se "huerfanan" — no se eliminan)

### Vista Explorar (ColeccionesView)

La seccion **Explorar** en la sidebar es la puerta de entrada a todo el contenido organizado:

**Sidebar izquierdo de Explorar:**
- Lista de raices expandibles, cada una con:
  - Contador de notas
  - Colecciones de la raiz
  - Tipos de nota usados en la raiz
- Click en raiz → panel central con dashboard de esa raiz
- Click en coleccion → lista de notas de esa coleccion
- Click en tipo → lista de notas de ese tipo

**Panel central de raiz:**
- Header: nombre (doble clic para renombrar), recuento de notas/colecciones/tipos, boton "Abrir nota" (nota de la raiz)
- Seccion Colecciones: tarjetas de cada coleccion con recuento
- Seccion Tipos: pills con colores y recuento

**Panel central de coleccion/tipo:**
- Lista de notas filtradas con acciones batch (cambiar col/tipo)
- Click en nota → editor en panel derecho con sidebar colapsado

---

## Vistas configurables

From permite crear vistas personalizadas sobre las notas. Accesibles desde la seccion "Vistas" en la sidebar.

### Kanban (KanbanView)
- Columnas configurables (por estado, tipo, prioridad, etc.)
- Arrastrar tarjetas entre columnas
- Crear notas directamente en columnas

### Lista configurable (NoteListViewConfig)
- Lista de notas con filtros y ordenacion personalizada
- Columnas visibles configurables

### Calendario (NoteCalendarView)
- Vista de calendario con notas posicionadas por fecha

### Tarjetas (NoteCardsView)
- Vista de tarjetas con previews de contenido

### Focus (NoteFocusView)
- Una nota a la vez con navegacion secuencial

### Vistas inline

Las vistas se pueden embeber dentro del editor de una nota:
- **Inline Kanban, Lista, Calendario, Tabs** — filtran las notas hijas de la nota actual

Se crean desde el editor.

---

## Busqueda

### Busqueda Spotlight (Cmd+O)
- Modal centrado estilo Spotlight de macOS (480x520px)
- Busqueda instantanea en titulo y contenido
- Pills de raiz para filtrar rapidamente
- Resultados clickables para navegar directamente

### Buscador global (header)
- Barra integrada en el header, siempre visible
- Busqueda en tiempo real mientras se escribe
- Resultados: notas, tareas, archivos, enlaces

### Motor de busqueda
- SQLite FTS5 para full-text search
- Indexacion automatica al cargar notas
- Tambien usado internamente para RAG (la IA busca contexto relevante en el vault)

---

## Chat de IA

### Vista principal de Chat (ChatView)

Interfaz de 3 columnas:

**Columna izquierda (280px) — Sidebar de conversaciones:**
- Campo de busqueda (filtra por titulo y contenido)
- Boton de nota vinculada: vincula una nota a la conversacion
- Boton Google Drive (si conectado): importa documentos como contexto
- Boton + para nueva conversacion
- Lista de conversaciones con titulo, fecha y nota asociada

**Columna central — Chat (ChatPanel):**
- Mensajes de usuario y asistente con streaming
- Soporte Markdown en respuestas
- Input multilinea con auto-resize
- Soporte de @menciones:
  - `@nombre_agente` — Ejecutar agente
  - `@/nombre_prompt` — Usar prompt guardado
  - `@nombre_nota` — Inyectar nota como contexto
- Popup de menciones con navegacion por teclado

**Columna derecha (360px) — Panel de nota vinculada (colapsable):**
- Editor de la nota vinculada
- Toolbar: Deshacer, Rehacer, Abrir en editor principal, Desvincular
- Sincronizacion en vivo con el contexto del chat

### Modos de IA

| Modo | Descripcion | Requisitos |
|---|---|---|
| Automatico | Usa el servidor de From, tokens gestionados | Suscripcion activa |
| Manual | Usa API key propia del usuario | Clave de API valida |
| Claude OAuth | Usa suscripcion Claude Pro/Max del usuario | Login OAuth |

### Proveedores y modelos soportados

| Proveedor | Modelos | Tier |
|---|---|---|
| Google | Gemini 2.5 Flash | Rapido |
| OpenAI | GPT-4o Mini | Rapido |
| Anthropic | Claude Haiku 4.5 | Equilibrado |
| OpenAI | GPT-4o | Potente |
| Anthropic | Claude Sonnet 4.6 | Potente |
| Google | Gemini 1.5 Pro | Equilibrado |

### Chat contextual en el editor

Cuando se abre la pestana Chat en el panel derecho del editor, el chat tiene contexto automatico de:
- Contenido completo de la nota actual
- Cadena de ancestors (raiz > padre > nota)
- Busqueda RAG para contexto relevante del vault

En proyectos y areas, el chat incluye adicionalmente: tareas del bloque `tasks:`, notas hijas, refs, URLs, archivos y colecciones.

---

## Editor IA (AIEditorService)

### Que es el modo Editor IA

Un modo especial donde la IA puede editar directamente el contenido de una nota. La IA lee la nota, recibe instrucciones del usuario, y devuelve la nota modificada.

### Como funciona

1. El usuario activa el modo IA en el editor
2. Aparece el **AISessionBanner** con controles:
   - Deshacer / Rehacer cambios de la IA
   - Confirmar cambios
   - Descartar cambios
   - Toggle para ver version original
3. El usuario escribe instrucciones
4. La IA modifica la nota y muestra el resultado
5. El usuario confirma o descarta

### Instrucciones permanentes

Cada nota puede tener instrucciones permanentes para la IA (almacenadas en `.from/ai_instructions/`). Estas instrucciones se aplican siempre que la IA edita esa nota. Se configuran via el icono `note.text` en el toolbar del chat.

---

## Agentes autonomos

### Que es un agente

Un agente es una tarea automatizada que la IA ejecuta de forma autonoma. Cada agente tiene instrucciones, un horario de ejecucion, acciones permitidas y fuentes de contexto.

### Acceso a Agentes

Los agentes estan en **Ajustes > Agentes**. Tambien se puede:
- Clic en el indicador de agentes en la barra de estado inferior
- Usar el dropdown de agentes manuales en el header para lanzarlos directamente

### Vista de Agentes (AgentListView)

**Columna izquierda (340px):**
- Campo de busqueda
- Menu de creacion (tres puntos):
  - "Desde descripcion" (sparkles): Describir en lenguaje natural y la IA genera el agente
  - "Manual": Crear agente en blanco
  - "Desde plantilla": Clonar una plantilla predefinida
- Lista de agentes con horario, proxima ejecucion y acciones (Play, Stop, Eliminar)

**Columna derecha:** Detalle del agente seleccionado (AgentDetailView)

### Configuracion de un agente (AgentDetailView)

**Horario:**
| Tipo | Descripcion |
|---|---|
| Manual | Solo se ejecuta cuando el usuario lo lanza |
| Diario | Se ejecuta cada dia a la hora configurada |
| Semanal | Un dia especifico de la semana a una hora |
| Mensual | Un dia especifico del mes a una hora |
| Al abrir | Al abrir From (maximo una vez por hora) |

**Instrucciones:** Editor de texto con @menciones:
- `@hoy`, `@perfil`, `@diario`, `@Raiz`, `@Nota`

**Acciones permitidas:**

| Accion | Descripcion |
|---|---|
| leer notas | Leer contenido de notas |
| actualizar nota | Modificar o crear secciones en notas |
| crear nota | Crear notas nuevas |
| fetch_url | Descargar y parsear contenido web |
| buscar web | Buscar en internet |
| leer raiz | Leer contenido de un raiz |
| leer perfil | Leer perfil y contexto del usuario |
| actualizar perfil | Modificar el perfil |

**Fuentes de contexto (pre-loaded):**

| Fuente | Descripcion |
|---|---|
| Perfil | Contenido de profile.md y contexto.md |
| Hoy | Nota del diario de hoy |
| Diario (N) | Ultimas N entradas del diario |
| Todas las notas | Indice de todas las notas |
| Raiz X | Todas las notas de un raiz |
| Nota X | Una nota especifica |
| Nota X + hijas | Una nota y todas sus descendientes |

**Ejecucion manual:** Boton que ejecuta el agente inmediatamente con input opcional.

**Memoria del agente:** Seccion `## Memoria del agente` en el archivo .md donde se guarda el log de ejecuciones.

### Ejecucion de agentes

El proceso de ejecucion:
1. Se cargan las fuentes de contexto
2. Se construye el system prompt con instrucciones y contexto
3. Se envia al modelo IA seleccionado
4. La IA responde con texto y opcionalmente bloques de accion
5. Los bloques de accion se parsean y ejecutan
6. El resultado se devuelve a la IA para la siguiente iteracion
7. Se repite hasta un maximo de 8 turnos
8. Se registra el resultado en la memoria del agente

Formato de bloques de accion:
````
```from-action
action: actualizar_nota
title: Nombre de la nota
content: Contenido nuevo
heading: ## Seccion especifica
```
````

### Panel de ejecucion (AgentRunPanel)

Dialog modal al ejecutar un agente manualmente:
- Input multilinea (requerido u opcional segun el agente)
- Grabacion de voz para dictar input
- Botones: Cancelar (Esc) / Ejecutar (Enter)

### Plantillas predefinidas

From incluye plantillas de agentes listos para usar que cubren casos comunes de productividad.

---

## Taller (TallerChatView)

Un espacio de trabajo en Ajustes > Taller para depurar y mejorar agentes y prompts. Es un sandbox donde la IA ayuda a refinar las instrucciones.

Uso:
1. Escribir en el chat con `@nombre_agente` para cargar un agente, `@/nombre_prompt` para un prompt, `@nombre_nota` para una nota
2. La IA analiza el agente/prompt y sugiere mejoras
3. Las sugerencias incluyen botones "Aplicar" y "Descartar"
4. Aplicar actualiza directamente el agente o prompt

---

## Archivos (ArchivosView)

Archivos adjuntos almacenados en la carpeta `Archivos/` del vault. Cada archivo tiene un sidecar `.md` con metadatos.

### Funcionalidades
- **Importar:** Drag & drop o boton de importar
- **Buscar:** Por nombre, descripcion, tags o nota padre
- **Agrupar:** Por fecha, tipo o nota padre
- **Tipos:** PDF, imagen, video, audio, documento, otro
- **Vincular:** Cada archivo puede estar vinculado a multiples notas

### Sidecar de metadata

```yaml
---
tipo: pdf
descripcion: Manual de usuario
tags: documentacion, referencia
parents: Nota principal, Proyecto X
---
```

---

## Canvas / Pizarra (PizarraView)

Espacio visual de canvas infinito para crear diagramas y mapas mentales. Se almacena como una nota con `pizarra: true`.

### Funcionalidades
- Superficie de dibujo libre con zoom/pan
- Nodos de texto
- Flechas/conexiones entre nodos
- Paleta de colores
- Grosor de linea configurable
- Deshacer/Rehacer
- Exportar como imagen

---

## Perfil

### Que es el Perfil

El perfil es informacion sobre el usuario que la IA usa como contexto para personalizar respuestas y que los agentes entiendan al usuario.

### Componentes
- **profile.md** — Datos del usuario: nombre, rol, intereses, etc.
- **contexto.md** — Contexto adicional y memoria de la IA
- **ProfileWizardView** — Asistente guiado para crear el perfil paso a paso

Gestionado desde Ajustes > Perfil IA.

---

## Ajustes (FromSettingsView)

Los Ajustes tienen una sidebar izquierda con grupos y seleccion de pestana. Ancho maximo del area de contenido: 760px.

### Grupo (sin titulo) — Cuenta
- **Cuenta** — Login/registro, configuracion completa de IA:
  - Toggle IA on/off
  - Modo: Automatico (suscripcion €7/mes) / Manual (licencia o Claude Pro)
  - Balance de tokens y recarga (modo Automatico)
  - Login OAuth con Claude (modo Manual)
  - Selector de modelo Claude (modo Manual)
  - Licencia: activar/desactivar license key
  - Proveedores multi-API: Anthropic, OpenAI, Google con validacion
  - Busqueda web (Brave Search API key)
  - Privacidad IA
  - Gestion de plan, cambiar contrasena, cancelar suscripcion, eliminar cuenta
- **Google** — Integracion Google Drive y Google Docs:
  - Lista de cuentas Google conectadas (multi-cuenta)
  - Conectar/eliminar cuenta
  - Carpeta destino para nuevos Google Docs

### Grupo Contenido
- **Espacio** — Ruta del vault, carpetas configuradas
- **Raices** — Crear, renombrar, cambiar color y eliminar raices
- **Tipos** — Crear, editar y eliminar tipos de nota (color, nombre, defaultActiva)
- **Estados** — Configurar estados de tarea personalizados con color e icono
- **Plantillas** — Gestionar plantillas de notas del vault
- **Calendario** — Calendarios visibles, listas de recordatorios, configuracion de sincronizacion

### Grupo Apariencia
- **Vista** — Configuracion de las vistas de timeline (hora inicio/fin, etc.)
- **Apariencia** — Tema: Sistema, Claro, Oscuro
- **Voz** — Configuracion de grabacion y transcripcion de voz

### Grupo Inteligencia Artificial
- **Prompts** — Biblioteca de prompts guardados. Se invocan desde el chat con `@/nombre`
- **Perfil IA** — Editor de profile.md y contexto.md; ProfileWizardView
- **Agentes** — Gestor completo de agentes autonomos (AgentListView)
- **Taller** — Sandbox para depurar agentes y prompts (TallerChatView)
- **Asistente** — Asistente de prompts para crear/mejorar prompts (PromptAssistantTab)

### Grupo Productividad
- **Atajos** — Atajos de teclado personalizables (ShortcutsSettingsTab)

### Grupo Datos
- **Backup** — Backup manual/automatico diario, maximo de backups, restaurar desde backup
- **Exportar** — Exportar notas a ZIP
- **Importar** — Importar notas desde ZIP o vault de Obsidian
- **Mantenimiento** — Auditoria del vault:
  - Tareas sin fecha, eventos antiguos sin contenido, raices vacias
  - Tipos sin usar, notas sin contenido, notas huerfanas
  - Tareas huerfanas, archivos sin nota madre, titulos duplicados
  - Nota madre rota

---

## Sincronizacion y datos

### iCloud Drive
- Las notas son archivos `.md` en iCloud Drive
- La sincronizacion entre dispositivos es automatica via iCloud
- From no depende de un servidor propio para la sincronizacion

### CloudKit (CloudSyncService)
- Sincronizacion activa de cambios (push notifications)
- Resolucion de conflictos (gana el timestamp mas reciente, tolerancia de 1 segundo)
- Upload con debounce de 2 segundos
- Tipos de registro: "Note" (contenido) y "File" (assets)
- En caso de conflicto: banner visible con boton para ir a ConflictsView y resolver

### Backups automaticos
- Se ejecutan 10 minutos despues de abrir la app
- Frecuencia: diaria (si han pasado mas de 24h desde el ultimo)
- Ubicacion: Application Support (no en el vault)
- Incluyen: Notas, Raices, Diario, Plantillas, Agentes, Archivos
- Retencion: maximo 10 backups (configurable en Ajustes > Backup)

---

## Backend (from-server)

### Descripcion

Backend opcional construido con TypeScript, Bun y Hono. Gestiona autenticacion, tokens de IA, publicacion de notas y pagos.

### Endpoints principales

**Autenticacion (/auth)**
- POST /auth/register — Registro con email + password
- POST /auth/login — Login
- POST /auth/refresh — Rotacion de tokens
- POST /auth/logout — Cerrar sesion
- POST /auth/google — Login con Google OAuth
- GET /auth/me — Perfil del usuario actual

**Agentes (/agents)**
- POST /agents/run — Ejecutar agente con contexto
- GET /agents/runs — Historial de ejecuciones
- GET /agents/runs/:id — Detalle de una ejecucion

**Tokens (/tokens)**
- GET /tokens/balance — Balance de tokens del usuario
- GET /tokens/ledger — Historial de transacciones

**Admin (/admin)**
- GET /admin/providers — Estado de proveedores IA
- PUT /admin/providers/key — Configurar API keys
- PATCH /admin/providers/:provider/toggle — Activar/desactivar proveedor
- GET /admin/users — Lista de usuarios
- POST /admin/tokens/add — Ajuste manual de tokens
- POST /admin/users/:id/make-admin — Hacer admin
- GET /admin/stats — Estadisticas de uso

**Webhooks (/webhooks)**
- POST /webhooks/lemonsqueezy — Procesador de pagos
- POST /webhooks/license-verify — Validacion de licencia
- POST /webhooks/checkout-url — Generar enlace de pago

**Notas publicas (/notes, /p)**
- POST /notes/publish — Publicar nota con slug
- POST /notes/unpublish/:slug — Despublicar
- GET /p/:slug — Renderizar nota publica (sin auth)

### Base de datos

PostgreSQL con Drizzle ORM. Tablas:

| Tabla | Descripcion |
|---|---|
| users | Cuentas, suscripcion, licencia, balance de tokens |
| token_ledger | Log inmutable de transacciones de tokens |
| agent_runs | Historial de ejecuciones de agentes |
| admin_api_keys | API keys de proveedores IA (encriptadas AES) |
| refresh_tokens | Tokens de refresco con TTL 30 dias |
| public_notes | Notas publicadas con slugs |

### Seguridad
- JWT (HS256) con access token de 15 min + refresh token de 30 dias
- Passwords hasheados con bcryptjs (cost 12)
- API keys encriptadas con AES en la base de datos
- CORS restringido a getfrom.app y localhost
- Queries parametrizadas via Drizzle ORM

---

## Modelo de negocio y precios

### Planes

| Plan | Precio | Incluye |
|---|---|---|
| Gratis | 0 | Todas las funciones de la app sin IA |
| Licencia | 59 USD (unico pago) | App completa + IA con API key propia (Anthropic/OpenAI/Google) o Claude OAuth |
| Suscripcion | 7 euros/mes | App completa + IA gestionada (10M tokens/mes, sin API key) |

**Importante:** La suscripcion y la licencia son modos excluyentes. Con suscripcion se usa solo IA gestionada (From gestiona las API keys). Con licencia se usa solo la propia API key o Claude OAuth. No se pueden mezclar modos.

### Procesador de pagos

LemonSqueezy gestiona:
- Ciclo de vida de suscripciones (creacion, renovacion, cancelacion)
- Ordenes (licencias, top-ups)
- Validacion de licencias
- Creacion automatica de usuarios al comprar

---

## Integraciones

### Apple Calendar
- Lectura de eventos del calendario
- Creacion de eventos desde From
- Sincronizacion bidireccional de eventos (`evento: true` + `due: FECHA`)

### Apple Reminders
- Lectura de recordatorios pendientes
- Creacion de recordatorios desde tareas
- Marcar como completado desde From
- Soporte de recurrencia

### Google Drive y Google Docs
- **Multi-cuenta:** Multiples cuentas de Google simultaneas
- **Navegacion:** Explorador de Drive desde el chat (seleccion como contexto IA)
- **Icono sync por nota:** En la toolbar de cada nota, icono para vincular/gestionar Google Doc
  - Sin vincular (gris): clic para crear Doc. Si hay >1 cuenta, popup para elegir cual
  - Vinculado (verde): desplegable con Abrir Doc / Copiar enlace / Mover a carpeta / Desvincular
- **Carpeta destino:** Configurable en Ajustes > Google
- **Sync bidireccional nota <> Google Doc:**
  - **Push:** Al guardar una nota con `gdoc_id`, se actualiza el Doc automaticamente (debounce 3s)
  - **Pull:** Al abrir una nota con `gdoc_id`, se descarga el contenido si el Doc cambio
  - Frontmatter: `gdoc_id` (ID del doc) + `gdoc_account` (email) + `gdoc_url` (enlace)
- **Contexto IA:** Cualquier Google Doc anadir como contexto del chat
- **OAuth:** ASWebAuthenticationSession con scopes `drive.file` + `documents` + perfil
- **Conversion:** Google Docs JSON → Markdown (headings, bold, italic, links, listas, strikethrough)

### Google OAuth
- Login con cuenta de Google (sin password)
- Gestionado en Ajustes > Cuenta

### Claude OAuth
- Login con suscripcion Claude Pro/Max
- Uso de tokens de la suscripcion del usuario
- Flujo PKCE para seguridad

---

## Glosario

| Termino | Significado |
|---|---|
| Vault | Carpeta raiz que contiene todo el contenido del usuario |
| Raiz | Categoria de nivel superior (ej: trabajo, personal, proyectos) |
| Nota | Archivo .md con frontmatter — unidad basica de contenido |
| Tarea | Nota con `activa: true` y propiedades de tarea (estado, fecha, prioridad) |
| Proyecto | Nota con `tipo: proyecto` — abre workspace de 3 columnas |
| Area | Nota con `tipo: area` — abre el mismo workspace de 3 columnas |
| ProjectTask | Tarea de proyecto almacenada en bloque `tasks:` del frontmatter |
| InlineTask | Checkbox en el body de la nota (`- [ ] texto`) |
| Agente | Tarea automatizada que la IA ejecuta autonomamente |
| Tipo | Etiqueta personalizable para clasificar notas |
| Coleccion | Agrupacion transversal de notas (campo `col:`) |
| Wikilink | Enlace entre notas: `[[Nombre de nota]]` |
| Pizarra | Canvas visual para diagramas (nota con `pizarra: true`) |
| Frontmatter | Bloque YAML al inicio de cada nota con propiedades |
| Parent | Nota o raiz padre en la jerarquia |
| Vista | Configuracion de visualizacion (kanban, calendario, lista, etc.) |
| Taller | Sandbox para depurar agentes y prompts |
| RAG | Retrieval-Augmented Generation — la IA busca contexto relevante |
| Token | Unidad de medida del uso de IA |
| Slug | Identificador corto para notas publicas |
| Archivado | Nota oculta de listas principales (`archivado: true`) |

---

## Servicios internos (referencia tecnica)

| Servicio | Responsabilidad |
|---|---|
| VaultService | Acceso a archivos .md en disco (actor async) |
| NoteService | CRUD de notas, arbol de jerarquia, integracion Calendar |
| CalendarService | EventKit: eventos + recordatorios |
| SearchService | SQLite FTS5 + RAG |
| AIService | Multi-proveedor IA + streaming SSE |
| AIEditorService | Sesiones de edicion IA con historial |
| ClaudeAuthService | OAuth PKCE para Claude |
| ProfileService | Perfil del usuario + contexto + resumen automatico |
| AgentService | Carga, scheduling y ejecucion de agentes |
| RaizService | Raices con colores + contexto |
| ViewService | Vistas configurables (kanban, etc.) |
| FileService | Archivos adjuntos con metadata sidecar |
| BackupService | Snapshots del vault |
| CloudSyncService | Sincronizacion CloudKit |
| VersionService | Historial de versiones (local) |
| ActivityLogService | Log de actividad en JSONL |
| NavigationHistoryService | Historial atras/adelante |
| StatusBarService | Notificaciones en barra de estado |
| TranscriptionService | Voz a texto |
| GoogleDriveService | Integracion Google Drive |
| VaultImporterService | Importar vaults externos |
| LicenseService | Validacion de licencia |
| LinkService | Gestion de enlaces (SQLite FTS5 tabla `links`) |
| FromServerService | Cliente API del backend |

---

## Changelog

### 2026-04-29 — Fixes: shortcuts, drag semana, sync checkboxes, caché timelines
- **Shortcuts atajos rápidos**: raíz/colección/tipo ahora navegan correctamente a Explorar. Shortcut nueva tarea usa QuickTaskSheet con pill de fecha
- **QuickTaskSheet**: selector de fecha como pill naranja con popover de calendario (estilo NewEventView)
- **Drag en vista semanal**: gesture vertical/horizontal en eventos y tareas de From. Handle de resize en borde inferior. Apple Calendar events son solo lectura
- **Fix eventos no aparecían**: CalendarService invalida caché inmediatamente tras crear/editar/borrar eventos
- **Fix botón actualizar**: NoteService.notesVersion notifica a todos los timelines para reconstruir caches
- **Fix loop checkboxes / scroll al inicio / regeneración**: syncInlineCheckboxesToApple solo corre para notas con activa:true. El body sin activa:true es checklist, no tarea. Esto eliminaba un loop de guardado que causaba scroll al inicio y regeneración de checkboxes


### 2026-04-29 — Editor de evento, vista Mes scroll continuo, fixes timeline
- **EventPropertiesPanel**: panel bajo el título cuando la nota es un evento. Pills editables de fecha (azul), hora inicio (cyan), hora fin (índigo) y repetición. Aparece en el editor de notas automáticamente
- **Vista Mes — scroll continuo**: eliminada la paginación por mes. Scroll libre desde 180 días atrás hasta 365 adelante. Día actual centrado al abrir. Cabeceras de mes pegadas (pinned) al hacer scroll. Botón "Hoy" para volver al día actual. Clic en miniCalendar navega al día
- **Tareas con hora en el grid semanal**: tareas con hora específica aparecen en el grid horario como bloques compactos con barra de color de raíz, igual que eventos pero visualmente distintos
- **Fix duplicación al arrastrar tareas sin fecha**: `rebuildItemsCache` solo incluye `isNoteTask` en Loop 1, evitando que notas de proyecto aparezcan dos veces (una como nota y otra via sus ProjectTasks)
- **Fix eventos no aparecían tras crear**: `onCreated` recarga datos del calendario en todos los timelines

### 2026-04-29 — Rediseño timelines semana/mes/año + popup Evento/Tarea + fixes chips
- **Timeline Semana rediseñado**: fila de tareas compacta por día (punto+texto), eventos en el grid como bloques proporcionales a su duración con color real del EKCalendar. Sin chips en el grid horario
- **Timeline Mes**: eventos como píldoras de color (barra+título+hora), tareas como texto plano con punto. Eventos primero, lureas después en cada fila
- **Timeline Año**: eventos de nota como píldoras compactas, tareas sustituidas por contador gris "· N tareas"
- **Popup Evento/Tarea**: al hacer clic en cualquier timeline aparece un popup con dos pestañas (rojo/azul). "Evento" crea en Apple Calendar, "Tarea" crea nota activa
- **CalendarEvent.color**: campo `Color` que refleja el color del EKCalendar. Usado en bloques de eventos
- **Sidebar Sin fecha**: ahora incluye `InlineTask` del body (`- [ ]` checkboxes) además de ProjectTask YAML. Eliminado requisito `note.isActiva` de ProjectTask undated
- **DraggableTaskChip compact**: checkbox y fecha ocultos en modo compact (timelines semana/mes/año)

### 2026-04-29 — Notas en seguimiento, dashboard de Día configurable, alarmas eventos
- **Notas en seguimiento** (concepto nuevo, independiente de tareas): flag `seguimiento: true` en frontmatter, botón bookmark en el editor, sección destacada en Dashboard de raíz y vista Día con drag para reordenar manualmente
- **Dashboard de Día configurable**: 3 columnas con cards que el usuario añade/quita/reordena en modo edición. 9 tipos de cards: Diario, Tareas, En seguimiento, Notas de hoy, Eventos hoy, Próximas 24h, Recientes, Atajos rápidos, Mini calendario. Layout persiste en UserDefaults
- **Atajos rápidos configurables**: 3 acciones (Nueva nota, Nueva tarea, Nuevo evento) + 5 destinos (nota, enlace web, colección, tipo, raíz). Cada uno con icono, color y label
- **Mini calendario**: 4 meses horizontales con navegación cómoda
- **Cards visuales**: SeguimientoRow con punto de color de raíz, Recientes/Notas de hoy con DashboardNoteRow agrupado por raíz, hover calendario en tareas para cambiar fecha rápida
- **Alarmas configurables para eventos**: en Ajustes > Calendario y Recordatorios, sección "Alarmas por defecto". Hora para all-day (default 9:00) y minutos antes para timed (default 5 min)
- **RaizDashboardView**: selector de color con círculo + paleta compacta, `+` en cada colección/tipo para crear nota, `+` en headers para crear nuevos
- **Esqueleto del día**: altura 76px en DayStrip, alturas mayores en timeline horario, fuentes ajustadas

### 2026-04-28 — Optimización de rendimiento (perf pass)
- VaultService: `read()` ahora es `async` — elimina congelados de hasta 2s esperando iCloud
- NoteService: `parseFrontmatter` en un pase (20x menos iteraciones por nota), `loadAll()` paralelo con `withTaskGroup`
- NoteEditorView: 3 `onChange` fusionados en 1 — evita triple `syncNoteFromService()` por cada recarga
- ColeccionesView: `NoteType.loadAll()` cacheado en `@State` — ya no lee disco en cada render del sidebar
- NoteListView: `filteredNotes` y `availableTipos` cacheados en `@State`
- DayTimelineView: `tasksByRaiz` y `notesCreatedGrouped` cacheados — no recalculan en cada render
- ChatPanel: `onChange(of: activePrompt?.id)` duplicado eliminado

### 2026-04-28 — Dashboard raíz: tareas, drag&drop, mejoras UI
- Botón "Editar Raíz", auto-colapso sidebar, columna derecha 420px
- Sección Próximas Tareas: note tasks + inline tasks por nota, overdue en rojo, context menu
- DashNoteRow: hover icon colección, drag a cards/tipos, context menu completo (abrir, props, colección, eliminar)
- Colecciones y tipos aceptan drops de notas

### 2026-04-28 — Absorber tarea a nota
- "Añadir a proyecto" renombrado a "Añadir a nota" con buscador en todas las notas
- Al seleccionar nota: inserta `- [ ] Título` como checkbox en el cuerpo de la nota destino
- Elimina la nota de tarea (incluye limpiar Apple Reminders) — fix del bug de reaparición

### 2026-04-28 — Editor visual upgrade + fixes
- Editor: font 16px, line-height 1.75, max-width 740px centrado, headings con espaciado, blockquote estilo Notion, syntax markers dimmed (opacity 0.3), inline code con borde, HR gradiente, dark mode mejorado
- Fix drag cursor invertido al arrastrar archivos sobre la nota (conversión de coordenadas incorrecta en WKWebView embebido en SwiftUI)
- Fix paste PDF: comprueba file URL antes que imagen raw (el icono TIFF del PDF ya no se pega en lugar del archivo)
- Fix click en tarjetas (links/archivos/YouTube): ignoreEvent corregido para separar click izquierdo (abre) de click derecho (editar)
- URLs inline también se muestran como tarjetas (eliminada condición isStandalone)

### 2026-04-28 — Publicacion v1.7 (build 8)
- Release con todas las mejoras de la sesión anterior: timeline drag&drop, rich editor previews, explorar, tareas agrupadas por raíz

### 2026-04-28 — Timeline drag&drop, editor rich previews, explorar mejoras
- **Timeline:** drag horizontal para eventos y recordatorios, resize por borde derecho en eventos editables, drag vertical →todo el día con hint visual, snap redondeo correcto, tareas con hora excluidas de lista "Tareas"
- **Reminders:** tareas sin hora se guardan sin componente de tiempo (antes aparecían a las 00:00 en Reminders)
- **Editor:** URLs sueltas clicables, YouTube preview con thumbnail, link preview cards (favicon+dominio) para cualquier URL standalone, file cards estilo Apple Notes con icono por tipo
- **Bug PDF:** `importAndInsert` insertaba `[[file.pdf]]` (wikilink) en lugar de `![[file.pdf]]` (file embed) — corregido
- **Campo URL en contexto:** reemplazado `TextField` SwiftUI por `NSViewRepresentable` que fuerza `makeFirstResponder` — paste ya no va a la WKWebView
- **Explorar:** botón `← raíz` en FilteredNotesView para volver al dashboard; dashboard tiene ColorPicker nativo, botón renombrar y botón eliminar con confirmación
- **Tareas Hoy:** agrupación por raíz → parent (antes solo parent); overdue mezclados en su grupo natural con fecha en rojo

### 2026-04-28 — Publicacion v1.6 (build 7)
- Explorar completamente rediseñado: raices expandibles, dashboard por raiz, FilteredNotesView con chat integrado, batch select col/tipo/madre
- Fix keychain: eliminados los prompts de contraseña al instalar nuevas versiones de la app
- Agente limpiador de contexto con `runOnStartup` + `startupDelay`
- `NoteService.tipos(inRaiz:)` — tipos unicos de una raiz
- `ChatPanel`: modo Explorar con contexto prioritario de coleccion/tipo, limite 60K chars

### 2026-04-28 — Limpieza de codigo muerto
- Eliminados ficheros nunca usados: `AreasView.swift`, `TaskListView.swift`, `NewTaskNoteSheet.swift`, `NoteTreeView.swift`, `NoteContextBar.swift`
- Documentacion completamente revisada y actualizada al estado real del codigo

### 2026-04-27 — Diagnostico Sparkle
- Identificado problema con v1.2 sin `SUPublicEDKey` que impide updates automaticos
- Solucion: instalar v1.5 manualmente; a partir de v1.5 los updates automaticos funcionan

### 2026-04-27 — Timelines rediseñados, inline tasks, ventana y mejoras sistema

**Vistas Timeline rediseñadas:**
- `DayTimelineView`: panel izquierdo con 3 secciones — Agenda (eventos todo el dia), Tareas (notas + inline tasks agrupadas por padre), Notas de hoy (creadas en el dia). El click en tarea abre su nota dashboard, nunca popover.
- `ProjectsUnscheduledSidebar` reescrito con parametro `periodStart: Date`. Secciones: Vencidas (`due < periodStart`) + Sin fecha (`due == nil && isActiva`). Usado en Semana, Mes y Año.

**Inline tasks en todos los timelines:**
- Las tareas inline de proyectos (`ProjectTask`, parseadas de `tasks:` en el frontmatter) ahora aparecen en Dia, Semana, Mes y Año.
- Render: `InlineTaskChipView` con `.draggable("projecttask||{parentNoteUUID}||{task.text}")`. Tap abre la nota padre.
- `ForEach` usa `task.id` (UUID) como identificador, no `task.text`, para evitar colisiones con texto duplicado.
- Fix drag a semana/mes/año: parametro `alwaysAllDay: Bool = false` en `NoteDropTarget`. Con `alwaysAllDay: true` el drop no calcula hora desde posicion Y y guarda solo la fecha.

**Mejoras sistema:**
- Ventana arranca maximizada: `WindowScreenConstraint.constrain` llama `window.setFrame(visible, display: true, animate: false)` siempre al arrancar.
- Menu "Comprobar actualizaciones…" añadido al menu From (despues de "About").
- Menu "Ayuda de From" abre `https://getfrom.app/docs/` en el navegador (Cmd+?).

**Publicacion:** v1.4 (build 5) publicada. v1.5 (build 6) pendiente.

### 2026-04-24 — Fixes editor y navegacion notas hijas

**Bug 1: Contenido pegado desaparece**
- Race condition en WebMarkdownEditor cuando el WebContent process crashea al pegar
- Fix: comparar `editorDoc` con `self.parent.text` (valor actual) en lugar del `content` capturado

**Bug 2: syncNoteFromService revertia bodyText del usuario**
- `lastSaveAt = .distantPast` al arrancar + falta de guarda de ediciones locales
- Fix: nueva guarda `hasLocalBodyChanges = bodyText != Self.extractBody(from: lastSavedContent)`

**Bug 3: Notas hijas en proyecto sin UI completa**
- El caso PROJECT usaba `WebMarkdownEditorWithToolbar` simple con binding corrupto
- Fix: reemplazar por `NoteEditorView(note: selectedNote, embedded: true, suppressRightPanel: true)`

**Bug 4: Navegacion entre notas hermanas en proyecto no funcionaba**
- SwiftUI reutilizaba el mismo `NoteEditorView` embebido sin reinicializar `@State`
- Fix: `.id(selectedNote.id)` en embedded NoteEditorView; `if embedded { onNavigate?(target) }`

### 2026-04-23 — Fixes panel de contexto de proyectos/areas

- `ProjectContextPanel.swift`: implementado uso del parametro `onNavigate` (antes ignorado)
- `NoteEditorView.swift`: binding `selectedNote` mas explicito en `ProjectContextPanel` — SwiftUI detecta correctamente los cambios

### 2026-04-23 — Rediseño panel derecho + bloque contexto

**Panel derecho unificado (NoteEditorView):**
- Tab por defecto en notas normales: Indice
- Añadido tab `workspace` para proyectos y areas — muestra tareas + contexto + log apilados
- Tab `workspace` es el default al abrir un proyecto o area
- `projectWorkspacePanel` extraido como componente reutilizado por proyecto y area

**Chat compacto simplificado:**
- Eliminado `ContextElementsView` del modo compacto
- Instrucciones permanentes movidas a icono `note.text` en el toolbar

**Bloque contexto rediseñado (ProjectContextPanel):**
- Eliminado sistema de modos (`addMode`) con menu de 6 opciones
- Campo unificado siempre visible: busca notas y detecta URLs automaticamente
- Sin coincidencias: ofrece "Crear nota" inline
- Colecciones movidas a icono `folder` con popover
- Icono `paperclip` para adjuntar archivos

### 2026-04-28 — Dashboard de administracion del servidor

- Nuevo panel admin en `/admin/dashboard` servido desde el propio servidor Hono en Railway
- Login en-pagina con JWT, auto-refresh cada 60s
- KPIs: usuarios totales, suscripciones activas, MRR estimado, ejecuciones, tokens consumidos
- Graficas Chart.js: nuevos usuarios y ejecuciones de agentes (ultimos 30 dias)
- Estado del servidor: health, DB, latencia, version
- Gestion de proveedores IA: configurar API keys cifradas (Anthropic/OpenAI/Google), activar/pausar
- Tabla de usuarios con busqueda y paginacion (20/pagina)
- Acciones por usuario: añadir tokens, editar suscripcion/licencia/rol, resetear contraseña, eliminar con confirmacion
- Nuevos endpoints: `GET /admin/stats/detailed`, `GET /admin/agents/recent`, `GET /admin/ledger/recent`, `PATCH /admin/users/:id`, `POST /admin/users/:id/reset-password`, `DELETE /admin/users/:id`
- Tabla de ejecuciones recientes con email de usuario (JOIN)
- Tabla de movimientos de tokens recientes con email de usuario (JOIN)

### 2026-04-21 (sesion 6) — Paridad chat area/proyecto
- Chat de area con paridad completa con chat de proyecto en `ChatPanel.swift`
- Contexto automatico de area: body, ancestros, tareas, notas hijas, refs, URLs, archivos, colecciones

### 2026-04-20 (sesion web) — Web i18n 9 idiomas
- `getfrom.app`: sistema i18n con 9 idiomas (ES, EN, FR, DE, ZH, JA, PT, IT, KO)
- Deteccion automatica por idioma del navegador, persistencia en localStorage
- Correcciones de contenido en pricing: planes son excluyentes

### 2026-04-19 (sesion 4) — Pestaña Enlaces
- Nueva pestaña `Links` (`enlaces.json` en raiz del vault)
- Extraccion automatica de URLs de notas con cache por `modifiedAt`
- `LinkService` con tabla FTS5 `links` en SQLite

### 2026-04-19 (sesiones 1-3) — Workspace proyectos, editor CodeMirror 6
- Workspace de proyecto: columna tareas (frontmatter `tasks:`), notas hijas, refs
- `ProjectTaskPanel`, `ProjectContextPanel` (antes `RefsPicker`)
- Chat de proyecto con contexto automatico (body + tareas + notas hijas + refs + URLs)
- Editor CodeMirror 6: tablas, archivos como chips, imagenes con resize/align, wikilinks clicables, drag & drop

### 2026-04-18 — Fundacion de la app actual
- Editor migrado de NSTextView a WKWebView + CodeMirror 6
- Colecciones (`col:`) y Notas Vista (`vista:`)
- Integracion completa Google Drive y Google Docs con soporte multi-cuenta
- Web completa `getfrom.app` en GitHub Pages
- Publicacion de notas end-to-end
- Rediseño iconos toolbar: circulos 22x22 con fondo sutil
