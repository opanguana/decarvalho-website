import os, re

files = [
    'index.html','amparo.html','cuidar.html','baile.html',
    'contacto.html','quem-somos.html','impacto.html',
    'diferenciais.html','privacidade.html','termos.html'
]

for fname in files:
    if not os.path.exists(fname):
        continue
    with open(fname, 'r', encoding='utf-8') as f:
        c = f.read()

    # Ensure font-display=swap is present on Google Fonts link
    c = re.sub(
        r'(href="https://fonts\.googleapis\.com/css2\?[^"]+?)(?:&display=swap)?"',
        r'\1&display=swap"',
        c
    )

    # Add loading="lazy" to partner/logo images that don't already have it
    # but skip images already marked eager or with loading attr
    c = re.sub(
        r'(<img\b)(?![^>]*\bloading=)([^>]*?(?:partners/|logo-baile|logo-cuidar|logo-amparo)[^>]*?>)',
        r'\1 loading="lazy"\2',
        c
    )

    with open(fname, 'w', encoding='utf-8') as f:
        f.write(c)
    print('PERF OK: ' + fname)

print('Done.')
