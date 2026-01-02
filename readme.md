# OG Image Generator (Next.js + @vercel/og)

A simple OG (Open Graph) image generator built using **Next.js App Router** and **@vercel/og**.

This project can be used as a **template** to generate dynamic images for:
- Farcaster frames
- Social previews (X / Twitter)
- Web3 apps
- Any Open Graph compatible platform

---

## What this does

This backend exposes one API route that generates an image **on request** using URL parameters.

The image is generated at runtime and returned directly.

---

## Project structure

```

app/api/og/route.tsx   -> OG image logic
next.config.js
package.json
tsconfig.json

````

All main logic lives in `route.tsx`.

---

## How it works

### 1. Edge runtime

The API runs on Vercel Edge for fast response.

```ts
export const runtime = 'edge';
````

---

### 2. Read query parameters

The image content is controlled using URL parameters.

```ts
const { searchParams } = new URL(request.url);

const text = searchParams.get('regret') || 'Protocol 2025';
const addr = searchParams.get('addr') || '0x...ANON';
```

---

### 3. Render image using JSX

The image is rendered using JSX and returned as an OG image.

```ts
return new ImageResponse(
  (
    <div>
      <h1>{text}</h1>
      <p>{addr}</p>
    </div>
  ),
  {
    width: 1200,
    height: 630,
  }
);
```

This JSX is rendered into an image, not HTML.

---

## API usage

Endpoint:

```
GET /api/og
```

Examples:

```
/api/og
```

```
/api/og?regret=I%20never%20said%20sorry
```

```
/api/og?regret=Missed%20my%20chance&addr=0xA1b2C3d4E5F67890
```

Open the URL in a browser or paste it into Farcaster/X to preview the image.

---

## Use this as a template

You can fork this repo and customize it to:

* Change text layout
* Update styles and colors
* Add more query parameters
* Create your own OG image service

Steps:

1. Fork the repo
2. Edit `route.tsx`
3. Deploy to Vercel
4. Use `/api/og` endpoint

---

## Deployment

Designed for Vercel.

Steps:

1. Import repository into Vercel
2. Deploy (Edge runtime enabled)
3. Access `/api/og`
