import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  const getBaseUrl = () => {
    if (process.env.BASE_URL) {
      return process.env.BASE_URL;
    }
    if (process.env.REPLIT_DEV_DOMAIN) {
      return `https://${process.env.REPLIT_DEV_DOMAIN}`;
    }
    return "http://localhost:5000";
  };
  
  const baseUrl = getBaseUrl();

  app.get("/sitemap.xml", (_req, res) => {
    const urls = [
      "/",
      "/learning-goal",
      "/product-goal",
      "/what-is-self-improvement",
      "/q2-motivation",
      "/q3-factors",
      "/q4-small-changes",
      "/q5-health",
      "/q6-confidence",
      "/q7-habits",
      "/q8-long-term-investment",
      "/q9-challenges",
      "/q10-4week-journey",
      "/q11-survey",
      "/q12-strategies",
      "/end-notes",
      "/about",
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  });

  app.get("/robots.txt", (_req, res) => {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

    res.header("Content-Type", "text/plain");
    res.send(robotsTxt);
  });

  const httpServer = createServer(app);

  return httpServer;
}
