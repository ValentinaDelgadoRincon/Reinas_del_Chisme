# 👑 Reinas del Chisme

Un divertido simulador orientado a objetos en **JavaScript**, donde diferentes tipos de **chismosas profesionales** compiten en una **batalla de chismes**.  
Cada chismosa recolecta información y difunde rumores con su propio estilo único, buscando hacer su chisme **más viral** y convertirse en la gran ganadora.

---

## 🚀 Características principales

- Uso de **clases abstractas** para modelar comportamientos base.
- Subclases con comportamientos diferenciados:
  - **Tía Vecina** 🏡: escucha discretamente en reuniones de barrio.
  - **Compañera Curiosa** 💼: obtiene información en el trabajo con preguntas profesionales.
  - **Estudiante Espía** 📱: lee chats ajenos y difunde en WhatsApp.
- Sistema de **reputación** y **nivel de chisme**.
- Uso de la librería **chalk** para resaltar estados en la consola:
  - 🟣 Morado → Chismes virales  
  - 🟧 Naranja → Reputación alta  
  - ⚫ Negro → Reputación baja o cancelación
- Determina automáticamente la **ganadora** de la batalla.

---

## 🧩 Clases y métodos

### Clase abstracta `Chismosa`
- **Propiedades privadas**:  
  - `#reputacion`  
  - `#nivelChisme`  
- **Métodos principales**:  
  - `recolectarInfo()` → abstracto  
  - `contarChisme()` → abstracto  
  - `get reputacion()` → retorna reputación  
  - `get nivelChisme()` → retorna nivel de chisme  
  - `valorChisme(valor)` → aumenta o disminuye el nivel del chisme  
  - `valorReputacion(valor)` → ajusta la reputación  

### Subclases
- **Tía Vecina** 🏡  
  - Escucha en reuniones de barrio.  
  - Difunde chismes rápidamente, pero puede perder reputación si exagera.  

- **Compañera Curiosa** 💼  
  - Obtiene información en el trabajo con preguntas aparentemente inocentes.  
  - Gana reputación, pero sus chismes suben de nivel lentamente.  

- **Estudiante Espía** 📱  
  - Lee chats ajenos y filtra información en redes.  
  - Sus chismes crecen rápido, pero arriesga su reputación al ser descubierta.  

---

## 📊 Ejecución del programa

### Requisitos previos
- Tener instalado **Node.js** (versión 14 o superior).

### Instalación
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/ValentinaDelgadoRincon/Reinas_del_Chisme.git
   cd Reinas_del_Chisme
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```

### Ejecución
```bash
npm start
```

### Ejemplo de salida
```
BATALLA DE CHISMES
Chismosa 1: Doña Rosa
Doña Rosa: Aprovecha la reunión del barrio para escuchar discretamente
Doña Rosa: Difunde el chisme mientras ofrece café
chisme viral:
Reputación alta:
Doña Rosa  Reputación: 9, Nivel de chisme: 10
...
La chismosa ganadora es: Valentina con el puntaje: 11.3
```

---

## 👥 Autoras
- Camila  
- Valentina  

---

