forma para correr php en el pc: 
ir a: + Other Locations
seguir la ruta:
Computer/var/www/html
en la carpeta html dirigirse al usuario y ahi poner los archivos a correr.
Luego para abrilos escibir en el navegador localhost y ahi dirigirse al archivo que quiere abrir

forma para compartir codigo por codigo por DISCORD
```html
AQUI VA EL CODIGO
```

commits profesionales
Se usar para: Especificación para dar significado a los mensajes de los commits haciéndolos legibles para máquinas y humanos

Commits Convencionales: https://www.conventionalcommits.org/es/v1.0.0/

Semantic Versioning (semver: https://semver.org/): sistema de numeración de versiones utilizado en el desarrollo de software para especificar los cambios y las actualizaciones de una aplicación.
Consiste en tres números separados por puntos: MAJOR.MINOR.PATCH.
MAJOR: indica cambios incompatibles en la API de la aplicación. Cuando se incrementa este número, significa que se han introducido modificaciones que pueden romper la compatibilidad con versiones anteriores y que los usuarios deben tener precaución al actualizar.
MINOR: indica la adición de nuevas funcionalidades de forma retrocompatible. Al incrementarse este número, se están añadiendo características nuevas sin afectar la compatibilidad con versiones anteriores.
PATCH, se utiliza para indicar correcciones de errores o soluciones a problemas menores. Cuando se incrementa este número, significa que se han realizado modificaciones en la aplicación para solucionar fallos o errores sin añadir nuevas funcionalidades o romper la compatibilidad existente.

estructura de un mensaje de commit profesional
<tipo>[scope opcional]: <descripción del commit>

[cuerpo del mensaje, opcional]

[footer(s), opcionales]

Tipos de commits:
feat: Una nueva característica o funcionalidad. Tendría correlación con una versión MINOR siguiendo SemVer.
fix: Un error corregido. Tendría correlación con una versión PATCH siguiendo SemVer.
{/* //otros: */}
REAKING CHANGE: Un cambio que contenga esta palabra en el footer del mensaje o un signo ! despues del tipo o scope, rompe la compatibilidad con versiones anteriores. Tendría correlación con una versión MAJOR siguiendo SemVer.
build: Cambios que afectan el sistema de compilación o dependencias externas (ej. cambios en el package.json).
ci: Cambios en nuestros archivos y scripts de configuración de integración continua.
docs: Cambios en la documentación.
chore: Otros cambios que no afectan el código fuente.
perf: Un cambio de código que mejora el rendimiento.
refactor: Un cambio de código que no corrige un error ni agrega una característica.
style: Cambios que no afectan el significado del código (espacios en blanco, formato, puntos y comas faltantes, etc).
test: Agregar pruebas faltantes o corregir pruebas existentes.

Scope
El scope es opcional, y sirve para especificar el alcance del commit. Por ejemplo, si estamos trabajando en un proyecto monorepo, podemos especificar el paquete que estamos modificando.

Commit que añade una nueva característica, sin un scope en concreto.

feat: add support for TypeScript

Commit que arregla un bug, dentro del paquete ui de nuestro proyecto.

fix(ui): bugfix on Button component

Commit que rompe la compatibilidad con versiones anteriores, aunque no añade características nuevas ni corrige bugs.

chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.

Commit que agrega pruebas faltantes

test(ui): add missing tests for Button component

Commit que agrega una tarea para el sistema de integración/despliegue continuo.

ci: add GitHub Actions workflow

Commit con un mensaje descriptivo largo y varios footers o pie de página.

fix(api): prevent duplicate users from being created

This commit fixes a bug where the API would allow duplicate users to be created
with the same email address. This commit also adds a new `unique` constraint to
the `users` table to prevent this from happening in the future.

Paired with: X
Fixes #123

¿Por qué usar Conventional Commits?

Permite la generación automática del fichero CHANGELOG.
Determina automáticamente los cambios de versión siguiendo SemVer (basado en los tipos de commits utilizados).
Comunican la naturaleza de los cambios a los demás integrantes del equipo o cualquier persona interesada.
Activa los procesos de build y despliegue o publicación.
Hacer más fácil a otras personas contribuir al proyecto al permitirles explorar el historial de commits de una forma más estructurada.

La informacion recopilada es de: https://carlosazaustre.es/conventional-commits

pag 15 del doccumentos para conventional commits más usados: 
https://drive.google.com/file/d/131VbxXjHkmNORjK11vAwpQe6SihqJ959/view?usp=share_link