#!/usr/bin/env python3
"""
Recolor script - Orange + Violet pour le portfolio de Saad.
Remplace toutes les classes Tailwind bleu/indigo/cyan codees en dur
par les equivalents orange (primaire) et violet (secondaire/accent).

IMPORTANT : ce script se base sur SA PROPRE position. Il suffit de le
poser a la RACINE du projet (a cote de package.json) et de le lancer ;
peu importe le dossier courant du terminal.

Usage : python recolor.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent

TARGET_DIRS = ["components", "app", "context"]
EXTENSIONS = (".tsx", ".ts")

REPLACEMENTS = {
    "blue-50": "orange-50", "blue-100": "orange-100", "blue-200": "orange-200",
    "blue-300": "orange-300", "blue-400": "orange-400", "blue-500": "orange-500",
    "blue-600": "orange-600", "blue-700": "orange-700", "blue-800": "orange-800",
    "blue-900": "orange-900", "blue-950": "orange-950",
    "cyan-50": "violet-50", "cyan-100": "violet-100", "cyan-200": "violet-200",
    "cyan-300": "violet-300", "cyan-400": "violet-400", "cyan-500": "violet-500",
    "cyan-600": "violet-600", "cyan-700": "violet-700",
    "indigo-50": "violet-50", "indigo-100": "violet-100", "indigo-200": "violet-200",
    "indigo-300": "violet-300", "indigo-400": "violet-400", "indigo-500": "violet-500",
    "indigo-600": "violet-600", "indigo-700": "violet-700",
    "sky-300": "orange-300", "sky-400": "orange-400",
    "sky-500": "orange-500", "sky-600": "orange-600",
    "#2563eb": "#ea580c", "#6366f1": "#7c3aed", "#60a5fa": "#fb923c",
    "#818cf8": "#a78bfa", "#3b82f6": "#f97316",
}


def build_pattern(key):
    if key.startswith("#"):
        return re.compile(re.escape(key), re.IGNORECASE)
    return re.compile(r"(?<![\w])" + re.escape(key) + r"(?![\w-])")


PATTERNS = [(build_pattern(k), v) for k, v in REPLACEMENTS.items()]


def process_file(path):
    text = path.read_text(encoding="utf-8")
    original = text
    count = 0
    for pattern, repl in PATTERNS:
        text, n = pattern.subn(repl, text)
        count += n
    if text != original:
        path.write_text(text, encoding="utf-8")
    return count


def main():
    print("Racine detectee : " + str(ROOT) + "\n")
    missing = [d for d in TARGET_DIRS if not (ROOT / d).exists()]
    if missing:
        print("ERREUR : ces dossiers sont introuvables a cote du script :")
        for d in missing:
            print("   - " + d + "/")
        print("\n=> Le fichier recolor.py n'est PAS a la racine du projet.")
        print("   Place-le dans le dossier qui contient package.json,")
        print("   components/, app/ et lib/, puis relance.")
        sys.exit(1)

    total = 0
    files_changed = 0
    for d in TARGET_DIRS:
        for path in (ROOT / d).rglob("*"):
            if path.suffix in EXTENSIONS:
                n = process_file(path)
                if n:
                    files_changed += 1
                    total += n
                    print("  " + str(path.relative_to(ROOT)) + "  ->  " + str(n) + " remplacements")

    if total == 0:
        print("Aucune couleur bleue/cyan/indigo trouvee.")
        print("(Soit c'est deja recolore, soit les fichiers sont ailleurs.)")
    else:
        print("\nTermine : " + str(total) + " remplacements dans " + str(files_changed) + " fichiers.")


if __name__ == "__main__":
    main()
