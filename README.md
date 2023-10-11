# Backend-Log

A simple logging utility for Node.js applications.

## Installation

```bash
npm install backend-log
```

## Usage

Import the `Console` class from the package and use its static methods for logging:

```javascript
const { Console } = require("backend-log");

// Log an info message
Console.info("Info message");

// Log a payload message
Console.payload("Payload message");

// Log an error message
Console.error("Error message");
```

## Configuration

Set the `LOG_LEVEL` environment variable to control the log output:

- `OFF`: Disable logging.
- `ERROR`: Log error messages only.
- `WARNING`: Log error and payload messages.
- Any other value: Log all messages.

```bash
export LOG_LEVEL=ERROR
```
