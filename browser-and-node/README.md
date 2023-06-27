# Browser and Node.js examples for Micropython

This example uses binary build of [micropython-wasm](https://github.com/rafi16jan/micropython-wasm)

## Instructions for this devcontainer

### Preparation

1. Open this repo in devcontainer, e.g. using Github Codespaces.
   Type or copy/paste following commands to devcontainer's terminal.

2. Download binary build by cloning repo:
    
```sh
git clone --depth=1 https://github.com/rafi16jan/micropython-wasm
```

3. Copy example files there to retain micropython-wasm's structure:

```sh
cp -r browser-and-node/src micropython-wasm/
cp browser-and-node/index.html micropython-wasm/
```

4. `cd` into micropython-wasm's folder:

```sh
cd micropython-wasm
```

5. Install project dependencies using `npm`:

```sh
npm install
```

### Test with Node.js

```sh
node src/httpget-node.js
```

### Test with browser

1. Apply patches. They required due to some kind of version incompatibilities.

```sh
git apply src/package.json.patch
cp index.js index-patched.js
git apply src/index.js.patch
```

2. Install `webpack`:

```sh
npm install webpack-cli@4
```

3. Run `webpack` to build a web bundle:

```sh
export NODE_OPTIONS='--openssl-legacy-provider'
npx webpack ./src/httpget-browser.js
```

This creates a `dist` folder with 1M JS bundle `main.js` inside it.

4. Copy pre-built Micropython's WASM module to `dist` folder:

```sh
cp lib/firmware.wasm dist/
```

5. Run simple HTTP server to temporarily publish project to Web:

```sh
python3 -m http.server
```

Codespace will show you "Open in Browser" button. Just click that button or 
obtain web address from "Forwarded Ports" tab.

6. As `index.html` loaded into browser, refer to browser developer console 
to see the results.

### Finish

Perform your own experiments if desired.
