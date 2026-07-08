import os

files = [
    r'C:\Users\Lab\Desktop\Dcarvalho\website\index.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\amparo.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\cuidar.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\baile.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\contacto.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\quem-somos.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\impacto.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\diferenciais.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\privacidade.html',
    r'C:\Users\Lab\Desktop\Dcarvalho\website\termos.html',
]

sec = (
    '  <!-- Security headers -->\n'
    '  <meta http-equiv="X-Content-Type-Options" content="nosniff">\n'
    '  <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">\n'
    '  <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">\n'
    '  <meta name="permissions-policy" content="camera=(), microphone=(), geolocation=()">\n'
)

for f in files:
    if not os.path.exists(f):
        print('MISSING: ' + f)
        continue
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    if 'X-Content-Type-Options' in content:
        print('SKIP: ' + f)
        continue
    content = content.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n' + sec, 1)
    # Fix external links missing rel="noopener noreferrer"
    import re
    content = re.sub(
        r'(target="_blank"(?!\s+rel=| rel=))',
        'target="_blank" rel="noopener noreferrer"',
        content
    )
    content = re.sub(
        r'(target="_blank"\s+rel="noopener")(?!\s+noreferrer)',
        'target="_blank" rel="noopener noreferrer"',
        content
    )
    # Add loading="lazy" to images that don't have it (except logo-link and first hero images)
    content = re.sub(
        r'(<img\b(?![^>]*loading=)(?=[^>]*(?:partners|logos/logo-baile|logos/logo-cuidar|logos/logo-amparo|images/)))',
        r'\1 loading="lazy"',
        content
    )
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print('PATCHED: ' + f)

print('Done.')
