### Ayuda Basica para entender mis estudios

## Nivel 1: Consumir Apis nvl 1 Mostrar contenido del api:
1. app.config.ts      → Habilita HttpClient
2. user.interface.ts  → Define estructura de datos
3. user.service.ts    → Hace petición HTTP al API
4. user-list.component.ts → Consume el servicio y guarda datos
5. user-list.component.html → Itera y pasa datos a cards
6. user-card.component.ts → Recibe y muestra cada item
7. app.component.ts   → Renderiza la lista principal

## Nivel 2: CHECKLIST NIVEL 2 - MAPPERS
1. Crear Interfaces
- User (simple, solo lo que necesitas)
- UserApiResponse (completa, estructura del API)
2. Actualizar Servicio
- Agregar método mapUserFromApi()
- Usar map() operator en la petición HTTP
- Tipar con interface completa del API
3. Componente Card
- input.required<User>() para recibir datos
- output<User>() para enviar eventos
- Métodos que emitan eventos con .emit()
4. Componente Lista
- Signals para manejar eventos recibidos
- Métodos handleEvent() para procesar outputs
- Template que escuche los eventos (eventName)="handler($event)"

## Nivel 3: Output
1. Servicio: Agregué deleteProduct() y manejo de errores
2. Componente Padre: Agregué onDeleteProduct() para manejar la eliminación
3. Template Padre: Agregué el evento (deleteProduct) en el app-child
4. Componente Hijo: Usé output<number>() (sintaxis nueva) y onDeleteClick()
5. Template Hijo: Agregué botón con confirmación
