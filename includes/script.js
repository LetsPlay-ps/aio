/**
 * LET'S PLAY - Exploit Controller & UI Logic (130N PS4 Host)
 * Supporting PS4 FW 6.00 - 11.02 | Lapse & NetCtrl Chains
 * Authored / Customizations for Ahmed Elattar
 */

let timerId = null;
let countdownNumber = 5;

// DOM Elements
const label = document.getElementById('autoJbLabel');
const checkbox = document.getElementById('autoJbInput');
const countdownBadge = document.getElementById('countdownBadge');
const jeilbrekBtn = document.getElementById('jeilbrek');
const UAElement = document.getElementById("UA");
const outputConsole = document.getElementById("console");
const netctrlRadio = document.getElementById("netctrl-exploit");
const lapseRadio = document.getElementById("lapse-exploit");
const kexForm = document.getElementById('kernel-options');

// LocalStorage State
const storedAutoJb = localStorage.getItem("autoJb");
let autoJbValue = storedAutoJb !== null ? storedAutoJb === "true" : false;
var exploitChain = localStorage.getItem("exploitChain") || "lapse";

// Rich Formatted Logger compatible with misc.js & direct calls
window.formatLog = function (msg) {
    if (!outputConsole) return;

    let styledMsg = msg;
    const str = String(msg);

    if (str.includes("[+]") || str.includes("completed") || str.includes("SUCCESS") || str.includes("===USERLAND===") || str.includes("===END===")) {
        styledMsg = `<span style="color:#10b981; font-weight:bold;">✔ ${str}</span>`;
    } else if (str.includes("[-]") || str.includes("Error") || str.includes("fail") || str.includes("Unsupported")) {
        styledMsg = `<span style="color:#ef4444; font-weight:bold;">✖ ${str}</span>`;
    } else if (str.includes("[*]") || str.includes("warning") || str.includes("waiting") || str.includes("started")) {
        styledMsg = `<span style="color:#f59e0b; font-weight:600;">⚡ ${str}</span>`;
    } else if (str.startsWith("===") || str.includes("STAGE") || str.includes("Initiating")) {
        styledMsg = `<span style="color:#00f0ff; font-weight:700; text-shadow:0 0 10px rgba(0,240,255,0.4);">◆ ${str}</span>`;
    } else {
        styledMsg = `<span style="color:#94a3b8;">${str}</span>`;
    }

    outputConsole.innerHTML += `${styledMsg}<br>`;
    outputConsole.scrollTop = outputConsole.scrollHeight;
};

// Global log fallback
window.log = (msg, color = "#94a3b8") => {
    window.formatLog(msg);
};

// Console Actions
function clearConsoleLog() {
    if (outputConsole) {
        outputConsole.innerHTML = '<span style="color:#64748b;">[CONSOLE] Log cleared. Ready for execution.</span><br>';
    }
}

function copyConsoleLog() {
    if (!outputConsole) return;
    const text = outputConsole.innerText;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Log copied to clipboard!");
        }).catch(() => {
            alert("Log text:\n" + text);
        });
    } else {
        alert("Log text:\n" + text);
    }
}

// User Agent Detection
function detectEnvironment() {
    if (!UAElement) return;
    const ua = navigator.userAgent;
    const matches = ua.match(/PlayStation\s+(\d+)[/ ](\d+)\.(\d+)/);
    if (matches) {
        const consoleNum = matches[1];
        const major = parseInt(matches[2], 10);
        const minor = parseInt(matches[3], 16);
        UAElement.innerHTML = `🎮 PS${consoleNum} FW ${major}.${minor.toString(16).padStart(2, "0")}`;
    } else {
        const browser = ua.includes("AppleWebKit") ? "WebKit Host" : "Browser";
        UAElement.innerHTML = `💻 ${browser} Ready`;
    }
}

// Stop Countdown Timer
function stopInterval() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    if (countdownBadge) countdownBadge.style.display = "none";
    if (label) label.textContent = "Auto Jailbreak";
}

// Start Countdown Timer
function jailbreakCountdown() {
    stopInterval();

    countdownNumber = 5;
    if (countdownBadge) {
        countdownBadge.style.display = "inline-block";
        countdownBadge.textContent = `(${countdownNumber}s)`;
    }
    if (label) label.textContent = `Launching in:`;

    timerId = setInterval(() => {
        countdownNumber--;
        if (countdownBadge) {
            countdownBadge.textContent = `(${countdownNumber}s)`;
        }

        if (countdownNumber <= 0) {
            stopInterval();
            triggerJailbreak();
        }
    }, 1000);
}

// Trigger Jailbreak Sequence
async function triggerJailbreak() {
    if (!jeilbrekBtn || jeilbrekBtn.disabled) return;

    jeilbrekBtn.disabled = true;
    jeilbrekBtn.innerHTML = '<span>⏳ Running Exploit...</span>';
    stopInterval();

    window.formatLog("========================================");
    window.formatLog(`[LET'S PLAY] Selected Exploit: ${exploitChain.toUpperCase()}`);
    window.formatLog("[LET'S PLAY] Initiating userland sequence...");

    try {
        if (typeof doJb === "function") {
            await doJb();
        } else {
            window.formatLog("[-] Error: doJb entry point not found in main.js");
            jeilbrekBtn.disabled = false;
            jeilbrekBtn.innerHTML = '<span>🚀 Retry Jailbreak</span>';
        }
    } catch (err) {
        window.formatLog(`[-] Exploit execution halted: ${err?.message || err}`);
        jeilbrekBtn.disabled = false;
        jeilbrekBtn.innerHTML = '<span>🚀 Retry Jailbreak</span>';
    }
}

// Global Error Listeners
window.addEventListener('unhandledrejection', event => {
    window.formatLog(`[-] Unhandled rejection: ${event.reason}`);
});

window.addEventListener('error', event => {
    window.formatLog(`[-] Runtime error: ${event.message || event.error}`);
    return true;
});

// DOM Ready Handler
document.addEventListener("DOMContentLoaded", function () {
    detectEnvironment();

    // Kernel Options selection
    if (kexForm) {
        kexForm.addEventListener("change", function (event) {
            localStorage.setItem("exploitChain", event.target.value);
            exploitChain = event.target.value;
            window.formatLog(`[*] Exploit chain set to: ${exploitChain.toUpperCase()}`);
        });
    }

    if (exploitChain === "netctrl" && netctrlRadio) {
        netctrlRadio.checked = true;
    } else if (lapseRadio) {
        lapseRadio.checked = true;
    }

    // Launch Button click
    if (jeilbrekBtn) {
        jeilbrekBtn.addEventListener("click", function (e) {
            e.preventDefault();
            triggerJailbreak();
        });
    }

    // Auto-Jailbreak checkbox
    if (checkbox) {
        checkbox.checked = autoJbValue;

        checkbox.addEventListener('change', function () {
            localStorage.setItem("autoJb", checkbox.checked);
            if (checkbox.checked && jeilbrekBtn && !jeilbrekBtn.disabled) {
                jailbreakCountdown();
            } else {
                stopInterval();
            }
        });

        if (autoJbValue && jeilbrekBtn && !jeilbrekBtn.disabled) {
            jailbreakCountdown();
        }
    }

    // AppCache events
    if (window.applicationCache) {
        window.applicationCache.addEventListener("progress", function (e) {
            if (e.total) {
                const percent = Math.round((e.loaded / e.total) * 100);
                document.title = `Caching: ${percent}%`;
            }
        }, false);

        window.applicationCache.oncached = function () {
            window.formatLog("[+] Offline cache successfully created!");
            document.title = "✓ Cached | Let's Play Host";
        };

        window.applicationCache.onupdateready = function () {
            window.formatLog("[+] Offline cache updated to latest version!");
            document.title = "✓ Updated | Let's Play Host";
        };
    }
});