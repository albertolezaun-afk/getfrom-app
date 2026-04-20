/* ═══════════════════════════════════════════════
   From — getfrom.app
   i18n — ES/EN auto-detection + language toggle
   ═══════════════════════════════════════════════ */

const TRANSLATIONS = {
  es: {
    /* ── Nav ── */
    "nav.features":       "Funciones",
    "nav.sync":           "Sync",
    "nav.ai":             "IA",
    "nav.pricing":        "Precios",
    "nav.support":        "Soporte",
    "nav.download":       "Descargar",
    "nav.lang_toggle":    "EN",

    /* ── Footer ── */
    "footer.tagline":        "Tu segundo cerebro. En tu Mac. Solo tuyo.",
    "footer.col_product":    "Producto",
    "footer.col_support":    "Soporte",
    "footer.col_legal":      "Legal",
    "footer.link_features":  "Funciones",
    "footer.link_pricing":   "Precios",
    "footer.link_download":  "Descargar",
    "footer.link_help":      "Centro de ayuda",
    "footer.link_contact":   "Contacto",
    "footer.link_account":   "Mi cuenta",
    "footer.link_privacy":   "Privacidad",
    "footer.link_terms":     "Términos",

    /* ── index.html ── */
    "index.meta_title":   "From — Tus notas. Tu productividad. Tu control.",
    "index.meta_desc":    "From es una app nativa para macOS que añade una capa de productividad a tus notas sin quitarte el control. Archivos Markdown, iCloud, IA contextual. Tus datos son tuyos.",
    "index.hero_badge":   "macOS nativo · Local-first · Markdown",
    "index.hero_title":   "Tus notas son tuyas.<br><span>From las hace productivas.</span>",
    "index.hero_subtitle": "Archivos Markdown en tu Mac, sincronizados por iCloud, organizados como tú quieras. From añade tareas, vistas, IA y automatización sin tocar tu propiedad sobre los datos.",
    "index.hero_cta_primary":   "Descargar para Mac",
    "index.hero_cta_secondary": "Cómo funciona",
    "index.screenshot_placeholder": "Captura de From (próximamente)",

    "index.philosophy_label":   "Filosofía",
    "index.philosophy_title":   "Tus notas no deberían pertenecer a una app",
    "index.philosophy_subtitle": "La mayoría de apps de productividad guardan tus datos en sus servidores, en formatos propietarios. Si la app cierra, tus notas desaparecen. From funciona al revés.",

    "index.card_md_title":     "Archivos .md estándar",
    "index.card_md_body":      "Cada nota es un archivo Markdown en tu disco. Puedes abrirlo con VS Code, Obsidian, iA Writer o cualquier editor de texto. Ningún formato propietario.",
    "index.card_folder_title": "En tu carpeta, no en la nube",
    "index.card_folder_body":  "Tus datos viven en una carpeta de tu Mac (por defecto en iCloud Drive). From lee esa carpeta. Si desinstalas From, tus notas siguen ahí.",
    "index.card_layer_title":  "From es la capa, no el contenedor",
    "index.card_layer_body":   "From añade productividad — vistas, tareas, IA, automatización — sobre tus archivos. Es una capa inteligente, no una prisión para tus datos.",

    "index.features_label":    "Funciones",
    "index.features_title":    "Todo lo que necesitas para organizar tu vida",
    "index.features_subtitle": "Notas, tareas, proyectos, calendario, vistas configurables y un asistente de IA que conoce tu contexto.",

    "index.feat_editor_title":    "Editor Markdown visual",
    "index.feat_editor_body":     "Un editor rico que oculta la sintaxis y muestra el resultado. Wikilinks entre notas, adjuntos, imágenes y formato sin complicaciones.",
    "index.feat_tasks_title":     "Tareas integradas",
    "index.feat_tasks_body":      "Las tareas son notas con fecha, prioridad y estado. Crea, completa y organiza sin salir de tu flujo. Drag & drop en el timeline.",
    "index.feat_timeline_title":  "Timeline: día, semana, mes, año",
    "index.feat_timeline_body":   "Visualiza tareas, eventos de Apple Calendar y recordatorios en una sola vista temporal. Arrastra para reprogramar.",
    "index.feat_hierarchy_title": "Jerarquía flexible",
    "index.feat_hierarchy_body":  "Áreas, proyectos y notas hijas. Sin carpetas rígidas: cada nota sabe de dónde viene. Organiza como piensas, no como te imponen.",
    "index.feat_views_title":     "Vistas configurables",
    "index.feat_views_body":      "Kanban, calendario, lista, tarjetas y focus. Configura vistas por proyecto, filtra y combina. Cada proyecto se ve como tú necesitas.",
    "index.feat_native_title":    "macOS 100% nativo",
    "index.feat_native_body":     "Swift y SwiftUI. Rendimiento real, integración con el sistema, atajos de teclado nativos. Se siente como parte de tu Mac.",
    "index.feat_collections_title": "Colecciones transversales",
    "index.feat_collections_body":  "Agrupa notas de distintos proyectos en colecciones. Crea vistas cruzadas sin mover archivos de sitio.",
    "index.feat_canvas_title":    "Canvas visual",
    "index.feat_canvas_body":     "Lienzo infinito para diagramas, mapas mentales y brainstorming. Conecta ideas visualmente sin límites.",
    "index.feat_history_title":   "Historial de versiones",
    "index.feat_history_body":    "Cada cambio se guarda automáticamente. Viaja en el tiempo a cualquier versión anterior de tus notas con un clic.",

    "index.sync_label":    "Sincronización",
    "index.sync_title":    "Tus notas, en todos tus dispositivos",
    "index.sync_subtitle": "From usa iCloud Drive para sincronizar automáticamente entre tus dispositivos Apple. Sin configuración, sin cuentas extra.",
    "index.sync_mac":      "Mac",
    "index.sync_icloud":   "iCloud Drive",
    "index.sync_macs":     "Otros Macs",

    "index.sync_icloud_title": "iCloud Drive nativo",
    "index.sync_icloud_body":  "Tu espacio de From es una carpeta en iCloud Drive. Se sincroniza automáticamente entre todos tus Macs sin que tengas que hacer nada.",
    "index.sync_gdrive_title": "Google Drive y Docs",
    "index.sync_gdrive_body":  "Conecta múltiples cuentas de Google. Vincula notas a Google Docs con sincronización bidireccional automática. Tus docs de Google como contexto para la IA.",
    "index.sync_backup_title": "Backup automático",
    "index.sync_backup_body":  "Backups diarios automáticos de todo tu espacio. Restaura cualquier nota a su versión anterior con un clic.",

    "index.integrations_label":    "Integraciones",
    "index.integrations_title":    "Conectado a lo que ya usas",
    "index.integrations_subtitle": "From se integra nativamente con las apps de Apple y Google que ya forman parte de tu día a día.",

    "index.int_calendar_title":   "Apple Calendar",
    "index.int_calendar_body":    "Tus eventos aparecen en el timeline de From. Crea eventos desde notas. Sincronización bidireccional.",
    "index.int_reminders_title":  "Apple Recordatorios",
    "index.int_reminders_body":   "Las tareas de From se sincronizan con Recordatorios de Apple. Completa desde cualquier dispositivo.",
    "index.int_gdrive_title":     "Google Drive",
    "index.int_gdrive_body":      "Navega, busca y vincula archivos de Drive. Multi-cuenta. Accede a tus carpetas sin salir de From.",
    "index.int_gdocs_title":      "Google Docs",
    "index.int_gdocs_body":       "Vincula notas a Google Docs. Edita en un lado y se sincroniza al otro. Auto-sync al guardar.",
    "index.int_icloud_title":     "iCloud Drive",
    "index.int_icloud_body":      "Almacenamiento principal. Tus notas se sincronizan entre todos tus Macs automáticamente.",
    "index.int_aimodels_title":   "Claude, GPT y Gemini",
    "index.int_aimodels_body":    "Elige tu proveedor de IA preferido. Usa tu propia API key o la IA gestionada de From con tokens incluidos.",

    "index.ai_label":    "Inteligencia Artificial",
    "index.ai_title":    "Una IA que conoce tu contexto",
    "index.ai_subtitle": "No es un chatbot genérico. Es un asistente que ha leído tus notas, entiende tus proyectos y trabaja con tu información real.",

    "index.ai_chat_title":    "Chat contextual",
    "index.ai_chat_body":     "Pregunta sobre tus notas, resume proyectos, busca información. La IA recupera los fragmentos relevantes de tu espacio con búsqueda semántica.",
    "index.ai_editor_title":  "Editor IA",
    "index.ai_editor_body":   "La IA edita tus notas directamente. Revisa los cambios, confírmalos o deshazlos. Como un copiloto para tu escritura.",
    "index.ai_agents_title":  "Agentes autónomos",
    "index.ai_agents_body":   "Crea agentes con lenguaje natural. Se ejecutan automáticamente: diario, semanal, al abrir la app. Leen, crean y actualizan notas por ti.",
    "index.ai_privacy_title": "Privacidad real",
    "index.ai_privacy_body":  "Solo el fragmento relevante viaja a la API de IA. Nada se almacena en servidores. Puedes usar tu propia API key para control total.",

    "index.privacy_label":    "Privacidad",
    "index.privacy_title":    "Privacidad radical",
    "index.privacy_subtitle": "No es marketing. Es la arquitectura. From no puede acceder a tus datos aunque quisiera.",

    "index.priv_noserver_title":    "Sin servidores propios",
    "index.priv_noserver_body":     "Tus archivos viven en tu Mac y en tu iCloud privado. From no tiene backend que almacene tus datos.",
    "index.priv_notelemetry_title": "Cero telemetría",
    "index.priv_notelemetry_body":  "No rastreamos uso, no enviamos analíticas, no recopilamos datos de comportamiento. Cero.",
    "index.priv_nolockin_title":    "Sin lock-in",
    "index.priv_nolockin_body":     "Archivos Markdown estándar. Si dejas From, tus notas siguen funcionando en cualquier editor del planeta.",

    "index.steps_title": "Empieza en 30 segundos",
    "index.step1_title": "Descarga From",
    "index.step1_body":  "Abre el .dmg y arrastra From a Aplicaciones. Sin instalador, sin cuenta obligatoria.",
    "index.step2_title": "Elige tu carpeta",
    "index.step2_body":  "From crea una carpeta en iCloud Drive por defecto. O elige cualquier carpeta que ya tengas.",
    "index.step3_title": "Empieza a trabajar",
    "index.step3_body":  "Crea notas, organiza proyectos, programa tareas. La IA ya conoce tu contexto desde el minuto uno.",

    "index.pricing_teaser_title": "Simple y justo",
    "index.pricing_teaser_body":  "Licencia perpetua para usar From para siempre. Suscripción opcional solo si quieres IA gestionada sin configurar API keys.",
    "index.pricing_teaser_cta":   "Ver precios",

    "index.faq_title": "Preguntas frecuentes",
    "index.faq1_q": "¿Necesito Obsidian para usar From?",
    "index.faq1_a": "No. From es completamente independiente. Usa archivos Markdown estándar, así que puedes abrir las mismas notas con Obsidian, iA Writer o cualquier editor si quieres, pero no es necesario.",
    "index.faq2_q": "¿Cómo funciona la IA?",
    "index.faq2_a": "From indexa tus notas localmente. Cuando preguntas algo, recupera los fragmentos relevantes y los envía a la API de IA. Solo el fragmento necesario viaja — nada se almacena en servidores externos. Puedes elegir entre Claude, GPT o Gemini.",
    "index.faq3_q": "¿Puedo sincronizar entre dispositivos?",
    "index.faq3_a": "Sí. Si usas iCloud Drive (opción por defecto), tus notas se sincronizan automáticamente entre todos tus Macs. También puedes vincular notas a Google Docs para colaborar.",
    "index.faq4_q": "¿Funciona en iPhone o iPad?",
    "index.faq4_a": "De momento From es solo para macOS. Tus notas en iCloud son accesibles desde cualquier editor de texto en iOS. La app nativa para iOS está en desarrollo.",
    "index.faq5_q": "¿Qué pasa si dejo de usar From?",
    "index.faq5_a": "Nada. Tus notas son archivos .md en tu ordenador. Siguen ahí, legibles con cualquier editor de texto. No hay formato propietario ni dependencia alguna.",
    "index.faq6_q": "¿Necesito una API key para la IA?",
    "index.faq6_a": "No necesariamente. Puedes usar la IA gestionada de From (con suscripción) o aportar tu propia API key de Anthropic, OpenAI o Google. También puedes conectar tu suscripción de Claude directamente.",
    "index.faq7_q": "¿Mis datos están seguros?",
    "index.faq7_a": "Tus notas nunca salen de tu Mac ni de tu iCloud privado. From no tiene servidores que almacenen tus datos. No hay telemetría, no hay analíticas, no hay tracking.",

    "index.cta_title": "Tu segundo cerebro te está esperando",
    "index.cta_body":  "Descarga From y empieza a organizar tus notas, tareas y proyectos. Sin cuenta, sin tarjeta, sin compromiso.",
    "index.cta_btn":   "Descargar para macOS",

    /* ── pricing.html ── */
    "pricing.meta_title":   "Precios — From",
    "pricing.meta_desc":    "Precios de From. Licencia perpetua o suscripción con IA gestionada. Sin trucos, sin compromisos.",
    "pricing.hero_badge":   "Precios",
    "pricing.hero_title":   "Simple y transparente",
    "pricing.hero_subtitle": "Paga una vez y usa From para siempre conectando tu propia IA.<br>O suscríbete y ten la IA incluida sin configurar nada.",

    "pricing.perpetual_title":  "Licencia perpetua",
    "pricing.perpetual_desc":   "Para quienes quieren From para siempre",
    "pricing.perpetual_period": "Pago único. Para siempre.",
    "pricing.perpetual_btn":    "Comprar licencia",
    "pricing.perpetual_f1": "App completa sin límite de tiempo",
    "pricing.perpetual_f2": "Notas, tareas, vistas y timeline",
    "pricing.perpetual_f3": "Integración Apple Calendar y Recordatorios",
    "pricing.perpetual_f4": "Google Drive y Google Docs",
    "pricing.perpetual_f5": "Historial de versiones y backups",
    "pricing.perpetual_f6": "Agentes autónomos",
    "pricing.perpetual_f7": "IA con tu propia API key (Anthropic, OpenAI, Google)",
    "pricing.perpetual_f8": "Actualizaciones incluidas",

    "pricing.sub_title":  "Suscripción",
    "pricing.sub_desc":   "Todo incluido con IA gestionada",
    "pricing.sub_period": "Cancela cuando quieras",
    "pricing.sub_btn":    "Suscribirse",
    "pricing.sub_f1": "Todo lo de la licencia perpetua",
    "pricing.sub_f2": "10 millones de tokens IA/mes incluidos",
    "pricing.sub_f3": "IA gestionada: sin API key, sin configuración",
    "pricing.sub_f4": "Modelos de última generación",
    "pricing.sub_f5": "Agentes con ejecución automática en la nube",
    "pricing.sub_f6": "Soporte prioritario",

    "pricing.comparison_title": "Comparativa de planes",
    "pricing.comp_feature_col": "Función",
    "pricing.comp_perpetual_col": "Licencia perpetua",
    "pricing.comp_sub_col": "Suscripción",
    "pricing.comp_row1":  "Notas, tareas, timeline",
    "pricing.comp_row2":  "Vistas (kanban, calendario, lista, tarjetas)",
    "pricing.comp_row3":  "Apple Calendar y Recordatorios",
    "pricing.comp_row4":  "Google Drive y Docs",
    "pricing.comp_row5":  "Agentes autónomos",
    "pricing.comp_row6":  "Historial de versiones",
    "pricing.comp_row7":  "IA con API key propia",
    "pricing.comp_row8":  "Conectar suscripción de Claude",
    "pricing.comp_row9":  "IA gestionada (sin API key)",
    "pricing.comp_row9_sub": "✓ 10M tokens/mes",
    "pricing.comp_row10": "Soporte prioritario",

    "pricing.ai_modes_title":    "Tres formas de usar la IA",
    "pricing.ai_modes_subtitle": "Tú eliges cómo quieres que funcione la inteligencia artificial en From.",

    "pricing.mode_auto_title":  "Automático (Suscripción)",
    "pricing.mode_auto_body":   "Sin configurar nada. From gestiona las API keys y los modelos por ti. Solo suscríbete y empieza a usar la IA con tokens incluidos.",
    "pricing.mode_manual_title": "Manual (API key propia)",
    "pricing.mode_manual_body":  "Introduce tu API key de Anthropic, OpenAI o Google. Control total sobre el proveedor, modelo y costes. Funciona con la licencia perpetua.",
    "pricing.mode_oauth_title":  "Claude OAuth",
    "pricing.mode_oauth_body":   "Conecta tu suscripción de Claude Pro o Max directamente. Usa tu cuota de Claude sin API key, sin coste extra.",

    "pricing.faq_title": "Preguntas sobre precios",
    "pricing.faq1_q": "¿Puedo usar From sin pagar?",
    "pricing.faq1_a": "Puedes descargar From y usarlo con tu propia API key sin ningún pago. La compra de licencia o suscripción desbloquea funciones adicionales y/o IA gestionada.",
    "pricing.faq2_q": "¿La licencia perpetua incluye actualizaciones?",
    "pricing.faq2_a": "Sí. Todas las actualizaciones están incluidas. Paga una vez, usa From para siempre con todas las mejoras futuras.",
    "pricing.faq3_q": "¿Qué pasa si cancelo la suscripción?",
    "pricing.faq3_a": "Sigues usando From con todas sus funciones. Solo pierdes el acceso a la IA gestionada y los tokens incluidos. Puedes seguir usando la IA con tu propia API key.",
    "pricing.faq4_q": "¿Puedo cambiar de plan?",
    "pricing.faq4_a": "Sí. Puedes pasar de licencia perpetua a suscripción o viceversa en cualquier momento desde tu cuenta.",
    "pricing.faq5_q": "¿Qué son los tokens?",
    "pricing.faq5_a": "Los tokens son la unidad de medida de la IA. Cada pregunta al chat, edición con IA o ejecución de agente consume tokens. 10M de tokens al mes es suficiente para un uso intensivo.",

    "pricing.cta_title": "Empieza hoy",
    "pricing.cta_body":  "Descarga From gratis y decide después qué plan se adapta a ti.",
    "pricing.cta_btn":   "Descargar para macOS",

    /* ── support.html ── */
    "support.meta_title": "Soporte — From",
    "support.meta_desc":  "Centro de ayuda de From. Preguntas frecuentes, guías y contacto.",
    "support.hero_title":    "Centro de ayuda",
    "support.hero_subtitle": "¿Necesitas ayuda con From? Aquí encontrarás respuestas a las preguntas más frecuentes y formas de contactarnos.",

    "support.email_title": "Email",
    "support.email_body":  "Escríbenos directamente y te responderemos lo antes posible.",
    "support.inapp_title": "Desde la app",
    "support.inapp_body":  "En From, ve a Ajustes → Soporte para enviar comentarios o reportar problemas directamente.",
    "support.faq_card_title": "FAQ",
    "support.faq_card_body":  "Consulta las preguntas frecuentes más abajo. Probablemente tu duda ya esté resuelta.",
    "support.faq_card_btn":   "Ver FAQ",

    "support.faq_section_title": "Preguntas frecuentes",
    "support.faq1_q":  "¿Cómo instalo From?",
    "support.faq1_a":  "Descarga el archivo .dmg desde nuestra web, ábrelo y arrastra From a tu carpeta de Aplicaciones. No necesitas instalador ni crear una cuenta para empezar.",
    "support.faq2_q":  "¿Dónde se guardan mis notas?",
    "support.faq2_a":  "En una carpeta de tu Mac. Por defecto, From crea un espacio en iCloud Drive, pero puedes elegir cualquier carpeta. Tus notas son archivos .md estándar que puedes abrir con cualquier editor.",
    "support.faq3_q":  "¿Puedo usar una carpeta de Obsidian existente?",
    "support.faq3_a":  "Sí. Puedes apuntar From a cualquier carpeta existente con archivos Markdown. From leerá la estructura y te permitirá trabajar con esas notas.",
    "support.faq4_q":  "¿Cómo funciona la sincronización?",
    "support.faq4_a":  "From usa iCloud Drive. Si tu espacio está en iCloud (opción por defecto), las notas se sincronizan automáticamente entre todos tus Macs. No hay que configurar nada extra.",
    "support.faq5_q":  "¿Puedo acceder a mis notas desde iPhone?",
    "support.faq5_a":  "Tus notas en iCloud Drive son accesibles desde la app Archivos de iOS, o con cualquier editor Markdown para iPhone. La app nativa de From para iOS está en desarrollo.",
    "support.faq6_q":  "¿Cómo configuro la IA?",
    "support.faq6_a":  "Ve a Ajustes → IA. Elige entre modo automático (suscripción), manual (tu propia API key) o Claude OAuth (tu suscripción de Claude). En modo manual, pega tu API key y elige el modelo.",
    "support.faq7_q":  "¿Mis notas se envían a un servidor?",
    "support.faq7_a":  "No. From indexa tus notas localmente. Cuando usas la IA, solo el fragmento relevante se envía a la API del proveedor (Anthropic, OpenAI o Google) para procesar tu consulta. Nada se almacena en servidores externos.",
    "support.faq8_q":  "¿Qué proveedores de IA soporta From?",
    "support.faq8_a":  "Anthropic (Claude), OpenAI (GPT) y Google (Gemini). Puedes cambiar de proveedor en cualquier momento desde Ajustes → IA.",
    "support.faq9_q":  "¿Cómo conecto Apple Calendar?",
    "support.faq9_a":  "From pide permiso de acceso a Calendar cuando lo activas en Ajustes → Integraciones. Una vez concedido, tus eventos aparecen automáticamente en el timeline.",
    "support.faq10_q": "¿Cómo conecto Google Drive?",
    "support.faq10_a": "Ve a Ajustes → Google. Haz clic en \"Conectar cuenta\" y sigue el proceso de autorización de Google. Puedes conectar múltiples cuentas.",
    "support.faq11_q": "¿Cómo cancelo mi suscripción?",
    "support.faq11_a": "Puedes cancelar en cualquier momento desde <a href=\"account.html\">tu cuenta</a> o directamente en la app en Ajustes → Cuenta. La cancelación es inmediata y no se cobra más.",
    "support.faq12_q": "¿Cómo elimino mi cuenta?",
    "support.faq12_a": "Envía un email a <a href=\"mailto:hola@getfrom.app?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta\">hola@getfrom.app</a> con el asunto \"Solicitud de eliminación de cuenta\". Eliminaremos todos los datos asociados en nuestro servidor. Tus notas locales no se ven afectadas.",

    "support.cta_title": "¿No encuentras lo que buscas?",
    "support.cta_body":  "Escríbenos y te ayudaremos personalmente.",

    /* ── account.html ── */
    "account.meta_title": "Mi cuenta — From",
    "account.meta_desc":  "Gestiona tu cuenta de From. Suscripción, facturación, tokens y configuración.",
    "account.hero_title":    "Gestiona tu cuenta",
    "account.hero_subtitle": "Administra tu suscripción, facturación y configuración de From desde aquí o directamente desde la app.",

    "account.sub_title": "Suscripción",
    "account.sub_body":  "Gestiona tu plan, cambia de suscripción mensual a anual, o cancela en cualquier momento.",
    "account.sub_btn":   "Gestionar suscripción",

    "account.billing_title": "Facturación",
    "account.billing_body":  "Consulta tu historial de pagos, descarga facturas y actualiza tu método de pago.",
    "account.billing_btn":   "Ver facturas",

    "account.tokens_title": "Tokens de IA",
    "account.tokens_body":  "Consulta tu balance de tokens desde la app en Ajustes → IA. Compra tokens adicionales cuando lo necesites.",
    "account.tokens_btn":   "Comprar tokens",

    "account.license_title": "Licencia",
    "account.license_body":  "Activa tu licencia perpetua desde la app en Ajustes → Cuenta. Introduce el código que recibiste por email.",
    "account.license_btn":   "Ver planes",

    "account.apikeys_title": "API Keys",
    "account.apikeys_body":  "Configura tus API keys de Anthropic, OpenAI o Google en la app: Ajustes → IA → Modo manual.",
    "account.apikeys_note":  "Las API keys se almacenan solo en tu Mac, nunca en nuestros servidores.",

    "account.delete_title": "Eliminar cuenta",
    "account.delete_body":  "Elimina tu cuenta y todos los datos asociados en nuestro servidor. Tus notas locales no se ven afectadas — siguen siendo archivos en tu Mac.",
    "account.delete_btn":   "Solicitar eliminación",

    "account.info_title": "Información importante",
    "account.info1_q": "Tu cuenta y tus notas son cosas diferentes",
    "account.info1_a": "Tu cuenta de From gestiona la suscripción, tokens y acceso a la IA gestionada. Tus notas son archivos Markdown en tu Mac. Eliminar tu cuenta <strong>no</strong> elimina tus notas — esos archivos siguen siendo tuyos, en tu disco.",
    "account.info2_q": "Gestión desde la app",
    "account.info2_a": "La mayoría de opciones de cuenta están disponibles directamente en From: Ajustes → Cuenta. Desde ahí puedes ver tu plan, balance de tokens, activar licencias y configurar API keys.",
    "account.info3_q": "Pagos procesados por LemonSqueezy",
    "account.info3_a": "Los pagos se procesan de forma segura a través de LemonSqueezy. No almacenamos datos de tarjeta. Puedes gestionar tu método de pago desde el portal del cliente.",
    "account.info4_q": "¿Problemas con tu cuenta?",
    "account.info4_a": "Escríbenos a <a href=\"mailto:hola@getfrom.app\">hola@getfrom.app</a> y te ayudaremos lo antes posible.",

    /* ── privacy.html ── */
    "privacy.meta_title":   "Política de Privacidad — From",
    "privacy.meta_desc":    "Política de privacidad de From. Cómo tratamos tus datos, qué recopilamos y qué no.",
    "privacy.hero_title":   "Política de Privacidad",
    "privacy.hero_subtitle": "En From, la privacidad no es una característica. Es la arquitectura.",

    /* ── terms.html ── */
    "terms.meta_title":   "Términos de Servicio — From",
    "terms.meta_desc":    "Términos y condiciones de uso de From. Licencia, suscripción, responsabilidades y garantías.",
    "terms.hero_title":   "Términos de Servicio",
    "terms.hero_subtitle": "Condiciones de uso de la aplicación From y sus servicios asociados."
  },

  en: {
    /* ── Nav ── */
    "nav.features":       "Features",
    "nav.sync":           "Sync",
    "nav.ai":             "AI",
    "nav.pricing":        "Pricing",
    "nav.support":        "Support",
    "nav.download":       "Download",
    "nav.lang_toggle":    "ES",

    /* ── Footer ── */
    "footer.tagline":        "Your second brain. On your Mac. Yours alone.",
    "footer.col_product":    "Product",
    "footer.col_support":    "Support",
    "footer.col_legal":      "Legal",
    "footer.link_features":  "Features",
    "footer.link_pricing":   "Pricing",
    "footer.link_download":  "Download",
    "footer.link_help":      "Help center",
    "footer.link_contact":   "Contact",
    "footer.link_account":   "My account",
    "footer.link_privacy":   "Privacy",
    "footer.link_terms":     "Terms",

    /* ── index.html ── */
    "index.meta_title":   "From — Your notes. Your productivity. Your control.",
    "index.meta_desc":    "From is a native macOS app that adds a productivity layer to your notes without taking away control. Markdown files, iCloud, contextual AI. Your data stays yours.",
    "index.hero_badge":   "Native macOS · Local-first · Markdown",
    "index.hero_title":   "Your notes are yours.<br><span>From makes them productive.</span>",
    "index.hero_subtitle": "Markdown files on your Mac, synced via iCloud, organized your way. From adds tasks, views, AI, and automation without touching your ownership of the data.",
    "index.hero_cta_primary":   "Download for Mac",
    "index.hero_cta_secondary": "How it works",
    "index.screenshot_placeholder": "From screenshot (coming soon)",

    "index.philosophy_label":   "Philosophy",
    "index.philosophy_title":   "Your notes shouldn't belong to an app",
    "index.philosophy_subtitle": "Most productivity apps store your data on their servers, in proprietary formats. If the app shuts down, your notes vanish. From works the other way around.",

    "index.card_md_title":     "Standard .md files",
    "index.card_md_body":      "Every note is a Markdown file on your disk. Open it with VS Code, Obsidian, iA Writer, or any text editor. No proprietary format.",
    "index.card_folder_title": "In your folder, not in the cloud",
    "index.card_folder_body":  "Your data lives in a folder on your Mac (iCloud Drive by default). From reads that folder. Uninstall From and your notes are still there.",
    "index.card_layer_title":  "From is the layer, not the container",
    "index.card_layer_body":   "From adds productivity — views, tasks, AI, automation — on top of your files. It's an intelligent layer, not a prison for your data.",

    "index.features_label":    "Features",
    "index.features_title":    "Everything you need to organize your life",
    "index.features_subtitle": "Notes, tasks, projects, calendar, configurable views, and an AI assistant that knows your context.",

    "index.feat_editor_title":    "Visual Markdown editor",
    "index.feat_editor_body":     "A rich editor that hides the syntax and shows the result. Wikilinks between notes, attachments, images, and formatting without the hassle.",
    "index.feat_tasks_title":     "Integrated tasks",
    "index.feat_tasks_body":      "Tasks are notes with a date, priority, and status. Create, complete, and organize without leaving your flow. Drag & drop on the timeline.",
    "index.feat_timeline_title":  "Timeline: day, week, month, year",
    "index.feat_timeline_body":   "See tasks, Apple Calendar events, and reminders in a single time view. Drag to reschedule.",
    "index.feat_hierarchy_title": "Flexible hierarchy",
    "index.feat_hierarchy_body":  "Areas, projects, and child notes. No rigid folders — each note knows where it belongs. Organize the way you think, not the way you're told.",
    "index.feat_views_title":     "Configurable views",
    "index.feat_views_body":      "Kanban, calendar, list, cards, and focus. Configure views per project, filter and combine. Each project looks exactly how you need it.",
    "index.feat_native_title":    "100% native macOS",
    "index.feat_native_body":     "Swift and SwiftUI. Real performance, system integration, native keyboard shortcuts. Feels like part of your Mac.",
    "index.feat_collections_title": "Cross-project collections",
    "index.feat_collections_body":  "Group notes from different projects into collections. Build cross-project views without moving files.",
    "index.feat_canvas_title":    "Visual canvas",
    "index.feat_canvas_body":     "An infinite board for diagrams, mind maps, and brainstorming. Connect ideas visually without limits.",
    "index.feat_history_title":   "Version history",
    "index.feat_history_body":    "Every change is saved automatically. Travel back to any previous version of your notes with a click.",

    "index.sync_label":    "Sync",
    "index.sync_title":    "Your notes, on all your devices",
    "index.sync_subtitle": "From uses iCloud Drive to sync automatically across your Apple devices. No setup, no extra accounts.",
    "index.sync_mac":      "Mac",
    "index.sync_icloud":   "iCloud Drive",
    "index.sync_macs":     "Other Macs",

    "index.sync_icloud_title": "Native iCloud Drive",
    "index.sync_icloud_body":  "Your From workspace is a folder in iCloud Drive. It syncs automatically across all your Macs without any extra steps.",
    "index.sync_gdrive_title": "Google Drive & Docs",
    "index.sync_gdrive_body":  "Connect multiple Google accounts. Link notes to Google Docs with automatic two-way sync. Use your Google Docs as AI context.",
    "index.sync_backup_title": "Automatic backup",
    "index.sync_backup_body":  "Daily automatic backups of your entire workspace. Restore any note to a previous version with one click.",

    "index.integrations_label":    "Integrations",
    "index.integrations_title":    "Connected to what you already use",
    "index.integrations_subtitle": "From integrates natively with the Apple and Google apps already part of your day.",

    "index.int_calendar_title":   "Apple Calendar",
    "index.int_calendar_body":    "Your events appear in the From timeline. Create events from notes. Two-way sync.",
    "index.int_reminders_title":  "Apple Reminders",
    "index.int_reminders_body":   "From tasks sync with Apple Reminders. Complete them from any device.",
    "index.int_gdrive_title":     "Google Drive",
    "index.int_gdrive_body":      "Browse, search, and link Drive files. Multi-account. Access your folders without leaving From.",
    "index.int_gdocs_title":      "Google Docs",
    "index.int_gdocs_body":       "Link notes to Google Docs. Edit on one side and it syncs to the other. Auto-sync on save.",
    "index.int_icloud_title":     "iCloud Drive",
    "index.int_icloud_body":      "Primary storage. Your notes sync across all your Macs automatically.",
    "index.int_aimodels_title":   "Claude, GPT & Gemini",
    "index.int_aimodels_body":    "Choose your preferred AI provider. Use your own API key or From's managed AI with included tokens.",

    "index.ai_label":    "Artificial Intelligence",
    "index.ai_title":    "An AI that knows your context",
    "index.ai_subtitle": "Not a generic chatbot. An assistant that has read your notes, understands your projects, and works with your actual information.",

    "index.ai_chat_title":    "Contextual chat",
    "index.ai_chat_body":     "Ask about your notes, summarize projects, find information. The AI retrieves relevant snippets from your workspace using semantic search.",
    "index.ai_editor_title":  "AI editor",
    "index.ai_editor_body":   "The AI edits your notes directly. Review the changes, confirm or undo them. A true copilot for your writing.",
    "index.ai_agents_title":  "Autonomous agents",
    "index.ai_agents_body":   "Create agents in plain language. They run automatically — daily, weekly, on app launch. They read, create, and update notes for you.",
    "index.ai_privacy_title": "Real privacy",
    "index.ai_privacy_body":  "Only the relevant snippet travels to the AI API. Nothing is stored on servers. Use your own API key for full control.",

    "index.privacy_label":    "Privacy",
    "index.privacy_title":    "Radical privacy",
    "index.privacy_subtitle": "Not marketing. Architecture. From can't access your data even if it wanted to.",

    "index.priv_noserver_title":    "No proprietary servers",
    "index.priv_noserver_body":     "Your files live on your Mac and in your private iCloud. From has no backend storing your data.",
    "index.priv_notelemetry_title": "Zero telemetry",
    "index.priv_notelemetry_body":  "We don't track usage, send analytics, or collect behavioral data. Zero.",
    "index.priv_nolockin_title":    "No lock-in",
    "index.priv_nolockin_body":     "Standard Markdown files. If you leave From, your notes keep working in any editor on the planet.",

    "index.steps_title": "Up and running in 30 seconds",
    "index.step1_title": "Download From",
    "index.step1_body":  "Open the .dmg and drag From to Applications. No installer, no mandatory account.",
    "index.step2_title": "Choose your folder",
    "index.step2_body":  "From creates a folder in iCloud Drive by default. Or pick any folder you already have.",
    "index.step3_title": "Start working",
    "index.step3_body":  "Create notes, organize projects, schedule tasks. The AI already knows your context from minute one.",

    "index.pricing_teaser_title": "Simple and fair",
    "index.pricing_teaser_body":  "A one-time license to use From forever. Optional subscription only if you want managed AI without configuring API keys.",
    "index.pricing_teaser_cta":   "See pricing",

    "index.faq_title": "Frequently asked questions",
    "index.faq1_q": "Do I need Obsidian to use From?",
    "index.faq1_a": "No. From is completely independent. It uses standard Markdown files, so you can open the same notes in Obsidian, iA Writer, or any editor if you want — but you don't have to.",
    "index.faq2_q": "How does the AI work?",
    "index.faq2_a": "From indexes your notes locally. When you ask something, it retrieves the relevant snippets and sends them to the AI API. Only the necessary snippet travels — nothing is stored on external servers. You can choose Claude, GPT, or Gemini.",
    "index.faq3_q": "Can I sync across devices?",
    "index.faq3_a": "Yes. If you use iCloud Drive (the default), your notes sync automatically across all your Macs. You can also link notes to Google Docs to collaborate.",
    "index.faq4_q": "Does it work on iPhone or iPad?",
    "index.faq4_a": "From is currently macOS only. Your notes in iCloud are accessible from any text editor on iOS. A native iOS app is in development.",
    "index.faq5_q": "What happens if I stop using From?",
    "index.faq5_a": "Nothing. Your notes are .md files on your computer. They stay there, readable by any text editor. No proprietary format, no dependency whatsoever.",
    "index.faq6_q": "Do I need an API key for AI?",
    "index.faq6_a": "Not necessarily. You can use From's managed AI (with a subscription) or bring your own API key from Anthropic, OpenAI, or Google. You can also connect your Claude subscription directly.",
    "index.faq7_q": "Is my data safe?",
    "index.faq7_a": "Your notes never leave your Mac or your private iCloud. From has no servers storing your data. No telemetry, no analytics, no tracking.",

    "index.cta_title": "Your second brain is waiting",
    "index.cta_body":  "Download From and start organizing your notes, tasks, and projects. No account, no card, no commitment.",
    "index.cta_btn":   "Download for macOS",

    /* ── pricing.html ── */
    "pricing.meta_title":   "Pricing — From",
    "pricing.meta_desc":    "From pricing. One-time license or subscription with managed AI. No tricks, no lock-in.",
    "pricing.hero_badge":   "Pricing",
    "pricing.hero_title":   "Simple and transparent",
    "pricing.hero_subtitle": "Pay once and use From forever with your own AI.<br>Or subscribe and get AI included with no setup required.",

    "pricing.perpetual_title":  "Perpetual license",
    "pricing.perpetual_desc":   "For those who want From forever",
    "pricing.perpetual_period": "One-time payment. Yours forever.",
    "pricing.perpetual_btn":    "Buy license",
    "pricing.perpetual_f1": "Full app, no time limit",
    "pricing.perpetual_f2": "Notes, tasks, views, and timeline",
    "pricing.perpetual_f3": "Apple Calendar & Reminders integration",
    "pricing.perpetual_f4": "Google Drive & Google Docs",
    "pricing.perpetual_f5": "Version history & backups",
    "pricing.perpetual_f6": "Autonomous agents",
    "pricing.perpetual_f7": "AI with your own API key (Anthropic, OpenAI, Google)",
    "pricing.perpetual_f8": "All future updates included",

    "pricing.sub_title":  "Subscription",
    "pricing.sub_desc":   "Everything included with managed AI",
    "pricing.sub_period": "Cancel anytime",
    "pricing.sub_btn":    "Subscribe",
    "pricing.sub_f1": "Everything in the perpetual license",
    "pricing.sub_f2": "10 million AI tokens/month included",
    "pricing.sub_f3": "Managed AI: no API key, no setup",
    "pricing.sub_f4": "Latest-generation models",
    "pricing.sub_f5": "Agents with automatic cloud execution",
    "pricing.sub_f6": "Priority support",

    "pricing.comparison_title": "Plan comparison",
    "pricing.comp_feature_col": "Feature",
    "pricing.comp_perpetual_col": "Perpetual license",
    "pricing.comp_sub_col": "Subscription",
    "pricing.comp_row1":  "Notes, tasks, timeline",
    "pricing.comp_row2":  "Views (kanban, calendar, list, cards)",
    "pricing.comp_row3":  "Apple Calendar & Reminders",
    "pricing.comp_row4":  "Google Drive & Docs",
    "pricing.comp_row5":  "Autonomous agents",
    "pricing.comp_row6":  "Version history",
    "pricing.comp_row7":  "AI with own API key",
    "pricing.comp_row8":  "Connect Claude subscription",
    "pricing.comp_row9":  "Managed AI (no API key)",
    "pricing.comp_row9_sub": "✓ 10M tokens/month",
    "pricing.comp_row10": "Priority support",

    "pricing.ai_modes_title":    "Three ways to use AI",
    "pricing.ai_modes_subtitle": "You choose how artificial intelligence works in From.",

    "pricing.mode_auto_title":  "Automatic (Subscription)",
    "pricing.mode_auto_body":   "No setup needed. From manages the API keys and models for you. Just subscribe and start using AI with included tokens.",
    "pricing.mode_manual_title": "Manual (own API key)",
    "pricing.mode_manual_body":  "Enter your Anthropic, OpenAI, or Google API key. Full control over the provider, model, and costs. Works with the perpetual license.",
    "pricing.mode_oauth_title":  "Claude OAuth",
    "pricing.mode_oauth_body":   "Connect your Claude Pro or Max subscription directly. Use your Claude quota without an API key, at no extra cost.",

    "pricing.faq_title": "Pricing questions",
    "pricing.faq1_q": "Can I use From without paying?",
    "pricing.faq1_a": "You can download From and use it with your own API key at no charge. Buying a license or subscribing unlocks additional features and/or managed AI.",
    "pricing.faq2_q": "Does the perpetual license include updates?",
    "pricing.faq2_a": "Yes. All updates are included. Pay once, use From forever with every future improvement.",
    "pricing.faq3_q": "What happens if I cancel my subscription?",
    "pricing.faq3_a": "You keep using From with all its features. You only lose access to managed AI and the included tokens. You can still use AI with your own API key.",
    "pricing.faq4_q": "Can I switch plans?",
    "pricing.faq4_a": "Yes. You can move from a perpetual license to a subscription, or vice versa, at any time from your account.",
    "pricing.faq5_q": "What are tokens?",
    "pricing.faq5_a": "Tokens are the unit of measurement for AI. Every chat question, AI edit, or agent run consumes tokens. 10M tokens per month is plenty for intensive use.",

    "pricing.cta_title": "Start today",
    "pricing.cta_body":  "Download From for free and decide later which plan fits you.",
    "pricing.cta_btn":   "Download for macOS",

    /* ── support.html ── */
    "support.meta_title": "Support — From",
    "support.meta_desc":  "From help center. FAQ, guides, and contact.",
    "support.hero_title":    "Help center",
    "support.hero_subtitle": "Need help with From? Here you'll find answers to the most common questions and ways to reach us.",

    "support.email_title": "Email",
    "support.email_body":  "Write to us directly and we'll get back to you as soon as possible.",
    "support.inapp_title": "From the app",
    "support.inapp_body":  "In From, go to Settings → Support to send feedback or report issues directly.",
    "support.faq_card_title": "FAQ",
    "support.faq_card_body":  "Check the frequently asked questions below. Your question is probably already answered.",
    "support.faq_card_btn":   "See FAQ",

    "support.faq_section_title": "Frequently asked questions",
    "support.faq1_q":  "How do I install From?",
    "support.faq1_a":  "Download the .dmg from our website, open it, and drag From to your Applications folder. No installer or account needed to get started.",
    "support.faq2_q":  "Where are my notes stored?",
    "support.faq2_a":  "In a folder on your Mac. By default, From creates a workspace in iCloud Drive, but you can choose any folder. Your notes are standard .md files that open in any editor.",
    "support.faq3_q":  "Can I use an existing Obsidian vault?",
    "support.faq3_a":  "Yes. You can point From at any existing folder with Markdown files. From will read the structure and let you work with those notes.",
    "support.faq4_q":  "How does sync work?",
    "support.faq4_a":  "From uses iCloud Drive. If your workspace is in iCloud (the default), notes sync automatically across all your Macs. No extra configuration needed.",
    "support.faq5_q":  "Can I access my notes from iPhone?",
    "support.faq5_a":  "Your notes in iCloud Drive are accessible from the iOS Files app or any Markdown editor for iPhone. A native From app for iOS is in development.",
    "support.faq6_q":  "How do I set up AI?",
    "support.faq6_a":  "Go to Settings → AI. Choose between automatic mode (subscription), manual (your own API key), or Claude OAuth (your Claude subscription). In manual mode, paste your API key and choose the model.",
    "support.faq7_q":  "Are my notes sent to a server?",
    "support.faq7_a":  "No. From indexes your notes locally. When you use AI, only the relevant snippet is sent to the provider's API (Anthropic, OpenAI, or Google) to process your query. Nothing is stored on external servers.",
    "support.faq8_q":  "Which AI providers does From support?",
    "support.faq8_a":  "Anthropic (Claude), OpenAI (GPT), and Google (Gemini). You can switch providers at any time from Settings → AI.",
    "support.faq9_q":  "How do I connect Apple Calendar?",
    "support.faq9_a":  "From requests Calendar access when you enable it in Settings → Integrations. Once granted, your events appear automatically in the timeline.",
    "support.faq10_q": "How do I connect Google Drive?",
    "support.faq10_a": "Go to Settings → Google. Click \"Connect account\" and follow Google's authorization flow. You can connect multiple accounts.",
    "support.faq11_q": "How do I cancel my subscription?",
    "support.faq11_a": "You can cancel at any time from <a href=\"account.html\">your account</a> or directly in the app at Settings → Account. Cancellation is immediate and no further charges are made.",
    "support.faq12_q": "How do I delete my account?",
    "support.faq12_a": "Send an email to <a href=\"mailto:hola@getfrom.app?subject=Account%20deletion%20request\">hola@getfrom.app</a> with the subject \"Account deletion request\". We'll remove all associated data from our server. Your local notes are not affected.",

    "support.cta_title": "Can't find what you're looking for?",
    "support.cta_body":  "Write to us and we'll help you personally.",

    /* ── account.html ── */
    "account.meta_title": "My account — From",
    "account.meta_desc":  "Manage your From account. Subscription, billing, tokens, and settings.",
    "account.hero_title":    "Manage your account",
    "account.hero_subtitle": "Handle your subscription, billing, and From settings here or directly from the app.",

    "account.sub_title": "Subscription",
    "account.sub_body":  "Manage your plan, switch between monthly and annual billing, or cancel at any time.",
    "account.sub_btn":   "Manage subscription",

    "account.billing_title": "Billing",
    "account.billing_body":  "View your payment history, download invoices, and update your payment method.",
    "account.billing_btn":   "View invoices",

    "account.tokens_title": "AI tokens",
    "account.tokens_body":  "Check your token balance in the app at Settings → AI. Buy additional tokens whenever you need them.",
    "account.tokens_btn":   "Buy tokens",

    "account.license_title": "License",
    "account.license_body":  "Activate your perpetual license in the app at Settings → Account. Enter the code you received by email.",
    "account.license_btn":   "See plans",

    "account.apikeys_title": "API Keys",
    "account.apikeys_body":  "Configure your Anthropic, OpenAI, or Google API keys in the app: Settings → AI → Manual mode.",
    "account.apikeys_note":  "API keys are stored only on your Mac, never on our servers.",

    "account.delete_title": "Delete account",
    "account.delete_body":  "Delete your account and all associated data on our server. Your local notes are not affected — they remain files on your Mac.",
    "account.delete_btn":   "Request deletion",

    "account.info_title": "Important information",
    "account.info1_q": "Your account and your notes are different things",
    "account.info1_a": "Your From account manages your subscription, tokens, and access to managed AI. Your notes are Markdown files on your Mac. Deleting your account does <strong>not</strong> delete your notes — those files remain yours, on your disk.",
    "account.info2_q": "Manage from the app",
    "account.info2_a": "Most account options are available directly in From: Settings → Account. From there you can view your plan, token balance, activate licenses, and configure API keys.",
    "account.info3_q": "Payments processed by LemonSqueezy",
    "account.info3_a": "Payments are processed securely through LemonSqueezy. We don't store card data. You can manage your payment method from the customer portal.",
    "account.info4_q": "Issues with your account?",
    "account.info4_a": "Write to us at <a href=\"mailto:hola@getfrom.app\">hola@getfrom.app</a> and we'll help you as soon as possible.",

    /* ── privacy.html ── */
    "privacy.meta_title":   "Privacy Policy — From",
    "privacy.meta_desc":    "From privacy policy. How we handle your data, what we collect, and what we don't.",
    "privacy.hero_title":   "Privacy Policy",
    "privacy.hero_subtitle": "At From, privacy isn't a feature. It's the architecture.",

    /* ── terms.html ── */
    "terms.meta_title":   "Terms of Service — From",
    "terms.meta_desc":    "Terms and conditions of use for From. License, subscription, responsibilities, and warranties.",
    "terms.hero_title":   "Terms of Service",
    "terms.hero_subtitle": "Terms of use for the From application and its associated services."
  }
};

/* ─── Core functions ─────────────────────────────────────── */

function detectLang() {
  const saved = localStorage.getItem('from-lang');
  if (saved === 'en' || saved === 'es') return saved;
  const browser = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'es';
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['es'];

  /* ── title & meta ── */
  const pageKey = document.body.dataset.page; // set via data-page on <body>
  if (pageKey) {
    const titleKey = pageKey + '.meta_title';
    const descKey  = pageKey + '.meta_desc';
    if (t[titleKey]) document.title = t[titleKey];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t[descKey]) metaDesc.setAttribute('content', t[descKey]);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t[titleKey]) ogTitle.setAttribute('content', t[titleKey]);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && t[descKey]) ogDesc.setAttribute('content', t[descKey]);
  }

  /* ── html lang attr ── */
  document.documentElement.lang = lang;

  /* ── data-i18n (text content) ── */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* ── data-i18n-html (innerHTML) ── */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* ── lang button label ── */
  const btn = document.getElementById('lang-btn');
  if (btn && t['nav.lang_toggle']) btn.textContent = t['nav.lang_toggle'];
}

function setLang(lang) {
  localStorage.setItem('from-lang', lang);
  applyTranslations(lang);
}

function toggleLang() {
  const current = localStorage.getItem('from-lang') || detectLang();
  setLang(current === 'es' ? 'en' : 'es');
}

/* ─── Init ───────────────────────────────────────────────── */
(function init() {
  const lang = detectLang();
  applyTranslations(lang);
})();
