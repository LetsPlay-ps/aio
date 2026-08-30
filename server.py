#!/usr/bin/env python3
"""
LET'S PLAY • PS4 MULTI-FIRMWARE EXPLOIT HOST (FW 7.00 - 13.00)
Unified Local HTTP Server with AppCache and MIME Type Support
Crafted & Maintained by Ahmed Elattar
"""

import os
import sys
import socket
import webbrowser
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Fix Windows console UTF-8 encoding
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

PORT = 8080

class CustomHTTPHandler(SimpleHTTPRequestHandler):
    extensions_map = SimpleHTTPRequestHandler.extensions_map.copy()
    extensions_map.update({
        '.cache': 'text/cache-manifest',
        '.manifest': 'text/cache-manifest',
        '.appcache': 'text/cache-manifest',
        '.bin': 'application/octet-stream',
        '.elf': 'application/octet-stream',
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
    })

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        client_ip = self.client_address[0]
        code = args[1] if len(args) > 1 else "-"
        path = args[0] if len(args) > 0 else "-"
        print(f"  [+] {client_ip} -> {path} ({code})")


def get_local_ips():
    """Retrieve all available local IPv4 addresses on the host machine."""
    ips = []
    try:
        hostname = socket.gethostname()
        addr_info = socket.getaddrinfo(hostname, None)
        for item in addr_info:
            ip = item[4][0]
            if ':' not in ip and not ip.startswith('127.') and ip not in ips:
                ips.append(ip)
    except Exception:
        pass

    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        if ip not in ips and not ip.startswith('127.'):
            ips.append(ip)
    except Exception:
        pass

    return ips


def start_server(port=PORT):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    server_address = ('', port)
    try:
        httpd = HTTPServer(server_address, CustomHTTPHandler)
    except OSError as e:
        if port < 8090:
            print(f"[-] Port {port} is occupied, trying port {port + 1}...")
            return start_server(port + 1)
        else:
            print(f"[!] Error starting server: {e}")
            return

    local_ips = get_local_ips()

    print("=" * 72)
    print("      🚀 LET'S PLAY • PS4 MULTI-FIRMWARE EXPLOIT HOST")
    print("      🎮 Universal Exploit Suite: FW 7.00 - 13.00 | Ahmed Elattar")
    print("=" * 72)
    print(" [+] Server Status: RUNNING ACTIVE")
    print(f" [+] Serving Directory: {script_dir}\n")
    print(" [*] Open one of the following URLs in your PS4 Web Browser:")
    print("-" * 72)
    
    if local_ips:
        for ip in local_ips:
            print(f"    -> http://{ip}:{port}/")
    else:
        print(f"    -> http://localhost:{port}/")
        
    print("-" * 72)
    print(f" [PC] Local Preview / Testing: http://localhost:{port}/")
    print(" [!] Press CTRL + C in this window to stop the server.")
    print("=" * 72 + "\n")

    def open_browser():
        try:
            webbrowser.open(f"http://localhost:{port}/")
        except Exception:
            pass

    threading.Timer(1.0, open_browser).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[!] Server stopped by user.")
        httpd.server_close()
        sys.exit(0)


if __name__ == "__main__":
    start_server(PORT)
