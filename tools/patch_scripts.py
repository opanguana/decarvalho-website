import os, re

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

for f in files:
    if not os.path.exists(f):
        continue
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()

    # Add defer to all non-module local scripts that don't already have defer/async
    content = re.sub(
        r'(<script\b(?![^>]*(defer|async|type="module"))[^>]*src="js/[^"]+")>',
        r'\1 defer>',
        content
    )

    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print('PATCHED scripts: ' + f)

print('Done.')
