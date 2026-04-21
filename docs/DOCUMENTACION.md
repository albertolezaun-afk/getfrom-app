# From — Documentacion completa

> Documento vivo. Se actualiza automaticamente en cada sesion de trabajo.
> Ultima actualizacion: 2026-04-20 (sesion web)

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
├── Raices/                      (raices/raices: categorias principales)
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
Tras seleccionar el vault, From muestra la vista de Raices (SpacesView) con un estado vacio que invita a crear la primera raiz. Se explica:
- Cada Raiz tiene su propio color
- Las notas pertenecen a una Raiz
- Las Raices dan contexto a la IA

### Paso 3: Configurar IA (opcional)
En Ajustes > IA, el usuario puede:
- Activar la IA
- Elegir modo automatico (suscripcion From) o manual (propia API key)
- Conectar con Claude, OpenAI o Google

### Paso 4: Crear perfil (opcional)
En Ajustes > Perfil o a traves de **ProfileWizardView**, el usuario puede crear un perfil que la IA usara como contexto para personalizar respuestas.

---

## Navegacion principal

La interfaz de From tiene 3 zonas principales:

### Barra lateral izquierda (sidebar)

Secciones fijas de navegacion:
- **Dia** — Vista timeline del dia actual
- **Semana** — Vista semanal con 7 columnas
- **Mes** — Vista mensual con grid
- **Ano** — Vista anual con filas semanales
- **Tareas** — Gestor dedicado de tareas
- **Notas** — Explorador de todas las notas
- **Explorar** — Colecciones y tipos transversales
- **Enlaces** — Organizador de URLs extraídas de notas y manuales
- **Archivos** — Gestor de archivos adjuntos
- **IA** — Chat con el asistente de IA
- **Agentes** — Gestor de agentes autonomos
- **Ajustes** — Configuracion de la app

Secciones dinamicas:
- **Vistas guardadas** — Vistas personalizadas del usuario (kanban, calendario, etc.)
- **Favoritos** — Notas marcadas como favoritas, agrupadas por raiz con colores
- **Recientes** — Las ultimas 3 notas accedidas

### Zona central (contenido)

Cambia segun la seccion seleccionada en la sidebar. Puede mostrar:
- Una vista de timeline (dia/semana/mes/ano)
- La lista de tareas
- El arbol de notas
- El editor de una nota individual
- El chat de IA
- El panel de agentes
- Los ajustes
- Una vista guardada (kanban, calendario, etc.)

### Barra de estado (footer)

Siempre visible en la parte inferior:
- **Indicador de agentes:** Muestra cuantos agentes estan activos/pausados y cuando es la proxima ejecucion
- **Indicador de IA:** Estado de conexion, modelo actual, balance de tokens
- **Selector de modelo:** Cambiar modelo IA activo
- **Boton de refresco:** Recarga manual de notas desde disco

### Barra de cabecera (header)

Encima del contenido central:
- **Titulo** de la seccion o nota actual
- **Breadcrumb** de navegacion al editar una nota (Raiz > Padre > Nota)
- **Botones de accion rapida:** Nueva nota, Nueva tarea, Tarea rapida, Nuevo evento
- **Dropdown de agentes manuales:** Para ejecutar agentes sin ir a la seccion
- **Busqueda global**
- **Botones de historial:** Atras/Adelante

### Modo Focus

`Cmd+F` oculta la sidebar y paneles laterales para edicion sin distracciones. Se activa/desactiva con animacion suave.

---

## Atajos de teclado

| Atajo | Accion |
|---|---|
| Cmd+N | Nueva nota |
| Cmd+T | Nueva tarea |
| Cmd+E | Nuevo evento |
| Cmd+R | Tarea rapida |
| Cmd+O | Busqueda Spotlight |
| Cmd+F | Modo Focus (ocultar/mostrar paneles) |
| Cmd+Shift+M | Mantenimiento/Ajustes |

Los atajos son personalizables por el usuario.

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
- Controles (derecha): fecha, parent pill, tarea (circulo), favorito (circulo), publicar (globo circulo), Google Docs (circulo)
  - Todos los iconos: circulos de 22x22 con fondo sutil, color activo/inactivo
- Menu contextual (tres puntos):
  - Exportar como Markdown
  - Exportar como PDF
  - Abrir en Finder
  - Eliminar nota

#### Barra de tipo y coleccion
- **Tipo:** Pills multiseleccion para asignar tipos a la nota (ej: proyecto, idea, recurso, futuro). Se pueden crear tipos nuevos sobre la marcha. Busqueda integrada.
- **Coleccion (Col):** Asignar la nota a una o mas colecciones. Opcion de crear vista filtrada desde la coleccion.

#### Panel de propiedades de tarea
Aparece cuando la nota tiene tipo "activa":
- **Estado:** Dropdown con estados configurables (pending, in_progress, done, cancelled)
- **Fecha limite:** Date picker con o sin hora
- **Fecha fin:** Para tareas con bloque de tiempo
- **Prioridad:** Alta, media, baja
- **Tarea rapida:** Toggle
- **Recurrencia:** Diaria, semanal, mensual

#### Editor Markdown
- Edicion de texto enriquecido en Markdown
- Barra de herramientas de formato
- Wikilinks: `[[Nombre de nota]]` para enlazar notas
- Checkboxes de tareas: `- [ ] [[Tarea]]` o `- [ ] Texto libre`
- Menciones de agentes
- Insercion de plantillas
- Autoguardado con debounce de 800ms

#### Panel izquierdo (arbol, colapsable)
- Vista jerarquica de notas bajo el raiz actual
- Nodos expandibles/colapsables
- Color del raiz
- Indicadores de estado (verde = activa, naranja = futuro)
- Click para navegar entre notas
- **Oculto en proyectos** (reemplazado por columna de tareas/notas/refs)

---

### Workspace de proyecto (`tipo: proyecto`)

Cuando una nota tiene `tipo: proyecto`, se abre en un layout especial de 3 columnas:

#### Columna izquierda — Tareas / Notas / Refs

**Bloque Tareas (`ProjectTaskPanel`):**
- Las tareas se almacenan en el bloque `tasks:` del frontmatter (no en el body)
- Crear tarea inline (Enter confirma, Esc cancela)
- Toggle completado con un clic
- Pill de fecha con hora si se ha asignado
- `DateTimePickerPopover` para elegir fecha+hora
- Eliminar con context menu
- Barra de progreso en el header

**Bloque Notas (`ProjectNotesPanel`):**
- Notas hijas directas del proyecto (parent = titulo del proyecto, sin `tipo: proyecto`)
- Crear nota inline con el boton +
- Click → abre la nota en el editor central
- Fecha relativa de creacion (hoy, ayer, dd MMM)
- Eliminar con context menu
- Contenido siempre inyectado en el contexto del chat

**Bloque Contexto (`RefsPicker`):**
- Referencias externas del proyecto: notas vinculadas, colecciones, URLs, archivos, Google Docs
- Formato en frontmatter `refs:` con prefijos: `col:`, `url:`, `file:`, `gdoc:`
- Cada ref tiene icono de accion segun tipo (ojo, enlace externo, etc.)
- Boton para insertar el nombre de la ref en el chat activo
- URLs: contenido pre-cargado en el contexto del chat (fetch al construir el system prompt)

#### Columna central — Editor
- Editor Markdown identico al de una nota normal
- Barra de estado del proyecto: estado, fecha inicio, fecha fin, progreso
- Banner "Proyecto completado" con boton Reabrir cuando `isDone`

#### Columna derecha — Chat IA
- Columna izquierda y derecha tienen el mismo ancho (25% cada una); editor central ocupa el 50% restante. Todo ajustable con divisores arrastrables.
- Sin pills de "Contexto de sesion" (el contexto es automatico desde el proyecto/area)
- Solo muestra instrucciones permanentes
- Contexto del chat siempre incluye: body del proyecto/area, tareas, notas hijas, refs, URLs fetcheadas
- Notas creadas por la IA → hijas automaticas del proyecto/area
- **Las areas tienen exactamente el mismo comportamiento de chat que los proyectos** (paridad total en `ChatPanel.swift`)

#### Identidad de proyecto
- `isProject` = `tipos.contains("proyecto")` — especifico, no generico
- `hasType` = tiene algun tipo (antiguo significado de isProject)
- Frontmatter minimo: `tipo: proyecto, activa: true, status: in_progress`

---

#### Panel derecho (3 pestanas, ancho ajustable)

**Pestana Chat:**
- Conversacion de IA vinculada a la nota actual
- El contexto de la nota se inyecta automaticamente
- Historial de mensajes
- Ejecucion de agentes
- Las modificaciones de la IA se aplican en vivo al editor

**Pestana Detalles:**
- **Indice:** Headings de la nota, click para saltar a la seccion
- **Conexiones:**
  - Frontmatter editable (campos clave-valor)
  - Enlaces salientes (wikilinks que esta nota hace)
  - Enlaces entrantes (notas que enlazan a esta)
  - Tareas agrupadas por heading con estado y fecha
  - Enlaces externos (URLs encontradas en el contenido)
  - Historial IA (conversaciones previas sobre esta nota)
  - Notas hijas (max 6 mostradas)

**Pestana Historial:**
- Lista de versiones guardadas (cronologico inverso)
- Preview de la version seleccionada
- Boton de restaurar (crea backup de seguridad antes de restaurar)

### Frontmatter

Cada nota tiene un bloque YAML al inicio del archivo:

```yaml
---
parent: nombre-del-padre
tipo: proyecto, idea
col: coleccion1, coleccion2
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
quick: true
vista: kanban
vista_col: status
vista_group: tipo
pizarra: true
gdoc_id: GOOGLE_DOC_ID
gdoc_account: email@gmail.com
---
```

### Jerarquia parent-child

El sistema usa un unico campo `parent:` para definir la jerarquia. No hay campo `raiz:`.

- El `parent:` es siempre el padre directo inmediato
- El raiz se resuelve subiendo la cadena de padres hasta encontrar un archivo en `Raices/`
- Una nota puede estar a cualquier profundidad

Ejemplo:
```
Raices/coding.md                         (raiz raiz, sin parent)
  └─ Notas/From — Nota principal.md     (parent: coding)
      └─ Notas/From — Plugin.md         (parent: From — Nota principal)
          └─ Notas/From — Plugin API.md  (parent: From — Plugin)
```

### Tipos de nota

Los tipos son etiquetas personalizables con color. Ejemplos predefinidos:
- proyecto, idea, futuro, recurso
- El usuario puede crear tipos nuevos sobre la marcha
- Cada tipo tiene una propiedad `defaultActiva` que marca automaticamente las notas de ese tipo como activas (tarea)

### Colecciones

Las colecciones agrupan notas transversalmente (sin relacion jerarquica). Una nota puede pertenecer a varias colecciones. Desde una coleccion se puede generar una vista filtrada automatica.

### Publicar notas

Cualquier nota se puede publicar como pagina web publica:
1. Boton de globo (junto a la estrella de favorito) — clic para publicar
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

## Tareas

### Que es una tarea en From

En From, una tarea es una nota con propiedades de tarea activadas. No hay objetos separados para tareas y notas — todo es una nota. Al asignar un tipo que tiene `defaultActiva: true` o al marcar manualmente `activa: true`, la nota adquiere propiedades de tarea.

### Vista de Tareas (TaskListView)

Panel dividido en 2 columnas:

**Columna izquierda (320px) — Lista de tareas:**

Filtros disponibles:
- **Por raiz:** Pills de colores, click para filtrar por raiz
- **Por estado:** Pills con 3 estados (ninguno/incluir/excluir)
- **Por padre:** Filtro por nota padre
- **Completadas:** Toggle para mostrar/ocultar tareas completadas
- **Con fecha:** Pill que muestra cuantas tareas tienen fecha

Las tareas se agrupan por Raiz > Padre. Dentro de cada grupo, se ordenan por fecha limite (mas cercana primero). Cada fila muestra:
- Indicador de estado (circulo lleno/vacio)
- Titulo
- Hover: boton propiedades, favorito, eliminar

**Columna derecha — Editor:**
Al seleccionar una tarea, se abre su editor completo en la columna derecha.

### Tareas rapidas (Quick Tasks)

Las tareas rapidas son tareas ligeras sin nota completa. Se crean con:
- `Cmd+R` desde cualquier lugar
- Popover rapido con titulo y fecha
- Se marcan con `quick: true` en el frontmatter

### Propiedades de tarea

| Propiedad | Valores | Descripcion |
|---|---|---|
| Estado | pending, in_progress, done, cancelled | Estado actual de la tarea |
| Fecha limite | Fecha con o sin hora | Cuando debe completarse |
| Fecha fin | Fecha con hora | Para bloques de tiempo |
| Prioridad | high, medium, low | Nivel de urgencia |
| Recurrencia | daily, weekly, monthly, yearly | Repeticion automatica |
| Tarea rapida | true/false | Si es una tarea ligera |

### Sincronizacion con Apple Calendar y Reminders

- Las notas con `evento: true` y `due: FECHA` se sincronizan bidirectamente con Apple Calendar
- Las tareas con `quick: true` o tareas normales se sincronizan con Apple Reminders
- Se soporta recurrencia (diaria, semanal, mensual, anual)
- La sincronizacion requiere permisos del usuario (se solicitan la primera vez)

---

## Timeline / Calendario

From ofrece 4 vistas temporales que combinan notas con fecha y eventos de Apple Calendar.

### Vista Dia (DayTimelineView)
- Franjas horarias de manana a noche
- Tareas y eventos posicionados en su hora
- Columna lateral con el diario del dia
- Drag & drop para asignar fechas
- Boton "Ir a hoy"
- Toggle de visibilidad: Notas / Eventos de calendario

### Vista Semana (WeekTimelineView)
- 7 columnas (lunes a domingo)
- Cada columna muestra eventos y tareas del dia
- Sidebar lateral con tareas sin fecha asignada
- Colores diferenciados: notas (acento) vs calendario (morado)

### Vista Mes (MonthTimelineView)
- Grid mensual clasico
- Cada celda muestra eventos/tareas del dia
- Sidebar lateral
- Click en dia para ver detalle

### Vista Ano (YearTimelineView)
- 12 bloques mensuales
- Filas semanales agrupadas por mes
- Indicadores de actividad tipo heatmap
- Vista panoramica del ano completo

---

## Raices / Raices

### Que es un Raiz

Un Raiz (o Raiz) es la categoria de nivel superior en la jerarquia de From. Cada raiz:
- Tiene su propio color personalizable
- Contiene notas organizadas en arbol
- Tiene un campo de contexto en markdown que la IA usa para entender el ambito
- Se almacena como archivo `.md` en la carpeta `Raices/`

### Vista de Raices (SpacesView)

**Grid de raices:**
- Tarjetas responsivas (240-420px)
- Cada tarjeta muestra: icono de color, nombre, numero de notas, tareas activas
- Click abre la vista detalle

**Vista detalle de raiz:**
- **Propiedades:** Nombre editable, selector de color, campo de contexto (markdown para IA), boton eliminar
- **Panel izquierdo:** Arbol jerarquico de notas del raiz
- **Panel derecho:** Editor de la nota seleccionada

### Crear un raiz
1. Click en "Crear mi primera Raiz" (estado vacio) o boton + en la vista de raices
2. Asignar nombre y color
3. Escribir contexto opcional (la IA lo usara)

### Renombrar un raiz
Al renombrar un raiz, From actualiza automaticamente el campo `parent:` de todas las notas hijas.

### Eliminar un raiz
Al eliminar un raiz, las notas hijas se "huerfanan" (no se eliminan, simplemente pierden su parent).

---

## Vistas configurables

From permite crear vistas personalizadas sobre las notas. Los tipos de vista disponibles son:

### Kanban (KanbanView)
- Columnas configurables (por estado, tipo, prioridad, etc.)
- Arrastrar tarjetas entre columnas
- Crear notas directamente en columnas

### Lista configurable (NoteListViewConfig)
- Lista de notas con filtros y ordenacion personalizada
- Columnas visibles configurables

### Calendario (NoteCalendarView)
- Vista de calendario con notas posicionadas por fecha
- Similar a Google Calendar pero con notas

### Tarjetas (NoteCardsView)
- Vista de tarjetas estilo Pinterest/Trello
- Previews de contenido

### Focus (NoteFocusView)
- Una nota a la vez, sin distracciones
- Navegacion secuencial

### Vistas inline

Las vistas se pueden embeber dentro del editor de una nota:
- **Inline Kanban:** Kanban dentro del editor
- **Inline Lista:** Lista filtrada dentro del editor
- **Inline Tabs:** Pestanas navegables dentro del editor
- **Inline Calendario:** Calendario dentro del editor

Se crean desde el editor y filtran las notas hijas de la nota actual.

---

## Busqueda

### Busqueda Spotlight (Cmd+O)
- Modal centrado estilo Spotlight de macOS (480x520px)
- Busqueda instantanea en titulo y contenido
- Pills de raiz para filtrar rapidamente
- Resultados clickables para navegar directamente

### Busqueda global (GlobalSearchPanel)
- Barra integrada en el header
- Busqueda en tiempo real mientras se escribe
- Resultados agrupados por tipo: notas, tareas, archivos
- Snippets de preview del contenido

### Motor de busqueda
- SQLite FTS5 para full-text search
- Indexacion automatica al cargar notas
- Tambien usado internamente para RAG (la IA busca contexto relevante en el vault)

---

## Chat de IA

### Vista principal de Chat (ChatView)

Interfaz de 3 columnas:

**Columna izquierda (280px) — Sidebar de conversaciones:**
- Campo de busqueda (filtra por titulo y contenido de mensajes)
- Boton de nota vinculada (pin):
  - Click abre popover para seleccionar nota
  - Vincula una nota a la conversacion
  - Checkbox "Ver solo historial de esta nota" para filtrar
- Boton Google Drive (si conectado): importa documentos
- Boton + para nueva conversacion
- Lista de conversaciones con titulo, fecha y nota asociada
- Hover: boton papelera para eliminar

**Columna central — Chat (ChatPanel):**
- Mensajes de usuario y asistente con streaming
- Soporte Markdown en respuestas
- Indicador de carga "Pensando..."
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
- La IA puede leer y modificar la nota vinculada directamente

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

El sistema selecciona automaticamente el modelo mas barato con API key activa segun el tier solicitado.

### Chat contextual en el editor

Cuando se abre la pestana Chat en el panel derecho del editor, el chat tiene contexto automatico de:
- Contenido completo de la nota actual
- Cadena de ancestors (raiz > padre > nota)
- Busqueda RAG para contexto relevante del vault

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

Cada nota puede tener instrucciones permanentes para la IA (almacenadas en `.from/ai_instructions/`). Estas instrucciones se aplican siempre que la IA edita esa nota especifica.

### Panel de contexto (ContextElementsView)

Panel colapsable que muestra que elementos de contexto tiene la IA:
- Notas referenciadas
- Archivos adjuntos
- URLs
- Instrucciones permanentes

---

## Taller (TallerChatView)

### Que es el Taller

Un espacio de trabajo interactivo en Ajustes para depurar y mejorar agentes y prompts. Es como un sandbox donde la IA ayuda a refinar las instrucciones.

### Como funciona

1. Ir a Ajustes > Taller
2. Escribir en el chat con @menciones:
   - `@nombre_agente` para cargar un agente
   - `@/nombre_prompt` para cargar un prompt
   - `@nombre_nota` para cargar una nota
3. La IA analiza el agente/prompt y sugiere mejoras
4. Las sugerencias incluyen botones de "Aplicar" y "Descartar"
5. Aplicar actualiza directamente el agente o prompt

---

## Agentes autonomos

### Que es un agente

Un agente es una tarea automatizada que la IA ejecuta de forma autonoma. Cada agente tiene instrucciones, un horario de ejecucion, acciones permitidas y fuentes de contexto.

### Vista de Agentes (AgentListView)

**Columna izquierda (340px):**
- Campo de busqueda (filtra por titulo)
- Menu de creacion (tres puntos):
  - "Desde descripcion" (sparkles): Describir en lenguaje natural y la IA genera el agente
  - "Manual": Crear agente en blanco
  - "Desde plantilla": Clonar una plantilla predefinida
- Lista de agentes con:
  - Icono de horario (calendario, reloj, etc.)
  - Titulo del agente
  - Etiqueta de horario (manual, diario, semanal, etc.)
  - Proxima ejecucion
  - Hover: boton STOP (si pausado), Play (ejecutar), Eliminar

**Columna derecha:**
- Detalle del agente seleccionado (AgentDetailView)

### Configuracion de un agente (AgentDetailView)

**Nombre:** Editable inline, genera automaticamente nombre de archivo.

**Horario:**
| Tipo | Descripcion |
|---|---|
| Manual | Solo se ejecuta cuando el usuario lo lanza |
| Diario | Se ejecuta cada dia a la hora configurada |
| Semanal | Se ejecuta un dia especifico de la semana a una hora |
| Mensual | Se ejecuta un dia especifico del mes a una hora |
| Al abrir | Se ejecuta al abrir From (maximo una vez por hora) |

**Activo:** Toggle para habilitar/deshabilitar la ejecucion automatica.

**Modelo y proveedor:** Override opcional del modelo y proveedor IA por defecto.

**Instrucciones:** Editor de texto con soporte de @menciones:
- `@hoy` — Nota del diario de hoy
- `@perfil` — Perfil del usuario
- `@diario` — Ultimas entradas del diario
- `@Raiz` — Un raiz especifica
- `@Nota` — Una nota especifica

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

**Mejorar prompt con IA:** Boton que pide a la IA que mejore las instrucciones. Muestra comparacion original vs mejorada con opcion de aceptar o rechazar.

**Ejecucion manual:** Boton que ejecuta el agente inmediatamente con input opcional.

**Memoria del agente:** Seccion `## Memoria del agente` en el archivo .md donde se guarda el log de ejecuciones.

### Ejecucion de agentes

El proceso de ejecucion:
1. Se cargan las fuentes de contexto (pre-loaded)
2. Se construye el system prompt con las instrucciones y contexto
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

### Plantillas predefinidas

From incluye 10 plantillas de agentes listos para usar que cubren casos comunes.

### Panel de ejecucion (AgentRunPanel)

Dialog modal que aparece al ejecutar un agente manualmente:
- **Header:** Icono CPU + nombre del agente
- **Input:** Campo de texto multilinea (requerido u opcional segun el agente)
- **Grabacion de voz:** Boton de microfono para dictar input
- **Botones:** Cancelar (Esc) / Ejecutar (Enter)

La grabacion de voz usa TranscriptionService para convertir audio a texto en tiempo real.

---

## Archivos (ArchivosView)

### Que son los Archivos

Archivos adjuntos almacenados en la carpeta `Archivos/` del vault. Cada archivo tiene un sidecar `.md` con metadatos.

### Funcionalidades

- **Importar:** Drag & drop o boton de importar
- **Buscar:** Por nombre, descripcion, tags o nota padre
- **Agrupar:** Por fecha, tipo o nota padre
- **Metadata:** Descripcion, tags y notas padre editables
- **Tipos:** PDF, imagen, video, audio, documento, otro (con iconos y colores propios)
- **Vincular:** Cada archivo puede estar vinculado a multiples notas via "parents"

### Sidecar de metadata

Junto a cada archivo hay un `.md` con frontmatter:
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

### Que es una Pizarra

Un espacio visual de canvas infinito para crear diagramas, mapas mentales y esquemas visuales. Se almacena como una nota con `pizarra: true`.

### Funcionalidades

- Superficie de dibujo libre con zoom/pan
- Nodos de texto
- Flechas/conexiones entre nodos
- Paleta de colores
- Grosor de linea configurable
- Deshacer/Rehacer
- Limpiar canvas
- Exportar como imagen

---

## Perfil

### Que es el Perfil

El perfil es informacion sobre el usuario que la IA usa como contexto para personalizar respuestas y que los agentes entiendan quien es el usuario.

### Componentes

- **profile.md** — Datos del usuario: nombre, rol, intereses, etc.
- **contexto.md** — Contexto adicional y memoria de la IA
- **ProfileWizardView** — Asistente guiado para crear el perfil paso a paso

### Uso por la IA

Cuando la IA responde o un agente se ejecuta, pueden acceder al perfil para:
- Personalizar el tono y nivel de detalle
- Entender el contexto profesional del usuario
- Recordar preferencias y decisiones pasadas

---

## Ajustes (SettingsView)

### Pestanas de ajustes

**1. Espacio**
- Gestion del vault actual
- Ruta del espacio
- Carpetas configuradas

**2. Tipos**
- Crear, editar y eliminar tipos de nota
- Color, nombre y propiedad defaultActiva
- Los tipos controlan que notas se tratan como tareas

**3. Estados**
- Configurar estados de tarea personalizados
- Color e icono por estado

**4. IA**
- Habilitar/deshabilitar IA
- Modo: Automatico (suscripcion) / Manual (API key propia)
- Proveedor: Anthropic, OpenAI, Google
- API key (en modo manual)
- Modelo seleccionado
- Balance de tokens (en modo automatico)
- Estado de licencia
- Login OAuth con Claude

**5. Perfil**
- Editor de profile.md
- Contexto (contexto.md)
- Asistente de perfil (ProfileWizardView)

**6. Calendario**
- Calendarios visibles
- Listas de recordatorios
- Configuracion de sincronizacion

**7. Apariencia**
- Tema: Sistema, Claro, Oscuro

**8. Backup**
- Backup manual
- Backup automatico diario (toggle)
- Maximo de backups (default 10)
- Restaurar desde backup
- Ubicacion de backups (Application Support)

**9. Importar**
- Importar notas desde ZIP
- Importar vault de Obsidian

**10. Exportar**
- Exportar notas a ZIP
- Exportar seleccion

**11. Mantenimiento**
- Version de la app
- Limpiar cache
- Optimizar base de datos
- Gestor de archivos en conflicto (iCloud)

**12. Taller**
- Chat de depuracion para agentes y prompts (TallerChatView)
- @menciones para cargar agentes, prompts y notas
- Acciones aplicables directamente

**13. Prompts (PromptAssistantTab)**
- Biblioteca de prompts guardados
- Crear, editar y eliminar prompts
- Los prompts se pueden invocar desde el chat con `@/nombre`

---

## Sincronizacion y datos

### iCloud Drive

- Las notas son archivos `.md` en iCloud Drive
- La sincronizacion entre dispositivos es automatica via iCloud
- From no depende de un servidor propio para la sincronizacion

### CloudKit (CloudSyncService)

Ademas de iCloud Drive, From usa CloudKit para:
- Sincronizacion activa de cambios (push notifications)
- Resolucion de conflictos (gana el timestamp mas reciente, tolerancia de 1 segundo)
- Upload con debounce de 2 segundos
- Tipos de registro: "Note" (contenido) y "File" (assets)

### Resolucion de conflictos

Cuando iCloud detecta un conflicto:
- Aparece un banner en la app con el numero de conflictos
- El usuario puede ir a ConflictsView para resolverlos
- Se muestra el nombre de cada archivo en conflicto

### Backups automaticos

- Se ejecutan 10 minutos despues de abrir la app (para no interferir con iCloud sync)
- Frecuencia: diaria (si han pasado mas de 24h desde el ultimo)
- Ubicacion: Application Support (no en el vault)
- Incluyen: Notas, Raices, Diario, Plantillas, Agentes, Archivos
- Retencion: maximo 10 backups (configurable)

---

## Backend (from-server)

### Descripcion

Backend opcional construido con TypeScript, Bun y Hono. Gestiona autenticacion, tokens de IA, ejecucion de agentes en la nube, pagos y publicacion de notas.

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
- POST /admin/bootstrap — Inicializar admin
- POST /admin/reset-password — Resetear contrasena

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
- Sincronizacion bidireccional de eventos

### Apple Reminders
- Lectura de recordatorios pendientes
- Creacion de recordatorios desde tareas
- Marcar como completado desde From

### Google Drive y Google Docs
- **Multi-cuenta:** Se pueden conectar multiples cuentas de Google simultaneamente
- **Navegacion:** Explorador de Drive con carpetas, busqueda, selector de cuenta
- **Icono sync por nota:** En la toolbar de cada nota, icono para vincular/gestionar Google Doc
  - Sin vincular (gris): clic para crear Doc. Si hay >1 cuenta, popup para elegir cual
  - Vinculado (verde): desplegable con Abrir Doc / Copiar enlace / Mover a carpeta / Desvincular
- **Carpeta destino:** Configurable en Ajustes → Google Drive. Los docs nuevos se crean ahi
- **Mover a carpeta:** Desde el desplegable de una nota vinculada, mover el doc a otra carpeta de Drive
- **Sync bidireccional nota ↔ Google Doc:**
  - **Push:** Al guardar una nota con `gdoc_id`, se actualiza el Doc automaticamente (debounce 3s)
  - **Pull:** Al abrir una nota con `gdoc_id`, se descarga el contenido si el Doc cambio
  - Frontmatter: `gdoc_id` (ID del doc) + `gdoc_account` (email) + `gdoc_url` (enlace)
- **Contexto IA:** Se puede anadir cualquier Google Doc como contexto del chat sin crear nota
- **OAuth:** ASWebAuthenticationSession con scopes `drive.file` + `documents` + perfil
- **Tokens:** Keychain por cuenta (`gdrive_access_{userId}`, `gdrive_refresh_{userId}`)
- **Conversion:** Google Docs JSON → Markdown (headings, bold, italic, links, listas, strikethrough)

### Google OAuth
- Login con cuenta de Google (sin password)

### Claude OAuth
- Login con suscripcion Claude Pro/Max
- Uso de tokens de la suscripcion del usuario
- Flujo PKCE para seguridad

---

## Glosario

| Termino | Significado |
|---|---|
| Vault | Carpeta raiz que contiene todo el contenido del usuario |
| Raiz / Raiz | Categoria de nivel superior (ej: trabajo, personal, proyectos) |
| Nota | Archivo .md con frontmatter — unidad basica de contenido |
| Tarea | Nota con propiedades de tarea (estado, fecha, prioridad) |
| Tarea rapida | Tarea ligera sin contenido extenso |
| Agente | Tarea automatizada que la IA ejecuta autonomamente |
| Tipo | Etiqueta personalizable para clasificar notas |
| Coleccion | Agrupacion transversal de notas |
| Wikilink | Enlace entre notas: `[[Nombre de nota]]` |
| Pizarra | Canvas visual para diagramas |
| Frontmatter | Bloque YAML al inicio de cada nota con propiedades |
| Parent | Nota o raiz padre en la jerarquia |
| Vista | Configuracion de visualizacion (kanban, calendario, lista, etc.) |
| Taller | Sandbox para depurar agentes y prompts |
| RAG | Retrieval-Augmented Generation — la IA busca contexto relevante |
| Token | Unidad de medida del uso de IA |
| Slug | Identificador corto para notas publicas |

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
| FromServerService | Cliente API del backend |

---

## Changelog

### 2026-04-21 (sesion 6)
- Chat de area ahora tiene paridad completa con chat de proyecto en `ChatPanel.swift`
- Pills de contexto ocultas en areas (igual que en proyectos)
- Boton Google Drive oculto en areas (se gestiona desde RefsPicker)
- Session context oculto en areas
- Label de nota vinculada: "Area vinculada al chat" para areas
- Contexto automatico de area: body, ancestros, tareas, notas hijas, refs, URLs, archivos, colecciones
- Bloque de tareas/hijos inyectado tambien en historial de chat (modo compacto) para areas
- Etiquetas dinámicas proyecto/area en todo el contexto construido

### 2026-04-20 (sesion web)
- Web getfrom.app: sistema i18n con 9 idiomas (ES, EN, FR, DE, ZH, JA, PT, IT, KO)
- Deteccion automatica por idioma del navegador, persistencia en localStorage
- Selector de idioma `<select>` en el nav de todas las paginas (reemplaza toggle ES/EN)
- Correcciones de contenido en pricing: planes son excluyentes (suscripcion = IA gestionada, licencia = API key propia)
- App es gratuita sin IA; FAQ y tabla comparativa actualizadas para reflejar esto correctamente
- Fix contraste: texto de la tabla comparativa en dark mode ahora tiene color explicito
- Todos los cambios pusheados a GitHub (albertolezaun-afk/getfrom-app)

### 2026-04-19 (sesion 2)
- Rediseño estrategico: separacion proyectos / tareas rapidas / notas
- Workspace de proyecto completo: columna tareas (frontmatter `tasks:`), notas hijas, refs
- `ProjectTaskPanel`, `ProjectNotesPanel`, `RefsPicker` (nueva vista de contexto)
- Chat de proyecto: contexto automatico (body + tareas + notas hijas + refs + URLs pre-fetcheadas)
- Pills de "Contexto de sesion" ocultas en proyectos
- Boton insertar ref en el chat desde el panel de contexto
- Icono Google Doc unificado a `g.circle.fill` en toda la app
- `FromHeader` simplificado: solo "Nuevo proyecto" y "Tarea rapida"

### 2026-04-19 (sesion 4)
- Editor CodeMirror 6 — iteracion de fixes: tablas renderizadas, archivos como chips, imagenes con resize/align persistente, wikilinks clicables por posicion, drag & drop, inline naming para tareas y notas hijas con hint visual

### 2026-04-19 (sesion 3)
- Colecciones como flujo de trabajo: pestana dedicada con chat+editor, panel de Recursos clickeable
- Filtros y agrupacion por coleccion en pestana Notas
- Archivos del vault (PDFs, etc.) seleccionables en Contexto de sesion
- Fix inyeccion contexto: colecciones persistentes tras clear/new, limites aumentados

### 2026-04-18 (sesion 7)
- Rediseño iconos toolbar: circulos 22x22 con fondo sutil para tarea, favorito, publicar, Google Docs
- NoteControlsBar reordenado: fecha → parent → tarea → favorito
- Componente controlButton() reutilizable con estados activo/inactivo

### 2026-04-18 (sesion 6)
- Boton de publicar movido del menu tres puntos a toggle junto a estrella de favorito
- Fix bug "nota vacia" al publicar: usar bodyText directo en vez de roundtrip buildFullContent
- Dominio corregido from.app → getfrom.app en servidor (CORS, footer, tokens), app Swift y docs

### 2026-04-18 (sesion 5)
- Web completa getfrom.app: landing, pricing, account, support, privacy (RGPD), terms
- CSS compartido con dark mode y responsive
- Desplegada en GitHub Pages (repo: albertolezaun-afk/getfrom-app)
- DNS configurados en PiensaSolutions: 4 registros A + CNAME www
- HTTPS automatico con Let's Encrypt
- SettingsView.swift: enlaces a soporte, privacidad y terminos en seccion Cuenta
- Corregidos links de compra y cuenta a getfrom.app/pricing.html y account.html
- DOCUMENTACION.md incluida en repo bajo docs/
- Pendiente: conectar URLs de checkout con LemonSqueezy cuando aprueben cuenta

### 2026-04-18 (sesion 4)
- Integracion completa Google Drive y Google Docs con soporte multi-cuenta
- GoogleDriveService: OAuth multi-cuenta, API Drive/Docs, sync bidireccional
- GoogleDriveFile modelo + GoogleDriveBrowserView navegador con carpetas y busqueda
- Sync nota ↔ Google Doc: push al guardar (debounce 3s), pull al abrir nota
- Crear Google Doc desde nota vinculada, crear nota desde Google Doc
- Google Docs como contexto IA en el chat (ContextElement + InlineChatContextItem)
- Seccion Google Drive en Ajustes: lista de cuentas, anadir/eliminar, cuenta activa
- Frontmatter: `gdoc_id` + `gdoc_account` para vincular nota con doc y cuenta

### 2026-04-19 (sesion 4) — Pestaña Enlaces
- Nueva pestaña **Enlaces** entre Explorar y Archivos en el sidebar
- Extraccion automatica de URLs de todas las notas (markdown links + bare URLs) con cache por `modifiedAt`
- Enlaces manuales añadibles desde la pestaña; persistidos en `enlaces.json` en la raiz del vault (iCloud sync)
- Overrides por enlace extraido: titulo personalizado, colecciones, ocultar — sin modificar la nota
- Sidebar colapsable: Todos | Manuales | Colecciones (por raiz) | Por nota (por raiz)
- Toolbar: filtro raiz, ordenacion, buscador local, boton Añadir enlace
- Fila de enlace: favicon, dominio, descripcion editable inline (Enter guarda), pills Copiar/Abrir
- `AddLinkSheet`: auto-paste del portapapeles, selector de colecciones con FlowLayout
- Los enlaces aparecen en Cmd+O y busqueda global con badge "Enlace" azul; seleccionar abre la URL
- `LinkService` (@Observable) con tabla FTS5 `links` en SQLite para busqueda de descripciones

### 2026-04-18 (sesion 3)
- Sistema de colecciones (`col:`) — agrupacion transversal de notas, ColPicker en UI, `#col` en chat
- Notas Vista (`vista:`) — notas que muestran colecciones en lista/kanban/tabla/calendario
- NoteVistaView con toolbar configurable (tipo, coleccion, agrupacion) — todo persistente
- Creacion de notas vista desde context menu en arbol y desde pills de coleccion

### 2026-04-18 (sesion 2)
- Publicacion de notas conectada end-to-end con el servidor
- Auto-sync: notas publicadas se actualizan automaticamente en el servidor (debounce 30s)
- Feedback visual: spinner al publicar, alert de exito con URL, alert de error
- Validacion de contenido vacio antes de publicar
- Menu mejorado: Copiar enlace publico / Despublicar (cuando ya esta publicada)
- Icono globo en breadcrumb copia enlace al clipboard

### 2026-04-18
- Documento creado con la descripcion completa de From
- Editor de notas migrado de NSTextView a WKWebView + CodeMirror 6 con Live Preview
- Nuevo componente `WebMarkdownEditor.swift` con bridge JS bidireccional
- Bundle JS (`editor.bundle.js`, 536KB) con: headings, bold/italic/strikethrough, inline code, blockquotes, HR, fenced code, checkboxes clicables, wikilinks, tags, imagenes inline, autocompletado `[[`/`@`/`/`, paste de imagenes
- `from-asset:///` URL scheme para servir archivos del vault al WKWebView
- Colecciones (`col:`) y Notas Vista (`vista:`) implementadas (otra sesion)
