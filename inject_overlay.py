#!/usr/bin/env python3
"""
COMPRA CASA CLUB — Inyector de overlay de marca para tours Marzipano
---------------------------------------------------------------------
Uso:
    python inject_overlay.py "C:\\Users\\lenovo\\OneDrive\\Documentos\\GitHub\\360\\vertiz-1014-narvarte" "Vertiz 1014, Narvarte"

Qué hace:
    1. Abre el index.html de la carpeta del tour que le pases.
    2. Le agrega (si no lo tiene ya) el <link> a ../assets/overlay.css en el <head>.
    3. Le agrega (si no lo tiene ya) el bloque de overlay (logo + WhatsApp +
       esquinas HUD) justo antes de </body>.
    4. Es seguro correrlo varias veces sobre el mismo tour: si detecta que
       ya está inyectado, no lo vuelve a poner.

Requisitos:
    - En la RAÍZ de tu repo 360 debe existir la carpeta assets/ con:
        assets/overlay.css   (ya te lo entregué)
        assets/logo.png      (tu logo, tú lo pones ahí UNA sola vez)
    - Cada carpeta de tour debe estar un nivel abajo de esa raíz, ej:
        360/
          assets/
            overlay.css
            logo.png
          vertiz-1014-narvarte/
            index.html   <-- aquí corres el script
          residencial-san-sebastian-1300/
            index.html

No necesitas volver a subir el logo ni el CSS por cada propiedad: todas
las carpetas apuntan al mismo assets/ compartido.
"""

import sys
import re
from pathlib import Path

WHATSAPP_NUMBER = "525592990391"  # 52 (México) + 10 dígitos, sin espacios ni +

MARKER_START = "<!-- CCC-OVERLAY-START (no editar a mano, generado por inject_overlay.py) -->"
MARKER_END = "<!-- CCC-OVERLAY-END -->"

LINK_TAG = '<link rel="stylesheet" href="../assets/overlay.css">'


def build_overlay_html(property_name: str) -> str:
    wa_text = f"Hola, me interesa la propiedad: {property_name}"
    wa_href = f"https://wa.me/{WHATSAPP_NUMBER}?text={wa_text}"
    # NOTA: no usamos urllib.parse.quote a propósito para mantenerlo legible;
    # los navegadores manejan bien los espacios como %20 automáticamente,
    # pero por seguridad los reemplazamos aquí:
    wa_href = wa_href.replace(" ", "%20")

    return f"""{MARKER_START}
<div id="ccc-overlay">
  <div class="ccc-corner ccc-corner-bl"></div>
  <div class="ccc-corner ccc-corner-br"></div>

  <a class="ccc-brand" href="https://compracasaclub-360.github.io/360/" target="_blank" rel="noopener">
    <img src="../assets/logo.png" alt="COMPRA CASA CLUB">
    <span class="ccc-brand-text">
      <span class="ccc-brand-name">COMPRA CASA CLUB</span>
      <span class="ccc-brand-property">{property_name}</span>
    </span>
  </a>

  <a class="ccc-whatsapp" href="{wa_href}" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67a8.23 8.23 0 0 1 5.83 2.41 8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c.01-4.55 3.7-8.24 8.25-8.24M8.53 6.98c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.87 4.45 3.92 2.2.87 2.65.7 3.13.65.48-.05 1.53-.62 1.75-1.22.22-.6.22-1.1.15-1.22-.07-.12-.24-.19-.5-.32-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.66.84-.81 1.01-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.08-1.28-.77-.68-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.43-.81-1.94-.21-.5-.43-.44-.58-.44h-.5Z"/></svg>
  </a>
</div>
{MARKER_END}"""


def inject(tour_dir: Path, property_name: str) -> None:
    index_path = tour_dir / "index.html"
    if not index_path.exists():
        print(f"❌ No encontré index.html en {tour_dir}")
        sys.exit(1)

    html = index_path.read_text(encoding="utf-8")

    already_injected = MARKER_START in html

    # 1) Insertar <link> del CSS en el <head> si no está
    if LINK_TAG not in html:
        html = html.replace("</head>", f"  {LINK_TAG}\n</head>", 1)
        print("✅ Link a overlay.css agregado en <head>")
    else:
        print("↷ Link a overlay.css ya existía, no se duplicó")

    # 2) Insertar / reemplazar el bloque de overlay antes de </body>
    overlay_html = build_overlay_html(property_name)
    if already_injected:
        html = re.sub(
            re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END),
            overlay_html,
            html,
            flags=re.DOTALL,
        )
        print("✅ Bloque de overlay actualizado (ya existía, se refrescó el nombre de propiedad)")
    else:
        html = html.replace("</body>", f"{overlay_html}\n</body>", 1)
        print("✅ Bloque de overlay insertado antes de </body>")

    index_path.write_text(html, encoding="utf-8")
    print(f"\n🎉 Listo: {index_path}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print('Uso: python inject_overlay.py "<ruta_carpeta_tour>" "<Nombre de la propiedad>"')
        sys.exit(1)

    tour_dir = Path(sys.argv[1]).resolve()
    property_name = sys.argv[2]
    inject(tour_dir, property_name)
