# GymScanner Marketing Site

Tento repozitář obsahuje samostatný marketingový web pro aplikaci GymScanner. Je postaven na Next.js (SSR) a připraven pro snadné nasazení na Coolify.

## 🚀 Rychlý start (Local)

1. Nainstalujte **pnpm** (pokud ho ještě nemáte):
   ```bash
   npm install -g pnpm
   ```
2. Nainstalujte závislosti:
   ```bash
   pnpm install
   ```
3. Spusťte vývojový server:
   ```bash
   pnpm dev
   ```
4. Otevřete [http://localhost:3000](http://localhost:3000).

## 🚢 Deployment na Coolify

Tento web je optimalizován pro nasazení přes Docker (standalone mód).

### Kroky v Coolify:

1. **Vytvořte nový Git repozitář** a nahrajte do něj obsah této složky.
2. V Coolify: **New Resource** -> **Application** -> **Public Repository** (nebo Private).
3. V nastavení aplikace:
   - **Build Pack**: `Dockerfile`
   - **Port**: `3000`
   - **Healthcheck Interface**: `GET /`
4. **Environment Variables**:
   Doporučujeme nastavit následující proměnné (viz tabulka níže).
5. Klikněte na **Deploy**.

### Environment Variables

| Proměnná | Popis | Příklad |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | **(Povinné)** URL backend API | `https://api.gymscanner.cz` |
| `NEXT_PUBLIC_APP_URL` | URL hlavní aplikace (pro tlačítko Demo) | `https://app.gymscanner.cz` |
| `NEXT_PUBLIC_SITE_URL` | Kanonická URL webu (pro SEO) | `https://gymscanner.cz` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Kontaktní e-mail zobrazený na webu | `info@gymscanner.cz` |

## 📦 Docker (Local Test)

Pokud si chcete build vyzkoušet lokálně:
```bash
docker build -t gymscanner-marketing .
docker run -p 3000:3000 gymscanner-marketing
```

## 🛠 Technologie

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Framer Motion** (Animace)
- **Lucide React** (Ikony)
- **pnpm** (Package Manager)

## 🏗 Produkční Build

Web využívá `output: 'standalone'`. Build produkuje minimální server, který obsahuje pouze nutné node_modules pro běh.
```bash
pnpm build
node .next/standalone/server.js
```
