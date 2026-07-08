import os

checks = [
    ('Security: X-Content-Type-Options', 'X-Content-Type-Options'),
    ('Security: X-Frame-Options', 'X-Frame-Options'),
    ('Security: Referrer-Policy', 'Referrer-Policy'),
    ('Perf: defer on scripts', 'defer>'),
    ('Sec: noopener noreferrer', 'noopener noreferrer'),
    ('Perf: font-display=swap', 'display=swap'),
]

files = ['index.html', 'amparo.html', 'cuidar.html', 'baile.html', 'contacto.html']
for fname in files:
    print('\n--- ' + fname + ' ---')
    with open(fname, 'r', encoding='utf-8') as f:
        c = f.read()
    for label, token in checks:
        found = token in c
        status = '  OK  ' if found else '  MISS'
        print(status + '  ' + label)
