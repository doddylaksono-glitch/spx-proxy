import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/track/:resi", async (req, res) => {
  const resi = req.params.resi;

  try {
    const response = await fetch(
      `https://spx.shopee.co.id/api/v2/fleet_order/tracking/${resi}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Accept": "application/json, text/plain, */*",
          "Referer": "https://spx.shopee.co.id/",
          "Origin": "https://spx.shopee.co.id"
        }
      }
    );

    const text = await response.text();
    res.send(text);

  } catch (err) {
    res.status(500).json({ error: "fetch_failed" });
  }
});

app.listen(process.env.PORT || 3000);
