```mermaid
 sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: [...,{ "content": "someText", "date": "2024-21-08" } ]
    deactivate server

	Note right of browser: The form uses preventDefault(), the JS uses xhttp, so no new requests being made. 
	Note right of browser: Event handler updates the notes.
```
