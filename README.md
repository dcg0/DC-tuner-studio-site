# DC Tuner Studio · Download Site


<p align="center">
  <a href="https://github.com/dcg0/DC-tuner-studio-site/actions/workflows/security.yml"><img src="https://github.com/dcg0/DC-tuner-studio-site/actions/workflows/security.yml/badge.svg" alt="Security checks"></a>
  <a href="https://github.com/dcg0/DC-tuner-studio-site/security"><img src="https://img.shields.io/badge/security-policy-available-176b46" alt="Security policy available"></a>
</p>

Landing page oficial de descarga de **DC Tuner Studio**. El sitio es estático, no requiere servidor de aplicación y publica los binarios compilados para Linux x86_64 y Windows x86_64.

## Archivos publicados

- `downloads/DC-Tuner-Studio-Windows-x86_64.exe`: ejecutable PE32+ compilado en un runner Windows x86_64.
- `downloads/DC-Tuner-Studio-Linux-x86_64`: ejecutable ELF nativo para Linux x86_64.
- `downloads/dc-tuner-studio-linux-portable.tar.gz`: paquete portable Linux.

## Desarrollo local

```bash
python3 -m http.server 4173
```

Luego abre `http://localhost:4173/`.

## Publicación

Cada push a `main` ejecuta `.github/workflows/deploy-pages.yml` y publica el contenido de la raíz mediante GitHub Pages.
