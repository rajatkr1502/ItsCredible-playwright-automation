# ItsCredible Playwright Automation

This repository contains automated tests for the ItsCredible platform using Playwright. Playwright is a powerful, open-source automation library developed by Microsoft that supports multiple programming languages and browsers.

## Features
- **Cross-browser testing**: Supports Chromium, Firefox, and WebKit.
- **Multi-language support**: Tests can be written in JavaScript, TypeScript, Python, C#, and Java.
- **Headless mode**: Run tests in headless mode for faster execution.
- **Robust API**: Provides a rich API to interact with web elements.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/rajatkr1502/ItsCredible-playwright-automation.git
    cd ItsCredible-playwright-automation
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Install Playwright browsers**:
    ```bash
    npx playwright install
    ```

## Usage

First Create a .env file and update these data:
```bash
user=
pass=
recepient=
```

To run the tests, use the following command:

```bash
npx playwright test
