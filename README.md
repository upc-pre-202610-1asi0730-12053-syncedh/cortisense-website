# CortiSense Website

Landing page oficial de **CortiSense**, desarrollada para presentar la propuesta de valor de la plataforma, sus funcionalidades principales, roles, beneficios, planes de suscripción y enlaces de acceso a la Web App.

## Descripción

CortiSense es una solución orientada al monitoreo del bienestar y riesgo clínico del personal médico. Esta website funciona como página informativa del producto y permite a los usuarios conocer la plataforma, revisar los planes disponibles y acceder a la Web App.

## Características principales

- Presentación clara de la propuesta de valor de CortiSense.
- Secciones informativas sobre el funcionamiento de la plataforma.
- Explicación de roles, beneficios y funcionalidades principales.
- Presentación de los planes de suscripción: **Basic**, **Professional** y **Enterprise**.
- Enlaces de acceso hacia la Web App de CortiSense.
- Página de términos y condiciones.
- Recursos visuales alineados con la identidad de CortiSense.
- Diseño visual basado en una paleta celeste/cian.
- Contenido enfocado en el monitoreo del personal clínico y la gestión de bienestar médico.

## Probar localmente

Puedes abrir `index.html` directamente en el navegador o ejecutar un servidor local con:

```bash
python -m http.server 5500
```

Luego ingresa a:

```text
http://localhost:5500
```

Para revisar la página de términos:

```text
http://localhost:5500/terms.html
```

## Links de la Web App

Los botones de acceso y selección de planes apuntan actualmente a:

```text
https://upc-pre-202610-1asi0730-12053-syncedh.github.io/cortisense-webapp
```

Si la URL final de la Web App cambia, reemplazar esa dirección en los siguientes archivos:

```text
index.html
terms.html
```

## Estructura del proyecto

```text
cortisense-website/
├── index.html
├── terms.html
├── README.md
└── assets/
    ├── css/
    ├── images/
    └── scripts/
```

## Landing Page

La landing page de CortiSense presenta la plataforma como una solución para organizaciones de salud que buscan monitorear el bienestar del personal clínico, visualizar riesgos, revisar alertas y acceder a planes de suscripción. 

La página incluye secciones de introducción, funcionalidades, roles, beneficios, planes y términos, manteniendo una navegación simple y orientada a conectar al usuario con la Web App principal.

## Deploy

Este repositorio se despliega mediante GitHub Pages. El despliegue actual está vinculado a la rama `main`.

No se incluye un workflow de GitHub Actions de otro proyecto para evitar copiar credenciales, tokens o configuraciones externas.
