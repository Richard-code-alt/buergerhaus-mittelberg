---
// CookieBanner.astro — schlanker, selbstgebauter Cookie-Banner.
// Nutzt localStorage für die Einwilligung und triggert ein CustomEvent,
// das in BaseLayout vom GA4-Script aufgegriffen wird.
---

<div class="cookie-banner" data-cookie-banner hidden>
  <div class="cookie-banner__inner">
    <div class="cookie-banner__text">
      <p class="cookie-banner__title">Cookies & Co.</p>
      <p class="cookie-banner__body">
        Wir verwenden technisch notwendige Cookies, damit die Website funktioniert.
        Mit eurer Einwilligung verwenden wir zusätzlich Google Analytics, um zu verstehen,
        wie unsere Seite genutzt wird. Mehr in der <a href="/datenschutz">Datenschutzerklärung</a>.
      </p>
    </div>
    <div class="cookie-banner__actions">
      <button type="button" class="btn btn--secondary" data-cookie="reject">Nur notwendige</button>
      <button type="button" class="btn btn--primary"   data-cookie="accept">Alle akzeptieren</button>
    </div>
  </div>
</div>

<dialog class="cookie-modal" data-cookie-modal>
  <form method="dialog" class="cookie-modal__inner">
    <h2>Cookie-Einstellungen</h2>
    <p>Ihr entscheidet, was geladen werden darf.</p>

    <fieldset class="cookie-modal__row">
      <legend>Notwendig (immer aktiv)</legend>
      <p>Cookies für die Speicherung eurer Einwilligung und grundlegende Funktion. Diese können nicht deaktiviert werden.</p>
    </fieldset>

    <fieldset class="cookie-modal__row">
      <legend>
        <label>
          <input type="checkbox" name="analytics" data-cookie-toggle="analytics" />
          Statistik (Google Analytics 4)
        </label>
      </legend>
      <p>Hilft uns zu verstehen, welche Inhalte interessieren. Anonymisierte IP, 14 Monate Speicherdauer.</p>
    </fieldset>

    <div class="cookie-modal__actions">
      <button type="submit" class="btn btn--secondary" data-cookie="save">Auswahl speichern</button>
      <button type="submit" class="btn btn--primary"   data-cookie="accept-all">Alle akzeptieren</button>
    </div>
  </form>
</dialog>

<style>
  .cookie-banner {
    position: fixed; bottom: var(--s-4); left: var(--s-4); right: var(--s-4);
    z-index: 90;
    background: var(--c-cream);
    border: 1px solid var(--c-line);
    box-shadow: var(--shadow-lg);
    padding: var(--s-5);
    max-width: 56rem; margin: 0 auto;
  }
  .cookie-banner__inner {
    display: grid; grid-template-columns: 1fr auto; gap: var(--s-5); align-items: center;
  }
  .cookie-banner__title {
    font-family: var(--f-display); text-transform: uppercase; letter-spacing: 0.08em;
    margin-bottom: var(--s-2);
  }
  .cookie-banner__body { font-size: var(--t-sm); margin: 0; color: var(--c-mid); }
  .cookie-banner__actions { display: flex; gap: var(--s-3); flex-wrap: wrap; }
  .cookie-banner .btn { padding: var(--s-3) var(--s-4); font-size: var(--t-xs); }

  @media (max-width: 700px) {
    .cookie-banner__inner { grid-template-columns: 1fr; }
    .cookie-banner__actions { flex-direction: column-reverse; }
    .cookie-banner__actions .btn { width: 100%; justify-content: center; }
  }

  .cookie-modal { border: 0; padding: 0; background: var(--c-cream); max-width: 32rem; }
  .cookie-modal::backdrop { background: rgba(44, 44, 44, 0.6); }
  .cookie-modal__inner { padding: var(--s-7); display: flex; flex-direction: column; gap: var(--s-4); }
  .cookie-modal h2 { margin: 0; font-size: var(--t-xl); }
  .cookie-modal__row {
    border: 1px solid var(--c-line); padding: var(--s-4);
  }
  .cookie-modal__row legend {
    font-family: var(--f-display); text-transform: uppercase; letter-spacing: 0.06em;
    font-size: var(--t-sm); padding: 0 var(--s-2);
  }
  .cookie-modal__row label { display: flex; gap: var(--s-2); align-items: center; cursor: pointer; }
  .cookie-modal__row p { font-size: var(--t-sm); color: var(--c-mid); margin: var(--s-2) 0 0; }
  .cookie-modal__actions { display: flex; gap: var(--s-3); flex-wrap: wrap; margin-top: var(--s-4); }
  .cookie-modal__actions .btn { flex: 1; justify-content: center; }
</style>

<script is:inline>
  // ==========================================================
  // Cookie-Consent — schlank, eigener Code
  // Speichert: { necessary: true, analytics: bool, ts: ISO }
  // Triggert window.dispatchEvent('cookie-consent-changed', { detail }).
  // GA4 hört darauf und lädt sich nach.
  // ==========================================================
  (function() {
    const STORAGE_KEY = 'bm-consent-v1';
    const banner = document.querySelector('[data-cookie-banner]');
    const modal  = document.querySelector('[data-cookie-modal]');

    function readConsent() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) { return null; }
    }

    function writeConsent(consent) {
      consent.ts = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: consent }));
    }

    function showBanner() { banner.hidden = false; }
    function hideBanner() { banner.hidden = true; }

    // Initial: zeige Banner, wenn keine Entscheidung vorhanden
    const existing = readConsent();
    if (!existing) {
      showBanner();
    } else {
      // Auch beim Reload den State broadcasten (für GA4-Lazy-Init)
      window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: existing }));
    }

    // Banner-Buttons
    banner.addEventListener('click', (e) => {
      const action = e.target.getAttribute('data-cookie');
      if (action === 'accept') {
        writeConsent({ necessary: true, analytics: true });
        hideBanner();
      } else if (action === 'reject') {
        writeConsent({ necessary: true, analytics: false });
        hideBanner();
      }
    });

    // Footer-Link öffnet Modal
    document.querySelectorAll('[data-cookie-settings]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = readConsent() || { necessary: true, analytics: false };
        const toggle = modal.querySelector('[data-cookie-toggle="analytics"]');
        if (toggle) toggle.checked = !!current.analytics;
        if (typeof modal.showModal === 'function') modal.showModal();
        else modal.setAttribute('open', '');
      });
    });

    // Modal-Submit
    modal.addEventListener('click', (e) => {
      const action = e.target.getAttribute('data-cookie');
      if (!action) return;
      if (action === 'accept-all') {
        writeConsent({ necessary: true, analytics: true });
      } else if (action === 'save') {
        const toggle = modal.querySelector('[data-cookie-toggle="analytics"]');
        writeConsent({ necessary: true, analytics: !!(toggle && toggle.checked) });
      }
      hideBanner();
    });
  })();
</script>
